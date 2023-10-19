import React from "react";

import { Button, Img, Text } from "components";

const ButtonsHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient7  h-3 w-full"></div>
        <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-center justify-start w-auto md:w-full">
              <Img
                className="h-[31px] w-24"
                src="images/img_logoctwhite1.svg"
                alt="logoctwhiteOne"
              />
              <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                  size="txtNotoSansRegular24"
                >
                  {props?.sectiontitle}
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                  size="txtInterRegular24"
                >
                  {props?.twelve}
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold24Gray900"
                >
                  {props?.pagetitle}
                </Text>
              </div>
            </div>
            <Text
              className="text-blue_gray-400 text-xl w-auto"
              size="txtInterRegular20"
            >
              {props?.weburl}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold40Bluegray900"
                >
                  {props?.heading}
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[100px] rounded"
                  leftIcon={
                    <Img
                      className="h-[9px] mt-px mb-[3px] mr-1"
                      src="images/img_checkmark_light_green_a700_01.svg"
                      alt="checkmark"
                    />
                  }
                  shape="round"
                  color="light_green_A100"
                  size="md"
                  variant="fill"
                >
                  <div className="font-bold font-helvetica text-center text-xs">
                    {props?.autoLayout}
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[103px] rounded"
                  leftIcon={
                    <Img
                      className="h-[9px] mt-px mb-[3px] mr-1"
                      src="images/img_checkmark_light_green_a700_01.svg"
                      alt="checkmark"
                    />
                  }
                  shape="round"
                  color="light_green_A100"
                  size="md"
                  variant="fill"
                >
                  <div className="font-bold font-helvetica text-center text-xs">
                    {props?.components}
                  </div>
                </Button>
              </div>
              <Text
                className="text-blue_gray-400 text-lg w-full"
                size="txtHelvetica18"
              >
                {props?.supportingtext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ButtonsHeader.defaultProps = {
  sectiontitle: "Soft UI Dashboard PRO",
  twelve: <>-&gt;</>,
  pagetitle: "General components",
  weburl: "www.creative-tim.com",
  heading: "Buttons",
  autoLayout: "Auto Layout",
  components: "Components",
  supportingtext: "Buttons used throughout the theme",
};

export default ButtonsHeader;
