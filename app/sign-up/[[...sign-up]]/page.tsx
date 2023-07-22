import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-black to-90% w-full h-screen m-auto flex items-center justify-center">
                <SignUp />;
            </div>
        </>
    )
}