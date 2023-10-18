export default function SidebarItems() {
  return (
    <div className=' col-lg-2 bg-[#221C63] hidden md:flex flex-none flex-col justify-between p-6 text-white border-y-[1px] border-[#ffff14]'>
      <nav className='space-y-2'>
        <a
          href='#'
          className='block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14]'
        >
          Change Password
        </a>

        <a
          href='#'
          className='block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14]'
        >
          Account Information
        </a>

        <a
          href='#'
          className='block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14]'
        >
          Contact Information
        </a>

        <a
          href='#'
          className='block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14]'
        >
          Connect Accounts
        </a>

        <a
          href='#'
          className='block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14]'
        >
          Preferences
        </a>

        <a
          href='#'
          className='block px-6 py-2 hover:bg-[#006aff] transition duration-200 text-decoration-none text-white border-b-[1px] border-[#ffff14]'
        >
          Account Activity
        </a>
      </nav>
      <div className='w-full h-12 px-[46px] py-2 bg-[#474747] bg-opacity-20 rounded-lg justify-start items-center gap-3 inline-flex'>
        <div className='justify-start items-center gap-3 flex'>
          <div className='w-5 h-5 relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
              />
            </svg>
          </div>
        </div>

        <div className='w-full h-6 text-white text-lg font-medium leading-normal cursor-pointer'>
          Logout
        </div>
      </div>
    </div>
  );
}
