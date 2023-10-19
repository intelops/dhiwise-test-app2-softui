import React from "react";

import { Button, Img, List, Text } from "components";
import Header2 from "components/Header2";

const AuthenticationScreenError404Page = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-notosans items-center justify-start mx-auto p-4 w-full">
        <div className="flex flex-col md:gap-10 gap-[99px] items-center justify-start max-w-[1568px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[182px] items-center justify-start w-full">
            <Header2 className="bg-white-A700_cc flex md:flex-col md:gap-10 items-center justify-between sm:px-5 px-6 py-2 rounded-[28px] shadow-bs8 w-full" />
            <div className="flex md:flex-col flex-row font-helvetica md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-8 items-start justify-center w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="bg-clip-text bg-gradient20  md:text-5xl text-[80px] text-transparent tracking-[-0.80px] w-auto"
                    size="txtNotoSansBold80"
                  >
                    Error 404
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-400 w-auto"
                    size="txtOpenSansSemiBold36"
                  >
                    Erm. Page not found
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-xl w-auto"
                    size="txtOpenSans20"
                  >
                    We suggest you to go to the homepage while we solve this
                    ssue.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold h-10 leading-[normal] min-w-[169px] text-[13px] text-center uppercase"
                  shape="round"
                  size="lg"
                  variant="gradient"
                  color="blue_gray_700_01_gray_900_02"
                >
                  Go to Homepage
                </Button>
              </div>
              <Img
                className="h-[573px] md:h-auto object-cover"
                src="images/img_error4041.png"
                alt="error4041"
              />
            </div>
          </div>
          <div className="flex flex-col font-inter gap-8 items-center justify-start md:px-10 sm:px-5 px-[228px] w-[85%] md:w-full">
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

export default AuthenticationScreenError404Page;
