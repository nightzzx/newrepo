import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID ?? "",
      clientSecret: process.env.APPLE_PRIVATE_KEY ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID ?? "",
      clientSecret: process.env.FACEBOOK_SECRET ?? "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      console.log("user from route.ts", user);
      console.log("account from route.ts", account);
      console.log("profile from route.ts", profile);
      console.log("email from route.ts", email);
      console.log("credentials from route.ts", credentials);
      if (user) {
        // console.log("yesyesyesyesyesyesyesyesyesyes");
        return true;
      }
    },

    async redirect({ url, baseUrl }) {
      const redirectUrl = url.startsWith("/")
        ? new URL(url, baseUrl).toString()
        : url;
      return redirectUrl;
    },

    async jwt({ token, user, account }) {
      // console.log(token, "from jwt console");
      // console.log(user, "from user console");
      // console.log(account, "from account console");
      if (account && account.provider === "google") {
        return {
          ...token,
        };
      }

      if (account && account.provider === "github") {
        return {
          ...token,
        };
      }

      if (account && account.provider === "facebook") {
        return {
          ...token,
        };
      }
      if (account && account.provider === "apple") {
        return {
          ...token,
        };
      }
      // pass in all to token
      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // pass in all token detail to session
      return {
        ...session,
        user: {
          ...session.user,
          // id: token.id,
          // walletBalance: token.walletBalance,
          // usertable: token.usertable,
          ...token,
        },
      };
      return session;
    },
  },
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  session: {
    strategy: "jwt",
    cookie: {
      secure: process.env.NODE_ENV === "production", // Ensure it's secure in production
    },
  },
  //   pages: {
  //     signIn: "/about",
  //   },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
