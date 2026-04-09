import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { verifyAdminToken } from "@/lib/auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, description, skills, link, image_path } = body;

  const { data, error } = await supabase
    .from("projects")
    .update({ title, description, skills, link, image_path })
    .eq("id", params.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { error } = await supabase.from("projects").delete().eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Re-index remaining projects
  const { data: remaining } = await supabase
    .from("projects")
    .select("id")
    .order("order_index", { ascending: true });

  if (remaining) {
    await Promise.all(
      remaining.map((p, i) =>
        supabase.from("projects").update({ order_index: i }).eq("id", p.id)
      )
    );
  }

  return NextResponse.json({ success: true });
}
