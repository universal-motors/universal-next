import Link from "next/link";

export default function UgandaImport() {
  return (
    <>
      <title>Import Protocol In Uganda</title>
      <div>
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
          <div className="gceCountry-landing">
            {/* The breadcrumb Begins*/}
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link href="/"> Home</Link>
                </li>
                <li>
                  <Link href="#">Import Protocol In Uganda</Link>
                </li>
              </ul>
            </div>
            <div className="buy-stepBox">
              <img
                className="widthhundread !shadow-none"
                src="/assets/images/import-protocols/Import Regulations Final-30.png"
                alt=""
              />
            </div>
            <div className="buy-stepBox">
              <img
                className="widthhundread !shadow-none"
                src="/assets/images/import-protocols/Import Regulations Final-31.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
