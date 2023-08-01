import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  BookOpenIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { BiSolidBookOpen } from "react-icons/bi";

function ContactCard({ icon, title, contact }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-black p-2.5 text-white shadow-lg shadow-blue-100/40">
          {icon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mt-4 mb-2 font-semibold"
        >
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-500">
          {contact}
        </Typography>
      </CardBody>
    </Card>
  );
}

const options = [
  {
    icon: <BookOpenIcon className="h-5 w-5" />,
    title: "Australia Address",
    contact:
      "World Trade Centre, Level 10, Tower 4/611 Flinders St, Docklands VIC 3008",
  },
  {
    icon: <BiSolidBookOpen className="h-5 w-5" />,
    title: "India Address",
    contact: "S.C.O 37 Sector 10, Kurukshetra, Haryana, 136118",
  },
  {
    icon: <EnvelopeIcon className="h-5 w-5" />,
    title: "Email",
    contact: "info@redlandimmigration.com",
  },
  {
    icon: <PhoneIcon className="h-5 w-5" />,
    title: "Phone",
    contact: "+61 (414) 105004",
  },
  {
    icon: <UserIcon className="h-5 w-5" />,
    title: "Contact",
    contact: "Naveen Chaudhary",
  },
];

export function ContactSectionThree() {
  return (
    <section>
      <div className="relative h-96 w-full">
        <img
          className="absolute h-full w-full object-cover object-center"
          src="https://demos.creative-tim.com/material-kit-pro/assets/img/dg1.jpg"
          alt="nature image"
        />
        <div className="absolute inset-0 h-full w-full bg-black/40" />
        <div className="relative pt-28 text-center">
          <Typography variant="h1" color="white" className="mb-2">
            Got a Question?
          </Typography>
          <Typography variant="lead" color="white" className="mx-auto">
            We&apos;d like to talk more about what you need
          </Typography>
        </div>
      </div>
      <div className="-mt-16 mb-8 px-8">
        <div className="container mx-auto">
          <div className="flex w-full rounded-xl border border-white bg-white/75 shadow-md shadow-black/5 saturate-200 backdrop-blur-2xl">
            <div className="grid w-full grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-4">
              {options.map(({ icon, title, contact }) => (
                <ContactCard
                  key={title}
                  icon={icon}
                  title={title}
                  contact={contact}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionThree;
