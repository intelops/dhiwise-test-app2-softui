import React from "react";

import { Button, Img, Input, List, Text } from "components";
import GeneralInput from "components/GeneralInput";
import Header from "components/Header";

const ResetIllustrationPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-helvetica h-[1080px] mx-auto pl-0.5 py-0.5 relative w-full">
        <div className="flex flex-col gap-[30px] h-full items-center justify-center ml-[198px] mt-[164px] md:px-5 w-[356px]">
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <a
              href="javascript:"
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.80px] w-auto"
            >
              <Text size="txtHelveticaBold24Bluegray900">Reset password</Text>
            </a>
            <Text
              className="text-base text-blue_gray-400 w-full"
              size="txtNotoSansRegular16Bluegray400"
            >
              You will receive an e-mail in maximum 60 sec
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-end justify-start w-full">
            <GeneralInput className="flex flex-col gap-1 items-start justify-center w-full" />
            <GeneralInput className="flex flex-col gap-1 items-start justify-center w-full" />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Button
              className="cursor-pointer font-bold h-10 leading-[normal] text-[13px] text-center uppercase w-full"
              shape="round"
              size="lg"
              variant="gradient"
              color="deep_purple_500_pink_A400"
            >
              Send
            </Button>
          </div>
        </div>
        <div className="absolute md:h-[1071px] h-[1074px] inset-y-[0] my-auto md:px-5 right-[0] w-[91%] md:w-full">
          <div className="absolute md:h-[1071px] h-[1074px] inset-y-[0] my-auto right-[0] w-3/5 md:w-full">
            <div className="bg-gradient7  h-[1051px] ml-auto mr-2 my-auto rounded-[12px] w-[91%]"></div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[149px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group72.png')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[125px] mt-[121px] w-[82%] md:w-full">
                <Img
                  className="h-[375px] sm:h-auto object-cover w-[83%] md:w-full"
                  src="images/img_chatpng_1.png"
                  alt="chatpng"
                />
                <Text
                  className="mt-[49px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 tracking-[-0.80px]"
                  size="txtHelveticaBold30WhiteA700"
                >
                  Soft UI Design
                </Text>
                <Text
                  className="leading-[140.00%] mt-[18px] text-center text-lg text-white-A700 w-full"
                  size="txtHelvetica18WhiteA700"
                >
                  Just as it takes a company to sustain a product, it takes a
                  community to sustain a protocol.
                </Text>
              </div>
            </div>
          </div>
          <Header className="absolute bg-white-A700_cc flex md:flex-col font-notosans md:gap-10 items-center justify-between left-[0] sm:px-5 px-6 py-2 rounded-[28px] shadow-bs8 top-[1%] w-full" />
        </div>
      </div>
    </>
  );
};

export default ResetIllustrationPage;
