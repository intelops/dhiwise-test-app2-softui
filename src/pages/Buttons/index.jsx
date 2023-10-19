import React from "react";

import { Button, Img, Switch, Text } from "components";
import ButtonsHeader from "components/ButtonsHeader";

const ButtonsPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter items-center justify-start mx-auto pb-[87px] w-full">
        <div className="flex flex-col gap-12 justify-start w-full">
          <ButtonsHeader className="bg-white-A700 flex flex-col items-start justify-start max-w-[1440px] w-full" />
          <div className="flex flex-col font-helvetica items-start justify-start md:ml-[0] ml-[85px] md:px-5 w-[51%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                PRIMARY
              </Text>
              <Text
                className="sm:ml-[0] ml-[104px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                SECONDARY
              </Text>
              <Text
                className="sm:ml-[0] ml-[51px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                TERTIARY
              </Text>
              <Text
                className="sm:ml-[0] ml-[38px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                ICON
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[35px] w-[99%] md:w-full">
              <div className="bg-blue_gray-200 border border-dashed border-deep_purple-A200_01 flex flex-col items-start justify-start p-4 rounded-[5px] w-[30%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[178px]"
                  leftIcon={
                    <Img
                      className="h-3.5 mr-[7px] my-px"
                      src="images/img_icons_solid_14x14.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  size="lg"
                  variant="gradient"
                  color="blue_gray_700_01_gray_900_02"
                >
                  <div className="font-bold font-helvetica leading-[normal] text-[13px] text-left uppercase">
                    Get your code
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[178px] mt-[21px]"
                  leftIcon={
                    <Img
                      className="h-3.5 mr-[7px] my-px"
                      src="images/img_icons_solid_14x14.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  size="lg"
                  variant="gradient"
                  color="blue_gray_700_ab_gray_900_ab"
                >
                  <div className="font-bold font-helvetica leading-[normal] text-[13px] text-left uppercase">
                    Get your code
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[162px] mt-[21px]"
                  leftIcon={
                    <Img
                      className="h-3.5 mr-[7px] my-px"
                      src="images/img_icons_solid_14x14.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="blue_gray_700_01_gray_900_02"
                >
                  <div className="font-bold font-helvetica leading-[normal] text-[13px] text-left uppercase">
                    Get your code
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[162px] mt-[26px]"
                  leftIcon={
                    <Img
                      className="h-3.5 mr-[7px] my-px"
                      src="images/img_icons_solid_14x14.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="blue_gray_700_ab_gray_900_ab"
                >
                  <div className="font-bold font-helvetica leading-[normal] text-[13px] text-left uppercase">
                    Get your code
                  </div>
                </Button>
                <Button
                  className="border border-solid border-white-A700_72 cursor-pointer flex items-center justify-center min-w-[136px] md:ml-[0] ml-[3px] mt-[21px]"
                  leftIcon={
                    <Img
                      className="h-3.5 mt-0.5 mb-[3px] mr-[7px]"
                      src="images/img_icons_solid_14x14.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  color="white_A700_33"
                  size="md"
                  variant="fill"
                >
                  <div className="font-notosans font-semibold text-left text-sm">
                    Watch more
                  </div>
                </Button>
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-start justify-start md:ml-[0] ml-[27px] p-[15px] rounded-[5px] w-[29%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[173px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-1"
                      src="images/img_property1gift_gray_900_03.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="blue_gray_100_blue_gray_50_01"
                >
                  <div className="font-bold text-left text-xs uppercase">
                    Get your code
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[173px] mt-[25px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-1"
                      src="images/img_property1gift_gray_900_03.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="blue_gray_100_a2_blue_gray_50_a2"
                >
                  <div className="font-bold text-left text-xs uppercase">
                    Get your code
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[157px] mt-[25px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-1"
                      src="images/img_property1gift_gray_900_03.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  size="sm"
                  variant="gradient"
                  color="blue_gray_100_blue_gray_50_01"
                >
                  <div className="font-bold text-left text-xs uppercase">
                    Get your code
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[157px] mt-[30px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-1"
                      src="images/img_property1gift_gray_900_03.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  size="sm"
                  variant="gradient"
                  color="blue_gray_100_a2_blue_gray_50_a2"
                >
                  <div className="font-bold text-left text-xs uppercase">
                    Get your code
                  </div>
                </Button>
              </div>
              <div className="bg-blue_gray-200 border border-dashed border-deep_purple-A200_01 flex flex-col items-start justify-start mb-[137px] ml-8 md:ml-[0] p-[7px] rounded-[5px] w-[19%] md:w-full">
                <div className="flex flex-row gap-2 items-center justify-start ml-2 md:ml-[0] mt-2 w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtHelveticaBold16Bluegray900"
                  >
                    Shop now
                  </Text>
                  <Img
                    className="h-full w-4"
                    src="images/img_arrowright_blue_gray_900.svg"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-row gap-4 items-center justify-start ml-2 md:ml-[0] mt-[7px] w-auto">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtHelveticaBold16Bluegray900"
                  >
                    Shop now
                  </Text>
                  <Img
                    className="h-full w-4"
                    src="images/img_arrowright_blue_gray_900.svg"
                    alt="arrowright_One"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center justify-start ml-2 md:ml-[0] mt-[38px] w-auto">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtHelveticaBold14WhiteA700"
                  >
                    Shop now
                  </Text>
                  <Img
                    className="h-full w-3.5"
                    src="images/img_arrowright_white_a700.svg"
                    alt="arrowright_Two"
                  />
                </div>
                <div className="flex flex-row gap-4 items-center justify-start ml-2 md:ml-[0] my-[7px] w-auto">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtHelveticaBold14WhiteA700"
                  >
                    Shop now
                  </Text>
                  <Img
                    className="h-full w-3.5"
                    src="images/img_arrowright_white_a700.svg"
                    alt="arrowright_Three"
                  />
                </div>
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[49px] md:mt-0 mt-0.5 p-4 rounded-[5px] w-[9%] md:w-full">
                <div className="flex flex-col h-[30px] md:h-auto items-center justify-center p-2 w-[30px]">
                  <Img
                    className="h-full w-full"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
                <Button
                  className="border border-gray-300 border-solid flex h-[30px] items-center justify-center w-[30px]"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-3.5"
                    src="images/img_iconssolid_blue_gray_400_30x30.svg"
                    alt="iconssolid"
                  />
                </Button>
                <Button
                  className="border border-gray-600 border-solid flex h-[30px] items-center justify-center w-[30px]"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-3.5"
                    src="images/img_iconssolid_blue_gray_400_30x30.svg"
                    alt="iconssolid_One"
                  />
                </Button>
              </div>
            </div>
            <Text
              className="mt-[164px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
              size="txtHelveticaBold30Bluegray900"
            >
              SWITCHES & TOGGLES
            </Text>
            <div className="flex flex-row items-start justify-start mt-[35px] w-[43%] md:w-full">
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start mt-0.5 p-4 rounded-[5px] w-[18%]">
                <Img
                  className="h-6 md:h-auto object-cover w-6"
                  src="images/img_checkbox_24x24.png"
                  alt="property1defaul"
                />
                <Img
                  className="h-6 mt-0.5 w-6"
                  src="images/img_checkbox.svg"
                  alt="property1empty"
                />
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-[7px] items-center justify-start ml-11 p-4 rounded-[5px] w-[24%]">
                <Switch
                  onColor="#141727"
                  offColor="#e2e8f0"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={false}
                  className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                />
                <Switch
                  onColor="#141727"
                  offColor="#e2e8f0"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={true}
                  className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                />
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start ml-[47px] mt-0.5 w-[30%]">
                <Img
                  className="h-[52px] rounded-bl-[5px] rounded-br-[5px]"
                  src="images/img_radiobtns.svg"
                  alt="radiobtns"
                />
                <div className="border border-dashed border-deep_purple-A200_01 flex flex-row gap-2.5 items-center justify-start p-4 rounded-[5px] w-[98%] md:w-full">
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    size="sm"
                    variant="gradient"
                    color="green_A700_lime_A700"
                  >
                    <Img
                      src="images/img_checkmark_white_a700.svg"
                      alt="checkmark_One"
                    />
                  </Button>
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    size="sm"
                    variant="gradient"
                    color="blue_gray_500_01_indigo_200"
                  >
                    <Img src="images/img_minus.svg" alt="minus" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonsPage;
