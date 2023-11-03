"use client";

import Forms from "./components/Forms";

export default async function Dashboard() {
  //const session = await getServerSession(options)
  // const { userStore } = useStore();
  // console.log(userStore.isLoggedIn);

  return (
    <>
      {true ? (
        <>
          <Forms />
        </>
      ) : (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen m-auto flex items-center justify-center">
          <h1>You shall not Pass</h1>
          {/*<SignUpForm setSignIn={} countries={[]} ports={[]} portMapping={[]}/>*/}
        </div>
      )}
    </>
  );
}
