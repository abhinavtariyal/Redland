import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { reviewActions } from "@/store";

export function CardTwo({ title, content, image }) {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <section className="grid h-[40rem] place-items-center p-4">
      <Card className="w-auto max-w-[24rem]">
        <CardHeader color="gray" className="relative h-56">
          <img
            src={image}
            alt="img-blur-shadow"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-1 mb-2 font-my-font"
          >
            {title}
          </Typography>
          <Typography color="gray" className="mb-6 font-my-font">
            {content}
          </Typography>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => {
              router.push("/services#visa");
            }}
          >
            Know More
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default CardTwo;
