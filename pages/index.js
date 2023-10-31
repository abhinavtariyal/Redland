import HomePage from "./home/index.js";
import Head from "next/head.js";
const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Your trusted immigration consultancy agency for seamless visa and migration services. We provide expert guidance for your immigration needs."
        />
        <meta
          name="keywords"
          content="immigration consultancy, visa services, migration consultants, Redland Immigration, immigration experts, best immigration services"
        ></meta>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
