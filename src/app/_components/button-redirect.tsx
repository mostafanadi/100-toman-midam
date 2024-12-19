"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function ButtonRedirect({}: Props) {
  const router = useRouter();
  const _redirect = async () => {
    const response = await fetch("api/redirect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        param1: "5454",
        param2: "956245",
      }),
    });
    console.log(response.ok);
    if (response.ok) {
      // Programmatic navigation
      router.push("/dashboard");
    }
  };
  return <button onClick={_redirect}>ButtonRedirect</button>;
}
