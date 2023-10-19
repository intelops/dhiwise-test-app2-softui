import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const SignInIllustrationOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-helvetica h-[1080px] mx-auto pb-4 pl-4 relative w-full">
        <div className="flex flex-col h-full items-center justify-start ml-[184px] mt-[166px] md:px-5 px-6 py-12 w-auto">
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
        <div className="absolute font-notosans md:h-[1061px] h-[1064px] inset-y-[0] my-auto md:px-5 right-[0] w-[91%] md:w-full">
          <div className="absolute md:h-[1061px] h-[1064px] inset-y-[0] my-auto right-[0] w-3/5 md:w-full">
            <div className="bg-gradient9  h-[1049px] ml-auto mr-2 my-auto rounded-[12px] w-[91%]"></div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[149px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group72.png')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[113px] mt-[125px] w-[82%] md:w-full">
                <Img
                  className="h-[375px] sm:h-auto object-cover w-[83%] md:w-full"
                  src="images/img_chatpng_3.png"
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

export default SignInIllustrationOnePage;
