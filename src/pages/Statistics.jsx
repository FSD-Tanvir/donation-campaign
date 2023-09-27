import { useLoaderData } from "react-router-dom";
import PieChart from "../components/PieChart";
import { useEffect, useState } from "react";

const Statistics = () => {
  const cards = useLoaderData();
  const [yourDonate, setDonate] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);
  const [notFound, setNotfound] = useState(false);
  const percentage = [];

  useEffect(() => {
    const donationList = JSON.parse(localStorage.getItem("donate"));
    if (donationList) {
      const total = donationList.reduce(
        (preValue, currentValue) => preValue + currentValue.donate_amount,
        0
      );
      setDonate(total);
      const sumOfTotalDonate = cards.reduce(
        (preValue, currentValue) => preValue + currentValue.donate_amount,
        0
      );
      setTotalAmount(sumOfTotalDonate);
    } else {
      setNotfound("No Data Found");
    }
  }, [cards]);

  if (yourDonate) {
    const percent = (yourDonate / totalAmount) * 100;
    percentage.push(percent, 100 - percent);
  }
  return (
    <div>
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center">{notFound}</p>
      ) : (
        <PieChart percentage={percentage} />
      )}
    </div>
  );
};

export default Statistics;
