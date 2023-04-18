import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chart() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "test",
        data: [12, 19, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 12,
        },
        bodyFont: {
          size: 12,
        },
        footerFont: {
          // size: 10, // there is no footer by default
        },
        callbacks: {
          title: () => {
            return "security risk";
          },
          label: (item) => {
            const count = item.dataset.data[item.dataIndex];
            const label = item.label;
            const info = ` ${label} : ${count}`;
            return info;
          },
        },
      },
    },
  };

  return (
    <>
      <Wrap>
        <Doughnut data={data} options={options} />
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;
