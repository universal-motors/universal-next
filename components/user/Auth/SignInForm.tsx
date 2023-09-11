'use client'

import {useForm} from 'react-hook-form'
import {signIn, signOut, useSession} from "next-auth/react";
import {FormEvent, useEffect, useState} from "react";
import {useStore} from "@/store/store";
import {CustomerSignUp} from "@/models/Customer";
import {Button} from "@tremor/react";
import {useRouter} from "next/navigation";
import {getServerSession} from 'next-auth'

export interface User {
    username: string;
    password: string;
    email: string;
}
interface Props{
    signIn: boolean;
    setSignIn: (value: boolean) => void;
}

 function SignInForm({signIn, setSignIn}:Props) {
    const [submit, setSubmit] = useState<boolean>(false);

     const router = useRouter();
    const {userStore} = useStore();
    //var loading = false;
    const {data : session} = useSession()
     const form = useForm<CustomerSignUp>();
     const {register,control,formState, handleSubmit} = form;

    if (session && session.user) {
        return(
            <>
            <button onClick={()=> signOut()}>Sign Out</button>
            </>
        )
    }


    const handleSignUp = (event:FormEvent) => {
        event.preventDefault()

        setSignIn(false)
    }

    return (
        <>


            <div className="p-3">
                <div className="text-sm text-gray-500">
                    <form onSubmit={handleSubmit((data) => {
                        // console.log(submit)
                        setSubmit( true);
                        // console.log(submit)
                            try {

                                userStore.login(data).then(r => {
                                    if (userStore.isLoggedIn) {
                                        router.push('/dashboard')
                                    }

                                })


                            }catch (e) {
                                console.log(e)
                            }finally {
                                setSubmit(false)
                            }
                        }
                    )}>
                        <div className="mb-6">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                            <input {...register("username", {
                                required: "Username is required",
                            })}  id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
                        </div>
                        <div className="my-3 flex justify-between text-sm">
                        <Button
                            loading={submit}
                            type="submit"
                            className="px-4 py-2 rounded-xl text-white m-0 bg-green-500 hover:bg-green-600 transition"
                        >Log In</Button>
                        <button
                            onClick={handleSignUp}
                            className="px-4 py-2 rounded-xl bg-neutral-50 hover:bg-blue-100  transition"
                        >New Customer? Sign Up</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default  SignInForm;
