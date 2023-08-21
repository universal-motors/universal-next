import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import agent from "@/api/agent";



export  const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),

        CredentialsProvider({

            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Your amazing username"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials, req) {

               //const res = await fetch("https://api20230805195433.azurewebsites.net/api/authentication/login", {
               const res = await fetch("https://localhost:5001/api/authentication/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                // If no error and we have user data, return it
                if (res.ok && user) {
                    console.log(user)
                    return user
                }
                // Return null if user data could not be retrieved
                console.log(user + "null")
                return null
            }
        })
    ],


    // pages: {
    //     signIn: '/user/sign-in',
    //     signOut: '/user/sign-out',
    //     error: '/user/error', // Error code passed in query string as ?error=
    // }

}

