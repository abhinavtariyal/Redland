import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function TeamCard({ img, name, title, desc }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="grid gap-2 md:grid-cols-1 lg:grid-cols-12 lg:place-items-center"
    >
      <CardHeader
        floated={true}
        className="!m-0 h-full max-h-[12rem] w-full max-w-[12rem] lg:col-span-5 lg:max-h-[30rem] lg:max-w-[30rem]"
      >
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <CardBody className="p-0 lg:col-span-7">
        <Typography variant="h2" className="font-my-font">
          {name}
        </Typography>
        <Typography
          variant="small"
          className="mb-3 mt-2 uppercase !text-gray-500 font-my-font"
        >
          {title}
        </Typography>
        <Typography className="mb-2 w-full xl:w-72 font-my-font text-xl text-justify">
        &quot;{desc} &quot;
        </Typography>
        {/* <div className="flex items-center">
          <IconButton variant="text" color="gray">
            <i className="fa-brands fa-facebook text-lg not-italic" />
          </IconButton>
          <IconButton variant="text" color="gray">
            <i className="fa-brands fa-twitter text-lg not-italic" />
          </IconButton>
          <IconButton variant="text" color="gray" className="text-gray-900">
            <i className="fa-brands fa-dribbble text-lg not-italic" />
          </IconButton>
        </div> */}
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: "/Naveen.jpeg",
    name: "Naveen Chaudhary",
    title: "Director",
    desc: " Every visa stamped is a story of ambition realized, and every client served is a testament to our commitment to turning borders into gateways",
  },
  
];

export function TeamSection4() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="mb-20 text-center lg:mb-40">
          <Typography
            variant="h2"
            className="mb-6 pr-5 font-my-font text-6xl text-red-600"
          >
            The Exective Team
          </Typography>
          <Typography
            className="mx-auto font-normal !text-gray-500 lg:w-8/12 font-my-font text-[26px]"
          >
            Within our immigration consultancy team, a dynamic group of seasoned
            professionals collaborates seamlessly to navigate the complexities
            of global mobility. Our diverse team comprises immigration
            specialists, legal experts, and cultural liaisons, all driven by a
            shared commitment to facilitating smooth and successful immigration
            processes for our clients
          </Typography>
        </div>
        <div>
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection4;
