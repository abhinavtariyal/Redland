import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function SimpleCard({title,content}) {
    return (
      <Card className="mt-6 w-[28rem] h-[20rem] relative">
        <CardBody>
          <Typography variant="h5" className="mb-2 text-red-600 font-my-font">
            {title}
          </Typography>
          <Typography>
            {content}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 absolute bottom-0">
          <Button className="text-blue-gray border-red-600" variant="outlined">Read More</Button>
        </CardFooter>
      </Card>
    );
  }