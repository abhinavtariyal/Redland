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
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {content}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 absolute bottom-0">
          <Button className="bg-[#c20000]">Read More</Button>
        </CardFooter>
      </Card>
    );
  }