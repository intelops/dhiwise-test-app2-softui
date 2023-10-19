import React from "react";

import { Button, Img, Input, List, Text } from "components";
import GeneralInput from "components/GeneralInput";
import Header from "components/Header";

const RestBasicPage = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-notosans items-center justify-end mx-auto p-4 w-full">
        <Header className="bg-white-A700_cc flex md:flex-col md:gap-10 items-center justify-between mt-[13px] md:px-5 px-6 py-2 rounded-[28px] shadow-bs8 w-full" />
        <div className="bg-white-A700 flex flex-col font-helvetica gap-[30px] items-start justify-center mt-[120px] outline outline-[0.5px] outline-gray-300 px-4 md:px-5 py-6 rounded-[12px] shadow-bs w-[480px] sm:w-full">
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px] w-auto"
              size="txtHelveticaBold30Bluegray900"
            >
              Reset password
            </Text>
            <Text
              className="text-base text-blue_gray-400 text-center w-full"
              size="txtNotoSansRegular16Bluegray400"
            >
              You will receive an e-mail in maximum 60 sec
            </Text>
          </div>
          <GeneralInput className="flex flex-col gap-1 items-start justify-center w-full" />
          <Button
            className="cursor-pointer font-bold h-10 leading-[normal] text-[13px] text-center uppercase w-full"
            shape="round"
            size="lg"
            variant="gradient"
            color="blue_gray_700_01_gray_900_02"
          >
            <>Send\&#96;</>
          </Button>
        </div>
        <div className="flex flex-col font-inter gap-8 items-center justify-start max-w-[1320px] mt-[456px] mx-auto md:px-5 px-[228px] w-full">
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
    </>
  );
};

export default RestBasicPage;
