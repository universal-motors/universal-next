'use client'

import axios from "axios";
import {useForm} from 'react-hook-form'
import {signIn, signOut, useSession} from "next-auth/react";


export interface User {
    username: string;
    password: string;
    email: string;
}
function SignInForm() {
    //const {register, handleSubmit} = useForm<User>();
    const {data : session} = useSession()

    if (session && session.user) {
        return(
            <>
            <button onClick={()=> signOut()}>Sign Out</button>
            </>
        )
    }

    return (
        <>
            <button onClick={()=> signIn()}>Sign In</button>

        {/* <form onSubmit={handleSubmit}>*/}
        {/*     <input name="username" placeholder="Username" />*/}
        {/*     <input type="password" name="password" placeholder="Password" />*/}
        {/*     <input type="email" name="email" placeholder="Email" />*/}
        {/*     <button type="submit">Signup</button>*/}
        {/*</form>*/}
        </>
    );
}

export default SignInForm;