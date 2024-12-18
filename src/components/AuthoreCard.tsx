
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthorCard() {
  return (
    <section className="bg-white shadow-lg rounded-lg mt-12 p-6">
      <div className="flex items-center">
        <Image
          src="/images/a-1.jpg"
          alt="Picture of Neha Bilal, a Front-end Developer"
          width={80}
          height={80}
          className="rounded-full border-2 border-black"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold">Neha Bilal</h3>
          <p className="text-slate-500">
            Front-end Developer | Next.js Expert | Web Developer
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Neha is a skilled front-end web developer with 1 year of hands-on
        experience. She specializes in creating dynamic and responsive websites
        using HTML, CSS, JavaScript, TypeScript, React, and Next.js. She is
        passionate about designing user-friendly interfaces and constantly
        enhances her skills by exploring modern technologies like AI and Web
        3.0.
      </p>

      <div className="mt-4 flex space-x-3">
        <Link
          href="https://x.com/NEHA12170217081"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </Link>

        <Link
          href="..."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-700 transition duration-300"
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
