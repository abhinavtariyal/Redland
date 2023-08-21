import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault(props) {
  const [open, setOpen] = React.useState(props.open);
  const handleOpen = () => {
    setOpen(!open);
    props.loaderState();
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{props.message.title}</DialogHeader>
        <DialogBody divider>
          {props.message.content}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
