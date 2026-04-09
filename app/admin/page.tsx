import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signAdminToken } from "@/lib/auth";
import { timingSafeEqual } from "crypto";
import AdminPanel from "@/components/AdminPanel";

function isAuthenticated(): boolean {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return false;
  const expected = signAdminToken();
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export default function AdminPage() {
  if (!isAuthenticated()) {
    redirect("/admin/login");
  }

  return <AdminPanel />;
}
