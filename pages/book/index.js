import ContactSectionTwo from "@/components/Book";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { DialogDefault } from "@/components/UI/Notification";

const BookPage = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [message, setMessage] = useState({ title: "", content: "" });

  const handleMessage = ({ title, content }) => {
    setMessage({ title, content });
  };
  const handleLoaderState = () => {
    setIsComplete((prevState) => !prevState);
  };
  return (
    <>
      {isComplete ? (
        <DialogDefault
          open={true}
          loaderState={handleLoaderState}
          message={message}
        />
      ) : (
        <ContactSectionTwo loaderState={handleLoaderState} state={isComplete} message = {handleMessage}/>
      )}
    </>
  );
};

export default BookPage;
