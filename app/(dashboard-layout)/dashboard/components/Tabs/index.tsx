"use client";
import { useUserStore } from "@/store/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

type Prop = {
  currentForm?: string;
  setCurrentForm?: Dispatch<SetStateAction<string>>;
  list: string[];
};
export default function Tabs({ currentForm, setCurrentForm, list }: Prop) {
  const { isUpdate, user } = useUserStore();
  const { pid } = useParams();
  return (
    <div className="!text-[12px] sm:!text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex justify-center">
      <ul className="flex flex-wrap -mb-px">
        {list.map((item, i) => {
          return (
            <li key={i} className="mr-1 sm:mr-2">
              <Link href={"/dashboard?tabs=" + item.replaceAll(" ", "-")}>
                <div
                  onClick={() => {
                    if (user?.email && !isUpdate) {
                      return toast.info("Create Profile First");
                    }
                    if (setCurrentForm) setCurrentForm(item);
                  }}
                  className={`${
                    item === currentForm ||
                    item.split(" ")[0].toLowerCase() === String(pid)
                      ? "text-[#221C63]  !border-[#221C63] "
                      : ""
                  } cursor-pointer inline-block !p-2 sm:!p-4 border-b-2  border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 deco !no-underline`}
                >
                  {item}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
