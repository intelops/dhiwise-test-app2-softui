import React from "react";

import { Button, CheckBox, Img, Input, List, Text } from "components";
import GeneralInput from "components/GeneralInput";
import Header from "components/Header";

const SignUpCoverPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-notosans sm:gap-10 md:gap-10 gap-[60px] justify-start mx-auto pb-4 pl-4 w-full">
        <div className="flex flex-col items-end md:ml-[0] ml-[159px] md:px-5 w-[92%] md:w-full">
          <div className="h-[866px] relative w-full">
            <div className="flex flex-col gap-[30px] h-full items-start justify-center ml-[21px] my-auto w-auto">
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="bg-clip-text bg-gradient7  sm:text-4xl md:text-[38px] text-[40px] text-transparent tracking-[-0.80px] w-auto"
                  size="txtNotoSansBold40Deeppurple500"
                >
                  Join us today
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtNotoSansRegular16Bluegray500"
                >
                  Enter your email and password to register
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-end justify-start w-full">
                <GeneralInput
                  className="flex flex-col gap-1 items-start justify-center w-full"
                  nameTen="Name"
                />
                <GeneralInput
                  className="flex flex-col gap-1 items-start justify-center w-full"
                  nameTen="Email Address"
                />
                <GeneralInput
                  className="flex flex-col gap-1 items-start justify-center w-full"
                  nameTen="Password"
                />
                <CheckBox
                  className="text-blue_gray-900_01 text-left text-xs"
                  inputClassName="mr-[5px]"
                  name="rememberforFourteen"
                  id="rememberforFourteen"
                  label="I agree the Terms and Conditions."
                  shape="square"
                  size="sm"
                ></CheckBox>
              </div>
              <div className="flex flex-col font-helvetica items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-bold h-10 leading-[normal] text-[13px] text-center uppercase w-[356px]"
                  shape="round"
                  size="lg"
                  variant="gradient"
                  color="deep_purple_500_pink_A400"
                >
                  Sign up
                </Button>
              </div>
              <div className="flex flex-row font-notosans gap-1 items-center justify-center w-full">
                <a
                  href="javascript:"
                  className="text-[13px] text-blue_gray-900_01 w-auto"
                >
                  <Text size="txtNotoSansRegular13">
                    Already have an account?
                  </Text>
                </a>
                <a
                  href="javascript:"
                  className="text-[13px] text-blue_gray-900_01 w-auto"
                >
                  <Text size="txtNotoSansSemiBold13Bluegray90001_1">
                    Sign in
                  </Text>
                </a>
              </div>
            </div>
            <div className="absolute h-[866px] inset-[0] justify-center m-auto w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] rotate-[-10deg] rounded-bl-[12px] w-[64%]">
                <Img
                  className="h-[866px] md:h-auto object-cover rounded-bl-[12px] w-full"
                  src="images/img_div_866x1102.png"
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

export default SignUpCoverPage;
