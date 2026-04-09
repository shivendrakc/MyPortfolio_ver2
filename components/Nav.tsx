"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, MoveUpRight } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0">
        <div className="w-full flex lg:items-center lg:justify-start">
          <Avatar className="w-20 h-20 lg:w-28 lg:h-28 ring-2 ring-primary ring-offset-2 ring-offset-background">
            <AvatarImage src="/avatar.png" alt="Shivendra KC" />
            <AvatarFallback className="text-lg font-bold bg-secondary text-secondary-foreground">
              SK
            </AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-[32px] font-bold lg:text-start">
          Hi,<br /> I&#39;m Shivendra K C 👋
        </h1>
        <div className="flex flex-wrap gap-2">
          {["Full-Stack Developer", "IT Graduate", "Problem Solver", "Automation Enthusiast"].map(
            (role) => (
              <Badge key={role} variant="secondary" className="text-xs font-medium">
                {role}
              </Badge>
            )
          )}
        </div>
        <h5 className="lg:text-sm lg:text-start text-gray-400">
          Junior Software Developer and IT graduate (2025), building full-stack apps with MERN, Next.js, and a passion for clean, purposeful code.
        </h5>
        <a
          href="https://drive.google.com/file/d/1fRkZYl0HbKPmMMceFGlqzqthWhV_HPEu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all mt-1 w-fit"
        >
          View Resume
          <MoveUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            );
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://github.com/shivendrakc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/shivendrakc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ModeToggle />
      </ul>
    </header>
  );
}
