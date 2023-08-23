import { Typography, Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { UnderlineTabs } from "./NavBar";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-blue-gray-900 sticky top-0 z-10">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="w-[140px] h-[84px]">
          <img src="/download.png" className="object-cover w-full h-full" />
        </div>
        <div className="w-[30%]">
          <UnderlineTabs />
        </div>
        <div>
          <Button
            onClick={() => router.push("/book")}
            className="bg-[#c20000]"
            size="md"
          >
            Enquire
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
