import React from "react";

import { Img, Line, Text } from "components";

const GraphsCharts = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
          size="txtHelveticaBold16Bluegray900"
        >
          {props?.title}
        </Text>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-[5px] items-center justify-between w-[99%] md:w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start w-[5%] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    {!!props?.fivehundredThree ? (
                      <Text
                        className="text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        {props?.fivehundredThree}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    {!!props?.fourhundredThree ? (
                      <Text
                        className="text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        {props?.fourhundredThree}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    {!!props?.threehundredFour ? (
                      <Text
                        className="text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        {props?.threehundredFour}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    {!!props?.twohundredFour ? (
                      <Text
                        className="text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        {props?.twohundredFour}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    {!!props?.onehundredFive ? (
                      <Text
                        className="text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        {props?.onehundredFive}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[15px]">
                    {!!props?.zeroSeven ? (
                      <Text
                        className="text-blue_gray-100 text-sm"
                        size="txtRobotoRegular14"
                      >
                        {props?.zeroSeven}
                      </Text>
                    ) : null}
                  </div>
                </div>
                <div className="h-[231px] sm:h-[404px] relative w-[95%] sm:w-full">
                  <div className="absolute h-[231px] sm:h-[404px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-full inset-[0] items-start justify-between m-auto w-full">
                      <div className="md:h-[227px] h-[231px] relative w-[88%] sm:w-full">
                        <div className="absolute h-[227px] inset-[0] justify-center m-auto w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              {!!props?.vectorSeventySeven ? (
                                <div className="bg-cyan-400 h-[7px] mb-[23px] mt-[197px] rounded-[3px] w-[7px]"></div>
                              ) : null}
                              {!!props?.vectorSeventyEight ? (
                                <Line className="bg-blue_gray-50 h-[227px] w-px" />
                              ) : null}
                              {!!props?.vectorSeventyNine ? (
                                <Img
                                  className="h-[227px]"
                                  alt="vector_SeventyNine"
                                  src={props?.vectorSeventyNine}
                                />
                              ) : null}
                              {!!props?.vectorEighty ? (
                                <Img
                                  className="h-[227px]"
                                  alt="vector_Eighty"
                                  src={props?.vectorEighty}
                                />
                              ) : null}
                              {!!props?.vectorEightyOne ? (
                                <Img
                                  className="h-[227px]"
                                  alt="vector_EightyOne"
                                  src={props?.vectorEightyOne}
                                />
                              ) : null}
                            </div>
                          </div>
                          {!!props?.vectorEightyTwo ? (
                            <div className="absolute bg-cyan-400 bottom-[17%] h-[7px] left-[14%] rounded-[3px] w-[7px]"></div>
                          ) : null}
                        </div>
                        <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-end justify-start mx-auto w-[72%]">
                          <div className="flex flex-col gap-[19px] items-center justify-start w-[3%] md:w-full">
                            {!!props?.vectorEightyThree ? (
                              <div className="bg-purple-500 h-[7px] rounded-[3px] w-[7px]"></div>
                            ) : null}
                            {!!props?.vectorEightyFour ? (
                              <div className="bg-blue_gray-900_01 h-[7px] rounded-[3px] w-[7px]"></div>
                            ) : null}
                          </div>
                          <div className="flex flex-col items-end justify-start mt-2.5 w-[81%] md:w-full">
                            <div className="flex flex-row items-start justify-start mr-[66px] w-[76%] md:w-full">
                              {!!props?.vectorEightyFive ? (
                                <div className="bg-purple-500 h-[7px] mb-1 rounded-[3px] w-[7px]"></div>
                              ) : null}
                              {!!props?.vectorEightySix ? (
                                <div className="bg-blue_gray-900_01 h-[7px] ml-[125px] mt-1 rounded-[3px] w-[7px]"></div>
                              ) : null}
                              {!!props?.vectorEightySeven ? (
                                <div className="bg-blue_gray-900_01 h-[7px] ml-[59px] mt-1 rounded-[3px] w-[7px]"></div>
                              ) : null}
                            </div>
                            {!!props?.vectorEightyEight ? (
                              <div className="bg-purple-500 h-[7px] mr-[66px] mt-[9px] rounded-[3px] w-[7px]"></div>
                            ) : null}
                            <div className="flex flex-col gap-7 items-start justify-start mt-1.5 w-[76%] md:w-full">
                              {!!props?.vectorEightyNine ? (
                                <div className="bg-purple-500 h-[7px] rounded-[3px] w-[7px]"></div>
                              ) : null}
                              <div className="flex flex-row items-center justify-between w-full">
                                {!!props?.vectorNinety ? (
                                  <div className="bg-blue_gray-900_01 h-[7px] rounded-[3px] w-[7px]"></div>
                                ) : null}
                                {!!props?.vectorNinetyOne ? (
                                  <div className="bg-cyan-400 h-[7px] rounded-[3px] w-[7px]"></div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start mr-[66px] mt-3.5 w-[81%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              {!!props?.vectorNinetyTwo ? (
                                <div className="bg-blue_gray-900_01 h-[7px] rounded-[3px] w-[7px]"></div>
                              ) : null}
                              {!!props?.vectorNinetyThree ? (
                                <div className="bg-cyan-400 h-[7px] rounded-[3px] w-[7px]"></div>
                              ) : null}
                              {!!props?.vectorNinetyFour ? (
                                <div className="bg-cyan-400 h-[7px] rounded-[3px] w-[7px]"></div>
                              ) : null}
                            </div>
                            {!!props?.vectorNinetyFive ? (
                              <div className="bg-cyan-400 h-[7px] md:ml-[0] ml-[66px] rounded-[3px] w-[7px]"></div>
                            ) : null}
                            <div className="flex flex-row items-start justify-start mt-1.5 w-[76%] md:w-full">
                              {!!props?.vectorNinetySix ? (
                                <div className="bg-purple-500 h-[7px] mb-1 rounded-[3px] w-[7px]"></div>
                              ) : null}
                              {!!props?.vectorNinetySeven ? (
                                <div className="bg-blue_gray-900_01 h-[7px] mb-1 ml-[59px] rounded-[3px] w-[7px]"></div>
                              ) : null}
                              {!!props?.vectorNinetyEight ? (
                                <div className="bg-cyan-400 h-[7px] ml-[125px] mt-1 rounded-[3px] w-[7px]"></div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        {!!props?.vectorNinetyNine ? (
                          <div className="absolute bg-purple-500 h-[7px] right-[42%] rounded-[3px] top-[0] w-[7px]"></div>
                        ) : null}
                        {!!props?.vectorOneHundred ? (
                          <div className="absolute bg-cyan-400 bottom-[27%] h-[7px] right-[0] rounded-[3px] w-[7px]"></div>
                        ) : null}
                        {!!props?.vectorOneHundredOne ? (
                          <div className="absolute bg-purple-500 bottom-[46%] h-[7px] right-[0] rounded-[3px] w-[7px]"></div>
                        ) : null}
                        {!!props?.vectorOneHundredTwo ? (
                          <div className="absolute bg-blue_gray-900_01 bottom-[8%] h-[7px] left-[0] rounded-[3px] w-[7px]"></div>
                        ) : null}
                        {!!props?.vectorOneHundredThree ? (
                          <div className="absolute bg-purple-500 bottom-[12%] h-[7px] left-[0] rounded-[3px] w-[7px]"></div>
                        ) : null}
                      </div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[2%] sm:w-full">
                        {!!props?.vectorOneHundredFour ? (
                          <div className="bg-purple-500 h-[7px] rounded-[3px] w-[7px]"></div>
                        ) : null}
                        {!!props?.vectorOneHundredFive ? (
                          <div className="bg-blue_gray-900_01 h-[7px] mt-9 rounded-[3px] w-[7px]"></div>
                        ) : null}
                        {!!props?.vectorOneHundredSix ? (
                          <div className="bg-cyan-400 h-[7px] mt-20 rounded-[3px] w-[7px]"></div>
                        ) : null}
                      </div>
                    </div>
                    {!!props?.vectorOneHundredSeven ? (
                      <Img
                        className="absolute bottom-[9%] h-[74px] inset-x-[0] mx-auto"
                        alt="vector_OneHundredSeven"
                        src={props?.vectorOneHundredSeven}
                      />
                    ) : null}
                    {!!props?.vectorOneHundredEight ? (
                      <Img
                        className="absolute bottom-[9%] h-[162px] inset-x-[0] mx-auto"
                        alt="vector_OneHundredEight"
                        src={props?.vectorOneHundredEight}
                      />
                    ) : null}
                  </div>
                  {!!props?.vectorOneHundredNine ? (
                    <Img
                      className="absolute h-[207px] inset-x-[0] mx-auto top-[1%]"
                      alt="vector_OneHundredNine"
                      src={props?.vectorOneHundredNine}
                    />
                  ) : null}
                  {!!props?.vectorOneHundredTen ? (
                    <Img
                      className="absolute h-[227px] inset-[0] justify-center m-auto"
                      alt="vector_OneHundredTen"
                      src={props?.vectorOneHundredTen}
                    />
                  ) : null}
                </div>
              </div>
              <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  {!!props?.aprThree ? (
                    <Text
                      className="text-blue_gray-100 text-sm"
                      size="txtRobotoRegular14"
                    >
                      {props?.aprThree}
                    </Text>
                  ) : null}
                </div>
                {!!props?.mayThree ? (
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.mayThree}
                  </Text>
                ) : null}
                {!!props?.junThree ? (
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.junThree}
                  </Text>
                ) : null}
                {!!props?.julThree ? (
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.julThree}
                  </Text>
                ) : null}
                {!!props?.augThree ? (
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.augThree}
                  </Text>
                ) : null}
                {!!props?.sepThree ? (
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.sepThree}
                  </Text>
                ) : null}
                {!!props?.octThree ? (
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.octThree}
                  </Text>
                ) : null}
                {!!props?.novThree ? (
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.novThree}
                  </Text>
                ) : null}
                {!!props?.decThree ? (
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.decThree}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GraphsCharts.defaultProps = { title: "Line chart with gradient" };

export default GraphsCharts;
