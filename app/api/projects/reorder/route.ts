import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { verifyAdminToken } from "@/lib/auth";

export async function PUT(request: NextRequest) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { ids }: { ids: string[] } = await request.json();

  if (!Array.isArray(ids)) {
    return NextResponse.json({ error: "ids must be an array" }, { status: 400 });
  }

  await Promise.all(
    ids.map((id, index) =>
      supabase.from("projects").update({ order_index: index }).eq("id", id)
    )
  );

  return NextResponse.json({ success: true });
}
