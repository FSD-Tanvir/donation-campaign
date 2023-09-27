import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { cover, title, color, category, category_bg, id, card_bg } = card;
  return (
    <div>
      <Link to={`/details/${id}`}>
        <div key={id} className="flex flex-col">
          <div
            className="card card-compact flex-grow"
            style={{ background: card_bg }}
          >
            <figure>
              <img src={cover} alt="" />
            </figure>
            <div className="card-body ">
              <span
                className="px-2 p-1 w-fit rounded font-medium"
                style={{ background: category_bg, color: color }}
              >
                {category}
              </span>
              <h2
                className="card-title font-semibold text-xl"
                style={{ color: color }}
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
