import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { findUserByEmail, upsertGoogleUser } from "@/src/lib/auth/store";
import { isDatabaseConfigured } from "@/src/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  pages: {
    error: "/sign-in",
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === "google") {
        if (!profile?.email_verified) {
          return false;
        }

        if (!isDatabaseConfigured()) {
          return "/sign-in?error=DatabaseConfiguration";
        }

        const email = user.email?.trim() || profile.email?.trim();

        if (!email) {
          return false;
        }

        try {
          await upsertGoogleUser({
            email,
            googleId: account.providerAccountId,
            image: user.image,
            name: user.name ?? profile.name ?? null,
          });
        } catch (error) {
          console.error("Failed to persist Google user", error);
          return "/sign-in?error=DatabaseConfiguration";
        }
      }

      return true;
    },
    async jwt({ token, account, user }) {
      if (!isDatabaseConfigured() || !token.email) {
        return token;
      }

      const shouldRefreshUser =
        Boolean(user) ||
        Boolean(account) ||
        !token.userId ||
        !token.firstName ||
        !token.pseudonym ||
        !token.depositMemo;

      if (!shouldRefreshUser) {
        return token;
      }

      const existingUser = await findUserByEmail(token.email);

      if (!existingUser) {
        return token;
      }

      token.picture = existingUser.image ?? token.picture;
      token.userId = existingUser.id;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.name =
        [existingUser.firstName, existingUser.lastName]
          .filter(Boolean)
          .join(" ")
          .trim() || token.name;
      token.pseudonym = existingUser.pseudonym;
      token.depositMemo = existingUser.depositMemo;

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = typeof token.userId === "string" ? token.userId : "";
        session.user.firstName =
          typeof token.firstName === "string" ? token.firstName : "";
        session.user.lastName =
          typeof token.lastName === "string" ? token.lastName : "";
        session.user.pseudonym =
          typeof token.pseudonym === "string" ? token.pseudonym : "";
        session.user.depositMemo =
          typeof token.depositMemo === "string" ? token.depositMemo : "";
        session.user.image =
          typeof token.picture === "string"
            ? token.picture
            : session.user.image ?? null;
      }

      return session;
    },
  },
});
