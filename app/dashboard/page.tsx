"use client";

import { useDescope, useUser } from "@descope/nextjs-sdk/client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React, { SyntheticEvent, useCallback, useState } from "react";

import { Flair, FloatingShapes, GradientText } from "../../components";

const getUserDisplayName = (user: any) =>
  user?.name || user?.externalIds?.[0] || "";

const Dashboard = () => {
  const { user } = useUser();
  const { logout } = useDescope();
  const router = useRouter();

  const [apiFormResult, setApiFormResult] = useState<string>("");

  const onLogout = useCallback(() => {
    logout();
    router.push("/");
  }, [logout, router]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const response = await fetch("/api/form", { method: "GET" });

    const result = await response.json();
    console.log(result);
    const resultMessage = `Result: ${result.data}`;
    setApiFormResult(resultMessage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen w-screen bg-black text-white relative overflow-hidden"
    >

      <FloatingShapes />

      <div className="relative flex flex-col items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6"
        >
          Welcome, <GradientText>{getUserDisplayName(user)}</GradientText>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          You are successfully authenticated with Descope
        </motion.p>
        <div className="flex flex-col gap-4 mt-8">
        <button
          className="px-6 py-3 bg-[#00A6B4] hover:bg-[#00A6B4]/80 rounded-lg text-white font-medium"
          data-cy="api-form-button"
          type="submit"
          onClick={handleSubmit}
        >
          Submit API Form
        </button>
        <button
          className="px-6 py-3 bg-[#5cf34f] hover:bg-[#5cf34f]/80 rounded-lg text-black font-medium"
          onClick={onLogout}
        >
            Logout
          </button>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-[#5cf34f] mt-5"
        >
          {apiFormResult}
        </motion.p>
        <Flair />
      </div>
    </motion.div>
  );
};

export default Dashboard;
