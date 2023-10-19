import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const StepCoverPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-helvetica sm:gap-10 md:gap-10 gap-[60px] justify-start mx-auto pb-4 pl-4 w-full">
        <div className="flex flex-col items-end md:ml-[0] ml-[159px] md:px-5 w-[92%] md:w-full">
          <div className="h-[866px] relative w-full">
            <div className="flex flex-col h-full items-center justify-start ml-6 mt-[166px] sm:px-5 px-6 py-12 w-auto">
              <div className="flex flex-col gap-6 items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold40Bluegray900"
                  >
                    2-Step Verification
                  </Text>
                </div>
                <Img
                  className="h-12 w-[286px]"
                  src="images/img_inputs_blue_gray_100.svg"
                  alt="inputs"
                />
                <Button
                  className="cursor-pointer font-bold h-10 leading-[normal] text-[13px] text-center uppercase w-[356px]"
                  shape="round"
                  size="lg"
                  variant="gradient"
                  color="yellow_600_red_500_01"
                >
                  Send Code
                </Button>
                <Text
                  className="text-base text-blue_gray-400 text-center w-auto"
                  size="txtHelvetica16Bluegray400"
                >
                  <span className="text-blue_gray-400 font-helvetica font-normal">
                    <>Haven&#39;t received it? </>
                  </span>
                  <span className="text-blue_gray-900 font-helvetica font-normal">
                    Resend a new code
                  </span>
                  <span className="text-blue_gray-400 font-helvetica font-normal">
                    .
                  </span>
                </Text>
              </div>
            </div>
            <div className="absolute font-notosans h-[866px] inset-[0] justify-center m-auto w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] rotate-[-10deg] rounded-bl-[12px] w-[64%]">
                <Img
                  className="h-[866px] md:h-auto object-cover rounded-bl-[12px] w-full"
                  src="images/img_div.png"
                  alt="div"
                />
              </div>
              <Header className="absolute bg-white-A700_cc flex md:flex-col md:gap-10 items-center justify-between left-[0] sm:px-5 px-6 py-2 rounded-[28px] shadow-bs8 top-[2%] w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center md:ml-[0] ml-[159px] md:px-5 px-[124px] w-[92%] md:w-full">
          <div className="flex flex-col gap-8 items-center justify-start md:px-10 sm:px-5 px-[228px] w-[89%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-12 items-center justify-start w-auto sm:w-full">
              <Text
                className="text-base text-blue_gray-400 text-center w-auto"
                size="txtInterRegular16"
              >
                Company
              </Text>
              <Text
                className="text-base text-blue_gray-400 text-center w-auto"
                size="txtInterRegular16"
              >
                About Us
              </Text>
              <Text
                className="text-base text-blue_gray-400 text-center w-auto"
                size="txtInterRegular16"
              >
                Team
              </Text>
              <Text
                className="text-base text-blue_gray-400 text-center w-auto"
                size="txtInterRegular16"
              >
                Products
              </Text>
              <Text
                className="text-base text-blue_gray-400 text-center w-auto"
                size="txtInterRegular16"
              >
                Blog
              </Text>
              <Text
                className="text-base text-blue_gray-400 text-center w-auto"
                size="txtInterRegular16"
              >
                Pricing
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center pb-[3px] px-[3px] w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[317px] md:mt-0 mt-0.5 w-[18px]"
                src="images/img_clock_blue_gray_400.svg"
                alt="clock"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[26px] pr-[0.61px] w-auto">
                <Img
                  className="h-[21px] w-[18px]"
                  src="images/img_twitter_blue_gray_400.svg"
                  alt="twitter"
                />
              </div>
              <Img
                className="h-[18px] md:ml-[0] ml-[26px] md:mt-0 mt-0.5 w-4"
                src="images/img_clock_blue_gray_400.svg"
                alt="clock_One"
              />
              <Img
                className="h-[18px] md:ml-[0] ml-[26px] md:mt-0 mt-0.5 w-[18px]"
                src="images/img_clock_blue_gray_400.svg"
                alt="clock_Two"
              />
              <Img
                className="h-[18px] md:ml-[0] ml-[26px] mr-[342px] md:mt-0 mt-0.5 w-[18px]"
                src="images/img_clock_blue_gray_400.svg"
                alt="clock_Three"
              />
            </div>
            <Text
              className="text-base text-blue_gray-400 text-center"
              size="txtInterRegular16"
            >
              Copyright © 2022 Soft by Creative Tim.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepCoverPage;
