import PropTypes from "prop-types";
const DonationCard = ({ card }) => {
  const { cover, category, donate_amount, title, card_bg, color, category_bg } =
    card || {};
  return (
    <div>
      <div
        className="card card-side flex-col lg:flex-row "
        style={{ background: card_bg }}
      >
        <img src={cover} alt="Movie" />
        <div className="card-body">
          <span
            className="px-2 p-1 w-fit rounded font-medium"
            style={{ background: category_bg, color: color }}
          >
            {category}
          </span>
          <h2 className="card-title text-[#0B0B0B] font-semibold text-xl">
            {title}
          </h2>
          <p style={{ color: color }} className="text-base font-semibold">
            ${donate_amount}
          </p>
          <div className="card-actions justify-start">
            <button className="btn text-white " style={{ background: color }}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default DonationCard;
