"use client";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MongoDB"],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel"],
  },
  {
    label: "Administrative",
    skills: [
      "Microsoft Office Suite",
      "Data Entry & Record Management",
      "ERP & POS Systems",
      "Document Preparation",
    ],
  },
  {
    label: "Languages",
    skills: ["English — Highly Proficient", "Nepali — Native", "Hindi — Proficient"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">Skills</h2>
      </div>
      <div className="hidden lg:block mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
          Skills
        </h2>
        <div className="h-px w-12 bg-primary rounded-full" />
      </div>
      <div className="flex flex-col gap-5 lg:px-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
