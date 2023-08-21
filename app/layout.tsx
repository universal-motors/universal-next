import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";
import NextTopLoader from 'nextjs-toploader';
import NextAuthSessionProvider from "@/components/user/Auth/NextSessionProvider";



export default async function RootLayout({ children,
                                         }: {
    children: React.ReactNode
}) {

    return (

            <html lang="en">
            <head>
                <meta content="text/html"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="theme-color" content="#03173d"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </head>
            <body>
            <NextTopLoader
                color="#2299DD"
                initialPosition={0.08}
                crawlSpeed={200}
                height={5}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
                   <NextAuthSessionProvider>
                    {children}
                   </NextAuthSessionProvider>
                <Analytics />

            </body>
            <Script src="/assets/scripts/extra.js" />
            </html>


    )
}
