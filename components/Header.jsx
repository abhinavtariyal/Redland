import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
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
            alt="RedlandImmigration"
          />
        </div>
        <div>
          <ul className="flex p-6 items-center font-my-font gap-[4vw] justify-between">
            <HeaderLink title="Home" link="/" />
            <HeaderLink title="About Us" link="/about" />
            <HeaderLink title="Services" link="/services" />
            <HeaderLink title="Contact" link="/contactPage" />
          </ul>
        </div>
        <div>
          <button onClick = {() => router.push('/book')} className="rounded-full bg-[#c20000] px-5 py-2 font-my-font text-white font-normal hover:bg-[#c52d2d] hover:text-black">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export const HeaderLink = ({ title, link }) => {
  return (
    <li className="text-white hover:text-gray-300">
      <Link href={link}>{title}</Link>
    </li>
  );
};
export default Header;
