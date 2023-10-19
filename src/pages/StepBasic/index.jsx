import React from "react";

import { Button, Img, List, Text } from "components";
import Header1 from "components/Header1";

const StepBasicPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-100_01 bg-no-repeat flex flex-col font-notosans h-[1080px] items-center justify-end mx-auto p-4 w-full"
        style={{ backgroundImage: "url('images/img_2stepbasic.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[264px] items-center justify-start max-w-[1554px] mt-[13px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[181px] items-center justify-start w-full">
            <Header1 className="flex md:flex-col md:gap-10 items-center justify-between sm:px-5 px-6 py-2 rounded-[28px] shadow-bs8 w-full" />
            <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-6 py-12 rounded-[15px] w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-auto">
                <div className="flex flex-col font-helvetica gap-[23px] items-center justify-start w-[81%] md:w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Button
                      className="flex h-16 items-center justify-center rounded-[50%] w-16"
                      shape="circle"
                      size="2xl"
                      variant="gradient"
                      color="yellow_600_red_500_01"
                    >
                      <Img
                        className="h-6"
                        src="images/img_iconssolid_white_a700_64x64.svg"
                        alt="iconssolid"
                      />
                    </Button>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-800"
                        size="txtHelveticaBold32"
                      >
                        2-Step Verification
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-12 w-[286px]"
                    src="images/img_inputs.svg"
                    alt="inputs"
                  />
                </div>
                <Button
                  className="cursor-pointer font-bold font-helvetica h-10 leading-[normal] text-[13px] text-center uppercase w-[356px]"
                  shape="round"
                  size="lg"
                  variant="gradient"
                  color="yellow_600_red_500_01"
                >
                  Send Code
                </Button>
                <Text
                  className="text-blue_gray-500 text-center text-sm w-auto"
                  size="txtNotoSansRegular14Bluegray500"
                >
                  <span className="text-blue_gray-500 font-notosans font-normal">
                    <>Haven&#39;t received it? </>
                  </span>
                  <span className="text-blue_gray-900_01 font-notosans font-normal">
                    Resend a new code
                  </span>
                  <span className="text-blue_gray-500 font-notosans font-normal">
                    .
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter gap-8 items-center justify-start md:px-10 sm:px-5 px-[228px] w-[85%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-12 items-center justify-start w-auto sm:w-full">
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                Company
              </Text>
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                About Us
              </Text>
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                Team
              </Text>
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                Products
              </Text>
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                Blog
              </Text>
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtInterRegular16WhiteA700"
              >
                Pricing
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center pb-[3px] px-[3px] w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[317px] md:mt-0 mt-0.5 w-[18px]"
                src="images/img_arrowright_white_a700.svg"
                alt="arrowright"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[26px] pr-[0.61px] w-auto">
                <Img
                  className="h-[21px] w-[18px]"
                  src="images/img_twitter_white_a700.svg"
                  alt="twitter"
                />
              </div>
              <Img
                className="h-[18px] md:ml-[0] ml-[26px] md:mt-0 mt-0.5 w-4"
                src="images/img_arrowright_white_a700.svg"
                alt="arrowright_One"
              />
              <Img
                className="h-[18px] md:ml-[0] ml-[26px] md:mt-0 mt-0.5 w-[18px]"
                src="images/img_arrowright_white_a700.svg"
                alt="arrowright_Two"
              />
              <Img
                className="h-[18px] md:ml-[0] ml-[26px] mr-[342px] md:mt-0 mt-0.5 w-[18px]"
                src="images/img_arrowright_white_a700.svg"
                alt="arrowright_Three"
              />
            </div>
            <Text
              className="text-base text-center text-white-A700"
              size="txtInterRegular16WhiteA700"
            >
              Copyright © 2022 Soft by Creative Tim.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepBasicPage;
