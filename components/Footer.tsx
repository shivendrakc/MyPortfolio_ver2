"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 pt-8 pb-4">
      <div className="flex flex-col items-center gap-2 lg:px-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 Shivendra KC. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Based on{" "}
          <a className="text-foreground hover:underline underline-offset-2" href="https://brittanychiang.com">
            Brittany Chiang&#39;s website
          </a>
          . Coded in{" "}
          <a className="text-foreground hover:underline underline-offset-2" href="https://code.visualstudio.com/">
            Visual Studio Code
          </a>
          . Built with{" "}
          <a className="text-foreground hover:underline underline-offset-2" href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a className="text-foreground hover:underline underline-offset-2" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>
          , and{" "}
          <a className="text-foreground hover:underline underline-offset-2" href="https://ui.shadcn.com/">
            Shadcn/ui
          </a>
          . Deployed with{" "}
          <a className="text-foreground hover:underline underline-offset-2" href="https://vercel.com/">
            Vercel
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
