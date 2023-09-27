import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

const Home = () => {
  const cards = useLoaderData();
  return (
    <div>
      <Banner />
      <Cards cards={cards} />
    </div>
  );
};

export default Home;
