import Link from "next/link";
import AboutPageSideBar from "@/components/pages/about/AboutPageSideBar";

export default function PrivacyPolicy() {
  return (
    <>
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>
        <div className='gceCountry-landing about-globaloffSec'>
          {/* The breadcrumb Begins*/}
          <div className='breadcrumbs'>
            <ul>
              <li>
                <Link href='/index'> Home</Link>
              </li>
              <li>
                <Link href='/global/about-universal-motors'> About Us </Link>
              </li>
              <li>
                <Link href='/global/about-universal-motors?page=privacy-policy'>
                  {" "}
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* The breadcrumb Ends*/}
          <div className='row'>
            <AboutPageSideBar />
            <div className='col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12'>
              {/* Privacy Policy Begins*/}
              <div className='gceCountry-Local'>
                <h3>Privacy Policy</h3>
                <p>
                  It understands the importance of social responsibility and
                  strives honestly to meet the requirements of its consumers
                  while also contributing to society. Personal Information
                  gathered from customers in the course of business activities
                  is a valuable asset for both the customer and Universal Motor
                  since it allows new value to be created. With the following
                  Basic Policy, Universal Motor protects Personal Information
                  against information security threats and satisfies its
                  customers expectations for reliability as a firm. Universal
                  Motor is committed to the appropriate treatment of Personal
                  Information.
                </p>
              </div>
              <div className='gceCountry-Local exp-Information'>
                <p>
                  Universal Motors always ensures that your privacy is protected
                  when you are visiting our websites.
                </p>
                <div className='gceInform-Imptxt'>
                  <h4>
                    <i className='fa fa-caret-right' aria-hidden='true' />
                    Collected information
                  </h4>
                  <p>
                    We may collect the following information:
                    <br />
                    - Customers Name
                    <br />
                    - Contact information including email addresses and phone
                    numbers
                    <br />- Demographic information such as postcode,
                    preferences and interests
                  </p>
                  <h4>
                    <i className='fa fa-caret-right' aria-hidden='true' />
                    Usage of Information Collected
                  </h4>
                  <p>
                    We require this information to understand your needs and
                    provide you with a better service, and in particular for
                    internal record keeping.
                    <br />
                    We may use the information to improve our cars.
                    <br />
                    We may periodically send promotional email about new cars,
                    special offers or other information which we think you may
                    find interesting using the email address which you have
                    provided
                    <br />
                    From time to time, we may also use your information to
                    contact you for market research purposes. We may contact you
                    by email, phone, fax or mail.
                    <br />
                    We may use the information to customize the website
                    according to your interests.
                  </p>
                  <h4>
                    <i className='fa fa-caret-right' aria-hidden='true' />
                    Deleting or Updating of Information provided
                  </h4>
                  <p>
                    You may choose to restrict the collection or use of your
                    personal information in the following ways:
                    <br />- If you have previously agreed to us using your
                    personal information for direct marketing purposes, you may
                    change your mind at any time by emailing us at{" "}
                    <a href='mailto:csd@universalmotorsltd.com'>
                      csd@universalmotorsltd.com
                    </a>
                    . We may use your personal information to send you
                    promotional information which we think you may find
                    interesting if you tell us that you wish this to happen.
                    <br />- If you believe that any information we are holding
                    on you is incorrect or incomplete, please write to or email
                    us as soon as possible, at the above address. We will
                    promptly correct any information found to be incorrect.
                  </p>
                  <p>
                    <b>
                      All information listed and provided information or data on
                      the websites, emails and vehicles listed is to the `best
                      of our knowledge`, Universal Motors cannot be held
                      responsible, liable or accountable for any discrepancies.
                    </b>
                  </p>
                </div>
              </div>
              {/* Privacy Policy Ends*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
