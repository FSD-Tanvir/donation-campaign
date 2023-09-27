import PropTypes from "prop-types";
import React from "react";
import Chart from "react-apexcharts";
const PieChart = ({percentage}) => {
  return (
    <div className="my-8">
      <React.Fragment>
        <div className="container-fluid mb-3">
          <Chart
            type="pie"
            series={percentage}
            height={500}
            options={{
              labels: ["Your donation", "Total Donation"],
            }}
          ></Chart>
        </div>
      </React.Fragment>
    </div>
  );
};

PieChart.propTypes = {
  percentage: PropTypes.array.isRequired,
};

export default PieChart;
