"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, ChevronUp, ChevronDown, Plus, LogOut, X, Check } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
  image_path: string;
  order_index: number;
};

const emptyForm = {
  title: "",
  description: "",
  skills: "",
  link: "",
  image_path: "",
};

export default function AdminPanel() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function fetchProjects() {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  function startAdd() {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
    setShowForm(true);
  }

  function startEdit(project: Project) {
    setEditingId(project.id);
    setForm({
      title: project.title,
      description: project.description,
      skills: project.skills.join(", "),
      link: project.link,
      image_path: project.image_path,
    });
    setError("");
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  }

  async function handleSave() {
    if (!form.title || !form.description || !form.link || !form.image_path) {
      setError("Title, description, link, and image URL are required.");
      return;
    }
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      skills: form.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    const url = editingId ? `/api/projects/${editingId}` : "/api/projects";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      await fetchProjects();
      cancelForm();
    } else {
      const data = await res.json();
      setError(data.error ?? "Failed to save.");
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    await fetchProjects();
  }

  async function moveProject(index: number, direction: "up" | "down") {
    const newProjects = [...projects];
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= newProjects.length) return;
    [newProjects[index], newProjects[swapIndex]] = [newProjects[swapIndex], newProjects[index]];
    setProjects(newProjects);
    await fetch("/api/projects/reorder", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: newProjects.map((p) => p.id) }),
    });
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Project Manager</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage projects shown on your portfolio
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View site ↗
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Add Project Button */}
        {!showForm && (
          <button
            onClick={startAdd}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors mb-6"
          >
            <Plus className="h-4 w-4" />
            Add Project
          </button>
        )}

        {/* Add / Edit Form */}
        {showForm && (
          <div className="border border-border rounded-xl p-6 mb-6 bg-card">
            <h2 className="font-semibold text-base mb-4">
              {editingId ? "Edit Project" : "New Project"}
            </h2>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Title *</label>
                <input
                  type="text"
                  placeholder="My Awesome Project"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full border border-input rounded-md px-3 py-2 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Description *</label>
                <textarea
                  placeholder="What the project does, what tech was used..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  className="w-full border border-input rounded-md px-3 py-2 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">
                  Skills <span className="font-normal">(comma separated)</span>
                </label>
                <input
                  type="text"
                  placeholder="React, Node.js, Tailwind CSS"
                  value={form.skills}
                  onChange={(e) => setForm({ ...form, skills: e.target.value })}
                  className="w-full border border-input rounded-md px-3 py-2 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Project Link *</label>
                <input
                  type="url"
                  placeholder="https://myproject.vercel.app"
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  className="w-full border border-input rounded-md px-3 py-2 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">
                  Image URL *{" "}
                  <span className="font-normal">
                    (use /pro1.png for existing images, or any https:// URL)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="/pro1.png or https://i.imgur.com/abc.png"
                  value={form.image_path}
                  onChange={(e) => setForm({ ...form, image_path: e.target.value })}
                  className="w-full border border-input rounded-md px-3 py-2 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <div className="flex gap-2 mt-1">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Check className="h-4 w-4" />
                  {saving ? "Saving..." : "Save Project"}
                </button>
                <button
                  onClick={cancelForm}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-input text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Project List */}
        {loading ? (
          <p className="text-muted-foreground text-sm">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            No projects yet. Add your first project above.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="border border-border rounded-xl p-4 bg-card flex gap-4 items-start"
              >
                {/* Reorder buttons */}
                <div className="flex flex-col gap-1 pt-0.5 shrink-0">
                  <button
                    onClick={() => moveProject(index, "up")}
                    disabled={index === 0}
                    className="p-1 rounded hover:bg-accent disabled:opacity-20 transition-colors"
                    aria-label="Move up"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => moveProject(index, "down")}
                    disabled={index === projects.length - 1}
                    className="p-1 rounded hover:bg-accent disabled:opacity-20 transition-colors"
                    aria-label="Move down"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">{project.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-1 shrink-0">
                  <button
                    onClick={() => startEdit(project)}
                    className="p-2 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Edit"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 rounded hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
