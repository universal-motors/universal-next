import Navigation from "@/components/layout/Navigation";
import AboutPageSideBar from "@/components/pages/about/AboutPageSideBar";
import Link from "next/link";

export default function AntiSocialForces() {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
        <div className="gceCountry-landing basic-antiPolicy">
          {/* The breadcrumb Begins*/}
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link href="/"> Home</Link>
              </li>
              <li>
                <Link href="/global/about-universal-motors/"> About Us </Link>
              </li>
              <li>
                <Link href="/global/about-universal-motors?page=policy-against-anti-social">
                  Basic Policy Against Anti-Social Forces
                </Link>
              </li>
            </ul>
          </div>
          {/* The breadcrumb Ends*/}

          <div className="row">
            <AboutPageSideBar />
            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12 ">
              {/* The CSR Policy Begins*/}
              <div className="gceCountry-Local exp-Information">
                <p>
                  Universal Motors hereby declares its policy dealing with
                  Anti-Social Forces (&quot ASF &quot) as follows:
                </p>
                <div className="gceInform-Imptxt">
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    1. Coping with ASF
                  </h4>
                  <p>
                    Universal Motors will primarily ensure the safety of its
                    employees against ASF and implement appropriate measures as
                    an organization along with our Executive Management team.
                  </p>
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    2. Cutting off all business with ASF
                  </h4>
                  <p>
                    Universal Motors will confront ASF that threaten our society
                    &apos s social order and safety with absolute resolution. We
                    will not have any relationship including any business
                    partnership with ASF.
                  </p>
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    3. Cooperating with Outside Professional Organizations
                  </h4>
                  <p>
                    In order to eliminate ASF activity, Universal Motors will
                    establish a collaborative relationship and maintain close
                    communication with outside professional organizations,
                    including the police, lawyers, along with the ASF
                    Elimination Center.
                  </p>
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    4. Legal procedures to counteract civil and criminal ASF
                    activity
                  </h4>
                  <p>
                    Universal Motors will decisively reject any unreasonable
                    demands from ASF with absolute fortitude. Universal Motors
                    will take whatever necessary civil and criminal legal action
                    to respond to these demands.
                  </p>
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    5. Restriction of under-the-table deals and fund provision
                  </h4>
                  <p>
                    Universal Motors will not negotiate any under-the-table
                    deals or provide funds to ASF to resolve any kind of issue.
                  </p>
                </div>
              </div>
              {/* The CSR Policy Ends*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
