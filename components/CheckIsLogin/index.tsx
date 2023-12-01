"use client";
import { useUserStore } from "@/store/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

type Prop = {
  children: JSX.Element;
};

export default function CheckIsLogin({ children }: Prop) {
  const { user } = useUserStore();
  useEffect(() => {
    if (!user.email) return redirect("/");
  }, []);

  // if (!user.email) {
  //     return null;
  // }
  return <>{children}</>;
}
