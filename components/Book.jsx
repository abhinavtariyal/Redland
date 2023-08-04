import React from "react";
import {
  Typography,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export function ContactSectionTwo() {
  return (
    <section className="grid h-screen items-center lg:grid-cols-2 place-items-center">
      <div className="mx-auto p-10 lg:max-w-xl">
        <Typography variant="h1" color="blue-gray" className="mb-4 font-my-font">
          Book Now!!
        </Typography>
        <Typography variant="lead" className="mb-16 !text-gray-500 font-my-font">
          Send us a message and our team will get back to you.
        </Typography>

        <form action="#">
          <div className="mb-4 grid gap-4 lg:grid-cols-2">
            <Input
              size="lg"
              label="First Name"
              name="first-name"
              containerProps={{
                className: "!min-w-full",
              }}
            />
            <Input
              size="lg"
              label="Last Name"
              name="last-name"
              containerProps={{
                className: "!min-w-full",
              }}
            />
          </div>
          <div className="mb-4">
            <Input type="email" size="lg" label="Email" name="email" />
          </div>
          <div className="mb-4">
            <Input size="lg" label="Phone Number" name="phone" />
          </div>
          <div className="mb-4 h-max">
            <Textarea size="lg" label="Message" name="message" />
          </div>
          <Checkbox
            label={
              <Typography className="font-normal !text-gray-500">
                You agree to our friendly{" "}
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-blue-500"
                >
                  Privacy Policy
                </a>
                .
              </Typography>
            }
            containerProps={{
              className: "-ml-2.5",
            }}
          />
          <Button size="lg" className="mt-6 bg-gray-900" fullWidth>
            send message
          </Button>
        </form>
      </div>
      <img
        src="/contact.jpeg"
        alt="bg image"
        className="hidden h-[50%] min-h-[92vh] w-full object-cover lg:block -mt-20"
      />
    </section>
  );
}

export default ContactSectionTwo;
