import { Dispatch, SetStateAction } from "react";

type Prop = {
  currentForm: string;
  setCurrentForm: Dispatch<SetStateAction<string>>;
  list: string[];
};
export default function Tabs({ currentForm, setCurrentForm, list }: Prop) {
  return (
    <div className=" text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex justify-center">
      <ul className="flex flex-wrap -mb-px">
        {list.map((item, i) => {
          return (
            <li key={i} className="mr-2">
              <div
                onClick={() => {
                  setCurrentForm(item);
                }}
                className={`${
                  item === currentForm
                    ? "text-[#221C63]  !border-[#221C63] "
                    : ""
                } cursor-pointer inline-block p-4 border-b-2  border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 deco !no-underline`}
              >
                {item}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
