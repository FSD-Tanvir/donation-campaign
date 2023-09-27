import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "../components/DonationCard";

const Donation = () => {
  const [donate, setDonation] = useState([]);
  const [notFound, setNotfound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationList = JSON.parse(localStorage.getItem("donate"));

    if (donationList) {
      setDonation(donationList);
    } else {
      setNotfound("No Data Found");
    }
  }, []);

  return (
    <div className="mx-2 py-7">
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center">{notFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 ">
            {isShow
              ? donate.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donate
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>

          <div className="py-10">
            {donate.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="px-5  py-2 rounded  bg-green-700 text-white block mx-auto "
              >
                {isShow ? "See less" : "See more"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
