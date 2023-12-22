"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BackButton() {
  const { pid } = useParams();
  return (
    <Link
      href={
        pid === "reserved"
          ? "/dashboard?tabs=Reserved-Vehicles"
          : "/dashboard?tabs=Purchased-Vehicles"
      }
    >
      <div className="flex items-center gap-2">
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.79976 1.78311L3.12524 6.27681L7.60873 10.9611L6.1697 12.3415L0.295851 6.21792L6.41941 0.344072L7.79976 1.78311Z"
            fill="#A3AED0"
          />
        </svg>

        <p className="text-[#A3AED0]"> Back</p>
      </div>
    </Link>
  );
}
