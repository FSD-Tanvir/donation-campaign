import PropTypes from "prop-types";
import Card from "./Card";
const Cards = ({ cards }) => {
  
  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 w-fit mx-auto  mt-5 py-10 sm:py-24">
        {cards?.map((card) => (
          <Card
          key={card.id}
          card={card}
          />
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
