import AboutPageSideBar from "@/components/pages/about/AboutPageSideBar";
import VisionMission from "@/components/pages/about/visionMission";
import { watch } from "fs";
import Image from "next/image";

export const metadata = {
  title: "Test ",
  description: "Test ",
};

export default function AboutUs() {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
        <div className="gceCountry-landing">
          {/* The breadcrumb Begins*/}
          <div className="breadcrumbs">
            <ul>
              <li>
                <a href="/"> Home</a>
              </li>
              <li>
                <a href="/global/about-universal-motors?page=about-us">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="gceInform-Imptxt">
            <p>
              We have been exporting used cars worldwide. Our team specialize in
              sourcing used cars from multiple countries to find the best value
              and exporting them with the greatest care. To do this we strive to
              provide an excellent personal service which goes above and beyond
              the typical importing experience for our customers. We get to know
              many of our customers very well and are proud to have known many
              of them for a long time.
            </p>
            <p>
              Exporter of Japanese Used Cars &amp; Trucks{" "}
              <b> Universal Motors</b> is responding to the increasing demand
              for Japanese used car in many countries, and will export Japanese
              used car around the world. Our company is member of the largest
              Japanese used car auctions in Japan, so we can provide you many
              high-quality Japanese used car that have been maintained carefully
              in Japan
            </p>
            <p>
              When you are considering importing a Japanese used car, please
              contact us. We can directly sell Japanese used car for
              distribution within Japan, and also for export. We are exporting
              Japanese used car to all international customers who appreciate
              Japanese used car. The best thing is we offer you great vehicles
              in your budget price. Our motive is customer satisfaction because{" "}
              <b> Satisfied customer brings another customer</b>
            </p>
            <VisionMission />

            <div className="">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="buy-stepheading">
                    <h4>About Us</h4>
                  </div>
                </div>
              </div>
              <div className="buy-stBox-right">
                <div className="row">
                  <div className="col-md-5 col-12">
                    <div className="buy-stepimg ">
                      <img
                        src="/assets/images/newcontentimgs/New folder/website-0.png"
                        className="img-fluid !shadow-none "
                        alt="CHOOSE THE VEHICLE YOU WANT TO PURCHASE.OUR CAR SEARCH ENGINE WILL HELP YOU SEARCH THROUGH OUR INVENTORY."
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-12 pl-5">
                    <div className="buy-steptxt">
                      <p>
                        <b> Serving Consumers Worldwide</b>
                      </p>
                      <br />
                      <p
                        style={{
                          // textTransform: "none !important",
                          fontSize: "16px !important",
                          letterSpacing: "0px !important",
                        }}
                      >
                        Universal Motors is serving customers all over the
                        world. Our consumers had always find us the best choice
                        for their needs of used cars and vehicles import. Wide
                        stock range and access to auctions in Japan allows us to
                        provide any sort of Japanese vehicles to our customers
                        in shortest period of time with best price.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buy-stBox-right">
                <div className="row">
                  <div className="col-md-7 col-12 pr-5">
                    <div className="buy-steptxt">
                      <p>
                        <b>Interminable Customer Support</b>
                      </p>
                      <br />
                      <p
                        style={{
                          // textTransform: "none !important",
                          fontSize: "16px !important",
                          letterSpacing: "0px !important",
                        }}
                      >
                        Our professional and highly motivated sales team is
                        always there when our customers want them. Whether our
                        customers are looking for one unit for personal use or a
                        trader looking to import medium to large amount, we
                        would be pleased to attend them at our finest.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="buy-stepimg">
                      <img
                        src="/assets/images/newcontentimgs/New folder/website-1.png"
                        className="img-fluid !shadow-none "
                        alt="YOU CAN ALSO CUSTOMIZE SEARCH DEPENDING ON YOUR REQUIREMENT AND PREFERENCES. DETAILED PHOTOS AND SPECIFICATIONS CAN BE SEEN FOR EACH INVENTORY."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="buy-stBox-right">
                <div className="row">
                  <div className="col-md-5 col-12 pr-5">
                    <div className="buy-stepimg">
                      <img
                        src="/assets/images/newcontentimgs/New folder/website-2.png"
                        className="img-fluid !shadow-none "
                        alt="CHOOSE THE VEHICLE YOU WANT TO PURCHASE.OUR CAR SEARCH ENGINE WILL HELP YOU SEARCH THROUGH OUR INVENTORY."
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-12 pl-5">
                    <div className="buy-steptxt">
                      <p>
                        <b>Passionate &amp; Trustworthy Sales Team</b>
                      </p>
                      <br />
                      <p
                        style={{
                          // textTransform: "none !important",
                          fontSize: "16px !important",
                          letterSpacing: "0px !important",
                        }}
                      >
                        Our passionate and trustworthy sales team guarantees
                        that the consumers get support at every step of
                        importing procedure. We believe on excellence and
                        consistency. We reassure buyers and importers from any
                        country and district, irrespective of quantity to
                        contact us with full confidence and faith.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buy-stBox-right">
                <div className="row">
                  <div className="col-md-7 col-12 pr-5">
                    <div className="buy-steptxt">
                      <p>
                        <b>Great Reconditioned &amp; Examined Cars</b>
                      </p>
                      <br />
                      <p
                        style={{
                          // textTransform: "none !important",
                          fontSize: "16px !important",
                          letterSpacing: "0px !important",
                        }}
                      >
                        All our cars are duly examined before purchase from our
                        in house mechanism and reconditioned to the best by
                        skilled reconditioning crew. Buy with confidence, we
                        ensure all cars are tested, groomed and inspected by our
                        team before delivering them to the consumers.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="buy-stepimg">
                      <img
                        src="/assets/images/newcontentimgs/New folder/website-03.png"
                        className="img-fluid !shadow-none "
                        alt="YOU CAN ALSO CUSTOMIZE SEARCH DEPENDING ON YOUR REQUIREMENT AND PREFERENCES. DETAILED PHOTOS AND SPECIFICATIONS CAN BE SEEN FOR EACH INVENTORY."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
