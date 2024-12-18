// components/AboutSection.tsx

import Footer from '@/components/Footer';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Hello, I'm <strong>Neha Bilal</strong>, a passionate and dedicated front-end developer currently in my second year of study. I specialize in building responsive, user-friendly websites using modern web technologies such as <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. 
          I am always eager to learn new technologies and apply them to real-world projects.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              My Mission
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-md">
              My mission is to create impactful, accessible, and innovative web solutions that not only provide users with a smooth and engaging experience but also focus on performance optimization. 
              I believe that technology should make life easier, and as a front-end developer, my goal is to craft seamless interfaces that connect users with the content and services they need. 
              I aim to stay updated with the latest advancements in web development, such as <strong>&#42;AI&#42;</strong>, <strong>&#42;Web 3.0&#42;</strong>, and <strong>&#42;Metaverse&#42;</strong>, and apply these innovations to create forward-thinking solutions. 
              By combining creativity with technical expertise, I aspire to build products that leave a lasting impact on users and the tech community.
            </p>
          </div>

          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <Image
              src="/images/a-1.jpg" // Ensure the image is in the public folder
              alt="Neha Bilal"
              width={320} // Set the width of the image
              height={320} // Set the height of the image
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <button className="mt-12 bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg">
          Learn More
        </button>
      </div>
      <Footer />
    </section>
  );
};

export default AboutSection;
