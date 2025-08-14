import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { AuthProvider } from "@descope/nextjs-sdk";

import Header from "../components/Header";
import "../styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netlify + Descope Next.js Template",
  description: "Authenticate with Descope",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider
      projectId={
        process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID ||
        "P2tEBjJR4tViVQ0Blc55EGnFxDNg"
      }
      baseUrl={process.env.NEXT_PUBLIC_DESCOPE_BASE_URL || ""}
    >
      <html lang="en">
        <body className={fontSans.className}>
          <Header />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
