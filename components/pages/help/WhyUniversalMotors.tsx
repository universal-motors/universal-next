import Link from "next/link";

export default function WhyUniversalMotors() {
  return (
    <>
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>
        <div className='gceCountry-landing'>
          <div className='breadcrumbs'>
            <ul>
              <li>
                <Link href='/'> Home</Link>
              </li>
              <li>
                <Link href='#'>Why Choose Us</Link>
              </li>
            </ul>
          </div>
          <div className='gceInform-Imptxt'>
            <h3 className='text-center whyhead'>Why Choose Us</h3>
            <p className='text-center'>
              Our motto remains, quality, reliability and honesty with our
              clients. Dedicated sales team, administrative staff, accounts and
              after sales service is always a click away. Regardless of quantity
              we believe on quality, whether you are a Car dealer or
              organization looking for a good number or an individual looking
              for a run around vehicle, we treat all with dedication and
              sincerity.
            </p>
            <div className='whycum container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div>
                    <img
                      src='/assets/images/newcontentimgs/New folder/mos4-removebg-preview.png'
                      alt=''
                    />
                    <h4>Hand Chosen Quality Stock</h4>
                    <p className='whytext'>
                      Our sales team ensures that the clients get support at
                      every step of importing process. We believe on quality and
                      reliability as the main motive of business. We encourage
                      used car buyers and importers from any country and region,
                      regardless of quantity to contact us with full confidence
                      and trust.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div>
                    <img
                      src='/assets/images/newcontentimgs/New folder/mos2.png'
                      alt=''
                    />
                    <h4>Trade Processing Zone Storage </h4>
                    <p className='whytext'>
                      All our vehicles are stored in local government allocated
                      Trade Processing Zone (TPZ) , consignment , transfer and
                      custom conventions are duly monitored ensuring smooth
                      dealings for our sellers and buyers.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div>
                    <img
                      src='/assets/images/newcontentimgs/New folder/mos1.png'
                      alt=''
                    />
                    <h4>Distribution and Supply of vehicles</h4>
                    <p className='whytext'>
                      Universal Motors, ensures smooth, quick and hassle free
                      deliveries to almost all major ports across the world. We
                      have access to both RORO and Containerized services for
                      shipping, please feel free to ask us for more information
                      on desired shipping method.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div>
                    <img
                      src='/assets/images/newcontentimgs/New folder/mos3.png'
                      alt=''
                    />
                    <h4>Customer Support and Facility</h4>
                    <p className='whytext'>
                      We take pride in serving our customers at our very best.
                      With offer of online help, our sales staff is online every
                      time, assisting our clients in most of their queries.
                      Export managers are always available on Phone Hotline.
                      Emails are answered as quickly as possible with efficient
                      and prompt replies.
                    </p>
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
