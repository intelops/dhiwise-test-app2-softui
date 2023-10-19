import React from "react";

import { Button, Img, Input, List, Text } from "components";
import GeneralInput from "components/GeneralInput";
import Header from "components/Header";

const SignupIllustrationOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-helvetica h-[1080px] mx-auto pl-0.5 py-0.5 relative w-full">
        <div className="flex flex-col h-full items-center justify-start ml-[198px] mt-[164px] px-4 md:px-5 py-6 w-auto">
          <div className="flex flex-col gap-6 items-center justify-center w-[360px]">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
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
            <GeneralInput className="flex flex-col gap-1 items-start justify-center w-full" />
            <Button
              className="cursor-pointer font-bold h-10 leading-[normal] text-[13px] text-center uppercase w-full"
              shape="round"
              size="lg"
              variant="gradient"
              color="blue_gray_700_01_gray_900_02"
            >
              Unlock
            </Button>
          </div>
        </div>
        <div className="absolute font-notosans md:h-[1071px] h-[1074px] inset-y-[0] my-auto md:px-5 right-[0] w-[91%] md:w-full">
          <div className="absolute md:h-[1071px] h-[1074px] inset-y-[0] my-auto right-[0] w-3/5 md:w-full">
            <div className="bg-gradient14  h-[1051px] ml-auto mr-2 my-auto rounded-[12px] w-[91%]"></div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[171px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group72.png')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[129px] mt-[99px] w-[87%] md:w-full">
                <Img
                  className="h-[375px] sm:h-auto object-cover w-[83%] md:w-full"
                  src="images/img_chatpng_2.png"
                  alt="chatpng"
                />
                <Text
                  className="mt-[25px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 tracking-[-0.80px]"
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

export default SignupIllustrationOnePage;
