import {authMiddleware, redirectToSignIn} from "@clerk/nextjs";
import {NextResponse} from "next/server";

export default authMiddleware({

    publicRoutes: [
        '/',
        '/global',
        '/global/information',
        '/global/information/import-protocols',
        '/global/about-universal-motors',
        '/global/results/:path',
        '/global/results/cars',
        '/global/results/machinery',
        '/global/results/trucks'
    ],

    afterAuth(auth, req, evt) {
        // handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        // redirect them to organization selection page
        if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/org-selection"){
            const orgSelection = new URL('/org-selection', req.url)
            return NextResponse.redirect(orgSelection)
        }
    }
});




export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/global/results/:id"],


};

// export function middleware (request) {
//     console.log(request.nextUrl.pathname)
//
// }