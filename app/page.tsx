"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Flair, FloatingShapes, GradientText } from "../components";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-black via-black to-blue-950/20 opacity-70" />

      <FloatingShapes />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-3xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-[#5cf34f] via-[#02dfed] to-[#00a4c5]">
            Authenticate with Descope
          </GradientText>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Welcome to the Netlify + Descope Next.js Template
        </p>
        <div className="flex justify-center items-center gap-5">
          <Link href="/login" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-gradient-to-r from-[#00A6B4] via-[#3DEFE9] to-[#5cf34f] px-8 py-3 text-base font-medium text-black shadow-lg border-1 border-[#00A6B4] backdrop-blur-sm w-48 cursor-pointer"
            >
              Sign In
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              window.open(
                "https://github.com/descope-sample-apps/descope-netlify-template",
                "_blank"
              )
            }
            className="rounded-xl bg-black border-1 border-[#5cf34f]/50 px-8 py-3 text-base font-medium text-white shadow-lg backdrop-blur-sm w-48 cursor-pointer"
          >
            View on GitHub
          </motion.button>
        </div>

        <p className="mt-8 mb-2 text-lg text-gray-200">
          Get started by editing{" "}
          <code className="bg-gray-800 rounded px-2 py-1 text-sm font-mono">
            app/page.tsx
          </code>
        </p>
        <Flair />
      </motion.div>
    </div>
  );
}
