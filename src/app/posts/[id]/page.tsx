

'use client';
import { useParams } from "next/navigation";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard"; // Assuming you have this component
import Footer from "@/components/Footer"; // Assuming you have this component
import Image from "next/image";

const PostPage = () => {
  const { id } = useParams(); // Fetch the dynamic route parameter
  const posts = [
    {
      id: "1",
      title: "HTML: The Backbone of Web Development",
      description:
        "HTML, or HyperText Markup Language, is the cornerstone of web development. It provides the essential structure of all websites, allowing developers to define headings, paragraphs, links, images, and other elements that make up the content of a webpage. Whether you’re creating a simple static page or a complex application, understanding HTML is the first step in web development. Its semantic nature not only helps developers but also improves accessibility and search engine optimization (SEO), making your website user-friendly and discoverable.",
      image: "../images/img-1.png",
    },
    {
      id: "2",
      title: "CSS: Bringing Style to the Web",
      description:
        "CSS, or Cascading Style Sheets, is the styling language that brings a visual flair to the web. With CSS, you can transform a plain HTML structure into a beautifully designed website. It allows you to control everything from colors, fonts, and layouts to animations and responsive designs. Whether you're creating a simple color scheme or crafting intricate animations, CSS is indispensable for any web developer aiming to captivate their audience. Furthermore, advanced techniques like Flexbox and Grid empower developers to create complex layouts with ease, ensuring their designs are adaptable across devices.",
      image: "../images/img-2.png",
    },
    {
      id: "3",
      title: "JavaScript: Adding Interactivity to Websites",
      description:
        "JavaScript is the programming language of the web, responsible for adding interactivity and functionality to websites. Unlike static HTML and CSS, JavaScript allows developers to create dynamic content, from form validations and dropdown menus to complex single-page applications (SPAs). With the rise of modern JavaScript frameworks like React, Angular, and Vue, developers can now build highly interactive and scalable applications. Its versatility extends beyond the browser, powering server-side applications with Node.js, making it one of the most in-demand skills for developers worldwide.",
      image: "../images/img-3.png",
    },
    {
      id: "4",
      title: "Bootstrap: Simplifying Responsive Design",
      description:
        "Bootstrap is a powerful front-end framework that simplifies the process of creating responsive and mobile-first websites. By providing a rich library of pre-styled components and a grid system, Bootstrap enables developers to build professional-looking designs quickly and efficiently. Its components, such as navigation bars, modals, and buttons, are fully customizable and save developers significant time compared to crafting these elements from scratch. As an open-source project, Bootstrap is continuously updated, ensuring compatibility with the latest web standards and trends.",
      image: "../images/img-4.png",
    },
    {
      id: "5",
      title: "Tailwind CSS: Utility-First Design",
      description:
        "Tailwind CSS revolutionizes web design by introducing a utility-first approach to styling. Unlike traditional CSS frameworks, Tailwind provides a vast array of utility classes, allowing developers to style elements directly in their HTML. This approach promotes rapid development and ensures consistent styling across projects. Tailwind’s flexibility and customization capabilities make it a favorite among developers who value control over their designs without sacrificing speed. Its growing ecosystem, including plugins and templates, further enhances its usability in diverse projects.",
      image: "../images/img-5.png",
    },
    {
      id: "6",
      title: "React: Building Modern User Interfaces",
      description:
        "React, a JavaScript library developed by Facebook, is widely regarded as a game-changer for front-end development. It enables developers to create highly dynamic and reusable UI components, making complex applications manageable and scalable. React’s virtual DOM ensures efficient updates and rendering, resulting in faster and smoother user experiences. With its extensive ecosystem, including tools like Redux for state management and Next.js for server-side rendering, React continues to dominate the web development landscape.",
      image: "../images/img-6.png",
    },
    {
      id: "7",
      title: "Node.js: JavaScript on the Server",
      description:
        "Node.js extends the capabilities of JavaScript to the server-side, allowing developers to build scalable and high-performance backend applications. Its non-blocking, event-driven architecture makes it ideal for handling concurrent requests, such as in real-time applications like chat apps and online gaming. With a rich ecosystem of packages available through npm, Node.js simplifies backend development, enabling developers to create APIs, microservices, and even full-stack applications with ease.",
      image: "../images/img-7.jpg",
    },
    {
      id: "8",
      title: "Next.js: The React Framework for Production",
      description:
        "Next.js is a React-based framework that simplifies the development of high-performance and SEO-friendly web applications. By offering features like server-side rendering (SSR), static site generation (SSG), and API routes, Next.js empowers developers to create versatile applications that load quickly and rank well in search engines. Its file-based routing system, built-in optimizations, and robust support for TypeScript make it an essential tool for modern web developers looking to build production-ready applications.",
      image: "../images/img-8.png",
    },
    {
      id: "9",
      title: "Python: The Versatile Language",
      description: `
        Python is a powerful and versatile programming language known for its simplicity and readability. It is widely used across different domains, from web development to data science, machine learning, and artificial intelligence. The language's extensive library support and vast ecosystem make it ideal for both beginners and experienced developers. Popular frameworks like Django and Flask enable rapid web development, while libraries such as NumPy and Pandas are invaluable in data analysis and scientific computing. Python’s ease of integration with other technologies and its adaptability to various use cases has solidified its position as one of the most popular programming languages today. Whether you're building a simple script or a complex application, Python’s flexibility and community support make it a go-to language for developers worldwide.
      `,
      image: "../images/img-9.jpg",
    },
    {
      id: "10",
      title: "Django: Web Development with Python",
      description: `
        Django is a high-level Python web framework designed for rapid web development and clean, pragmatic design. It emphasizes the DRY (Don't Repeat Yourself) principle and allows developers to focus on writing their application without reinventing the wheel. With built-in features like an ORM for database management, authentication tools, and URL routing, Django speeds up development and reduces the amount of boilerplate code needed. It’s ideal for building dynamic, data-driven websites such as CMS platforms, social media applications, and e-commerce websites. Django’s strong security features, like automated security patches and protection against common attacks (e.g., CSRF and XSS), make it a reliable choice for developers seeking both scalability and security.
      `,
      image: "../images/img-10.jpg",
    },
    {
      id: "11",
      title: "Express.js: Lightweight Node.js Framework",
      description: `
        Express.js is a minimal and flexible framework for building web applications with Node.js. It simplifies the process of creating server-side applications and APIs by providing a set of robust tools and features, including routing, middleware support, and easy integration with various databases and libraries. Express's lightweight nature ensures fast performance, making it a great choice for real-time applications and APIs. It’s particularly known for its flexibility, allowing developers to build everything from simple RESTful APIs to complex web applications with ease. Express is widely used in combination with MongoDB and Node.js to build full-stack applications, leveraging JavaScript throughout the stack.
      `,
      image: "../images/img-11.jpg",
    },
    {
      id: "12",
      title: "MongoDB: NoSQL Database for Developers",
      description: `
        MongoDB is a NoSQL database that offers flexible, scalable, and high-performance data storage. Unlike traditional relational databases, MongoDB stores data in a JSON-like format, making it ideal for handling unstructured or semi-structured data. Its ability to horizontally scale via sharding allows it to manage large volumes of data, making it suitable for modern, data-intensive applications. MongoDB's document-based data model aligns well with JavaScript's object format, which makes it a great choice for full-stack JavaScript development, especially when combined with frameworks like Express.js. Additionally, MongoDB offers built-in replication and automatic failover, ensuring high availability for mission-critical applications.
      `,
      image: "../images/img-12.jpeg",
    },
    {
      id: "13",
      title: "Git and GitHub: Version Control Made Easy",
      description: `
        Git is a distributed version control system that helps developers track changes to their codebase, collaborate with other developers, and manage different versions of their software. It allows you to manage code efficiently, keep a history of changes, and revert back to previous versions when necessary. GitHub, built around Git, provides a cloud-based platform to host code repositories, facilitating collaboration and sharing. GitHub’s features, such as pull requests, issue tracking, and code reviews, streamline the development process, making it easier for teams to work together on large projects. Git and GitHub are essential tools in modern software development workflows.
      `,
      image: "../images/img-13.png",
    },
    {
      id: "14",
      title: "TypeScript: Typed JavaScript at Scale",
      description: `
        TypeScript is a superset of JavaScript that adds static typing to the language, helping developers catch errors early during development instead of at runtime. It improves code quality and maintainability by enabling features like type annotations, interfaces, and classes. TypeScript compiles down to plain JavaScript, ensuring that it can be used in any JavaScript project. The language offers excellent tooling support, such as autocompletion, type checking, and better refactoring capabilities. TypeScript is widely adopted in large-scale applications, especially with front-end frameworks like Angular and React, and is also becoming increasingly popular for backend development with Node.js.
      `,
      image: "../images/img-14.png",
    },
    {
      id: "15",
      title: "Web Accessibility: Building for Everyone",
      description: `
        Web accessibility refers to designing and developing websites so that they are usable by people with disabilities. This includes ensuring that content is accessible through screen readers, providing alternative text for images, and making sure that websites are navigable with a keyboard alone. Accessible web design is not only about meeting legal requirements but also about ensuring that all users, regardless of ability, have equal access to the web. By following accessibility guidelines and using tools like ARIA, developers can create more inclusive websites that are usable by people with visual, auditory, motor, and cognitive disabilities. Building for accessibility enhances the overall user experience and reaches a wider audience.
      `,
      image: "../images/img-15.png",
    },
      ];
      const post = posts.find(p => p.id === id);

      if (!post) {
        return <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>;
      }
    
      const renderParagraphs = (description: string) => {
        return description.split("\n").map((para, index) => (
          <p key={index} className="mt-4 text-justify">
            {para.trim()}
          </p>
        ));
      };
    
      return (
        <div className="max-w-3xl mx-auto p-5">
          {/* Post Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-6">{post.title}</h1>
    
          {/* Post Image */}
          {post.image && (
            <Image src={post.image}
            alt={post.title} className="max-w-sm h-auto rounded-md mt-4" />
          )}
    
          {/* Post Description */}
          <div className="mt-6 text-lg text-gray-700">
            {renderParagraphs(post.description)}
          </div>
    
          {/* Add Comment Section */}
          <CommentSection />
    
          {/* Author Card */}
          <AuthoreCard />
    
          {/* Footer */}
          <Footer />
        </div>
      );
    };
    
    export default PostPage;