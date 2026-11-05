import "server-only";

import { auth } from "@clerk/nextjs/server";

export async function isAdmin() {
  const { userId } = await auth();
  const adminUserId = process.env.CLERK_ADMIN_USER_ID;

  return Boolean(userId && adminUserId && userId === adminUserId);
}

export async function requireAdmin() {
  if (!(await isAdmin())) {
    throw new Error("No autorizado.");
  }
}
