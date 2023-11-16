"use client";

import React from "react";
// import { SessionProvider } from "next-auth/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
interface Props {
  children: React.ReactNode;
}

export default function NextAuthSessionProvider({ children }: Props) {
  return (
    <>
      {/* <SessionProvider> */}
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID ?? ""}>
        {children}
      </GoogleOAuthProvider>
      {/* </SessionProvider> */}
    </>
  );
}
