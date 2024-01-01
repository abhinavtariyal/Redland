import React, { useRef, useState } from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import emailkeys from "@/emailkeys";
import { MdOutlineCancel } from "react-icons/md";
export function ContactSectionTwo({ loaderState, message, handle }) {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const response = await emailjs.sendForm(
      emailkeys.SERVICE_ID,
      emailkeys.TEMPLATE_ID,
      form.current,
      emailkeys.PUBLIC_KEY
    );

    setIsLoading(false);
    if (response.text === "OK") {
      message({
        title: "SUCCESS!!!",
        content: "Your message has been delivered successfully.",
      });
    } else {
      message({ title: "Error!!", conent: "Please try again later." });
    }
    loaderState();
    // .then(
    //   (result) => {

    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };
  return (
    <section className="h-[800px] items-center place-items-center">
      <button onClick={handle}>
        <MdOutlineCancel className="ml-0 text-red-600" size={30} />
      </button>
      <div className="mx-auto p-10 lg:max-w-xl">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 font-my-font"
        >
          Book Now!!
        </Typography>
        <Typography
          variant="lead"
          className="mb-16 !text-gray-500 font-my-font"
        >
          Send us a message and our team will get back to you.
        </Typography>

        <form onSubmit={handleSubmit} ref={form}>
          <div className="mb-4 grid gap-4 lg:grid-cols-2">
            <Input
              size="lg"
              label="First Name"
              name="fName"
              required
              containerProps={{
                className: "!min-w-full",
              }}
            />
            <Input
              size="lg"
              label="Last Name"
              name="lName"
              containerProps={{
                className: "!min-w-full",
              }}
            />
          </div>
          <div className="mb-4">
            <Input type="email" size="lg" label="Email" name="email" required />
          </div>
          <div className="mb-4">
            <Input size="lg" label="Phone Number" name="phone" required />
          </div>
          <div className="mb-4 h-max">
            <Textarea size="lg" label="Message" name="message" required />
          </div>
          <Button
            size="lg"
            className="mt-10 bg-[#c20000]"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactSectionTwo;
