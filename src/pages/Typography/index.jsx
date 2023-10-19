import React from "react";

import { Img, Line, List, Text } from "components";

const TypographyPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[108px] items-center justify-end mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1443px] w-full">
          <div className="bg-purple-500 h-3 w-full"></div>
          <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1283px] mx-auto w-full">
              <div className="flex flex-row gap-8 items-center justify-start w-auto">
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
                    Style
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtInterRegular24"
                  >
                    <>-&gt;</>
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold24"
                  >
                    Typography
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
            <div className="flex flex-col font-helvetica items-start justify-start max-w-[1283px] mx-auto w-full">
              <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold40"
                  >
                    Typography
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-400 text-lg w-full"
                  size="txtHelvetica18"
                >
                  Typography style guide pack for Soft UI Dashboard
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-helvetica md:gap-10 gap-16 h-[2543px] md:h-auto items-start justify-start max-w-[1277px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 w-auto"
                size="txtNotoSansRegular48"
              >
                Helvetica
              </Text>
              <Text
                className="md:text-5xl text-[112px] text-gray-900_01 w-auto"
                size="txtHelvetica112"
              >
                Ag
              </Text>
            </div>
            <Text
              className="leading-[60.00px] max-w-[1277px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 tracking-[-0.96px]"
              size="txtHelvetica48"
            >
              <>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789 !@#$%^&*()
              </>
            </Text>
          </div>
          <List
            className="flex flex-col font-notosans gap-8 items-start w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtNotoSansRegular16"
                  >
                    Heading 1
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtNotoSansRegular14"
                  >
                    Font size: 40px | Line height: 125%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col font-helvetica items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold40"
                >
                  Heading 1
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtNotoSansRegular16"
                  >
                    Heading 2
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtNotoSansRegular14"
                  >
                    Font size: 36px | Line height: 130%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col font-helvetica items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold36"
                >
                  Heading 2
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Heading 3
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 30px | Line height: 137%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold30"
                >
                  Heading 3
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Heading 4
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 24px | Line height: 137%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold24"
                >
                  Heading 4
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Heading 5
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 20px | Line height: 137%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-gray-900_01 text-xl tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold20"
                >
                  Heading 5
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Heading 6
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 16px | Line height: 162.5%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900_01 tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold16"
                >
                  Heading 6
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Large
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 18px | Line height: 140%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                <Text
                  className="leading-[140.00%] text-gray-900_01 text-lg"
                  size="txtHelvetica18Gray90001"
                >
                  <>
                    Large
                    <br />
                    Regular
                  </>
                </Text>
                <Text
                  className="leading-[140.00%] text-gray-900_01 text-lg"
                  size="txtHelveticaBold18"
                >
                  <>
                    Large
                    <br />
                    Bold
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Body
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 16px | Line height: 150%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                <Text
                  className="leading-[150.00%] text-base text-gray-900_01"
                  size="txtHelvetica16Gray90001"
                >
                  <>
                    Body
                    <br />
                    Regular
                  </>
                </Text>
                <Text
                  className="leading-[150.00%] text-base text-gray-900_01"
                  size="txtHelveticaBold16"
                >
                  <>
                    Body
                    <br />
                    Bold
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Text small
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 14px | Line height: 150%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                <Text
                  className="leading-[150.00%] text-gray-900_01 text-sm"
                  size="txtHelvetica14Gray90001"
                >
                  <>
                    Small
                    <br />
                    Regular
                  </>
                </Text>
                <Text
                  className="leading-[150.00%] text-gray-900_01 text-sm"
                  size="txtHelveticaBold14"
                >
                  <>
                    Small
                    <br />
                    Bold
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Text xtra small
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 12px | Line height: 150%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                <Text
                  className="leading-[125.00%] text-gray-900_01 text-xs"
                  size="txtHelvetica12"
                >
                  <>
                    Text xs
                    <br />
                    Regular
                  </>
                </Text>
                <Text
                  className="leading-[16.00px] text-gray-900_01 text-xs"
                  size="txtHelveticaBold12"
                >
                  <>
                    Text xs
                    <br />
                    Bold
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-helvetica gap-8 items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtHelvetica16"
                  >
                    Text xx small
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtOpenSansRomanRegular14"
                  >
                    Font size: 10px | Line height: 150%
                  </Text>
                </div>
                <Line className="bg-gray-400 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[150.00%] text-[10px] text-gray-900_01"
                  size="txtHelveticaBold10"
                >
                  <>
                    Text xxs
                    <br />
                    Bold
                  </>
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default TypographyPage;
