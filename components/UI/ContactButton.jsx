import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
const ContactButton = () => {
    const router = useRouter();
  return (
    <Button
      size="lg"
      className="bg-[#c20000] w-52 h-14"
      variant="filled"
      onClick={() => router.push("/contactPage")}
    >
      Contact Us
    </Button>
  );
};

export default ContactButton;
