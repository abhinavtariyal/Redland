import { Typography } from '@material-tailwind/react'
import React from 'react'

const VisaInfoComponent = ({title,about,title2,detail2,title3,detail3,title4,detail4}) => {
  return (
    <div className="container mx-auto text-justify">
      <Typography
        variant="h1"
        className="text-red-600 text-6xl font-semi-bold mt-6"
      >
        {title}
      </Typography>
      <Typography
        variant="lead"
        className="mb-12 !text-gray-500 font-my-font text-justify text-[26px] mt-12"
      >
        {about}
      </Typography>

      <Typography variant="h2" className="mb-12 font-my-font text-red-600">
        {title2}
      </Typography>
      <Typography
        variant="lead"
        className="mb-12 !text-gray-500 font-my-font text-justify text-[26px] mt-12"
      >
        {detail2}
      </Typography>

      <Typography variant="h2" className="mb-12 font-my-font text-red-600">
       {title3}
      </Typography>
      <Typography className="mb-12 !text-gray-500 font-my-font text-justify text-[26px] mt-12">
        {detail3}
      </Typography>

      <Typography className="mb-12 text-red-600 font-my-font" variant="h2">
        {title4}
      </Typography>
      <Typography className="mb-12 !text-gray-500 font-my-font text-justify text-[26px] mt-12">
        {detail4}
      </Typography>
      <br></br>
      <br></br>
      <Typography variant="h6">
        <i>*Source - Australian Government(Department of Health Affairs)</i>
      </Typography>
    </div>
  )
}

export default VisaInfoComponent