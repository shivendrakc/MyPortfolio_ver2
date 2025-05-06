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
      <div className="flex flex-col gap-4">
      <p className="text-start text-muted-foreground lg:px-6 ">
          From frontend development to backend architecture, my journey into tech has always been shaped by a belief in one core idea:{" "}
          <span className="text-white">
            technology should be approachable, useful, and human-centered.
          </span>{" "}
          My foundation in IT, combined with hands-on experience in sales and consulting, allows me to build not just products, but experiences that connect with real people.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I'm currently completing my degree in Information Technology, while working on automation-driven web apps and full-stack solutions that explore the intersection of user behavior, business needs, and modern technologies like AI. With every project, I strive to simplify the complex—whether it's onboarding users, designing flows, or solving logic with clean, scalable code.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          My background in customer-facing roles has taught me how to listen, persuade, and deliver value—skills I bring into development through intuitive UI, meaningful features, and attention to detail. I’m deeply passionate about building tools that empower users and make technology feel like a natural extension of their needs and goals.
        </p>

      </div>
    </section>
  );
}
