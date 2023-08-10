
import Link from "next/link";
 const FooterButton = ({ link, icon }) => {
    return (
      <>
        <Link href={link} rel="noopener noreferrer" target="_blank">  
          <div className="hover:transition-all hover:-translate-y-1 hover:scale-110 ease-in-out delay-50 duration-300">
            {icon}
          </div>
        </Link>
      </>
    );
  };

  export default FooterButton;