import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardTwo({title}) {
  return (
    <section className="grid h-[40rem] place-items-center p-4">
      <Card className="w-auto max-w-[24rem]">
        <CardHeader color="gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80"
            alt="img-blur-shadow"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-1 mb-2 font-medium"
          >
            Card Title
          </Typography>
          <Typography color="gray" className="mb-6 font-normal">
            {title}
          </Typography>
          <Button variant="outlined" size="sm">
            go somewhere
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default CardTwo;
