import Link from "next/link";

export default function VehicleShipmentCondition() {
  return (
    <>
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>
        <div className='gceCountry-landing'>
          {/* The breadcrumb Begins*/}
          <div className='breadcrumbs'>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/global/about-universal-motors'> About Us </Link>
              </li>
              <li>
                <Link href='#'>Conditions of Vehicle Shipment</Link>
              </li>
            </ul>
          </div>
          <div className='gceInform-Imptxt'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    className='widthhundread'
                    src='/assets/images/newcontentimgs/New%20folder/website-4.png'
                    alt=''
                  />
                  <p>
                    A vehicle can be held in reserve for two to three days only
                  </p>
                </div>
                <div className='col-md-4'>
                  <img
                    className='widthhundread'
                    src='/assets/images/newcontentimgs/New%20folder/website-5.png'
                    alt=''
                  />
                  <p>
                    Invoice amount has to be paid during the reservation period.
                    If not, then order will be cancelled.
                  </p>
                </div>
                <div className='col-md-4'>
                  <img
                    className='widthhundread'
                    src='/assets/images/newcontentimgs/New%20folder/website-6.png'
                    alt=''
                  />
                  <p>
                    Universal Motors will not start shipment until customer has
                    submitted the deposit
                  </p>
                </div>
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    className='widthhundread'
                    src='/assets/images/newcontentimgs/New%20folder/website-7.png'
                    alt=''
                  />
                  <p>
                    Once the customer has made the payment then copy of
                    telegraphic transfer will be required to start the shipment
                    process.
                  </p>
                </div>
                <div className='col-md-4'>
                  <img
                    className='widthhundread'
                    src='/assets/images/newcontentimgs/New%20folder/website-8.png'
                    alt=''
                  />
                  <p>Any variation in freights will be borne by Buyer</p>
                </div>
                <div className='col-md-4'>
                  <img
                    className='widthhundread'
                    src='/assets/images/newcontentimgs/New%20folder/website-9.png'
                    alt=''
                  />
                  <p>
                    Seller reserves the right to resell the Unit, if balance
                    amount is not paid on time.
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
