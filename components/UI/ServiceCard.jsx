import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export function SimpleCard({ title, content, link }) {
  return (
    <Card className="mt-6 w-[500px] h-[550px] relative">
      <CardBody>
        <Typography
          variant="h5"
          className="mb-5 text-red-600 font-my-font text-3xl text-center"
        >
          {title}
        </Typography>
        <Typography className="text-[24px]">{content}</Typography>
      </CardBody>
      <CardFooter className="pt-0 absolute bottom-0">
        <Link href={link} > 
          <Button className="text-blue-gray" variant="outlined" color="red">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
// target="_blank"