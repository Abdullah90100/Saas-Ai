import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:"20px",
        lg:"80px"
      }
    },
    screens:{
      sm:"375px",
      md:"768px",
      lg:"1200px",
      lr:"1024px"
    },
    extend: {
      colors: {
      },
    },
  },
  plugins: [],
};
export default config;
