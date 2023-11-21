import AboutPageSideBar from "@/components/pages/about/AboutPageSideBar";
import VisionMission from "@/components/pages/about/visionMission";
import Link from "next/link";

export default function CompanyProfile() {
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
                {" "}
                <Link href="/global/about-universal-motors"> About Us </Link>
              </li>
              <li>
                <Link href="/global/about-universal-motors?page=company-profile">
                  About-Global Car Exporter (Universal Motor)
                </Link>
              </li>
            </ul>
          </div>
          {/* The breadcrumb Ends*/}
          <div className="row">
            <AboutPageSideBar />
            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
              {/* The Global Car Exporter Begins*/}
              <div className="gceCountry-Local">
                <h3>
                  Global Car Exporter (Universal Motor)-{" "}
                  <span>A Reliable Source Of Car</span>
                </h3>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="gceInform-Imptxt ">
                      <p>
                        We have been exporting used cars worldwide. Our team
                        specialize in sourcing used cars from multiple countries
                        to find the best value and exporting them with the
                        greatest care. To do this we strive to provide an
                        excellent personal service which goes above and beyond
                        the typical importing experience for our customers. We
                        get to know many of our customers very well and are
                        proud to have known many of them for a long time.
                      </p>
                      <p className="mt-3">
                        Exporter of Japanese Used Cars &amp; Trucks Universal
                        Motors is responding to the increasing demand for
                        Japanese used car in many countries, and will export
                        Japanese used car around the world. Our company is
                        member of the largest Japanese used car auctions in
                        Japan, so we can provide you many high-quality Japanese
                        used car that have been maintained carefully in Japan.
                      </p>
                      <p className="mt-3">
                        When you are considering importing a Japanese used car,
                        please contact us. We can directly sell Japanese used
                        car for distribution within Japan, and also for export.
                        We are exporting Japanese used car to all international
                        customers who appreciate Japanese used car. The best
                        thing is we offer you great vehicles in your budget
                        price. Our motive is customer satisfaction because
                        Satisfied customer brings another customer.
                      </p>
                      <VisionMission />
                      <h4 className="mt-3  !text-base sm:!text-xl text-[#221C63]">
                        Values
                      </h4>
                      <p className="mt-1">
                        Build the Team Train &amp; encourage team to achieve
                        excellence by challenging them to be innovative, and
                        recognise and reward them according to their performance
                      </p>
                      <h5 className="mt-3 !text-base sm:!text-xl text-[#221C63]">
                        Integrity
                      </h5>
                      <p className="mt-1">
                        To be the market leader in exporting automobiles around
                        the globe.
                      </p>
                      <h5 className="mt-3 !text-base sm:!text-xl text-[#221C63]">
                        Reliability
                      </h5>
                      <p className="mt-1">
                        Build the Team Train &amp; encourage team to achieve
                        excellence by challenging them to be innovative, and
                        recognise and reward them according to their performance
                      </p>
                      <h5 className="mt-3 !text-base sm:!text-xl text-[#221C63]">
                        Serving Consumers Worldwide
                      </h5>
                      <p className="mt-1">
                        Universal Motors is serving customers all over the
                        world. Our consumers had always find us the best choice
                        for their needs of used cars and vehicles import. Wide
                        stock range and access to auctions in Japan allows us to
                        provide any sort of Japanese vehicles to our customers
                        in shortest period of time with best price.
                      </p>
                      <h5 className="mt-3 !text-base sm:!text-xl text-[#221C63]">
                        Interminable Customer Support
                      </h5>
                      <p className="mt-1">
                        Our professional and highly motivated sales team is
                        always there when our customers want them. Whether our
                        customers are looking for one unit for personal use or a
                        trader looking to import medium to large amount, we
                        would be pleased to attend them at our finest.
                      </p>
                      <h5 className="mt-3 !text-base sm:!text-xl text-[#221C63]">
                        Passionate &amp; Trustworthy Sales Team
                      </h5>
                      <p className="mt-1">
                        Our passionate and trustworthy sales team guarantees
                        that the consumers get support at every step of
                        importing procedure. We believe on excellence and
                        consistency. We reassure buyers and importers from any
                        country and district, irrespective of quantity to
                        contact us with full confidence and faith.
                      </p>
                      <h5 className="mt-3 !text-base sm:!text-xl text-[#221C63]">
                        Great Reconditioned &amp; Examined Cars
                      </h5>
                      <p className="mt-1">
                        All our cars are duly examined before purchase from our
                        in house mechanism and reconditioned to the best by
                        skilled reconditioning crew. Buy with confidence, we
                        ensure all cars are tested, groomed and inspected by our
                        team before delivering them to the consumers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* The Global Car Exporter Ends*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
