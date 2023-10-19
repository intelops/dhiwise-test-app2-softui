import React from "react";

import { Img, Text } from "components";

const GraphsTypelinechart = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-between w-[98%] md:w-full">
                <div className="flex flex-col gap-[30px] items-end justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-100 text-sm"
                      size="txtRobotoRegular14"
                    >
                      {props?.fivehundredvalue}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-100 text-sm"
                      size="txtRobotoRegular14"
                    >
                      {props?.fourhundredvalue}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-100 text-sm"
                      size="txtRobotoRegular14"
                    >
                      {props?.threehundredvalue}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-100 text-sm"
                      size="txtRobotoRegular14"
                    >
                      {props?.twohundredvalue}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-100 text-sm"
                      size="txtRobotoRegular14"
                    >
                      {props?.onehundredvalue}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-100 text-sm"
                      size="txtRobotoRegular14"
                    >
                      {props?.zerovalue}
                    </Text>
                  </div>
                </div>
                <div className="h-[227px] relative w-[95%] sm:w-full">
                  <div className="h-[227px] m-auto w-full">
                    <Img
                      className="absolute h-[227px] inset-[0] justify-center m-auto"
                      src="images/img_group.svg"
                      alt="group"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[173px] inset-x-[0] items-center justify-start mx-auto pb-[3px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group176.png')",
                      }}
                    >
                      <Img
                        className="h-[168px]"
                        src="images/img_vector_blue_gray_900_01_168x528.svg"
                        alt="vector_ThirtyFour"
                      />
                    </div>
                    <Img
                      className="absolute h-[221px] inset-[0] justify-center m-auto object-cover"
                      src="images/img_intersect.png"
                      alt="intersect"
                    />
                  </div>
                  <Img
                    className="absolute h-[215px] inset-x-[0] mx-auto top-[0]"
                    src="images/img_vector_purple_500_215x529.svg"
                    alt="vector_ThirtyFive"
                  />
                </div>
              </div>
              <div className="flex flex-row sm:gap-[43px] items-start justify-between mt-1 w-[556px] sm:w-full">
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.aprvalue}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.mayvalue}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.junvalue}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.julvalue}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.augvalue}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.sepvalue}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.octvalue}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.novvalue}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm w-auto"
                  size="txtRobotoRegular14"
                >
                  {props?.decvalue}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GraphsTypelinechart.defaultProps = {
  fivehundredvalue: "500",
  fourhundredvalue: "400",
  threehundredvalue: "300",
  twohundredvalue: "200",
  onehundredvalue: "100",
  zerovalue: "0",
  aprvalue: "Apr",
  mayvalue: "May",
  junvalue: "Jun",
  julvalue: "Jul",
  augvalue: "Aug",
  sepvalue: "Sep",
  octvalue: "Oct",
  novvalue: "Nov",
  decvalue: "Dec",
};

export default GraphsTypelinechart;
