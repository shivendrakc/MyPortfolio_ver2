"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

type Project = {
  id?: string;
  image_path: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
  order_index?: number;
};

const fallbackProjects: Project[] = [
  {
    image_path: "/pro1.png",
    title: "Ecommerce Landing Page",
    description:
      "Developing a landing page as a project to test my React and Tailwind skills by redesigning a modern e-commerce layout.",
    skills: ["Product Design", "UI/UX Design", "Tailwind | React", "Design Strategy"],
    link: "https://react-tailwind-projects-five.vercel.app/",
  },
  {
    image_path: "/pro2.png",
    title: "Make up Portfolio Landing Page",
    description:
      "Practicing my skills by creating a real-life portfolio landing page for a makeup artist, correctly meeting her design requirements and boosting SEO.",
    skills: ["UI/UX Design", "Design System", "SEO", "Vercel"],
    link: "https://v0-makeup-artist-portfolio-nu.vercel.app/",
  },
  {
    image_path: "/pro3.png",
    title: "Learn2Drive",
    description:
      "A full-stack MERN capstone application with secure JWT-based authentication and role-based access (student, instructor, admin). Built responsive UI with React and Tailwind, designed RESTful APIs with Node.js and Express connected to MongoDB, and implemented multi-step forms, dashboard workflows, and user data management.",
    skills: ["MERN Stack", "JWT Auth", "React", "Express", "MongoDB", "Vercel", "Figma"],
    link: "https://cihelearn2drive.vercel.app/",
  },
  {
    image_path: "/pro4.png",
    title: "Weather Forecast Application",
    description:
      "A simple, easy-to-use weather forecast app that allows users to check the weather of a particular city. Developed as a college project demonstrating Java skills and the ability to work with Android Studio.",
    skills: ["Java", "Android Studio", "XML", "Mobile Development"],
    link: "https://github.com/shivendrakc/WeatherApp.git",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch(() => {
        // Keep fallback projects if API is unavailable
      });
  }, []);

  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="hidden lg:block mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
          Projects
        </h2>
        <div className="h-px w-12 bg-primary rounded-full" />
      </div>
      <>
        {projects.map((project, index) => (
          <a
            key={project.id ?? index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <div className="relative mt-2 overflow-hidden rounded-[0.5rem]">
                  <Image
                    src={project.image_path}
                    alt={`Screenshot of ${project.title}`}
                    width={1920}
                    height={1080}
                    priority={index < 2}
                    className="bg-[#141414] border border-muted-foreground rounded-[0.5rem] transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-[0.5rem] bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 pointer-events-none" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <Badge key={i}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
