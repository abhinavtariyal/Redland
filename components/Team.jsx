import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  
  function TeamCard({ img, name, title }) {
    return (
      <Card color="transparent" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={img}
            alt={name}
            variant="circular"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
          <Typography color="blue" variant="h6" className="mb-2">
            {title}
          </Typography>
          <div className="flex items-center justify-center">
            <IconButton variant="text" color="light-blue">
              <i className="fa-brands fa-twitter text-lg not-italic" />
            </IconButton>
            <IconButton variant="text" color="blue">
              <i className="fa-brands fa-linkedin text-lg not-italic" />
            </IconButton>
            <IconButton variant="text" color="pink">
              <i className="fa-brands fa-dribbble text-lg not-italic" />
            </IconButton>
          </div>
        </CardBody>
      </Card>
    );
  }
  
  const members = [
    {
      img: "/img/avatar1.jpg",
      name: "Ryan Samuel",
      title: "Co-Founder",
    },
    {
      img: "/img/avatar2.jpg",
      name: "Jordan Michael",
      title: "Front-End Developer",
    },
    {
      img: "/img/avatar5.jpg",
      name: "Nora Hazel",
      title: "UI/UX Designer",
    },
    {
      img: "/img/avatar4.jpg",
      name: "Otto Gonzalez",
      title: "Marketing Specialist",
    },
  ];
  
  export function TeamSectionTwo() {
    return (
      <section className="py-8 px-8 lg:py-40">
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <Typography variant="h2" color="blue-gray" className="mb-4 font-my-font">
              The Executive Team
            </Typography>
            <Typography variant="lead" className="mx-auto w-3/5 !text-gray-500 font-my-font">
              This is the paragraph where you can write more details about your
              team. Keep you user engaged by providing meaningful information.
            </Typography>
          </div>
          <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default TeamSectionTwo;
  