import HomePage from "./home/index.js";
import Head from "next/head.js";
const Home = () => {
  return (
    <>
      <Head>
        <title>Redland Immigration Consultancy</title>
        <meta
          name="description"
          content="Your trusted immigration consultancy agency for seamless visa and migration services. We provide expert guidance for your immigration needs."
        />
        <meta
          name="keywords"
          content="immigration consultancy, visa services, migration consultants, Redland Immigration, immigration experts, best immigration services, Victoria, Australia, Immigration, migration, Canada, Australia, UK, America work permit, job, permanent residency, refuge, refugee, skilled worker, lawyers, US, visa, visit visa, visitor, employment, migrate, skilled immigration, Portugal, Visa, Approval, best immigration services, best visa agent, best immigration agent, immigration agent, melbourne, best immigration agent melbourne"
        ></meta>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
