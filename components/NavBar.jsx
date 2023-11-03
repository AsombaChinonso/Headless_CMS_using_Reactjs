import Link from "next/link";

function NavBar() {
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center  top-0 z-50 bg-gradient-to-r from-cyan-500 to-teal-600 bg-cyan-600">
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto py-6">
        <Link className='flex items-center gap-2' href="/">
        <span className='text-[#fff] font-bold text-[13px]  md:text-[16px] sm:text-[10px]  cursor-pointer '>
        WP/Reacts Project
            <p className={`text-[6px]  md:text-[10px] sm:text-[4px] font-normal  text-[#fff]`}>A reactjs  & wordpress collaboration</p>
          </span>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li className=" font-normal cursor-pointer text-[#fff]">About Project</li>
          <li className=" font-normal cursor-pointer text-[#fff]">Shop</li>
          <li className=" font-normal cursor-pointer text-[#fff]">Cart</li>
        </ul>
      </div>
      {/* <div className="text-white text-xl font-semibold">
        <Link href="/">WP/Reacts Project</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default NavBar;
