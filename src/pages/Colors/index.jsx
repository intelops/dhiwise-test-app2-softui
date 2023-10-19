import React from "react";

import { Button, Img, List, Text } from "components";

const ColorsPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter items-center justify-start mx-auto pb-[114px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1472px] w-full">
            <div className="bg-purple-500 h-3 w-full"></div>
            <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1312px] mx-auto w-full">
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
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
                      Style
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterRegular24"
                    >
                      <>-&gt;</>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold24"
                    >
                      Colors
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
              <div className="flex flex-col font-helvetica items-start justify-start max-w-[1312px] mx-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold40"
                    >
                      Colors
                    </Text>
                  </div>
                  <Text
                    className="leading-[140.00%] max-w-5xl md:max-w-full text-blue_gray-400 text-lg"
                    size="txtHelvetica18"
                  >
                    Our primary palette is comprised of neutrals, white, and
                    blue. These colors are present across most touch points from
                    marketing to product.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-notosans items-start justify-start max-w-[1327px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-10 items-start justify-start max-w-[1327px] w-full">
              <Text
                className="capitalize text-black-900 text-lg w-[69px]"
                size="txtNotoSansBold18"
              >
                Primary
              </Text>
              <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-gray-50_01 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-blue_gray-900 h-[178px] w-full"></div>
                  <Img
                    className="h-6 w-full"
                    src="images/img_opacity.svg"
                    alt="opacity"
                  />
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="capitalize leading-[28.00px] text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        DARK
                        <br />
                        #1E293B
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-50 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-white-A700 h-[178px] w-full"></div>
                  <Img
                    className="h-6 w-full"
                    src="images/img_opacity_white_a700.svg"
                    alt="opacity"
                  />
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="capitalize leading-[28.00px] text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        WHITE
                        <br />
                        #FFFFFF
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50_01 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-purple-500 h-[178px] w-full"></div>
                  <Img
                    className="h-6 w-full"
                    src="images/img_opacity_blue_800.svg"
                    alt="opacity"
                  />
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="capitalize leading-[28.00px] text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        PRIMARY
                        <br />
                        #1B46C2
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50_01 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-blue_gray-400 h-[178px] w-full"></div>
                  <Img
                    className="h-6 w-full"
                    src="images/img_opacity_blue_gray_500.svg"
                    alt="opacity"
                  />
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="capitalize leading-[28.00px] text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        SECONDARY
                        <br />
                        #64748B
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50_01 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-cyan-400 h-[178px] w-full"></div>
                  <Img
                    className="h-6 w-full"
                    src="images/img_opacity_blue_400.svg"
                    alt="opacity"
                  />
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="capitalize leading-[28.00px] text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        INFO
                        <br />
                        #55A6F8
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50_01 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-light_green-A700 h-[178px] w-full"></div>
                  <Img
                    className="h-6 w-full"
                    src="images/img_opacity_light_green_600.svg"
                    alt="opacity"
                  />
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="capitalize leading-[28.00px] text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        SUCCESS
                        <br />
                        #67C23A
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50_01 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-red-A700 h-[178px] w-full"></div>
                  <Img
                    className="h-6 w-full"
                    src="images/img_opacity_red_500.svg"
                    alt="opacity"
                  />
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="capitalize leading-[28.00px] text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        DANGER
                        <br />
                        #EA4E3D
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-50_01 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-yellow-600 h-[178px] w-full"></div>
                  <Img
                    className="h-6 w-full"
                    src="images/img_opacity_orange_a200.svg"
                    alt="opacity"
                  />
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="capitalize leading-[28.00px] text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        WARNING
                        <br />
                        #F19937
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start max-w-[1327px] mt-[139px] w-full">
              <Text
                className="capitalize text-black-900 text-lg w-[124px]"
                size="txtNotoSansBold18"
              >
                Light Neutrals
              </Text>
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-gray-50 border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        100
                        <br />
                        #F9FAFB
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-blue_gray-50 h-20 w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        200
                        <br />
                        #e9ecef{" "}
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-gray-300 h-20 w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        300
                        <br />
                        #DDE0E5
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-blue_gray-100 h-20 w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        400
                        <br />
                        #CED4DA
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-blue_gray-200 h-20 w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        500
                        <br />
                        #ADB5BD
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-gray-600 h-20 w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        600
                        <br />
                        #6C757D
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-blue_gray-700 h-20 w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        700
                        <br />
                        #495057
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-gray-800 h-20 w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900_01 text-lg"
                      size="txtNotoSansBold18Gray90001"
                    >
                      <>
                        800
                        <br />
                        #343A40
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start rounded-lg shadow-bs10 w-full">
                  <div className="bg-gray-900 h-20 w-full"></div>
                  <div className="flex flex-col items-start justify-start pb-3 px-3 w-full">
                    <Text
                      className="leading-[28.00px] lowercase text-gray-900 text-lg"
                      size="txtNotoSansBold18Gray900"
                    >
                      <>
                        900
                        <br />
                        #212529
                      </>
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Text
              className="capitalize md:ml-[0] ml-[9px] mt-[78px] text-black-900 text-lg"
              size="txtNotoSansBold18"
            >
              Gradients
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row font-helvetica gap-[30px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-start max-w-[1327px] mt-14 mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-center justify-center pb-2 rounded-lg shadow-bs w-full">
              <div className="bg-gradient14  border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
              <Text
                className="leading-[150.00%] text-blue_gray-900 text-center text-sm"
                size="txtHelvetica14"
              >
                <>
                  linear-gradient
                  <br />
                  (#3F5578, #1E293B)
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-center justify-center pb-2 rounded-lg shadow-bs w-full">
              <div className="bg-gradient15  border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
              <Text
                className="leading-[150.00%] text-blue_gray-900 text-center text-sm"
                size="txtHelvetica14"
              >
                <>
                  linear-gradient
                  <br />
                  (#1B46C2,#825ee4)
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-center justify-center pb-2 rounded-lg shadow-bs w-full">
              <div className="bg-gradient13  border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
              <Text
                className="leading-[150.00%] text-blue_gray-900 text-center text-sm"
                size="txtHelvetica14"
              >
                <>
                  linear-gradient
                  <br />
                  (#3F5578, #1E293B)
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-center justify-center pb-2 rounded-lg shadow-bs w-full">
              <div className="bg-gradient12  border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
              <Text
                className="leading-[150.00%] text-blue_gray-900 text-center text-sm"
                size="txtHelvetica14"
              >
                <>
                  linear-gradient
                  <br />
                  (#1B46C2,#825ee4)
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-center justify-center pb-2 rounded-lg shadow-bs w-full">
              <div className="bg-gradient11  border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
              <Text
                className="leading-[150.00%] text-blue_gray-900 text-center text-sm"
                size="txtHelvetica14"
              >
                <>
                  linear-gradient
                  <br />
                  #1B46C2,#825ee4)
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-center justify-center pb-2 rounded-lg shadow-bs w-full">
              <div className="bg-gradient  border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
              <Text
                className="leading-[150.00%] text-blue_gray-900 text-center text-sm"
                size="txtHelvetica14"
              >
                <>
                  linear-gradient
                  <br />
                  (#3F5578, #1E293B)
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-center justify-center pb-2 rounded-lg shadow-bs w-full">
              <div className="bg-gradient20  border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
              <Text
                className="leading-[150.00%] text-blue_gray-900 text-center text-sm"
                size="txtHelvetica14"
              >
                <>
                  linear-gradient
                  <br />( #3F5578, #1E293B)
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-center justify-center pb-2 rounded-lg shadow-bs w-full">
              <div className="bg-gradient9  border border-gray-300 border-solid h-20 rounded-tl-lg rounded-tr-lg w-full"></div>
              <Text
                className="leading-[150.00%] text-blue_gray-900 text-center text-sm"
                size="txtHelvetica14"
              >
                <>
                  linear-gradient
                  <br />
                  (#1B46C2,#825ee4)
                </>
              </Text>
            </div>
          </List>
          <div className="flex flex-col font-notosans gap-14 items-start justify-start mt-[134px] md:px-5 w-[47%] md:w-full">
            <Text
              className="capitalize text-black-900 text-lg"
              size="txtNotoSansBold18"
            >
              Effects
            </Text>
            <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[58%] md:w-full">
                <div className="h-[260px] relative rounded-[12px] w-full">
                  <Img
                    className="h-[260px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_2.png"
                    alt="Two"
                  />
                  <Button
                    className="absolute bottom-[7%] capitalize cursor-pointer font-semibold inset-x-[0] min-w-[368px] mx-auto outline outline-[0.5px] outline-white-A700 text-base text-center"
                    shape="round"
                    color="white_A700_a5"
                    size="3xl"
                    variant="fill"
                  >
                    Blur
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-[260px] items-center justify-end p-[43px] md:px-10 sm:px-5 rounded-[12px] shadow-bs w-[260px]">
                <Text
                  className="capitalize mt-[152px] text-base text-black-900 text-center"
                  size="txtNotoSansSemiBold16"
                >
                  Shadow
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
