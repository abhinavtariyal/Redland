import React from "react";
import { Typography } from "@material-tailwind/react";
const studentVisa = () => {
  return (
    <div className="container mx-auto">
      <Typography
        variant="h1"
        className="text-red-600 text-6xl font-semi-bold m-0"
      >
        Student Visa
      </Typography>
      <Typography
        variant="lead"
        className="mb-12 !text-gray-500 font-my-font text-justify text-[26px] mt-12"
      >
        With this visa you can participate in an eligible course of study in
        Australia travel in and out of Australia work up to 48 hours a fortnight
        when your course of study or training is in session (students studying a
        masters by research or doctoral degree, and their families, have no work
        limit). See Work restrictions for student visa holders. How long you can
        stay This is a temporary visa to study up to 5 years. The type of course
        and its length will determine the length of stay Primary school children
        enrolled in years 1-4 will generally only be granted a student visa for
        a maximum period of 3 years.
      </Typography>

      <Typography
        variant="h2" className="mb-12 font-my-font text-red-600"
      >
        How long you can stay
      </Typography>
      <Typography
        variant="lead"
        className="mb-12 !text-gray-500 font-my-font text-justify text-[26px] mt-12"
      >
        The type of course and its length will determine the length of stay
        Primary school children enrolled in years 1-4 will generally only be
        granted a student visa for a maximum period of 3 years.
      </Typography>

      <Typography variant="h2" className="mb-12 font-my-font text-red-600">
        Stay Longer
      </Typography>
      <Typography className="mb-12 !text-gray-500 font-my-font text-justify text-[26px] mt-12">
        To continue studying in Australia, you must apply for a new Student
        visa. If your Student visa will expire before your graduation you might
        be eligible for a Visitor visa (subclass 600). You will need a letter
        from your education provider with the date of your graduation. If you
        hold or held a student visa and completed specific qualifications in
        Australia in the last six months, you might be eligible for a Temporary
        Graduate visa (subclass 485). If you are a recent engineering graduate
        of a recognized institution you might be eligible for the Skilled
        Recognition Graduate visa (subclass 476). If you want to stay longer for
        other reasons, you must apply for a new visa that suits your
        circumstances. Explore your visa options.
      </Typography>

      <Typography className="mb-12 text-red-600 font-my-font" variant="h2">
        Cost
      </Typography>
      <Typography className="mb-12 !text-gray-500 font-my-font text-justify text-[26px] mt-12">
        The visa costs from AUD710.00 for the main applicant, unless they are
        exempt. There is also a charge for each family member who applies for
        the visa. You might also have to pay other costs for health checks,
        police certificates and biometrics. To work out what your visa will
        cost, use the Visa Pricing Estimator. The estimator does not take into
        account the other costs.
      </Typography>
    </div>
  );
};

export default studentVisa;
