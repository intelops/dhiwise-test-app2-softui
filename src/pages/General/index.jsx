import React from "react";

import { Button, Img, Input, Text } from "components";
import GeneralColumncreditstounspla from "components/GeneralColumncreditstounspla";
import GeneralInput from "components/GeneralInput";
import GeneralWeekday from "components/GeneralWeekday";

import { CloseSVG } from "../../assets/images";

const GeneralPage = () => {
  const [property1grayvalue, setProperty1grayvalue] = React.useState("");
  const [property1darkvalue, setProperty1darkvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter items-center justify-start mx-auto pb-[110px] w-full">
        <div className="flex flex-col gap-[42px] items-end justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1440px] w-full">
            <div className="bg-purple-500 h-3 w-full"></div>
            <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-7xl mx-auto w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-[31px] w-24"
                    src="images/img_logoctwhite1.svg"
                    alt="logoctwhiteOne"
                  />
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtNotoSansRegular24"
                    >
                      Components
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterRegular24"
                    >
                      <>-&gt;</>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold24Gray900"
                    >
                      General
                    </Text>
                  </div>
                </div>
                <a
                  href="www.creative-tim.com"
                  className="text-blue_gray-400 text-xl w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text size="txtInterRegular20">www.creative-tim.com</Text>
                </a>
              </div>
              <div className="flex flex-col font-helvetica items-start justify-start max-w-7xl mx-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto md:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold40Bluegray900"
                    >
                      General components
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
                      <div className="font-bold text-center text-xs">
                        Auto Layout
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
                      <div className="font-bold text-center text-xs">
                        Components
                      </div>
                    </Button>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-lg w-full"
                    size="txtHelvetica18"
                  >
                    General components used in the theme.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-helvetica items-start justify-start md:px-5 w-[95%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-[93%] md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                BADGES
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                AVATARS
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                LEGEND
              </Text>
            </div>
            <div className="mt-7 overflow-x-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-2.5 w-[76%] md:w-full">
                  <div className="flex md:flex-col flex-row font-helvetica md:gap-5 items-start justify-start md:ml-[0] ml-[3px] w-full">
                    <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-[15px] items-start justify-start p-3.5 rounded-[5px] w-[12%] md:w-full">
                      <Button
                        className="border border-light_green-600_72 border-solid cursor-pointer font-bold min-w-[64px] text-center text-xs"
                        shape="round"
                        color="light_green_600_19"
                        size="xs"
                        variant="fill"
                      >
                        Shipped
                      </Button>
                      <Button
                        className="border border-blue_gray-500_72 border-solid cursor-pointer font-bold min-w-[81px] text-center text-xs"
                        shape="round"
                        color="blue_gray_500_19"
                        size="xs"
                        variant="fill"
                      >
                        Processing
                      </Button>
                    </div>
                    <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-4 items-start justify-start ml-6 md:ml-[0] p-4 rounded-[5px] w-[11%] md:w-full">
                      <Button
                        className="border border-light_green-200 border-solid cursor-pointer flex items-center justify-center min-w-[63px]"
                        leftIcon={
                          <Img
                            className="h-2 mt-[3px] mb-0.5 mr-1"
                            src="images/img_arrowup_light_green_a700_8x8.svg"
                            alt="arrow_up"
                          />
                        }
                        shape="round"
                        color="light_green_50"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-bold text-center text-xs">
                          10.5%
                        </div>
                      </Button>
                      <div className="flex flex-row gap-0.5 items-center justify-start px-2 py-1 rounded-md w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowup_light_green_a700_16x16.svg"
                          alt="arrowup"
                        />
                        <Text
                          className="text-center text-light_green-A700 text-sm w-auto"
                          size="txtHelveticaBold14LightgreenA700"
                        >
                          10.5%
                        </Text>
                      </div>
                    </div>
                    <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-4 items-start justify-start ml-6 md:ml-[0] p-4 rounded-[5px] w-[12%] md:w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[55px] rounded"
                        leftIcon={
                          <Img
                            className="h-[9px] mr-1 my-0.5"
                            src="images/img_checkmark_light_green_a700_01.svg"
                            alt="checkmark"
                          />
                        }
                        shape="round"
                        color="light_green_A100"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-bold text-center text-xs">
                          Paid
                        </div>
                      </Button>
                      <Button
                        className="border border-orange-A200_72 border-solid cursor-pointer flex items-center justify-center min-w-[77px] rounded"
                        leftIcon={
                          <Img
                            className="h-[9px] mt-px mb-[3px] mr-1"
                            src="images/img_icons_solid_orange_a200.svg"
                            alt="Icons Solid"
                          />
                        }
                        shape="round"
                        color="orange_A200_19"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-bold text-center text-xs">
                          Pending
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[86px] rounded"
                        leftIcon={
                          <Img
                            className="h-[9px] mr-1 my-0.5"
                            src="images/img_close_red_a700_02.svg"
                            alt="close"
                          />
                        }
                        shape="round"
                        color="red_200"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-bold text-center text-xs">
                          Cancelled
                        </div>
                      </Button>
                    </div>
                    <div className="bg-gradient15  border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[181px] p-2 rounded-[5px] w-[13%] md:w-full">
                      <div className="flex flex-col gap-[21px] items-end justify-start my-2 w-[86%] md:w-full">
                        <div className="flex flex-row gap-[22px] items-center justify-between w-[92%] md:w-full">
                          <Button
                            className="flex h-8 items-center justify-center rounded-[50%] w-8"
                            shape="circle"
                            color="gray_50"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[18px]"
                              src="images/img_property1google.svg"
                              alt="logosTwo"
                            />
                          </Button>
                          <div className="flex flex-col h-8 items-center justify-start w-8">
                            <Img
                              className="h-8 md:h-auto object-cover rounded-bl-lg rounded-br-lg w-8"
                              src="images/img_hfecostudio.png"
                              alt="hfecostudio"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                          <div className="border border-gray-300 border-solid flex flex-col items-center justify-start px-2 rounded-md w-[52%]">
                            <Img
                              className="h-8 w-8"
                              src="images/img_signal_light_blue_900.svg"
                              alt="signal"
                            />
                          </div>
                          <div className="flex flex-col h-8 items-center justify-start w-8">
                            <div className="flex flex-col h-8 items-center justify-start w-8">
                              <Img
                                className="h-8 md:h-auto rounded-[50%] w-8"
                                src="images/img_2_32x32.png"
                                alt="Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-4 items-center justify-start ml-6 md:ml-[0] p-4 rounded-[5px] w-[19%] md:w-full">
                      <div className="bg-white-A700 border-[3px] border-solid border-white-A700 flex flex-col h-[152px] items-center justify-start rounded-[50%] w-[152px]">
                        <div className="flex flex-col h-[152px] items-center justify-start rounded-[50%] w-[152px]">
                          <Img
                            className="h-[152px] md:h-auto rounded-[50%] w-[152px]"
                            src="images/img_5_152x152.png"
                            alt="Five"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col h-[30px] items-center justify-start rounded-[50%] w-[30px]">
                        <div className="flex flex-col h-[30px] items-center justify-start rounded-[50%] w-[30px]">
                          <Img
                            className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                            src="images/img_5_30x30.png"
                            alt="Five_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col font-notosans gap-[19px] items-end justify-end ml-6 md:ml-[0] p-[13px] rounded-[5px] w-[9%] md:w-full">
                      <GeneralColumncreditstounspla className="flex flex-col items-start justify-start mt-[7px] w-[88%] md:w-full" />
                      <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          size="lg"
                          variant="gradient"
                          color="deep_purple_500_pink_A400"
                        >
                          <Img
                            className="h-[26px]"
                            src="images/img_ioniconaaddoutline.svg"
                            alt="ioniconaaddoutl"
                          />
                        </Button>
                        <Text
                          className="text-blue_gray-500 text-center text-sm"
                          size="txtNotoSansRegular14Bluegray500"
                        >
                          Add Story
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[190px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01 tracking-[-0.80px]"
                    size="txtNotoSansSemiBold30"
                  >
                    INPUT FIELDS
                  </Text>
                  <div className="flex md:flex-col flex-row font-notosans md:gap-10 items-start justify-between mt-5 w-[97%] md:w-full">
                    <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start p-4 rounded-[5px] w-[61%] md:w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <div className="flex flex-col gap-1 items-start justify-center w-auto">
                              <Text
                                className="text-[13px] text-blue_gray-900 w-auto"
                                size="txtNotoSansSemiBold13"
                              >
                                Label
                              </Text>
                              <Input
                                name="email"
                                placeholder="name@example.ro"
                                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-helvetica p-0 text-left text-sm w-full"
                                wrapClassName="bg-blue_gray-300 border border-blue_gray-100 border-solid rounded-md w-full"
                                type="email"
                                shape="round"
                                color="blue_gray_300"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-center w-auto">
                              <Text
                                className="text-[13px] text-blue_gray-900 w-auto"
                                size="txtNotoSansSemiBold13"
                              >
                                Label
                              </Text>
                              <Input
                                name="success"
                                placeholder="Success"
                                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-helvetica p-0 text-left text-sm w-full"
                                wrapClassName="border border-light_green-A700 border-solid rounded-md w-full"
                                shape="round"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <GeneralInput
                              className="flex flex-col gap-1 items-start justify-center w-auto"
                              nameTen="Label"
                            />
                            <div className="flex flex-col gap-1 items-start justify-center w-auto">
                              <Text
                                className="text-[13px] text-blue_gray-900 w-auto"
                                size="txtNotoSansSemiBold13"
                              >
                                Label
                              </Text>
                              <Input
                                name="error"
                                placeholder="Error input"
                                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-helvetica p-0 text-left text-sm w-full"
                                wrapClassName="border border-red-A700 border-solid rounded-md w-full"
                                shape="round"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center w-auto">
                          <Text
                            className="text-[13px] text-blue_gray-900 w-auto"
                            size="txtNotoSansSemiBold13"
                          >
                            Label
                          </Text>
                          <Input
                            name="email_Two"
                            placeholder="name@example.ro"
                            className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-helvetica p-0 text-left text-sm w-full"
                            wrapClassName="border border-cyan-400 border-solid rounded-md w-full"
                            type="email"
                            shape="round"
                            color="white_A700"
                            size="lg"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-6 items-start justify-start p-4 rounded-[5px] w-[28%] md:w-full">
                      <Input
                        name="property1gray"
                        placeholder="Search"
                        value={property1grayvalue}
                        onChange={(e) => setProperty1grayvalue(e)}
                        className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-100 border-solid flex rounded-md w-full"
                        prefix={
                          <Img
                            className="mt-[3px] mb-px cursor-pointer h-4 mr-4"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                        }
                        suffix={
                          <CloseSVG
                            fillColor="#8392ab"
                            className="cursor-pointer h-4 my-auto"
                            onClick={() => setProperty1grayvalue("")}
                            style={{
                              visibility:
                                property1grayvalue?.length <= 0
                                  ? "hidden"
                                  : "visible",
                            }}
                            height={16}
                            width={16}
                            viewBox="0 0 16 16"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      ></Input>
                      <Input
                        name="property1dark"
                        placeholder="Search"
                        value={property1darkvalue}
                        onChange={(e) => setProperty1darkvalue(e)}
                        className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
                        wrapClassName="flex ml-0.5 md:ml-[0] rounded-md w-full"
                        prefix={
                          <Img
                            className="mt-[3px] mb-px cursor-pointer h-4 mr-4"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                        }
                        suffix={
                          <CloseSVG
                            fillColor="#94a3b8"
                            className="cursor-pointer h-4 my-auto"
                            onClick={() => setProperty1darkvalue("")}
                            style={{
                              visibility:
                                property1darkvalue?.length <= 0
                                  ? "hidden"
                                  : "visible",
                            }}
                            height={16}
                            width={16}
                            viewBox="0 0 16 16"
                          />
                        }
                        shape="round"
                        color="blue_gray_300_19"
                        size="lg"
                        variant="fill"
                      ></Input>
                      <div className="bg-blue_gray-300_19 flex flex-col items-center justify-start rounded-md w-10">
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="round"
                          size="lg"
                        >
                          <Img
                            className="h-4"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[90px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                    size="txtHelveticaBold30Bluegray900"
                  >
                    OTHER
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[123px] w-[12%] md:w-full">
                  <div className="flex flex-row gap-1 items-center justify-start px-1 py-0.5 w-auto">
                    <div className="bg-cyan-400 h-2 rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtHelvetica12Bluegray900"
                    >
                      text
                    </Text>
                  </div>
                  <Text
                    className="mt-[43px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                    size="txtHelveticaBold30Bluegray900"
                  >
                    CHIPS
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[86px] mt-[18px] rounded-[13px]"
                    rightIcon={
                      <Img
                        className="h-2 mt-0.5 mb-[3px] ml-4"
                        src="images/img_close_gray_300.svg"
                        alt="close"
                      />
                    }
                    color="blue_gray_700_01"
                    size="sm"
                    variant="fill"
                  >
                    <div className="text-left text-xs">In Stock</div>
                  </Button>
                  <Text
                    className="mt-[39px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                    size="txtHelveticaBold30Bluegray900"
                  >
                    TIME
                  </Text>
                  <GeneralWeekday
                    className="border-b border-blue_gray-50 border-r border-solid flex flex-col items-center justify-start mt-[7px] w-[64%] md:w-full"
                    daynumber="1"
                    meetingdetails="Meeting with Michael"
                  />
                  <div className="flex flex-row gap-2 items-start justify-start mt-[35px] w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_iconsregular.svg"
                      alt="iconsregular"
                    />
                    <Text
                      className="text-blue_gray-500 text-sm"
                      size="txtHelvetica14Bluegray500"
                    >
                      23 - 30 March 2020
                    </Text>
                  </div>
                </div>
                <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[3829px] md:mt-0 mt-[46px] p-4 rounded-[5px] w-[47%] md:w-full">
                  <div className="h-[348px] w-full"></div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[34px] w-[92%] md:w-full">
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-[42px] items-center justify-start p-4 rounded-[5px] w-[35%] md:w-full">
                <Img
                  className="h-px"
                  src="images/img_separator.svg"
                  alt="stylesolid"
                />
                <Img
                  className="md:h-auto h-px object-cover"
                  src="images/img_separator_1x632.png"
                  alt="stylegradient"
                />
              </div>
              <Img
                className="h-[17px] md:h-auto md:ml-[0] ml-[68px] md:mt-0 mt-[21px] object-cover"
                src="images/img_searchslider.png"
                alt="searchslider"
              />
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-end md:ml-[0] ml-[82px] p-[11px] rounded-[5px] w-[36%] md:w-full">
                <div className="h-2 mt-1 overflow-hidden relative w-[98%]">
                  <div className="w-full h-full absolute bg-blue_gray_900_0b rounded-[3px]"></div>
                  <div
                    className="h-full absolute bg-blue_gray_900  rounded-[3px]"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <Img
                  className="h-2 mt-[11px]"
                  src="images/img_progression50.svg"
                  alt="progressionFifty"
                />
                <Img
                  className="h-2 mt-[11px]"
                  src="images/img_progression50.svg"
                  alt="progressionSeventyFive"
                />
                <Img
                  className="h-2 mt-[11px]"
                  src="images/img_progression50.svg"
                  alt="progression100"
                />
                <Img
                  className="h-2 mt-[11px]"
                  src="images/img_progression0.svg"
                  alt="progressionZero"
                />
                <Img
                  className="h-[3px] mt-[11px]"
                  src="images/img_progression0_indigo_50.svg"
                  alt="progressionZero_One"
                />
                <div className="h-2 mt-4 overflow-hidden relative w-[98%]">
                  <div className="w-full h-full absolute bg-blue_gray_900_0b rounded-[3px]"></div>
                  <div
                    className="h-full absolute bg-blue_gray_900  rounded-[3px]"
                    style={{ width: "6%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralPage;
