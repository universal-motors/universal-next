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
      <GoogleOAuthProvider
        clientId={`272344249593-13o1ecf2l2facdqe2l7umm7totvkvnk1.apps.googleusercontent.com`}
      >
        {children}
      </GoogleOAuthProvider>
      {/* </SessionProvider> */}
    </>
  );
}
