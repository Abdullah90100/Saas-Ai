from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import pytesseract
from PIL import Image
from gtts import gTTS
from googletrans import Translator
import cv2

app = Flask(__name__)
CORS(app)

# Configuration
UPLOAD_FOLDER = 'uploads'
AUDIO_FOLDER = 'audio'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(AUDIO_FOLDER, exist_ok=True)

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

allowed_image_extensions = {'png', 'jpg', 'jpeg', 'gif'}
allowed_video_extensions = {'mp4', 'avi', 'mov', 'mkv'}

def allowed_file(filename, extensions):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in extensions

def extract_text_from_video(video_path):
    cap = cv2.VideoCapture(video_path)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    extracted_text = ""

    for i in range(0, frame_count, 30):  # Extract text every 30 frames
        cap.set(cv2.CAP_PROP_POS_FRAMES, i)
        ret, frame = cap.read()
        if not ret:
            break

        # Convert frame to PIL image
        pil_image = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
        frame_text = pytesseract.image_to_string(pil_image)
        extracted_text += frame_text + "\n"

    cap.release()
    return extracted_text.strip()

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400
        
        file = request.files['file']

        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400

        lang = request.form.get('lang', 'en')

        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)

        file_extension = filename.rsplit('.', 1)[1].lower()

        if allowed_file(filename, allowed_image_extensions):
            image = Image.open(filepath)
            extracted_text = pytesseract.image_to_string(image)
        elif allowed_file(filename, allowed_video_extensions):
            extracted_text = extract_text_from_video(filepath)
        else:
            return jsonify({"error": "Unsupported file type"}), 400

        translator = Translator()
        translated_text = translator.translate(extracted_text, dest=lang).text

        if not translated_text.strip():
            return jsonify({"error": "No text extracted from the file"}), 400

        tts = gTTS(text=translated_text, lang=lang)
        audio_filename = f"{os.path.splitext(filename)[0]}.mp3"
        audio_path = os.path.join(AUDIO_FOLDER, audio_filename)
        tts.save(audio_path)

        return jsonify({
            "text": translated_text,
            "audio_url": f"/audio/{audio_filename}"
        })
    
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/audio/<filename>', methods=['GET'])
def serve_audio(filename):
    return send_from_directory(AUDIO_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)