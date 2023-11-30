import React from "react";
import Image from "next/image";

export default function VisionMission() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mt-10">
      <div className="w-[90%] sm:w-[50%]">
        <Image
          className="shadow-none w-[200px] h-[200px] sm:w-[300px!important] sm:h-[300px!important] rounded-[50%!important]"
          src="/assets/images/cars cover.jpg"
          alt="building"
          width={200}
          height={200}
        />
      </div>
      <div className="w-[90%] sm:w-[50%]">
        <div>
          <h1 className="text-[30px] text-[#221C63]">Vision</h1>
        </div>
        <div>
          To become world's largest used car exporters with exceptionl service
          and high quality standards.
        </div>
        <div className="mt-10">
          <h1 className="text-[30px] text-[#221C63]">Mission</h1>
        </div>
        <div>
          To provide best car buying experience through offering a wide range of
          cars at a price that is within client budget.
        </div>
        {/* <div className="flex gap-5">
        <div className="bg-[#221C63] w-[70px] h-[70px] rounded-full">
          <Image src="/assets/images/watch-time-clock-svgrepo-com (2).svg" className="!shadow-none " width={50} height={50} alt="watch" />
        </div>
        <div className="bg-[#221C63] w-[70px] h-[70px] rounded-full">
          <Image className="!shadow-none" src="/assets/images/three-persons-silhouettes-svgrepo-com (1).svg" alt="three perons" width={50} height={50} />
        </div>
        <div className="bg-[#221C63] w-[70px] h-[70px] rounded-full">
          <Image className="!shadow-none  " src="/assets/images/human-handsup-svgrepo-com.svg" alt="human" width={50} height={50} />
        </div>
      </div> */}
      </div>
    </div>
  );
}
