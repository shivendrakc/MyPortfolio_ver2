"use client";
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

const jobProjects = [
  {
    imagePath: "/pro1.png",
    title: "Ecommerce Landing Page",
    description:
      "Developing a landing page as a project to test my react and tailwind skills by dedeisgning",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Tailwind | React",
      "Design Strategy",
      
    ],
    link: "https://react-tailwind-projects-five.vercel.app/",
  },
  {
    imagePath: "/pro2.png",
    title: "Make up Portfolio landing Page",
    description:
      "Practicing my Skills by creating real life portfolio landing page who is a make up artist by correclty meeting her design requirement and boosting the SEO",
    skills: [
      "UI/UX Design",
      "Design System",
      "SEO",
      "Vercel",
    ],
    link: "https://v0-makeup-artist-portfolio-nu.vercel.app/",
  },
  {
    imagePath: "/pro3.png",
    title: "Learn2Drive",
    description:
      "A web application that allows users to learn and practice driving skills. It provides a platform for users to book driving lessons, track their progress, and get feedback on their driving skills. This app is still in development and will be launched soon",
    skills: [
      "MERN Stack",
      "React",
      "Express",
      "JavaScript",
      "Vercel",
      "Figma",
    ],
    link: "https://cihelearn2drive.vercel.app/",
  },
  {
    imagePath: "/pro4.png",
    title: "Weather Forecast Application",
    description:
      "This is my weather forecast application which is a simple and easy to use application that allows users to check the weather of a particular city. i developed this as one of my college projects demonstrating exceptional java skills and ability to work with andriod studio",
    skills: [
     "Java",
      "Andriod Studio",
      "XML",
      "Mobile Development",
    ],
    link: "https://github.com/shivendrakc/WeatherApp.git",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
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
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
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
