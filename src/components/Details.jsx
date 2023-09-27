import PropTypes from "prop-types";
const Details = ({ card }) => {
  const { title, cover, donate_amount, description, color, id } = card || {};

  const handleDonation = () => {
    const addedDonationList = [];
    const donationList = JSON.parse(localStorage.getItem("donate"));

    if (!donationList) {
      addedDonationList.push(card);
      localStorage.setItem("donate", JSON.stringify(addedDonationList));
    } else {
      const isExits = donationList.find((item) => item.id === id);
      if (!isExits) {
        addedDonationList.push(...donationList, card);
        localStorage.setItem("donate", JSON.stringify(addedDonationList));
      }
    }
  };

  return (
    <div className="">
      <div className="card card-compact">
        <div className="relative ">
          <img src={cover} alt="" className="w-full" />
          <div className=" bg-[#0b0b0b80]  absolute bottom-0 py-12 w-full ">
            <button
              className={`ml-5 bg-[${color}] px-4 py-3 rounded-lg text-white font-semibold text-xl`}
              onClick={handleDonation}
            >
              Donate ${donate_amount}
            </button>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold text-[#0b0b0b]">
            {title}
          </h2>
          <p className="font-normal text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Details;
