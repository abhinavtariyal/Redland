import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Image
            src="/download.png"
            priority={true}
            quality={100}
            width={70}
            height={20}
            className="rounded-full"
            alt="RedlandImmingration"
          />
        </div>
        <div>
          <ul className="flex p-6 items-center font-my-font gap-[4vw] justify-between">
            <li className="text-white text-md hover:text-gray-300 text-lg">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white text-md hover:text-gray-300 text-lg">
              <Link href="./about">About Us</Link>
            </li>
            <li className="text-white text-md hover:text-gray-300 text-lg">
              <Link href="/">Services</Link>
            </li>
            <li className="text-white text-md hover:text-gray-300 text-lg">
              <Link href="./contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="rounded-full bg-[#c20000] px-5 py-2 font-my-font text-white font-normal hover:bg-[#c52d2d] hover:text-black">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
