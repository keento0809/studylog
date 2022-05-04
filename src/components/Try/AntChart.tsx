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
  // original
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];
  // test
  //   const data: { hour: number }[] = [
  //     { hour: 264 },
  //     { hour: 417 },
  //     { hour: 438 },
  //     { hour: 887 },
  //     { hour: 309 },
  //     { hour: 397 },
  //     { hour: 550 },
  //     { hour: 575 },
  //     { hour: 563 },
  //     { hour: 430 },
  //     { hour: 525 },
  //     { hour: 592 },
  //     { hour: 492 },
  //     { hour: 467 },
  //     { hour: 513 },
  //     { hour: 546 },
  //     { hour: 983 },
  //     { hour: 340 },
  //     { hour: 539 },
  //     { hour: 243 },
  //     { hour: 226 },
  //     { hour: 192 },
  //   ];

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
      {/* <HomeCard>
        <TinyArea {...config} />
      </HomeCard> */}
    </div>
  );
};

export default AntChart;
