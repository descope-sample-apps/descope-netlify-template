"use client";

import React from "react";
import styles from "../../styles/Login.module.css";
import { Descope } from "@descope/nextjs-sdk";
import Header from "../../components/Header";

export default function Login() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.login}>
          <Descope
            flowId={process.env.NEXT_PUBLIC_DESCOPE_FLOW_ID || "sign-up-or-in"}
            redirectAfterSuccess="/"
            redirectAfterError="/"
          />
        </div>
      </main>
    </div>
  );
}
