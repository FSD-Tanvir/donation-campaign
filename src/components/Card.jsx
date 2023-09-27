import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { cover, title, color, category, category_bg, id } = card;
  return (
    <div>
      <Link to={`/details/${id}`}>
        <div
          key={id}
          className="flex flex-col"
        >
          <div className={`card card-compact bg-[${card.card_bg}] flex-grow`}>
            <figure>
              <img src={cover} alt="" />
            </figure>
            <div className="card-body ">
              <span
                className={`px-2 p-1 w-fit rounded font-medium bg-[${category_bg}]`}
              >
                {category}
              </span>
              <h2
                className={`card-title font-semibold text-xl text-[${color}]`}
              >
                {title}
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
