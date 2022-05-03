import React from "react";
import { Line } from "@ant-design/charts";
import { TinyArea } from "@ant-design/charts";
import HomeCard from "../UI/Card/HomeCard";

// const AntChart: React.FC = () => {
//   const data = [
//     { year: "1991", value: 3 },
//     { year: "1992", value: 4 },
//     { year: "1993", value: 3.5 },
//     { year: "1994", value: 5 },
//     { year: "1995", value: 4.9 },
//     { year: "1996", value: 6 },
//     { year: "1997", value: 7 },
//     { year: "1998", value: 9 },
//     { year: "1999", value: 13 },
//   ];

//   const config = {
//     data,
//     width: 800,
//     height: 400,
//     autoFit: false,
//     xField: "year",
//     yField: "value",
//     point: {
//       size: 5,
//       shape: "diamond",
//     },
//     label: {
//       style: {
//         fill: "#aaa",
//       },
//     },
//   };

//   let chart: any;

//   // Export Image
//   const downloadImage = () => {
//     chart?.downloadImage();
//   };

//   // Get chart base64 string
//   const toDataURL = () => {
//     console.log(chart?.toDataURL());
//   };

//   return (
//     <div>
//       <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
//     </div>
//   );
// };

const AntChart: React.FC = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];

  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
  };
  return (
    <div>
      <HomeCard>
        <TinyArea {...config} />
      </HomeCard>
      <HomeCard>
        <TinyArea {...config} />
      </HomeCard>
    </div>
  );
};

export default AntChart;
