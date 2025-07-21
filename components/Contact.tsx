"use client";

import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("https://formspree.io/f/xanbqvpq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Get In Touch
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-5xl font-bold lg:text-start">
          Get In Touch
        </h2>
        <p className="lg:text-lg lg:text-start text-muted-foreground">
          If you like my work I am open to further explore my opportunities and develop my skills. Do Send me an email to discuss more.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 lg:px-6 mb-4">
        <button
          onClick={() => setOpen(true)}
          className="hover:cursor-pointer w-full"
        >
          <Button variant={"default"} className="w-full h-full">
            <div className="flex flex-row items-center">
              <Mail className="dark:text-white text-muted h-6 w-6" />
              <p className="ml-3 text-2xl dark:text-white text-muted">
                Say hello
              </p>
            </div>
          </Button>
        </button>
      </div>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
                rows={4}
              />
              <Button type="submit" variant="default" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </Button>
              {status === "success" && (
                <p className="text-green-600">Message sent! Thank you.</p>
              )}
              {status === "error" && (
                <p className="text-red-600">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
