import {Dispatch, SetStateAction} from "react";
import {Button} from "@tremor/react";

interface Props{
    totalPost:number,
    currentPage:number,
    postPerPage:number,
    setCurrentPage : Dispatch<SetStateAction<number>>
}

export default function PaginationComponent({totalPost, currentPage, postPerPage, setCurrentPage}:Props) {


    return (
        <>
            <nav
                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                aria-label="Pagination"
            >
                <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">Page {currentPage}</span> of <span className="font-medium"></span> {Math.ceil(totalPost/postPerPage)}
                        <span className="font-medium">  for {totalPost}</span> results
                    </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                    <Button
                        onClick={()=> setCurrentPage(currentPage - 1)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={()=> setCurrentPage(currentPage + 1)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Next
                    </Button>
                </div>
            </nav>

        </>
    );
}
