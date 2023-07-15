// import { authMiddleware } from "@clerk/nextjs";
//
// export default authMiddleware({
//
//     ignoredRoutes: [
//         '/',
//         '/global',
//         '/global/information',
//         '/global/information/import-protocols',
//         '/global/about-universal-motors',
//         '/global/results/:path',
//         '/global/results/cars',
//         '/global/results/machinery',
//         '/global/results/trucks'
//     ]
// });
//
// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/global/results/:id"],
//
//
// };
//
// // export function middleware (request) {
// //     console.log(request.nextUrl.pathname)
// //
// // }