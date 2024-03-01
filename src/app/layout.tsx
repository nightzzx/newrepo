import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {session?.user.name && (
              <h2>the {session.user.name} logged in already!!</h2>
            )}
            {children}

            <Toaster />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}