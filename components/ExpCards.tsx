"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "June 2025 – Present",
    currentPosition: "Sales Consultant",
    place: "Lounge Lovers",
    description:
      "Delivered personalized customer service in a premium furniture retail environment, accurately processing transactions and managing high-value customer orders. Guided customers through product selections, handled escalations professionally, and consistently met sales targets through strong relationship-building and product knowledge.",
    skills: [
      "Customer Service",
      "Sales",
      "Order Management",
      "CRM",
      "Stakeholder Communication",
    ],
  },
  {
    timeline: "May 2023 – Present",
    currentPosition: "Online Team Supervisor",
    place: "Woolworths",
    description:
      "Supervised online order processing in a fast-paced retail environment, ensuring accurate picking, packing, and on-time delivery. Led and supported team members on shift, assigned tasks, resolved customer escalations promptly, and monitored daily operations to introduce efficiency improvements across stock flow and service priorities.",
    skills: [
      "Team Leadership",
      "Order Fulfillment",
      "Customer Service",
      "Inventory Management",
      "Process Improvement",
    ],
  },
  {
    timeline: "Oct 2024 – Mar 2025",
    currentPosition: "Administrative Support",
    place: "Dynamic Training Services",
    description:
      "Provided administrative support at a higher education provider through accurate data entry, document preparation, and record management. Delivered basic IT assistance including workstation setup and software troubleshooting, maintained internal databases, coordinated digital files, and supported daily operational continuity across training units.",
    skills: [
      "Data Entry",
      "Record Management",
      "IT Support",
      "Microsoft Office",
      "Database Maintenance",
    ],
  },
  {
    timeline: "Jan 2022 – July 2022",
    currentPosition: "Junior Web Developer",
    place: "Leapfrog | Kathmandu, Nepal",
    description:
      "Contributed to full-stack development tasks at a software agency in Nepal. Worked on UI enhancements using React, HTML, and CSS, assisted in backend logic with JavaScript, implemented API integrations, participated in agile sprints, fixed bugs, and gained practical experience in Git workflows, responsive design, and team-based development practices.",
    skills: [
      "React",
      "JavaScript",
      "API Integration",
      "Git & GitHub",
      "Responsive Design",
      "Agile",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="hidden lg:block mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
          Experience
        </h2>
        <div className="h-px w-12 bg-primary rounded-full" />
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent border-l-2 border-l-transparent hover:border-l-primary hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 transition-all duration-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="https://drive.google.com/file/d/1fRkZYl0HbKPmMMceFGlqzqthWhV_HPEu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
