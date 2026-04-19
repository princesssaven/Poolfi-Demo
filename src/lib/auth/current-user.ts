import { cookies } from "next/headers";
import { auth } from "@/auth";
import { AUTH_COOKIE_NAMES, readSessionCookie } from "@/src/lib/auth/session";
import { findUserByEmail, findUserById } from "@/src/lib/auth/store";
import { isDatabaseConfigured } from "@/src/lib/db";

export async function getCurrentDatabaseUser() {
  if (!isDatabaseConfigured()) {
    return null;
  }

  const cookieStore = await cookies();
  const customSession = readSessionCookie(
    cookieStore.get(AUTH_COOKIE_NAMES.session)?.value
  );

  if (customSession) {
    const user =
      (await findUserById(customSession.id)) ??
      (await findUserByEmail(customSession.email));

    if (user) {
      return user;
    }
  }

  const authSession = await auth();

  if (!authSession?.user?.email) {
    return null;
  }

  return findUserByEmail(authSession.user.email);
}
