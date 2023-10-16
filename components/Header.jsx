import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { UnderlineTabs } from "./NavBar";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-[#FFF] sticky top-0 z-10 shadow">
      <nav className="flex justify-between items-center w-[94%] mx-auto">
        <div className="w-[300px] h-[84px]">
          <img src="/Frame 8.png" className="object-cover h-full" />
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
