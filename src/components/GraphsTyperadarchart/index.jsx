import React from "react";

import { Img, Text } from "components";

const GraphsTyperadarchart = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
            <div className="flex sm:flex-1 flex-col md:gap-10 gap-[248px] items-center justify-start w-[7%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-[10px] text-blue_gray-400_03"
                  size="txtRobotoRegular10"
                >
                  {props?.history}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-[10px] text-blue_gray-400_03"
                  size="txtRobotoRegular10"
                >
                  {props?.biology}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[7px] items-center justify-start w-[85%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-[10px] text-blue_gray-400_03"
                    size="txtRobotoRegular10"
                  >
                    {props?.userlanguage}
                  </Text>
                </div>
                <div className="md:h-[493px] h-[501px] mt-1 relative w-full">
                  <div className="absolute md:h-[489px] h-[492px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="absolute h-[489px] inset-[0] justify-center m-auto"
                      src="images/img_group_blue_gray_100_04.svg"
                      alt="group_One"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[271px] h-[374px] left-[0] p-5 w-[93%] sm:w-full"
                      style={{
                        backgroundImage: "url('images/img_group177.svg')",
                      }}
                    >
                      <div className="bg-red-100_87 h-[7px] ml-auto mr-[156px] mt-[68px] outline outline-[1px] outline-blue_gray-100_87 rounded-[3px] w-[7px]"></div>
                      <Img
                        className="absolute h-[271px] left-[9%] top-[5%]"
                        src="images/img_group_red_a700.svg"
                        alt="group_Two"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[25px] inset-x-[0] items-center justify-start mx-auto top-[0]">
                    <Text
                      className="text-gray-600_01 text-xs"
                      size="txtRobotoRegular12"
                    >
                      {props?.eightyOne}
                    </Text>
                    <Text
                      className="text-gray-600_01 text-xs"
                      size="txtRobotoRegular12"
                    >
                      {props?.seventyfive}
                    </Text>
                    <Text
                      className="text-gray-600_01 text-xs"
                      size="txtRobotoRegular12"
                    >
                      {props?.seventyOne}
                    </Text>
                    <Text
                      className="text-gray-600_01 text-xs"
                      size="txtRobotoRegular12"
                    >
                      {props?.sixtyfive}
                    </Text>
                    <Text
                      className="text-gray-600_01 text-xs"
                      size="txtRobotoRegular12"
                    >
                      {props?.sixtyThree}
                    </Text>
                    <Text
                      className="text-gray-600_01 text-xs"
                      size="txtRobotoRegular12"
                    >
                      {props?.fiftyfive}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-[10px] text-blue_gray-400_03"
                  size="txtRobotoRegular10"
                >
                  {props?.chemistry}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col md:gap-10 gap-[250px] items-center justify-start w-[7%] sm:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-[10px] text-blue_gray-400_03"
                  size="txtRobotoRegular10"
                >
                  {props?.maths}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-[10px] text-blue_gray-400_03"
                  size="txtRobotoRegular10"
                >
                  {props?.physics}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GraphsTyperadarchart.defaultProps = {
  history: "History",
  biology: "Biology",
  userlanguage: "English",
  eightyOne: "80",
  seventyfive: "75",
  seventyOne: "70",
  sixtyfive: "65",
  sixtyThree: "60",
  fiftyfive: "55",
  chemistry: "Chemistry",
  maths: "Maths",
  physics: "Physics",
};

export default GraphsTyperadarchart;
