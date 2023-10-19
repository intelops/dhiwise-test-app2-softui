import React from "react";

import { Button, CheckBox, Img, Input, List, Text } from "components";
import GeneralInput from "components/GeneralInput";
import Header1 from "components/Header1";

const SignupBasicPage = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-notosans sm:gap-10 md:gap-10 gap-[75px] items-center justify-start mx-auto p-4 w-full">
        <div className="flex flex-col max-w-[1888px] mx-auto md:px-5 relative w-full">
          <div className="h-[457px] mx-auto w-full">
            <Img
              className="h-[457px] m-auto max-w-[1888px] object-cover rounded-[12px] w-[1888px] md:w-full"
              src="images/img_div_457x1888.png"
              alt="div"
            />
            <div className="absolute flex flex-col gap-[31px] inset-x-[0] items-center justify-start mx-auto top-[3%] w-[83%]">
              <Header1 className="flex md:flex-col md:gap-10 items-center justify-between sm:px-5 px-6 py-2 rounded-[28px] shadow-bs8 w-full" />
              <div className="flex flex-col gap-[9px] items-center justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.80px]"
                  size="txtNotoSansBold40"
                >
                  Welcome!
                </Text>
                <Text
                  className="leading-[150.00%] text-base text-center text-white-A700 w-full"
                  size="txtNotoSansRegular16WhiteA700"
                >
                  Use these awesome forms to login or create new account in your
                  project for free.
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-206px] mx-auto p-12 md:px-10 sm:px-5 rounded-[15px] w-auto z-[1]">
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900_01 text-center text-xl tracking-[-0.80px] w-full"
                size="txtNotoSansSemiBold20Bluegray90001"
              >
                Register with
              </Text>
              <div className="flex flex-col font-helvetica gap-6 items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-4 grid grid-cols-3 justify-start sm:px-5 px-6 w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-[35px] md:h-auto items-center justify-center px-4 rounded-md w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_facebook_indigo_600.svg"
                      alt="facebook"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-[35px] md:h-auto items-center justify-center px-4 rounded-md w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_logos1_gray_900.svg"
                      alt="logosOne"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-[35px] md:h-auto items-center justify-center px-4 rounded-md w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_property1google.svg"
                      alt="logosOne"
                    />
                  </div>
                </List>
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Img
                    className="flex-1 md:flex-none sm:h-auto h-px max-h-px object-cover"
                    src="images/img_separator_1x632.png"
                    alt="separatorZero"
                  />
                  <Text
                    className="text-blue_gray-400 text-center text-sm w-[13px]"
                    size="txtHelvetica14Bluegray400"
                  >
                    or
                  </Text>
                  <Img
                    className="flex-1 md:flex-none sm:h-auto h-px max-h-px object-cover"
                    src="images/img_separator_1x632.png"
                    alt="separatorZero_One"
                  />
                </div>
                <GeneralInput className="flex flex-col gap-1 items-start justify-center w-full" />
                <GeneralInput className="flex flex-col gap-1 items-start justify-center w-full" />
                <GeneralInput className="flex flex-col gap-1 items-start justify-center w-full" />
                <div className="flex flex-col font-notosans items-center justify-start w-full">
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
                <Button
                  className="cursor-pointer font-bold h-10 leading-[normal] text-[13px] text-center uppercase w-[356px]"
                  shape="round"
                  size="lg"
                  variant="gradient"
                  color="blue_gray_700_01_gray_900_02"
                >
                  Sign up
                </Button>
                <div className="flex flex-row font-notosans gap-1 items-center justify-start w-full">
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

export default SignupBasicPage;
