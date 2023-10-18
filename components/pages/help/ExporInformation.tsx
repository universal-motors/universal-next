import Link from "next/link";

export default function ExporInformation() {
  return (
    <>
      <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>
        <div className='gceCountry-landing'>
          {/* The breadcrumb Begins*/}
          <div className='breadcrumbs'>
            <ul>
              <li>
                <Link href='/'> Home</Link>
              </li>
              <li>
                <Link href='#'> Export Information</Link>
              </li>
            </ul>
          </div>
          <div className='gceCountry-Local exp-Information'>
            <h3>Export Information</h3>
            <div className='gceInform-Imptxt'>
              <h4>
                <i className='fa fa-caret-right' aria-hidden='true' />
                Universal Motor Standard Terms of Trade are as follows:
              </h4>
              <p>
                Unless otherwise stated, a vehicle is reserved for three (3)
                business days. Minimum 50% payment will be required within the
                reservation period. Failure to do so will lead to automatic
                cancellation of the order.
              </p>
              <p>
                Shipping procedure will begin once we receive your deposit which
                is agreed by the customer (you) and Universal Motors (us).As
                soon as we receive full payment, we will send you all the
                documents by courier (DHL,FedEx) We will receive Letters of
                Credit at Sight from selected countries.
              </p>
              <p>
                Scanned TT copy will be required after payment in order to avoid
                any delay of shipping or document preparation.
              </p>
              <h6>Shipping Terms</h6>
              <h4>
                <i className='fa fa-caret-right' aria-hidden='true' />
                FOB: Free - On - Board:
              </h4>
              <p>
                This is the cost of the vehicle excluding ocean freight. If you
                buy the vehicle at FOB price, the price only includes the cost
                of the vehicle and the expenses until loading on the ship in
                Japan.
              </p>
              <h4>
                <i className='fa fa-caret-right' aria-hidden='true' />
                CFR: Cost and Freight.
                <br />
                CIF: Cost, Insurance and Freight.
              </h4>
              <p>
                This is the cost of the vehicle including all expenses caused in
                Japan and during ocean freight. If you need an insurance for the
                vehicle, please ask for our assistance.
              </p>
              <h4>
                <i className='fa fa-caret-right' aria-hidden='true' />
                T.T: Telegraphic Transfer / Wire Transfer:
              </h4>
              <p>
                This is the best way of payment. It is the fastest, safest and
                most effective mode of sending money. You can transfer money by
                Telegraphic Transfer at most of the major banks.
              </p>
              <h4>
                <i className='fa fa-caret-right' aria-hidden='true' />
                L/C: Letter of Credit:
              </h4>
              <p>
                We receive Letters of Credit at sight for selected countries.
                Please contact your nearest bank about the document.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
