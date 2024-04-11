import db from "@/lib/prisma";
import type { Session, User, DefaultSession, NextAuthOptions } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";

type SessionArgs = { session: DefaultSession; token: DefaultJWT | JWT };

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET)
  throw new Error("GITHUB_ID and GITHUB_SECRET must be defined in .env");

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },

  jwt: {},

  pages: {},

  callbacks: {
    session: ({ session, token }: SessionArgs): Session => {
      if (!session.user) throw new Error("ユーザーがありません" + JSON.stringify(session));
      if (!session.user.name) throw new Error("ユーザー名がありません");
      if (!session.user.image) throw new Error("画像がありません");

      return {
        ...session,
        user: {
          name: session.user.name,
          image: session.user.image,
        },
      };
    },
    signIn: async ({ user }) => {
      console.log("user", user);
      const { name, image } = user;
      if (!name) throw new Error("ユーザー名がありません");

      try {
        const dbUser = await db.user.findUnique({ where: { name } });
        if (!dbUser) {
          await db.user.create({ data: { 
            id: 0,
            name: name, 
            image: image
           } });
        }
      } catch (err) {
        console.error(err);
        return false;
      }

      return true; // ログインを続行
    },
  },

  events: {},

  // debug: true,
};
