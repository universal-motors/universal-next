import Link from "next/link";

export default function TanzaniaImport() {
  return (
    <>
      <title>Import Protocol In Tanzania</title>
      <div>
        <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>
          <div className='gceCountry-landing'>
            {/* The breadcrumb Begins*/}
            <div className='breadcrumbs'>
              <ul>
                <li>
                  <Link href='/'> Home</Link>
                </li>
                <li>
                  <Link href='#'>Import Protocol In Tanzania</Link>
                </li>
              </ul>
            </div>
            <div className='buy-stepBox'>
              <img
                className='widthhundread'
                src='/assets/images/import-protocols/Import Regulations Final-28.png'
                alt=''
              />
            </div>
            <div className='buy-stepBox'>
              <img
                className='widthhundread'
                src='/assets/images/import-protocols/Import Regulations Final-29.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
