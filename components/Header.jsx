import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { UnderlineTabs } from "./HeaderTry";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-blue-gray-900 sticky top-0 z-10">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="w-[140px] h-[84px]">
          <Link href="/">
            <img src="/download.png" className="object-cover w-full h-full" />
          </Link>
        </div>
        <div>
          <UnderlineTabs />
        </div>
        <div>
          <Button
            onClick={() => router.push("/book")}
            className="bg-[#c20000]"
            size="md"
          >
            Book Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
