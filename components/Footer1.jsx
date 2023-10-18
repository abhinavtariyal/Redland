import { Typography, Button, IconButton } from "@material-tailwind/react";
import FooterButton from "./FooterButton";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
// const footerTab = ["Home", "About Us", "Services", "Contact Us", "Enquire"];

const footerData = [
  { name: "Home", link: "/home" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact Us", link: "/contactPage" },
  { name: "Enquire", link: "/book" },
];
const currentYear = new Date().getFullYear();

export function FooterThree() {
  return (
    <footer className="mt-10 bg-gradient-to-tr bg-blue-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography variant="h5" color="white" className="mb-4">
              Redland Immigration
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {footerData.map((data, idx) => (
                <li key={data.name}>
                    <Typography
                      as="a"
                      href={data.link}
                      color="white"
                      className={`py-1 font-medium transition-colors ${
                        idx === 0 ? "pr-3" : "px-3"
                      }`}
                    >
                      {data.name}
                    </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {currentYear} Abhinav Tariyal™. All Rights Reserved.
          </Typography>

          <div className="flex gap-6">
            <FooterButton
              link="https://www.facebook.com/redlandimmigration?mibextid=LQQJ4d"
              icon={<BsFacebook size={30} color="white" />}
            />
            <FooterButton
              link="https://www.tiktok.com/@redlandimmigration?_t=8eM1ttoSRnO&_r=1"
              icon={
                <FaTiktok
                  size={30}
                  color="white"
                  className="hover:text-gray-300"
                />
              }
            />
            <FooterButton
              link="https://www.instagram.com/redlandimmigration/"
              icon={
                <BsInstagram
                  size={30}
                  color="white"
                  className="hover:text-gray-300"
                />
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterThree;
