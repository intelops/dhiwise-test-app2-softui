import React from "react";

import { Button, Img, Line, Text } from "components";
import GraphsCharts from "components/GraphsCharts";
import GraphsColumnNine from "components/GraphsColumnNine";
import GraphsGraphs from "components/GraphsGraphs";
import GraphsTypebarcharth from "components/GraphsTypebarcharth";
import GraphsTypebarchartv from "components/GraphsTypebarchartv";
import GraphsTypelinechart from "components/GraphsTypelinechart";
import GraphsTypemixedchart from "components/GraphsTypemixedchart";
import GraphsTypepolarchart from "components/GraphsTypepolarchart";
import GraphsTyperadarchart from "components/GraphsTyperadarchart";

const GraphsPage = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-inter items-center justify-start mx-auto pb-[286px] w-full">
        <div className="flex flex-col gap-[33px] items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[2121px] w-full">
            <div className="bg-purple-500 h-3 w-full"></div>
            <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1961px] mx-auto w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-[31px] w-24"
                    src="images/img_logoctwhite1.svg"
                    alt="logoctwhiteOne"
                  />
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtNotoSansRegular24"
                    >
                      Components
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterRegular24"
                    >
                      <>-&gt;</>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold24Gray900"
                    >
                      General
                    </Text>
                  </div>
                </div>
                <a
                  href="www.creative-tim.com"
                  className="text-blue_gray-400 text-xl w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text size="txtInterRegular20">www.creative-tim.com</Text>
                </a>
              </div>
              <div className="flex flex-col font-helvetica items-start justify-start max-w-[1961px] mx-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold40Bluegray900"
                    >
                      Graphs
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[100px] rounded"
                      leftIcon={
                        <Img
                          className="h-[9px] mt-px mb-[3px] mr-1"
                          src="images/img_checkmark_light_green_a700_01.svg"
                          alt="checkmark"
                        />
                      }
                      shape="round"
                      color="light_green_A100"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-bold text-center text-xs">
                        Auto Layout
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[103px] rounded"
                      leftIcon={
                        <Img
                          className="h-[9px] mt-px mb-[3px] mr-1"
                          src="images/img_checkmark_light_green_a700_01.svg"
                          alt="checkmark"
                        />
                      }
                      shape="round"
                      color="light_green_A100"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-bold text-center text-xs">
                        Components
                      </div>
                    </Button>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-lg w-full"
                    size="txtHelvetica18"
                  >
                    Menus and other general components used in the theme.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-roboto md:gap-10 gap-[68px] items-start justify-start max-w-[1955px] mx-auto md:px-5 w-full">
            <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2 p-[15px] rounded-[5px] w-[65%] md:w-full">
              <div className="flex flex-col gap-[54px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <GraphsGraphs
                    className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full"
                    vectorOne="images/img_vector.svg"
                    vectorTwo="images/img_vector.svg"
                    vectorThree="images/img_vector.svg"
                    vectorThirteen="images/img_vector_cyan_400.svg"
                    vectorFourteen="images/img_vector_blue_gray_900_01.svg"
                    vectorFifteen="images/img_vector_purple_500.svg"
                    vectorSixteen="images/img_vector_blue_gray_50.svg"
                  />
                  <GraphsTypelinechart className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full" />
                </div>
                <div className="flex flex-col gap-[59px] items-start justify-start w-[96%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-full">
                    <GraphsTypebarchartv className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full" />
                    <GraphsTypebarcharth className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full" />
                  </div>
                  <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-[97%] md:w-full">
                    <GraphsTypemixedchart className="flex flex-col items-center justify-start w-[52%] md:w-full" />
                    <GraphsColumnNine className="flex flex-col items-center justify-start w-[48%] md:w-full" />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start w-[52%] md:w-full">
                    <Img
                      className="h-[294px] w-[294px]"
                      src="images/img_typedoughnatchart.svg"
                      alt="typedoughnatcha"
                    />
                    <Img
                      className="h-[294px] w-[294px]"
                      src="images/img_typepiechart.svg"
                      alt="typepiechart"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[17px] items-center justify-start w-[89%] md:w-full">
                    <GraphsTyperadarchart className="flex flex-col items-center justify-start w-[49%] md:w-full" />
                    <GraphsTypepolarchart className="flex flex-col font-opensans items-center justify-start w-1/2 md:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <GraphsCharts
              className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col font-helvetica gap-4 items-start justify-start mb-[1554px] p-6 sm:px-5 rounded-[12px] shadow-bs w-auto md:w-full"
              fivehundredThree="500"
              fourhundredThree="400"
              threehundredFour="300"
              twohundredFour="200"
              onehundredFive="100"
              zeroSeven="0"
              vectorSeventyNine="images/img_vector.svg"
              vectorEighty="images/img_vector.svg"
              vectorEightyOne="images/img_vector.svg"
              vectorOneHundredSeven="images/img_vector_cyan_400.svg"
              vectorOneHundredEight="images/img_vector_blue_gray_900_01.svg"
              vectorOneHundredNine="images/img_vector_purple_500.svg"
              vectorOneHundredTen="images/img_vector_blue_gray_50.svg"
              aprThree="Apr"
              mayThree="May"
              junThree="Jun"
              julThree="Jul"
              augThree="Aug"
              sepThree="Sep"
              octThree="Oct"
              novThree="Nov"
              decThree="Dec"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphsPage;
