import React from "react";

import { Img, Line, Text } from "components";

const GraphsTypemixedchart = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
          <div className="flex sm:flex-1 flex-col gap-[26px] items-start justify-start w-[5%] sm:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.fivehundredTwo}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.fourhundredTwo}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.threehundredTwo}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.twohundredTwo}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.onehundredTwo}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[15px]">
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.zeroFour}
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-[13px] items-center justify-start sm:mt-0 mt-2.5 w-[95%] sm:w-full">
            <div className="h-[227px] sm:h-[977px] relative w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[78%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <Line className="bg-gray-300_01 h-[227px] w-px" />
                  <Line className="bg-gray-300_01 h-[227px] w-px" />
                  <Line className="bg-gray-300_01 h-[227px] w-px" />
                  <Line className="bg-gray-300_01 h-[227px] w-px" />
                  <Line className="bg-gray-300_01 h-[227px] w-px" />
                  <Line className="bg-gray-300_01 h-[227px] w-px" />
                  <Line className="bg-gray-300_01 h-[227px] w-px" />
                  <Line className="bg-gray-300_01 h-[227px] w-px" />
                </div>
              </div>
              <Line className="absolute bg-gray-300_01 bottom-[22%] h-px inset-x-[0] mx-auto w-full" />
              <Line className="absolute bg-gray-300_01 bottom-[41%] h-px inset-x-[0] mx-auto w-full" />
              <Line className="absolute bg-gray-300_01 h-px inset-x-[0] mx-auto top-[39%] w-full" />
              <Line className="absolute bg-gray-300_01 h-px inset-x-[0] mx-auto top-[19%] w-full" />
              <div
                className="absolute bg-cover bg-no-repeat md:h-[221px] h-[227px] sm:h-[977px] inset-[0] justify-center m-auto pb-1.5 px-1.5 w-full"
                style={{ backgroundImage: "url('images/img_group179.svg')" }}
              >
                <Img
                  className="absolute bottom-[9%] h-[159px] inset-x-[0] mx-auto"
                  src="images/img_vector_purple_500_159x490.svg"
                  alt="vector_SixtyNine"
                />
                <Img
                  className="absolute bottom-[3%] h-[23px] left-[5%]"
                  src="images/img_signal_blue_gray_900_01.svg"
                  alt="signal_Five"
                />
                <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-end justify-center m-auto w-[69%]">
                  <Img
                    className="h-[18px] sm:mt-0 mt-[202px]"
                    src="images/img_signal_blue_gray_900_01.svg"
                    alt="signal_Six"
                  />
                  <Img
                    className="h-[132px] sm:ml-[0] ml-[50px] sm:mt-0 mt-[88px]"
                    src="images/img_vector_blue_gray_900_01_221x35.svg"
                    alt="vector_Seventy"
                  />
                  <Img
                    className="h-[98px] sm:ml-[0] ml-[51px] sm:mt-0 mt-[123px]"
                    src="images/img_signal_blue_gray_900_01.svg"
                    alt="signal_Seven"
                  />
                  <Img
                    className="h-[221px] sm:ml-[0] ml-[51px]"
                    src="images/img_vector_blue_gray_900_01_221x35.svg"
                    alt="vector_SeventyOne"
                  />
                  <Img
                    className="h-[110px] sm:ml-[0] ml-[51px] sm:mt-0 mt-[110px]"
                    src="images/img_vector_blue_gray_900_01_221x35.svg"
                    alt="vector_SeventyTwo"
                  />
                  <Img
                    className="h-44 sm:ml-[0] ml-[51px] sm:mt-0 mt-11"
                    src="images/img_vector_blue_gray_900_01_221x35.svg"
                    alt="vector_SeventyThree"
                  />
                  <Img
                    className="h-[102px] sm:ml-[0] ml-[51px] sm:mt-0 mt-[118px]"
                    src="images/img_vector_blue_gray_900_01_221x35.svg"
                    alt="vector_SeventyFour"
                  />
                </div>
                <Img
                  className="absolute h-[221px] inset-y-[0] my-auto right-[4%]"
                  src="images/img_vector_blue_gray_900_01_221x35.svg"
                  alt="vector_SeventyFive"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-between w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.aprTwo}
                </Text>
              </div>
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.mayTwo}
              </Text>
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.junTwo}
              </Text>
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.julTwo}
              </Text>
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.augTwo}
              </Text>
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.sepTwo}
              </Text>
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.octTwo}
              </Text>
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.novTwo}
              </Text>
              <Text
                className="text-blue_gray-100 text-sm"
                size="txtRobotoRegular14"
              >
                {props?.decTwo}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GraphsTypemixedchart.defaultProps = {
  fivehundredTwo: "500",
  fourhundredTwo: "400",
  threehundredTwo: "300",
  twohundredTwo: "200",
  onehundredTwo: "100",
  zeroFour: "0",
  aprTwo: "Apr",
  mayTwo: "May",
  junTwo: "Jun",
  julTwo: "Jul",
  augTwo: "Aug",
  sepTwo: "Sep",
  octTwo: "Oct",
  novTwo: "Nov",
  decTwo: "Dec",
};

export default GraphsTypemixedchart;
