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
    timeline: "2022 Sep - Present",
    currentPosition: "Senior Sales Consultant",
    place: "Koala Living",
    previousPositions: [""],
    description:
      "Led the customer consultation experience at Koala Living as a Senior Sales Consultant, curating personalized furniture solutions room by room. I set high standards for visual merchandising, managed ERP operations including stock and fulfillment, and handled escalations to ensure premium post-sales support. Drove consistent KPI performance while enhancing the brand’s customer engagement approach.",
    skills: [
      "Client Consulting",
      "ERP Management",
      "Sales Optimization",
      "Conflict Resolution",
      "Visual Merchandising",
    ],
  },
  {
    timeline: "Oct 2024 – Mar 2025",
    currentPosition: "IT Administrator",
    place: "Dynamic Training Services",
    previousPositions: [""],
    description:
      "IT Administrator at a higher education provider, responsible for maintaining campus-wide systems and ensuring operational uptime. Delivered front-line technical support for students and staff, managed user accounts and permissions, resolved hardware, software, and network issues, and ensured compliance with IT policies to support secure, uninterrupted digital learning environments.",
    skills: [
      "System Maintenance",
      "Network Troubleshooting",
      "Technical Support",
      "User Management",
      "Security Monitoring"
    ],
  },
  {
    timeline: "May 2023 – Present",
    currentPosition: "Online Supervisor",
    place: "Woolworths",
    previousPositions: [""],
    description:
      "Online Team Supervisor at Woolworths, managing end-to-end online order processing in a fast-paced retail setting. Led a team to meet fulfillment KPIs, resolved inventory discrepancies, handled customer escalations, ensured timely dispatch of orders, and coordinated with internal departments to maintain accuracy and service quality under pressure.",
    skills: [
    "Team Coordination",
      "Inventory Management",
      "Customer Service",
      "Order Fulfillment",
      "Problem Solving",
    ],
  },
  {
    timeline: "Jan 2022 – July 2022",
    currentPosition: "Junior Web Developer",
    place: "Leapfrog | Kathmandu, Nepal",
    previousPositions: [
      ""
    ],
    description:
      "Junior Web Developer at Leapfrog, contributing to full-stack development tasks. Worked on UI enhancements using React, HTML, and CSS, assisted in backend logic with JavaScript, participated in agile sprints, implemented API integrations, fixed bugs, and gained practical experience in Git workflows, responsive design, and team-based development practices.",
    skills: [
      "Frontend Development",
      "React Components",
      "API Integration",
      "Version Control",
      "Debugging Skills"
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
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
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
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
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
