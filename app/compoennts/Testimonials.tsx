import React from 'react';
import Image from 'next/image';
import avatar1 from "../../public/avatar-1.png";
import avatar2 from "../../public/avatar-2.png";
import avatar3 from "../../public/avatar-3.png";
import avatar4 from "../../public/avatar-4.png";

const testimonials = [
    {
        text: "This product has transformed the way we approach our marketing strategies. Highly recommended!",
        name: "Jane Doe",
        avatarImg: avatar1,
        title: "Marketing Manager at XYZ Corp"
    },
    {
        text: "A game changer for our team! The user interface is intuitive, and the results speak for themselves.",
        name: "John Smith",
        avatarImg: avatar2,
        title: "Product Owner at ABC Inc."
    },
    {
        text: "I was skeptical at first, but this tool exceeded my expectations. Exceptional support and resources!",
        name: "Emily Johnson",
        avatarImg: avatar3,
        title: "CEO of StartUp Co."
    },
    {
        text: "An invaluable asset to our workflow. The analytics provided have helped us refine our strategies.",
        name: "Michael Brown",
        avatarImg: avatar4,
        title: "Data Analyst at 123 Solutions"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className='py-20 md:py-24 '>
            <div className='container mx-auto'>
                <h2 className='text-5xl md:text-6xl tracking-tighter font-medium text-center'>Beyond Expectations</h2>
                <p className='max-w-sm mx-auto lg:text-xl text-white/70 text-lg text-center mt-5 tracking-tight'>
                    Our revoluionary AI SEO tools have transformed our client Startegies
                </p>
                <div className='overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] '>
                    <div className='flex gap-5'>

                        {testimonials.map((test) => (
                            <div key={test.title} className='border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] mb-5 max-w-xs md:max-w-md flex-none'>
                                <div className='text-lg tracking-tight md:text-xl '>{test.text}</div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <div className='relative after:content-[""] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[""] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg'>
                                        <Image
                                            src={test.avatarImg}
                                            alt={`Avatar for ${test.name}`}
                                            className='h-11 w-11 rounded-lg grayscale'
                                        />
                                    </div>
                                    <div>
                                        <div className='font-semibold'>{test.name}</div>
                                        <div className='text-white/50 text-sm  '>{test.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
