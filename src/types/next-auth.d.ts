import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      firstName: string;
      lastName: string;
      pseudonym: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    firstName?: string;
    lastName?: string;
    pseudonym?: string;
  }
}
