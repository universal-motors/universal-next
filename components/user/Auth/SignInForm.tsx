import axios from "axios";
import {useForm} from 'react-hook-form'
export interface User {
    username: string;
    password: string;
    email: string;
}
function SignInForm() {
    const {register, handleSubmit} = useForm<User>();
    return (
        <>

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