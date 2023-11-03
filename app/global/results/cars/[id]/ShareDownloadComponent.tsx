"use client";
import { StockPictures } from "@/models/Master/StockPictures";

interface Props {
  imageList: StockPictures[];
}
let imgList: StockPictures[] = [];

export default function ShareDownloadComponent({ imageList }: Props) {
  // const handleDownloadImages = () => {
  //     imgList = [...imageList];
  //     downloadImagesAsZip();
  //     // Perform any desired actions here
  // };

  return (
    <>
      <div className="dshare">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
          <div className="download-soialmedia">
            <ul>
              <p className="text-[10px] sm:text-base">Share:</p>
              <a
                target="_blank"
                href="https://www.facebook.com/Universal-Motors-LTD-101574801831062"
              >
                <i className="fa fa-facebook !text-[16px] sm:!text-[24px] " />
              </a>
              <a target="_blank" href="https://wa.link/5g81p6">
                <i className="fa fa-whatsapp !text-[16px] sm:!text-[24px] " />
              </a>
              <a href="#">
                <i className="fa fa-twitter !text-[16px] sm:!text-[24px] " />
              </a>
            </ul>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-md-block">
          <div className="download-proimg">
            <button className="text-[10px] sm:text-base">
              <i className="fa fa-download !text-[16px] sm:!text-[24px] " />{" "}
              Download Images
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
//
// const downloadImagesAsZip = async () => {
//     const JSZip = require('jszip');
//     const zip = new JSZip();
//
//     const fetchAndAddToZip = async (url:string) => {
//         try {
//             const response = await fetch(url,{mode: 'cors'});
//             console.log(response)
//             const imageBlob = await response.blob();
//             const filename = url.substring(url.lastIndexOf('/') + 1);
//             zip.file(filename, imageBlob);
//         } catch (error) {
//             console.error(`Failed to fetch and add image ${url} to zip`, error);
//         }
//     };
//
//
//
//     const downloadZip = () => {
//         zip.generateAsync({ type: 'blob' })
//             .then((content:any) => {
//                 const downloadLink = document.createElement('a');
//                 downloadLink.href = URL.createObjectURL(content);
//                 downloadLink.download = 'images.zip';
//                 downloadLink.click();
//             })
//             .catch((error:Error) => {
//                 console.error('Failed to generate zip file', error);
//             });
//     };
//
//     const fetchPromises = imgList.map( (img)=>{
//         fetchAndAddToZip(img.imageURL)
//     });
//
//     await Promise.all(fetchPromises);
//     downloadZip();
// };
