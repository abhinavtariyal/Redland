import { Typography, Card, CardBody } from "@material-tailwind/react";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={true}>
      <CardBody className="text-center">
        <Typography variant="h1" color="blue" className="mb-4 text-6xl">
          {count}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-500">{desc}</Typography>
      </CardBody>
    </Card>
  );
}
const stats = [
  {
    count: "2000+",
    title: "Clients",
    desc: "That are satisfied with our services",
  },
  {
    count: "5000+",
    title: "Approved Visas",
    desc: "That meets quality standards required by our users",
  },
  {
    count: "24/7",
    title: "Prompt Response",
    desc: "Actively engage team members that finishes on time",
  },
];

export function StatsSectionThree() {
  return (
    <section className="px-8 py-8 lg:py-20">
      <div className="container mx-auto py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
          {stats.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSectionThree;
