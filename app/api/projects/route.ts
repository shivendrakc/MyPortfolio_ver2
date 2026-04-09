import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { verifyAdminToken } from "@/lib/auth";

export async function GET() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, description, skills, link, image_path } = body;

  if (!title || !description || !link || !image_path) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Get the current max order_index
  const { data: existing } = await supabase
    .from("projects")
    .select("order_index")
    .order("order_index", { ascending: false })
    .limit(1);

  const nextIndex = existing && existing.length > 0 ? existing[0].order_index + 1 : 0;

  const { data, error } = await supabase
    .from("projects")
    .insert({
      title,
      description,
      skills: Array.isArray(skills) ? skills : [],
      link,
      image_path,
      order_index: nextIndex,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}
