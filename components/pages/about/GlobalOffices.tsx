import AboutPageSideBar from "@/components/pages/about/AboutPageSideBar";
import Link from "next/link";

export default function GlobalOffices() {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
        <div className="gceCountry-landing about-globaloffSec">
          {/* The breadcrumb Begins*/}
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link href="/"> Home</Link>
              </li>
              <li>
                <Link href="/global/about-universal-motors"> About Us </Link>
              </li>
              <li>
                <Link href="#"> Global Offices</Link>
              </li>
            </ul>
          </div>
          {/* The breadcrumb Ends*/}
          <div className="row">
            <AboutPageSideBar />
            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
              <div className="gceCountry-landing">
                {/* The breadcrumb Begins*/}
                <div className="gceInform-Imptxt">
                  <div className="container  mb-15">
                    {/* <div class="row">
                                                      <div class="col-md-4"></div>
                                                      <div class="col-md-4">
                                                          <div style="margin: auto;
                                                          display: table;
                                                          text-align: center;">
                                                              <h4>Head Office: U.A.E</h4>
                                                              <img style=" width: 100% !important;" src="images/newcontentimgs/New folder/website-12.png" alt="">
                                                          </div>
                                                      </div>
                                                      <div class="col-md-4"></div>
                                                  </div> */}
                    <div className="row">
                      <h4 className="shadow-2xl m-2 text-blue-950 items-center text-center">
                        GLOBAL OFFICES
                      </h4>
                    </div>
                    <div className="row">
                      <div className="col-md-4 b1">
                        <div>
                          <img
                            className="texttest"
                            style={{ width: "100% !important" }}
                            src="/assets/images/newcontentimgs/New folder/pngegg (3).png"
                            alt=""
                          />
                          <br />
                          <div
                            style={{
                              margin: "auto",
                              display: "table",
                              textAlign: "center",
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                paddingTop: "10px !important",
                              }}
                            >
                              Universal Motors
                            </p>
                            <a href="#" style={{ color: "#ffb703" }}>
                              Bertoldistr 17e, 61065 Koln, <br />
                              Germany <br />
                            </a>
                            <a
                              style={{ color: "#ffb703" }}
                              href="tel:+49 471 97319003"
                            >
                              +49 471 97319003
                            </a>
                            <br />
                            <a
                              style={{ color: "#ffb703" }}
                              href="mailto:csd@universalmotorsltd.com"
                            >
                              csd@universalmotorsltd.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4  b1">
                        <div>
                          <img
                            className="texttest"
                            style={{ width: "100% !important" }}
                            src="/assets/images/newcontentimgs/New folder/170-1703399_ -japan-flag-no-background.png"
                            alt=""
                          />
                          <br />
                          <div
                            style={{
                              margin: "auto",
                              display: "table",
                              textAlign: "center",
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                paddingTop: "10px !important",
                              }}
                            >
                              Rizubi Trading
                            </p>
                            <a href="#" style={{ color: "#ffb703" }}>
                              7103 Kaburagi Mansion, Nishi <br /> Nakanobu,
                              3-2-17, Shinagawa <br /> Ku, Tokyo 142-0054, Japan{" "}
                            </a>
                            <br />
                            <a
                              style={{ color: "#ffb703" }}
                              href="tel:+81 345720799"
                            >
                              +81 50 5050 8550
                            </a>
                            <br />
                            <a
                              style={{ color: "#ffb703" }}
                              href="mailto:csd@universalmotorsltd.com"
                            >
                              csd@universalmotorsltd.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-4 b1
"
                      >
                        <div>
                          <img
                            className="texttest"
                            style={{ width: "100% !important" }}
                            src="/assets/images/newcontentimgs/New folder/United_Arab_Emirates_(UAE)_Flag_Emoji.png"
                            alt=""
                          />
                          <br />
                          <div
                            style={{
                              margin: "auto",
                              display: "table",
                              textAlign: "center",
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                paddingTop: "10px !important",
                              }}
                            >
                              Universal Global Consortium
                            </p>

                            <a href="#" style={{ color: "#ffb703" }}>
                              {" "}
                              Premises 8253, Dubai Digital Park,
                              <br /> Building A2, Dubai Silicon Oasis <br />{" "}
                              DUBAI, AE
                            </a>
                            <br />
                            <a
                              style={{ color: "#ffb703" }}
                              href="tel:+971 55 410 9650"
                            >
                              +971 55 410 9650
                            </a>
                            <br />
                            <a
                              style={{ color: "#ffb703" }}
                              href="mailto:csd@universalmotorsltd.com"
                            >
                              csd@universalmotorsltd.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="row">
                                                      <div style="margin-bottom: 1% !important;">
                                                          <div  style="margin: auto;
                                                          display: table;
                                                          text-align: center;background: #221c63; padding: 5px ;">
                                                              <p style="color: #ffb703;">Client’s Locations</p>
                                                              <p style="color: #ffb703;">We are proud to have satisfied clients in DR Congo, Tanzania, South Africa, Ghana, New Zealand, Zambia, Kenya, Malawi, Uganda, South 
                                                                  Sudan, Jamaica, Suriname, Trinidad & Tobago, Guyana and Zimbabwe. We are always interested in improving our service in additional 
                                                                  countries, so please contact us if you would like to be considered as our agent in your country.
                                                                  </p>
                                                          </div>
                                                      </div>
                                                  </div> */}
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
