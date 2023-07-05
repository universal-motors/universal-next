import Link from "next/link";

export default function BankInformation (){
    return(
        <>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                <div className="gceCountry-landing">
                    {/* The breadcrumb Begins*/}
                    <div className="breadcrumbs">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/global/help/"> Why Universal Motors </Link></li>
                            <li><Link href="#">Payment Method</Link></li>
                        </ul>
                    </div>
                    <div className="gceCountry-Local exp-Information bankinfo">
                        <h3>Bank Details</h3>
                        <div className="gceInform-Imptxt">
                            <h4>
                                <i className="fa fa-caret-right" aria-hidden="true" />
                                UNIVERSAL GLOBAL CONSORTIUM AED ACCOUNT
                            </h4>
                            {/* <p style="margin-bottom:0rem !important">
              <span>Branch Name :</span>
              <span class="color-span"><b>Hatanodai Branch (0009)</b></span>
          </p> */}
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Branch Name :</span>
                                <span className="color-span"><b>WIO BANK PJSC</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Account Name :</span>
                                <span className="color-span"><b>UNIVERSAL GLOBAL CONSORTIUM-FZCO</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Account Number</span>
                                <span className="color-span"><b>AE69 0860 0000 0971 0541 370</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>SWIFT Code :</span>
                                <span className="color-span"><b>WIOBAEADXXX</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Branch Name:</span>
                                <span className="color-span"><b>Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE</b></span>
                            </p><br />
                            <h4>
                                <i className="fa fa-caret-right" aria-hidden="true" />
                                UNIVERSAL GLOBAL CONSORTIUM USD ACCOUNT
                            </h4>
                            {/* <p style="margin-bottom:0rem !important">
              <span>Branch Name :</span>
              <span class="color-span"><b>Hatanodai Branch (0009)</b></span>
          </p> */}
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Branch Name :</span>
                                <span className="color-span"><b>WIO BANK PJSC</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Account Name :</span>
                                <span className="color-span"><b>UNIVERSAL GLOBAL CONSORTIUM-FZCO</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Account Number</span>
                                <span className="color-span"><b>AE100 8600 0000 9121 8365 31</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>SWIFT Code :</span>
                                <span className="color-span"><b>WIOBAEADXXX</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Branch Name:</span>
                                <span className="color-span"><b>Etihad Airways Center, 5TH Floor - Abu Dhabi - UAE</b></span>
                            </p><br />
                            <h4>
                                <i className="fa fa-caret-right" aria-hidden="true" />
                                BLUE RHINE OVER SEASEAS USD ACCOUNT
                            </h4>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span className>Bank Name : <span className="color-span"><b> National Bank of Ras Al Khaima</b></span></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Account Name :<span className="color-span"><b> Blue Rhine Overseas FZE LLC</b> </span></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}><span>Account Number :<span className="color-span"><b> AE20 0400 0005 7289 8876 003 </b></span></span> </p>
                            <p style={{marginBottom: '0rem !important'}}><span>SWIFT Code :<span className="color-span"><b> NRAKAEAKXXX </b></span></span></p>
                            <p style={{marginBottom: '0rem !important'}}><span>Branch Name :<span className="color-span"><b> Rolla, Sharjah Branch</b></span></span></p><br />
                            <h4>
                                <i className="fa fa-caret-right" aria-hidden="true" />
                                RIZUBI TRADING JAPAN ACCOUNT
                            </h4>
                            <p className="bank-account" />
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Bank Name : </span>
                                <span className="color-span"><b> Sumitomo Mitsui Banking Corporation</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Account Name :</span>
                                <span className="color-span"><b>Rizubi Trading</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Account Number: </span>
                                <span className="color-span"><b>7212099</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>SWIFT Code : </span>
                                <span className="color-span"><b>SMBCJPJT</b></span>
                            </p>
                            <p style={{marginBottom: '0rem !important'}}>
                                <span>Branch Address : </span>
                                <span className="color-span"><b>Shinagawa KU, Hatanodai 1-4-15, Tokyo</b></span>
                            </p><br />
                            {/* <h4><i class="fa fa-caret-right" aria-hidden="true"></i>
              MORITA MOTORS
          </h4>
          <p style="margin-bottom:0rem !important">
              <span>Bank Name:</span>
              <span class="color-span"><b>MUFG Bank, Ltd.</b></span>
          </p>
          <p style="margin-bottom:0rem !important">
              <span>Account Name:</span>
              <span class="color-span"><b>MORITA MOTORS</b></span>
          </p>
          <p style="margin-bottom:0rem !important">
              <span>Account Number</span>
              <span class="color-span"><b>354-3938171</b></span>
          </p>
          <p style="margin-bottom:0rem !important">
              <span>SWIFT Code:</span>
              <span class="color-span"><b>BOTKJPJT</b></span>
          </p>
          <p style="margin-bottom:0rem !important">
              <span>Branch Address:</span>
              <span class="color-span"><b>1-16-15, Tateishi, Katsushika-KU, Tokyo, Japan</b></span>
          </p>
          <p style="margin-bottom:0rem !important">
              <span>Branch Name:</span>
              <span class="color-span"><b>KATSUSHIKA BRANCH</b></span>
          </p>
          */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}