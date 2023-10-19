import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const SectionsNamestep1about = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end p-3.5 w-[97%] md:w-full">
          <div className="h-[43px] md:h-[50px] mt-[7px] relative w-3/4 sm:w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[19%] w-[90%]">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Line className="bg-gray-300_87_01 h-0.5 w-[49%]" />
                <Line className="bg-gray-300_87_01 h-0.5 w-[49%]" />
              </div>
            </div>
            <div className="absolute flex flex-col gap-[7px] h-full inset-[0] items-center justify-center m-auto w-[10%]">
              <div className="bg-gray-300 border border-gray-300 border-solid h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-blue_gray-900 text-center text-sm"
                size="txtNotoSansRegular14Bluegray900"
              >
                {props?.account}
              </Text>
            </div>
            <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[10%]">
              <div className="bg-white-A700 border border-gray-300 border-solid h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-blue_gray-900 text-center text-sm"
                size="txtNotoSansRegular14Bluegray900"
              >
                {props?.address}
              </Text>
            </div>
            <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[7%]">
              <div className="bg-blue_gray-900_01 h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-blue_gray-900_01 text-center text-sm"
                size="txtNotoSansRegular14Bluegray90001"
              >
                {props?.about}
              </Text>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start p-[31px] sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
        >
          <div className="flex flex-col items-center justify-start mb-[21px] w-[94%] md:w-full">
            <Text
              className="text-blue_gray-900 text-center text-xl tracking-[-0.80px]"
              size="txtHelveticaBold20Bluegray900"
            >
              {props?.titletext}
            </Text>
            <Text
              className="leading-[150.00%] mt-3 text-base text-blue_gray-400 text-center w-[86%] sm:w-full"
              size="txtHelvetica16Bluegray400"
            >
              {props?.subtitletext}
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-start justify-start max-w-[733px] mt-[27px] w-full">
              <div className="md:h-[110px] h-[121px] relative w-[121px]">
                <Img
                  className="absolute h-[110px] left-[0] object-cover rounded-lg top-[0] w-[110px]"
                  src="images/img_img.png"
                  alt="img"
                />
                <Button
                  className="absolute border border-gray-300 border-solid bottom-[0] flex h-[30px] items-center justify-center right-[0] w-[30px]"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-3.5"
                    src="images/img_iconssolid_blue_gray_400_30x30.svg"
                    alt="iconssolid_Two"
                  />
                </Button>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-center w-full">
                  <Text
                    className="text-[13px] text-blue_gray-900 w-auto"
                    size="txtNotoSansSemiBold13"
                  >
                    {props?.nametext2}
                  </Text>
                  <Input
                    name="email"
                    placeholder="eg.soft@dashboard.com"
                    className="font-notosans p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-md w-full"
                    shape="round"
                    color="white_A700"
                    size="2xl"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center w-full">
                  <Text
                    className="text-[13px] text-blue_gray-900 w-auto"
                    size="txtNotoSansSemiBold13"
                  >
                    {props?.nametext2}
                  </Text>
                  <Input
                    name="email"
                    placeholder="eg.soft@dashboard.com"
                    className="font-notosans p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-md w-full"
                    shape="round"
                    color="white_A700"
                    size="2xl"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1 items-start justify-center w-full">
                  <Text
                    className="text-[13px] text-blue_gray-900 w-auto"
                    size="txtNotoSansSemiBold13"
                  >
                    {props?.nametext2}
                  </Text>
                  <Input
                    name="email"
                    placeholder="eg.soft@dashboard.com"
                    className="font-notosans p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-md w-full"
                    shape="round"
                    color="white_A700"
                    size="2xl"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold font-helvetica h-10 leading-[normal] min-w-[83px] mt-[9px] text-[13px] text-center uppercase"
              shape="round"
              size="lg"
              variant="gradient"
              color="blue_gray_700_01_gray_900_02"
            >
              {props?.nextbuttontext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

SectionsNamestep1about.defaultProps = {
  account: "Account",
  address: "Address",
  about: "About",
  titletext: <>Let&#39;s start with the basic information</>,
  subtitletext: (
    <>
      Let us know your name and email address. Use an address you don&#39;t mind
      other users contacting you at
    </>
  ),
  nametext: "Email",
  nametext1: "Email",
  nametext2: "Email",
  nextbuttontext: "Next",
};

export default SectionsNamestep1about;
