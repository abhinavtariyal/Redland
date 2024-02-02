import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import ContactButton from "./UI/ContactButton";
export function ContentSectionOne() {
  return (
    <section className="py-16 px-8 lg:py-28">
      <div className="container mx-auto grid items-center lg:grid-cols-2">
        <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-6 pr-5 font-my-font text-6xl text-red-600"
          >
            Who Are We?
          </Typography>
          <Typography
            variant="lead"
            className="mb-12 !text-gray-500 font-my-font text-justify text-[26px]"
          >
            We are team of highly professionals and have Intensive Experience in
            Education & Migration Industry. We have assisted numerous students
            in obtaining their academic goals in reputable universities and
            colleges in USA, Canada, Australia, and New Zealand.
            <br />
            <br />
            With well-qualified and trained counsellors, we always strive to
            provide students with ethical counselling by only giving them with
            the most genuine and honest advice. We can therefore give you the
            best road map possible, regardless of whether you are unsure of
            which subject to take or if you will be able to afford to attend a
            university.
          </Typography>
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-6 font-my-font text-6xl text-red-600"
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="lead"
            className="mb-12 !text-gray-500 font-my-font m-0 text-justify text-[26px]"
          >
            Migrating to another country is a life changing decision. It’s
            important to get good results – At Redland Immigration you’ll find
            Immigration Consultants who : Are ethical, open and honest with
            every client. Are qualified to interpret immigration laws and policy
            and advise you. Are experienced and competent to be able to
            communicate with the relevant immigration department, embassy and
            visa officers on your behalf. Are frank and honest about your
            prospects of success even before you retain our services. Are frank
            and honest about your prospects of success even before you retain
            our services.
          </Typography>

          <div className="mt-10">
            <ContactButton
              size="lg"
              variant="filled"
              className="bg-[#c20000]"
            ></ContactButton>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2368&q=80"
          alt="team work"
          className=" h-full min-h-[50vh] w-full rounded-xl object-cover object-center md:min-h-[75vh]"
        />
      </div>
    </section>
  );
}

export default ContentSectionOne;
