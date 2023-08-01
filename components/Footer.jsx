import CopyrightIcon from "@mui/icons-material/Copyright";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import FooterButton from "./FooterButton";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col bg-black w-[100%] justify-center items-center p-10">
      <div className="font-my-font text-white text-md">
        <CopyrightIcon fontSize="medium" /> Redland Immigration {year}
      </div>
      <div className="flex justify-between flex-1 gap-[6vw] mt-3">
        <FooterButton
          link="https://www.facebook.com/redlandimmigration?mibextid=LQQJ4d"
          icon={<BsFacebook size={28} color="white" className="hover:text-gray-300"/>}
        />
        <FooterButton
          link="https://www.instagram.com/redlandimmigration/"
          icon={
            <FaTiktok size={28} color="white" className="hover:text-gray-300" />
          }
        />
        <FooterButton link= "https://www.tiktok.com/@redlandimmigration?_t=8eM1ttoSRnO&_r=1" icon={<BsInstagram
            size={28}
            color="white"
            className="hover:text-gray-300"
          />}/>
      </div>
    </footer>
  );
};


export default Footer;
