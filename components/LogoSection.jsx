import { Typography } from "@material-tailwind/react";

const logos = [
  { title: "mma", img: "/mma.png" },
  { title: "mia", img: "/MIA.png" },
  { title: "qeac", img: "/qeac.png" },
  { title: "pier", img: "/PIER.png" },
  { title: "marn", img: "/marn.jpeg" },
  { title: "icef", img: "/icef.png" },
];

export function LogoSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center gap-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            Why choose Us?
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Trusted by over 2000+ <br /> clients
          </Typography>
          <Typography className="mb-10 font-normal !text-gray-500">
            We are proud members of MARN, MMA, QEAC and MIA and ICEF.
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {logos.map((logo, key) => (
            <img key={key} src={logo.img} alt="logo" className="w-40" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSectionTwo;
