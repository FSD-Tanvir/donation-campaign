
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

const Home = () => {
  const cards = useLoaderData();
  return (
    <div className="mx-2">
      <Banner/>
      <Cards cards={cards}/>
    </div>
  );
};



export default Home;
