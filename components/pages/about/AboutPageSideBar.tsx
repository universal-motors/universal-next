import Link from "next/link";

export default function AboutPageSideBar() {
  return (
    <>
      <div className='col-xl-3 col-lg-3 col-md-4 d-md-block d-none'>
        <div className='about-goBox'>
          <h1>About-Global Car Exporter (Universal Motor)</h1>
          <ul>
            <li>
              <Link href='/global/about-universal-motors?page=company-profile'>
                Company Profile
              </Link>
            </li>
            <li>
              <Link href='/global/about-universal-motors?page=global-offices'>
                Global Offices
              </Link>
            </li>
            <li>
              <Link href='/global/about-universal-motors?page=terms-of-service'>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href='/global/about-universal-motors?page=privacy-policy'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href='/global/about-universal-motors?page=security-export-control'>
                Security Export Control
              </Link>
            </li>
            <li>
              <Link href='/global/about-universal-motors?page=policy-against-anti-social'>
                Basic Policy Against Anti-Social Forces
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
