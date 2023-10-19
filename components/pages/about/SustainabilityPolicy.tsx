import Link from "next/link";
import AboutPageSideBar from "@/components/pages/about/AboutPageSideBar";

export default function SustainabilityPolicy() {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
        <div className="gceCountry-landing">
          {/* The breadcrumb Begins*/}
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link href="/"> Home</Link>
              </li>
              <li>
                <Link href="#">Sustainability Fundamental Policy</Link>
              </li>
            </ul>
          </div>

          <div className="row">
            <AboutPageSideBar />
            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
              <div className="gceCountry-Local exp-Information">
                <h3>Contribution toward Sustainable Development</h3>
                <div className="gceInform-Imptxt">
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    Customers
                  </h4>
                  <p>
                    <span className="boldp">
                      Based on our philosophy that &quot;Customer is King&quot;,
                      we provide innovative, safe, and outstanding high-quality
                      cars that meet a wide variety of customer
                      <br /> demands to enrich the lives of people around the
                      world.
                    </span>
                  </p>
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    Employees
                  </h4>
                  <p>
                    <span className="boldp">
                      We respect our employees and believe that the success of
                      our business is led by each individual&apos;s creativity
                      and solid teamwork. We support personalgrowth for our
                      employees.
                      <br />
                      We support equal employment opportunities and diversity
                      and inclusion for our employees. We do not discriminate
                      against them.We strive to provide fair working conditions
                      and to maintain a safe and healthy working environment for
                      all our employees.We respect and honor the human rights of
                      people involved in our business and, in particular, do not
                      use or tolerate any form of forced or child labor.
                    </span>
                  </p>
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    Business Partners
                  </h4>
                  <p>
                    <span className="boldp">
                      We respect our business partners such as suppliers and
                      dealers and work with them through long-term relationships
                      to realize mutual growth based on mutual trust.
                      <br />
                      Whenever we seek a new business partner, we are open to
                      any and all candidates, regardless of nationality or scale
                      of the company, and evaluate them based on their overall
                      strengths.We maintain fair and free competition in
                      accordance with the spirit of each country and
                      region&apos;s competition laws.
                    </span>
                  </p>
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    Shareholders
                  </h4>
                  <p>
                    <span className="boldp">
                      We strive to enhance corporate value while achieving
                      stable and long-term growth for the benefit of our
                      shareholders.
                      <br />
                      We provide our shareholders and investors with timely and
                      fair disclosure on our operating results, financial
                      condition and non-financial information.
                    </span>
                  </p>
                  <h4>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    Social Contribution
                  </h4>
                  <p>
                    <span className="boldp">
                      Wherever we do business, we actively promote and engage,
                      both individually and with partners, in social
                      contribution activities that help strengthen communities
                      and contribute to the enrichment of society.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
