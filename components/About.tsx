"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 text-[14px]">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm md:text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="hidden lg:block mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
          About
        </h2>
        <div className="h-px w-12 bg-primary rounded-full" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6 animate-fade-in-up">
          Junior Software Developer and IT graduate (2025) with a strong passion for software development and emerging technologies.{" "}
          <span className="text-foreground font-semibold">
            Experienced in building full-stack web applications using React, Node.js, Express, and MongoDB
          </span>
          , including authentication systems and role-based access control. Committed to writing clean, maintainable code and continuously expanding technical expertise.
        </p>
        <p className="text-start text-muted-foreground lg:px-6 animate-fade-in-up animate-delay-100">
          I combine practical web development experience with foundational IT support and troubleshooting skills. My capstone project,{" "}
          <span className="text-foreground font-semibold">Learn2Drive</span>, is a full MERN stack application featuring JWT-based authentication, multi-role dashboards, and RESTful APIs — reflecting my ability to architect and ship production-ready systems. I&#39;m passionate about automation, AI integration, and building tools that genuinely solve problems.
        </p>
        <p className="text-start text-muted-foreground lg:px-6 animate-fade-in-up animate-delay-200">
          My background in customer-facing and administrative roles has sharpened my ability to listen, communicate clearly, and deliver under pressure — skills I bring directly into development through intuitive UI design, meaningful features, and a sharp eye for user experience. I thrive in collaborative environments and aim to contribute from day one.
        </p>
      </div>
    </section>
  );
}
