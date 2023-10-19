import React from "react";

import { Button, Img, Input, List, Text } from "components";
import GeneralInput from "components/GeneralInput";
import Header1 from "components/Header1";

const LockBasicPage = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-notosans sm:gap-10 md:gap-10 gap-[281px] items-center justify-start mx-auto p-4 w-full">
        <div className="md:h-[457px] h-[629px] max-w-[1888px] mx-auto md:px-5 relative w-full">
          <div className="absolute h-[457px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              className="h-[457px] m-auto max-w-[1888px] object-cover rounded-[12px] w-[1888px] md:w-full"
              src="images/img_div_2.png"
              alt="div"
            />
            <Header1 className="absolute flex md:flex-col md:gap-10 inset-x-[0] items-center justify-between mx-auto sm:px-5 px-6 py-2 rounded-[28px] shadow-bs8 top-[3%] w-full" />
          </div>
          <div className="absolute bg-white-A700 border border-gray-300 border-solid bottom-[0] flex flex-col gap-4 inset-x-[0] items-center justify-center mx-auto px-4 py-6 rounded-[15px] shadow-bs w-auto">
            <Img
              className="h-[110px] md:h-auto object-cover rounded-[12px] w-[110px]"
              src="images/img_2.png"
              alt="imgplaceholder"
            />
            <div className="flex flex-col gap-6 items-center justify-center w-[360px]">
              <div className="flex flex-col font-helvetica gap-4 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.80px] w-full"
                  size="txtHelveticaBold24Bluegray900"
                >
                  Mike Priesler
                </Text>
                <Text
                  className="text-base text-blue_gray-400 text-center w-full"
                  size="txtHelvetica16Bluegray400"
                >
                  Enter your password to unlock your account
                </Text>
              </div>
              <GeneralInput className="flex flex-col font-helvetica gap-1 items-start justify-center w-full" />
              <Button
                className="cursor-pointer font-notosans font-semibold h-10 leading-[normal] min-w-[102px] text-[13px] text-center"
                shape="round"
                size="lg"
                variant="gradient"
                color="blue_gray_700_01_gray_900_02"
              >
                UNLOCK
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter gap-8 items-center justify-start max-w-[1320px] mx-auto md:px-5 px-[228px] w-full">
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

export default LockBasicPage;
