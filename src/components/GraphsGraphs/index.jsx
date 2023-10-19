import React from "react";

import { Img, Line, Text } from "components";

const GraphsGraphs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-[99%] md:w-full">
            <div className="flex flex-col gap-[27px] items-center justify-start w-[3%] md:w-full">
              <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.fivehundred}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.fourhundred}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.threehundred}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.twohundred}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.onehundred}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[13px] items-center justify-start md:mt-0 mt-[7px] w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row gap-3 items-end justify-between w-full">
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[213px]">
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.zero}
                  </Text>
                </div>
                <div className="h-[231px] md:h-[404px] relative w-[98%] md:w-full">
                  <div className="absolute h-[231px] md:h-[404px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto w-full">
                      <div className="md:h-[227px] h-[231px] relative w-[88%] md:w-full">
                        <div className="absolute h-[227px] inset-[0] justify-center m-auto w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              {!!props?.brightness ? (
                                <Img
                                  className="h-[7px] mt-[197px]"
                                  alt="brightness"
                                  src={props?.brightness}
                                />
                              ) : null}
                              <Line className="bg-blue_gray-50 h-[227px] w-px" />
                              <Img
                                className="h-[227px]"
                                alt="vector_One"
                                src={props?.vectorOne}
                              />
                              <Img
                                className="h-[227px]"
                                alt="vector_Two"
                                src={props?.vectorTwo}
                              />
                              <Img
                                className="h-[227px]"
                                alt="vector_Three"
                                src={props?.vectorThree}
                              />
                            </div>
                          </div>
                          {!!props?.brightnessOne ? (
                            <Img
                              className="absolute bottom-[17%] h-[7px] left-[14%]"
                              alt="brightness_One"
                              src={props?.brightnessOne}
                            />
                          ) : null}
                        </div>
                        <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-end justify-start mx-auto w-[72%]">
                          <div className="flex flex-col gap-[19px] items-center justify-start w-[2%] md:w-full">
                            {!!props?.vectorFour ? (
                              <Img
                                className="h-[7px]"
                                alt="vector_Four"
                                src={props?.vectorFour}
                              />
                            ) : null}
                            {!!props?.eye ? (
                              <Img
                                className="h-[7px]"
                                alt="eye"
                                src={props?.eye}
                              />
                            ) : null}
                          </div>
                          <div className="flex flex-col items-end justify-start mt-2.5 w-[81%] md:w-full">
                            <div className="flex flex-row items-start justify-start mr-[101px] w-[76%] md:w-full">
                              {!!props?.vectorFive ? (
                                <Img
                                  className="h-[7px] mb-1"
                                  alt="vector_Five"
                                  src={props?.vectorFive}
                                />
                              ) : null}
                              {!!props?.eyeOne ? (
                                <Img
                                  className="h-[7px] ml-48 mt-1"
                                  alt="eye_One"
                                  src={props?.eyeOne}
                                />
                              ) : null}
                              {!!props?.eyeTwo ? (
                                <Img
                                  className="h-[7px] ml-[90px] mt-1"
                                  alt="eye_Two"
                                  src={props?.eyeTwo}
                                />
                              ) : null}
                            </div>
                            {!!props?.vectorSix ? (
                              <Img
                                className="h-[7px] mt-[9px]"
                                alt="vector_Six"
                                src={props?.vectorSix}
                              />
                            ) : null}
                            <div className="flex flex-col gap-7 items-start justify-start mt-1.5 w-[76%] md:w-full">
                              {!!props?.vectorSeven ? (
                                <Img
                                  className="h-[7px]"
                                  alt="vector_Seven"
                                  src={props?.vectorSeven}
                                />
                              ) : null}
                              <div className="flex flex-row items-center justify-between w-full">
                                {!!props?.eyeThree ? (
                                  <Img
                                    className="h-[7px]"
                                    alt="eye_Three"
                                    src={props?.eyeThree}
                                  />
                                ) : null}
                                {!!props?.brightnessTwo ? (
                                  <Img
                                    className="h-[7px]"
                                    alt="brightness_Two"
                                    src={props?.brightnessTwo}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start mr-[101px] mt-3.5 w-[81%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              {!!props?.eyeFour ? (
                                <Img
                                  className="h-[7px]"
                                  alt="eye_Four"
                                  src={props?.eyeFour}
                                />
                              ) : null}
                              {!!props?.brightnessThree ? (
                                <Img
                                  className="h-[7px]"
                                  alt="brightness_Three"
                                  src={props?.brightnessThree}
                                />
                              ) : null}
                              {!!props?.brightnessFour ? (
                                <Img
                                  className="h-[7px]"
                                  alt="brightness_Four"
                                  src={props?.brightnessFour}
                                />
                              ) : null}
                            </div>
                            {!!props?.brightnessFive ? (
                              <Img
                                className="h-[7px] md:ml-[0] ml-[101px]"
                                alt="brightness_Five"
                                src={props?.brightnessFive}
                              />
                            ) : null}
                            <div className="flex flex-row items-start justify-start mt-1.5 w-[76%] md:w-full">
                              {!!props?.vectorEight ? (
                                <Img
                                  className="h-[7px] mb-1"
                                  alt="vector_Eight"
                                  src={props?.vectorEight}
                                />
                              ) : null}
                              {!!props?.eyeFive ? (
                                <Img
                                  className="h-[7px] mb-1 ml-[91px]"
                                  alt="eye_Five"
                                  src={props?.eyeFive}
                                />
                              ) : null}
                              {!!props?.brightnessSix ? (
                                <Img
                                  className="h-[7px] ml-48 mt-1"
                                  alt="brightness_Six"
                                  src={props?.brightnessSix}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                        {!!props?.vectorNine ? (
                          <Img
                            className="absolute h-[7px] right-[42%] top-[0]"
                            alt="vector_Nine"
                            src={props?.vectorNine}
                          />
                        ) : null}
                        {!!props?.brightnessSeven ? (
                          <Img
                            className="absolute bottom-[27%] h-[7px] right-[0]"
                            alt="brightness_Seven"
                            src={props?.brightnessSeven}
                          />
                        ) : null}
                        {!!props?.vectorTen ? (
                          <Img
                            className="absolute bottom-[46%] h-[7px] right-[0]"
                            alt="vector_Ten"
                            src={props?.vectorTen}
                          />
                        ) : null}
                        {!!props?.eyeSix ? (
                          <Img
                            className="absolute bottom-[8%] h-[7px] left-[0]"
                            alt="eye_Six"
                            src={props?.eyeSix}
                          />
                        ) : null}
                        {!!props?.vectorEleven ? (
                          <Img
                            className="absolute bottom-[12%] h-[7px] left-[0]"
                            alt="vector_Eleven"
                            src={props?.vectorEleven}
                          />
                        ) : null}
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[2%] md:w-full">
                        {!!props?.vectorTwelve ? (
                          <Img
                            className="h-[7px]"
                            alt="vector_Twelve"
                            src={props?.vectorTwelve}
                          />
                        ) : null}
                        {!!props?.eyeSeven ? (
                          <Img
                            className="h-[7px] mt-9"
                            alt="eye_Seven"
                            src={props?.eyeSeven}
                          />
                        ) : null}
                        {!!props?.brightnessEight ? (
                          <Img
                            className="h-[7px] mt-20"
                            alt="brightness_Eight"
                            src={props?.brightnessEight}
                          />
                        ) : null}
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[9%] h-[74px] inset-x-[0] mx-auto"
                      alt="vector_Thirteen"
                      src={props?.vectorThirteen}
                    />
                    <Img
                      className="absolute bottom-[9%] h-[162px] inset-x-[0] mx-auto"
                      alt="vector_Fourteen"
                      src={props?.vectorFourteen}
                    />
                  </div>
                  <Img
                    className="absolute h-[207px] inset-x-[0] mx-auto top-[1%]"
                    alt="vector_Fifteen"
                    src={props?.vectorFifteen}
                  />
                  <Img
                    className="absolute h-[227px] inset-[0] justify-center m-auto"
                    alt="vector_Sixteen"
                    src={props?.vectorSixteen}
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-100 text-sm"
                    size="txtRobotoRegular14"
                  >
                    {props?.apr}
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.may}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.jun}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.jul}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.aug}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.sep}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.oct}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.nov}
                </Text>
                <Text
                  className="text-blue_gray-100 text-sm"
                  size="txtRobotoRegular14"
                >
                  {props?.dec}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GraphsGraphs.defaultProps = {
  fivehundred: "500",
  fourhundred: "400",
  threehundred: "300",
  twohundred: "200",
  onehundred: "100",
  zero: "0",
  vectorOne: "images/img_vector_blue_gray_50_227x101.svg",
  vectorTwo: "images/img_vector_blue_gray_50_227x101.svg",
  vectorThree: "images/img_vector_blue_gray_50_227x101.svg",
  vectorThirteen: "images/img_vector_cyan_400_74x814.svg",
  vectorFourteen: "images/img_vector_blue_gray_900.svg",
  vectorFifteen: "images/img_vector_purple_500_207x814.svg",
  vectorSixteen: "images/img_vector_blue_gray_50_227x814.svg",
  apr: "Apr",
  may: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Aug",
  sep: "Sep",
  oct: "Oct",
  nov: "Nov",
  dec: "Dec",
};

export default GraphsGraphs;
