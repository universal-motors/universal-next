"use client";

import Favorite from "../dashboard/components/Forms/favorite";

export default async function Dashboard() {
  //const session = await getServerSession(options)
  // const { userStore } = useStore();
  // console.log(userStore.isLoggedIn);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center flex-col">
          <Favorite />
        </div>
      </div>
    </>
  );
}
