"use client";

import { useDescope, useSession, useUser } from "@descope/nextjs-sdk/client";
import Head from "next/head";
import Link from "next/link";
import { SyntheticEvent, useCallback, useState } from "react";
import styles from "../styles/Home.module.css";
import React from 'react'
import Header from "../components/Header";
import "../styles/globals.css";
const getUserDisplayName = (user: any) =>
  user?.name || user?.externalIds?.[0] || "";

export default function Home() {
  const { isAuthenticated } = useSession();
  const { user } = useUser();
  const { logout } = useDescope();

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

  const [apiFormResult, setApiFormResult] = useState<string>("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const response = await fetch("/api/form", { method: "GET" });

    const result = await response.json();
    console.log(result);
    const resultMessage = `Result: ${result.data}`;
    setApiFormResult(resultMessage);
    alert(resultMessage);
  };

  return (
    <div className="w-full">
      <Head>
        <title>Descope Netlify Example</title>
        <meta name="Descope Netlify Template" content="Descope Netlify Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the{" "}
          <a href="https://github.com/descope-sample-apps/descope-netlify-template">
            Descope Netlify Template
          </a>
        </h1>
        {!isAuthenticated && (
          <Link href="/login" passHref>
            <button>Login</button>
          </Link>
        )}
        {isAuthenticated && (
          <>
            <div className={styles.description}>
              Hello {getUserDisplayName(user)}
            </div>
            <button onClick={onLogout}>Logout</button>
            <div className={styles.description}>Submit API Form</div>
            <form onSubmit={handleSubmit}>
              <button data-cy="api-form-button" type="submit" >
                Submit
              </button>
            </form>
            <div>{apiFormResult}</div>
          </>
        )}

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </main>
    </div>
  );
}
