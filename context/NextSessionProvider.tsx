

import { ClerkProvider } from '@clerk/nextjs';
import React from "react";
// import { SessionProvider } from "next-auth/react";
interface Props {
  children: React.ReactNode;
}

export default function NextAuthSessionProvider({ children }: Props) {
  return (
    <>
      <ClerkProvider>

        {/* <SessionProvider> */}
        {/* <GoogleOAuthProvider
        clientId={`272344249593-13o1ecf2l2facdqe2l7umm7totvkvnk1.apps.googleusercontent.com`}
      > */}
        {children}
        {/* </GoogleOAuthProvider> */}
        {/* </SessionProvider> */}
      </ClerkProvider>
    </>
  );
}
