import { useSession, signIn, signOut } from "next-auth/react";
import { FcBusinessman } from "react-icons/fc";
import { Button } from "@tremor/react";

export default function SignInComponentUI() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/*Signed in as {session?.user.email} <br/>*/}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
        <div className='registerbox'>
          {/*<i className="fa fa-user" />*/}
          <h2>
            <FcBusinessman className='m-2' />
          </h2>
          <div className='currencydropdown'>
            <button
              onClick={() => signIn()}
              className='currencydropbtn supportbtn'
            >
              Hello, Sign in
              <br />
              My Account
            </button>

            <div className='currencydropdown-content regiscontent'>
              <div className='row'>
                <div className='col-md-12'>
                  <p className='m-0' style={{ fontSize: "14px" }}>
                    <strong>My Account</strong>
                  </p>
                  {/*<LoginModal/>*/}
                  <div className='regisfooter'>
                    <p style={{ fontSize: "14px" }} className='m-0'>
                      New Customer?
                    </p>
                    <p>
                      <Button
                        className='p-0 m-0'
                        onClick={() => signIn()}
                        style={{ color: "blue", fontSize: "14px" }}
                      >
                        <span>&nbsp;</span>Sign Up
                      </Button>
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
