import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML: The Backbone of Web Development",
      description:
        "Explore the fundamentals of HTML, the structure behind every web page.",
      date: "2024-11-28",
      imageUrl: "../images/img-1.png",
    },
    {
      id: "2",
      title: "CSS: Bringing Style to the Web",
      description:
        "Learn how CSS makes web pages visually appealing with powerful styling techniques.",
      date: "2024-11-29",
      imageUrl: "../images/img-2.png",
    },
    {
      id: "3",
      title: "JavaScript: Adding Interactivity to Websites",
      description:
        "Discover how JavaScript transforms static pages into dynamic user experiences.",
      date: "2024-11-30",
      imageUrl: "../images/img-3.png",
    },
    {
      id: "4",
      title: "Bootstrap: Simplifying Responsive Design",
      description:
        "Dive into Bootstrap, a powerful framework for creating responsive websites quickly.",
      date: "2024-12-01",
      imageUrl: "../images/img-4.png",
    },
    {
      id: "5",
      title: "Tailwind CSS: Utility-First Design",
      description:
        "Master the utility-first approach to styling with Tailwind CSS.",
      date: "2024-12-02",
      imageUrl: "../images/img-5.png",
    },
    {
      id: "6",
      title: "React: Building Modern User Interfaces",
      description:
        "Understand React's component-based architecture for crafting reusable UI elements.",
      date: "2024-12-03",
      imageUrl: "../images/img-6.png",
    },
    {
      id: "7",
      title: "Node.js: JavaScript on the Server",
      description:
        "Explore Node.js, enabling server-side programming with JavaScript.",
      date: "2024-12-04",
      imageUrl: "../images/img-7.jpg",
    },
    {
      id: "8",
      title: "Next.js: The React Framework for Production",
      description:
        "Learn Next.js for building SEO-friendly and high-performance web applications.",
      date: "2024-12-05",
      imageUrl: "../images/img-8.png",
    },
    {
      id: "9",
      title: "Python: The Versatile Language",
      description:
        "Discover the versatility of Python for web development, data science, and more.",
      date: "2024-12-06",
      imageUrl: "../images/img-9.jpg",
    },
    {
      id: "10",
      title: "Django: Web Development with Python",
      description:
        "Get started with Django, a powerful Python framework for backend development.",
      date: "2024-12-07",
      imageUrl: "../images/img-10.jpg",
    },
    {
      id: "11",
      title: "Express.js: Lightweight Node.js Framework",
      description:
        "Learn how Express.js simplifies backend development with Node.js.",
      date: "2024-12-08",
      imageUrl: "../images/img-11.jpg",
    },
    {
      id: "12",
      title: "MongoDB: NoSQL Database for Developers",
      description:
        "Understand MongoDB's flexible data model for modern applications.",
      date: "2024-12-09",
      imageUrl: "../images/img-12.jpeg",
    },
    {
      id: "13",
      title: "Git and GitHub: Version Control Made Easy",
      description:
        "Master Git and GitHub to collaborate and manage code effectively.",
      date: "2024-12-10",
      imageUrl: "../images/img-13.png",
    },
    {
      id: "14",
      title: "TypeScript: Typed JavaScript at Scale",
      description:
        "Explore TypeScript's features for creating robust and scalable JavaScript applications.",
      date: "2024-12-11",
      imageUrl: "../images/img-14.png",
    },
    {
      id: "15",
      title: "Web Accessibility: Building for Everyone",
      description:
        "Learn the principles of web accessibility to create inclusive user experiences.",
      date: "2024-12-12",
      imageUrl: "../images/img-15.png",
    },
  ];

  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold text-gray-800 animate-color-change mb-6">
        {" "}
        Explore Our Latest Blogs
      </h1>
      
      <p className="text-gray-600 mb-8">
        Stay updated with the latest trends and technologies in web development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
