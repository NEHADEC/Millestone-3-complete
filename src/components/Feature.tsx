
import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2
          className="text-center text-3xl font-bold md:text-5x1 lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out
      transform hover:translate-y-[-5px] hover:text-black text-red-600 ">
          Neha Bilal : Navigating the secrets of Tecnology Tech Chronicles Blog!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 animate-fade-in-up delay-100">
          Join Neha Bilal, a passionate and dedicated Frontend Developer who
          thrives on creating visually stunning and highly functional websites.
          With expertise in cutting-edge web technologies such as Next.js,
          React, and TypeScript, I specialize in transforming ideas into
          seamless digital experiences. My journey as a developer is driven by
          an unrelenting curiosity and a creative mindset that pushes me to
          explore innovative solutions for modern challenges. I believe in the
          power of technology to shape the future, and my goal is to contribute
          by crafting interfaces that are not just visually appealing but also
          intuitive and user-centric. Every project I work on reflects my
          commitment to quality, attention to detail, and a desire to exceed
          expectations. Let’s collaborate and build a digital world that
          inspires, connects, and empowers, one line of code at a time!
        </p>

        <div className="mx-auto max-w-7x1 px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring Our Categories
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Tecnology",
              "Artifical Intelligence",
              "HTML",
              "Next.Js",
              "UI/UX Design",
              "Web Development",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-blue-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600">
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10 ">
          Through these categories, I aim to share my passion and expertise
          across a wide range of topics. From mastering the basics of HTML to
          building complex web applications using Next.js, my journey is all
          about exploring the limitless possibilities of web development. With a
          keen interest in UI/UX design, I believe in crafting user-friendly
          interfaces that leave a lasting impression. Technology and Artificial
          Intelligence excite me as they shape the future of innovation, and I
          am constantly learning to stay ahead in this ever-evolving field.
          These categories represent not just my areas of expertise, but also my
          commitment to creating content that educates, inspires, and empowers
          aspiring developers and tech enthusiasts alike.
        </p>
      </section>
    </div>
  );
}
