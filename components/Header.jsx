import React from "react";
import { useRouter } from "next/router";
import { UnderlineTabs } from "./NavBar";
import Link from "next/link";
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import BookComponent from "./BookComponent";
const Header = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <header className="bg-[#FFF] sticky top-0 z-10 shadow-xl">
      <nav className="flex justify-between items-center w-[94%] mx-auto">
        <div className="w-[300px] h-[84px]">
          <Link href="/">
            <img src="/Frame 8.png" className="object-cover h-full" />
          </Link>
        </div>
        <div className="w-[30%]">
          <UnderlineTabs />
        </div>
        <div>
          <Button
            // onClick={() => router.push("/book")}
            className="bg-[#c20000]"
            size="md"
            onClick={handleOpen}
          >
            Enquire
          </Button>
          <Dialog open={open} handler={handleOpen}>
            <DialogBody>
              <BookComponent handle = {handleOpen}/>
            </DialogBody>
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

export default Header;
