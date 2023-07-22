import { SignIn  } from "@clerk/nextjs";

export default function Page() {
    return (
        <>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen m-auto flex items-center justify-center">
                <SignIn  />;
            </div>
        </>
    )
}