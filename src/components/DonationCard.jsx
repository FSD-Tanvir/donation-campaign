const DonationCard = ({ card }) => {
  const { cover, category, donate_amount, title } = card || {};
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <img src={cover} alt="Movie" />
        <div className="card-body">
          <p>{category}</p>
          <h2 className="card-title">{title}</h2>
          <p>${donate_amount}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
