import React from "react";

import { Img, Text } from "components";

const GraphsColumnNine = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end p-[3px] w-full">
          <div className="flex flex-col items-center justify-start mt-1.5 w-[97%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-[9px] items-end justify-between w-[99%] md:w-full">
              <div className="flex flex-col gap-[41px] items-start justify-start sm:mt-0 mt-[19px] w-[5%] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-[13px] text-blue_gray-100"
                    size="txtRobotoRegular13"
                  >
                    {props?.threehundredThree}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-[13px] text-blue_gray-100"
                    size="txtRobotoRegular13"
                  >
                    {props?.twohundredThree}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-[13px] text-blue_gray-100"
                    size="txtRobotoRegular13"
                  >
                    {props?.onehundredThree}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start ml-3.5 md:ml-[0]">
                  <Text
                    className="text-[13px] text-blue_gray-100"
                    size="txtRobotoRegular13"
                  >
                    {props?.zeroFive}
                  </Text>
                </div>
              </div>
              <div className="h-[207px] md:h-[210px] mb-[3px] relative w-[94%] sm:w-full">
                <Img
                  className="h-[205px] m-auto"
                  src="images/img_lines.svg"
                  alt="lines"
                />
                <Img
                  className="absolute h-[207px] inset-[0] justify-center m-auto"
                  src="images/img_bubbles.svg"
                  alt="bubbles"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-between mt-1 w-[494px] sm:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-[13px] text-blue_gray-100"
                  size="txtRobotoRegular13"
                >
                  {props?.zeroSix}
                </Text>
              </div>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.tenFour}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.twentyTwo}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.thirtyTwo}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.fortyTwo}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.fiftyTwo}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.sixtyTwo}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.seventy}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.eighty}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100"
                size="txtRobotoRegular13"
              >
                {props?.ninety}
              </Text>
              <Text
                className="text-[13px] text-blue_gray-100 w-auto"
                size="txtRobotoRegular13"
              >
                {props?.onehundredFour}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GraphsColumnNine.defaultProps = {
  threehundredThree: "300",
  twohundredThree: "200",
  onehundredThree: "100",
  zeroFive: "0",
  zeroSix: "0",
  tenFour: "10",
  twentyTwo: "20",
  thirtyTwo: "30",
  fortyTwo: "40",
  fiftyTwo: "50",
  sixtyTwo: "60",
  seventy: "70",
  eighty: "80",
  ninety: "90",
  onehundredFour: "100",
};

export default GraphsColumnNine;
