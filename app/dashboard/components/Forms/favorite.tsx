import agent from "@/api/agent";
import { useUserStore } from "@/store/store";
import { useEffect, useState } from "react";
import FavoriteCard from "./favoriteCard";

export default function Favorite() {
  const [fav, setFav] = useState<any>([]);
  const { user } = useUserStore();
  const [fetch, setFetch] = useState<Boolean>(false);
  useEffect(() => {
    const getData = async () => {
      const favorite = await agent.LoadData.favouriteList(user.customerId);
      setFav(favorite.data);
    };
    getData();
  }, [fetch]);
  console.log(fav);
  // {
  //     "stockID": 14242,
  //     "customerID": 1,
  //     "stockCode": "JP9039",
  //     "makeName": "Toyota",
  //     "modelName": "Premio",
  //     "year": 2009,
  //     "price": 4250,
  //     "imageurl": "https://universalmotorstorage.blob.core.windows.net/umimages/1b815960-a2ee-4f41-b12d-d4365f034fa7.jpeg",
  //     "listingTitle": "2009 Toyota Premio",
  //     "addedOn": "2023-11-07T12:34:46.203"
  // }

  return (
    <div className="flex flex-col gap-5 my-5">
      {fav.map((item: any) => {
        return <FavoriteCard fetch={fetch} setFetch={setFetch} item={item} />;
      })}
    </div>
  );
}
