import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest } from "next/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "fallback-secret-change-me";

export function signAdminToken(): string {
  return createHmac("sha256", ADMIN_SECRET).update("admin").digest("hex");
}

export function verifyAdminToken(request: NextRequest): boolean {
  const token = request.cookies.get("admin_token")?.value;
  if (!token) return false;
  const expected = signAdminToken();
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}
