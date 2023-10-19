import React from "react";

import { Button, Img, Input, List, Switch, Text } from "components";
import GeneralInput from "components/GeneralInput";
import Header from "components/Header";

const SignInIllustrationPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-notosans h-[1080px] mx-auto pb-4 pl-4 relative w-full">
        <div className="flex flex-col gap-[30px] h-full items-start justify-center ml-[184px] mt-[166px] md:px-5 w-auto">
          <div className="flex flex-col gap-2 items-start justify-center w-auto">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01 tracking-[-0.80px] w-auto"
              size="txtNotoSansBold40Bluegray90001"
            >
              Sign-in
            </Text>
            <Text
              className="text-base text-blue_gray-500 w-auto"
              size="txtNotoSansRegular16Bluegray500"
            >
              Enter your email and password to sign-in.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-center w-full">
            <GeneralInput
              className="flex flex-col gap-1 items-start justify-center w-full"
              nameTen="Email Address"
            />
            <GeneralInput
              className="flex flex-col gap-1 items-start justify-center w-full"
              nameTen="Password"
            />
            <div className="flex flex-col items-center justify-start w-[45%] md:w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Switch
                  onColor="#e2e8f0"
                  offColor="#e2e8f0"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={false}
                  className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                />
                <Text
                  className="text-base text-blue_gray-900_01 w-auto"
                  size="txtNotoSansRegular16Bluegray90001"
                >
                  Remember me{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-helvetica items-start justify-start w-auto">
            <Button
              className="cursor-pointer font-bold h-10 leading-[normal] text-[13px] text-center uppercase w-[356px]"
              shape="round"
              size="lg"
              variant="gradient"
              color="deep_purple_500_pink_A400"
            >
              Sign in
            </Button>
          </div>
          <div className="flex flex-row font-notosans gap-1 items-center justify-center w-full">
            <a
              href="javascript:"
              className="text-[13px] text-blue_gray-900_01 w-auto"
            >
              <Text size="txtNotoSansRegular13">Don’t have an account?</Text>
            </a>
            <a
              href="javascript:"
              className="text-[13px] text-blue_gray-900_01 w-auto"
            >
              <Text size="txtNotoSansSemiBold13Bluegray90001_1">Sign up</Text>
            </a>
          </div>
        </div>
        <div className="absolute md:h-[1061px] h-[1064px] inset-y-[0] my-auto md:px-5 right-[0] w-[91%] md:w-full">
          <div className="absolute md:h-[1061px] h-[1064px] inset-y-[0] my-auto right-[0] w-3/5 md:w-full">
            <div className="bg-gradient7  h-[1049px] ml-auto mr-2 my-auto rounded-[12px] w-[91%]"></div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[149px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group72.png')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[113px] mt-[125px] w-[82%] md:w-full">
                <Img
                  className="h-[375px] sm:h-auto object-cover w-[83%] md:w-full"
                  src="images/img_chatpng.png"
                  alt="chatpng"
                />
                <Text
                  className="mt-[49px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 tracking-[-0.80px]"
                  size="txtHelveticaBold30WhiteA700"
                >
                  Attention is the new currency
                </Text>
                <Text
                  className="leading-[150.00%] mt-[18px] text-base text-center text-white-A700 w-full"
                  size="txtOpenSans16WhiteA700"
                >
                  The more effortless the writing looks, the more effort the
                  writer actually put into the process.
                </Text>
              </div>
            </div>
          </div>
          <Header className="absolute bg-white-A700_cc flex md:flex-col md:gap-10 items-center justify-between left-[0] sm:px-5 px-6 py-2 rounded-[28px] shadow-bs8 top-[1%] w-full" />
        </div>
      </div>
    </>
  );
};

export default SignInIllustrationPage;
