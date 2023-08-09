import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function DefaultTimeline() {
  return (
    <div className="flex flex-col justify-center items-center w-[full] h-[28rem] overflow-auto mt-5 p-24 bg-gray-50">
      <Typography variant="h2" className="mb-10 -ml-20">
        {" "}
        A look at our timeline
      </Typography>
      <div>
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon/>
              <Typography
                variant="h4"
                color="blue-gray"
                className="leading-none"
              >
                October 2020.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lead"
                color="gray"
                className="font-normal text-gray-600"
              >
                Established in 2020 in Parkdale.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon/>
              <Typography
                variant="h4"
                color="blue-gray"
                className="leading-none"
              >
                Jan 2021.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lead"
                color="gray"
                className="font-normal text-gray-600"
              >
                First office in India.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h4"
                color="blue-gray"
                className="leading-none"
              >
                February 2023.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lead"
                color="gray"
                className="font-normal text-gray-600"
              >
                Opened the Melbourne branch.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon/>
              <Typography
                variant="h4"
                color="blue-gray"
                className="leading-none"
              >
                Present.
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="lead"
                color="gray"
                className="font-normal text-gray-600"
              >
                Have currently served more than 2000 happy clients.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
