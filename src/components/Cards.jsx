import PropTypes from "prop-types";
const Cards = ({ cards }) => {
  console.log(cards);
  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 w-fit mx-auto  mt-5 py-10 sm:py-24">
        {cards?.map((card) => (
          <div key={card.id} className="flex flex-col">
            <div className={`card card-compact bg-[${card.card_bg}] flex-grow`}>
              <figure>
                <img src={card.cover} alt="" />
              </figure>
              <div className="card-body ">
                <span
                  className={`px-2 p-1 w-fit rounded font-medium bg-[${card.category_bg}]`}
                >
                  {card.category}
                </span>
                <h2
                  className={`card-title font-semibold text-xl text-[${card.color}] `}
                >
                  {card.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array,
};

export default Cards;
