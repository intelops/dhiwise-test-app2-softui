import React from "react";

import { Img, Line, Text } from "components";

const GraphsTypebarchartv = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-between w-full">
          <div className="flex sm:flex-1 flex-col gap-[19px] items-start justify-start w-[3%] sm:w-full">
            <div className="flex flex-col items-center justify-start w-4 md:w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.userage}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-4 md:w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.userage1}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-4 md:w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.userage2}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-4 md:w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.userage3}
              </Text>
            </div>
            <div className="flex flex-col gap-[19px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-4 md:w-full">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.userage4}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-4 md:w-full">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.userage5}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px]">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.userage6}
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-5 items-center justify-start sm:mt-0 mt-2.5 w-[97%] sm:w-full">
            <div className="md:h-[221px] h-[222px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                      <Line className="bg-gray-300_01 h-px w-full" />
                      <Line className="bg-gray-300_01 h-px w-full" />
                      <Line className="bg-gray-300_01 h-px w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-row items-end justify-between left-[5%] w-2/5">
                <Img
                  className="h-[55px] mt-[18px]"
                  src="images/img_signal_blue_gray_900_01.svg"
                  alt="signal"
                />
                <Img
                  className="h-[74px]"
                  src="images/img_signal_blue_gray_900_01.svg"
                  alt="signal_One"
                />
                <Img
                  className="h-11 mt-[29px]"
                  src="images/img_signal_blue_gray_900_01.svg"
                  alt="signal_Two"
                />
              </div>
              <Img
                className="absolute h-[221px] inset-y-[0] my-auto right-[38%]"
                src="images/img_vector_blue_gray_900_01_221x35.svg"
                alt="vector_FortyThree"
              />
              <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[4%] w-[24%]">
                <Img
                  className="h-[74px]"
                  src="images/img_signal_blue_gray_900_01.svg"
                  alt="signal_Three"
                />
                <Img
                  className="h-[74px]"
                  src="images/img_signal_blue_gray_900_01.svg"
                  alt="signal_Four"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-[90%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.p1620}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.p2125}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.p2630}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.p3136}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.p3642}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.fortytwo}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GraphsTypebarchartv.defaultProps = {
  userage: "60",
  userage1: "50",
  userage2: "40",
  userage3: "30",
  userage4: "20",
  userage5: "10",
  userage6: "0",
  p1620: "16-20",
  p2125: "21-25",
  p2630: "26-30",
  p3136: "31-36",
  p3642: "36-42",
  fortytwo: "42+",
};

export default GraphsTypebarchartv;
