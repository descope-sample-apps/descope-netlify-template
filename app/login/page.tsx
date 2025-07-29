"use client";

import React from "react";
import { motion } from "framer-motion";

import { Descope } from "@descope/nextjs-sdk";

import { Flair, FloatingShapes, GradientText } from "../../components";

export default function Login() {
  return (
    <div className="min-h-screen w-screen bg-black text-white relative overflow-hidden">
      <FloatingShapes />
      <div className="flex flex-1 items-center justify-center flex-wrap flex-col gap-5 h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
            <GradientText className="font-extrabold">
              Authenticate with Descope
            </GradientText>
          </h1>
        </motion.div>

        <div className="relative max-w-sm mx-auto mt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-xl bg-white/10 rounded-xl shadow-2xl border border-white/20 overflow-hidden"
          >
            <Descope
              flowId={
                process.env.NEXT_PUBLIC_DESCOPE_FLOW_ID || "sign-up-or-in"
              }
              theme="dark"
              redirectAfterSuccess="/dashboard"
              redirectAfterError="/"
            />
          </motion.div>
        </div>
        <Flair />
      </div>
    </div>
  );
}
