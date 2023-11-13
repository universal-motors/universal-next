"use client";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial() {
  return (
    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-full bg-white  px-5 py-16  text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className=" text-2xl  md:text-3xl lg:text-5xl font-semibold  mb-5 text-gray-600">
                What people <br />
                are saying.
              </h1>
              <h3 className="text-base mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-[#221c63] ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-[#221c63] ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-[#221c63]"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-[#221c63] ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#221c63] ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=1" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  text-gray-600">
                        Kenzie Edgar.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className=" leading-tight">
                      <span className=" leading-none italic font-bold text-base text-gray-500 lg:text-lg mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos sunt ratione dolor exercitationem minima quas itaque
                      saepe quasi architecto vel! Accusantium, vero sint
                      recusandae cum tempora nemo commodi soluta deleniti.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Stevie Tifft.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className=" leading-tight">
                      <span className="leading-none italic font-bold text-base text-gray-500 lg:text-lg mr-1">
                        "
                      </span>
                      Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                      Dolore quod necessitatibus, labore sapiente, est,
                      dignissimos ullam error ipsam sint quam tempora vel.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=3" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Tommie Ewart.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className=" leading-tight">
                      <span className=" text-base text-gray-500 lg:text-lg leading-none italic font-bold  mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vitae, obcaecati ullam excepturi dicta error deleniti
                      sequi.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=4" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className=" text-base text-gray-500 lg:text-lg leading-none italic font-bold  mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto inventore voluptatum nostrum atque, corrupti,
                      vitae esse id accusamus dignissimos neque reprehenderit
                      natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                      iusto.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Nevada Herbertson.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className=" leading-tight">
                      <span className="  text-base text-gray-500 lg:text-lg   leading-none italic font-bold  mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                      ipsum, laboriosam nostrum facere exercitationem pariatur
                      deserunt tempora molestiae assumenda nesciunt alias eius?
                      Illo, autem!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold  text-lg lg:text-2xl  uppercase text-gray-600">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="leading-tight">
                      <span className=" text-base text-gray-500 lg:text-lg  leading-none italic font-bold mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iusto, explicabo, cupiditate quas totam!
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto flex gap-3 mt-5 ">
        <FaQuoteLeft color="#221c63" size={"30px"} />
        <div>
          <p className=" text-2xl  md:text-3xl lg:text-5xl font-semibold leading-none tracking-tight text-gray-600 dark:text-white">
            Testimonial
          </p>
          <p className="text-base font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            What our customers are saying about us
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        height={500}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-16"
      >
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “We started with approximately 20 hotels and they've done a
                great job! They respond quickly to questions, and they've done
                an amazing job installing our panic button system in our
                hotels.”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Terence Greenhall
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%] items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/_AiD96wV92w?si=GU8DiY05IeOcbRWR"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “We started with approximately 20 hotels and they've done a
                great job! They respond quickly to questions, and they've done
                an amazing job installing our panic button system in our
                hotels.”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Terence Greenhall
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%] items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/1lpf7D35SBg?si=pQV66mBZJRwkctXg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “We started with approximately 20 hotels and they've done a
                great job! They respond quickly to questions, and they've done
                an amazing job installing our panic button system in our
                hotels.”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Terence Greenhall
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%] items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/vSNQE4iNI1Q?si=ukAOjJ3-thOuOcPm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[80%] m-auto h-[500px] flex flex-col lg:flex-row  items-center justify-center ">
            <div className="h-full w-[90%] lg:w-[50%] flex justify-center flex-col">
              <p className="text-base text-gray-500 lg:text-lg dark:text-gray-400">
                “We started with approximately 20 hotels and they've done a
                great job! They respond quickly to questions, and they've done
                an amazing job installing our panic button system in our
                hotels.”
              </p>
              <p className="font-bold text-lg lg:text-2xl mt-3 text-gray-600">
                Terence Greenhall
              </p>
            </div>
            <div className="h-full w-[90%] lg:w-[50%]  items-center flex justify-end">
              <iframe
                width="90%"
                height="75%"
                src="https://www.youtube.com/embed/82K4XGQOO5I?si=wMaeaKxYHp4DGM1i"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
