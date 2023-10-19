import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SectionsColumnSeven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end p-3.5 w-[97%] md:w-full">
          <div className="h-[43px] md:h-[50px] mt-[7px] relative w-3/4 sm:w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[19%] w-[90%]">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Line className="bg-blue_gray-900_01 h-0.5 w-[49%]" />
                <Line className="bg-blue_gray-900_01 h-0.5 w-[49%]" />
              </div>
            </div>
            <div className="absolute flex flex-col gap-[7px] h-full inset-[0] items-center justify-center m-auto w-[10%]">
              <div className="bg-blue_gray-900_01 border border-blue_gray-900_01 border-solid h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-blue_gray-900_01 text-center text-sm"
                size="txtNotoSansRegular14Bluegray90001"
              >
                {props?.accountTwo}
              </Text>
            </div>
            <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[10%]">
              <div className="bg-blue_gray-900_01 h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-blue_gray-900_01 text-center text-sm"
                size="txtNotoSansRegular14Bluegray90001"
              >
                {props?.addressTwo}
              </Text>
            </div>
            <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[7%]">
              <div className="bg-blue_gray-900_01 h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-blue_gray-900_01 text-center text-sm"
                size="txtNotoSansRegular14Bluegray90001"
              >
                {props?.aboutTwo}
              </Text>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start p-8 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
        >
          <div className="flex flex-col gap-[50px] items-center justify-start mb-16 mt-[3px] w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start">
                <Text
                  className="text-blue_gray-900 text-center text-xl tracking-[-0.80px]"
                  size="txtHelveticaBold20Bluegray900"
                >
                  {props?.areyoulivingin}
                </Text>
                <Text
                  className="leading-[150.00%] text-base text-blue_gray-400 text-center w-full"
                  size="txtHelvetica16Bluegray400"
                >
                  {props?.onethingilove}
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[778px] w-full">
                  <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                    <Text
                      className="text-[13px] text-blue_gray-900 w-auto"
                      size="txtNotoSansSemiBold13"
                    >
                      {props?.nameSix}
                    </Text>
                    <SelectBox
                      className="border border-blue_gray-100 border-solid font-helvetica rounded-md text-blue_gray-400 text-left text-sm w-full"
                      placeholderClassName="text-blue_gray-400"
                      indicator={
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowdown_blue_gray_400_16x16.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="country"
                      options={countryOptionsList}
                      isSearchable={false}
                      placeholder="e.g. Japan"
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                    <Text
                      className="text-[13px] text-blue_gray-900 w-auto"
                      size="txtNotoSansSemiBold13"
                    >
                      {props?.nameSix}
                    </Text>
                    <SelectBox
                      className="border border-blue_gray-100 border-solid font-helvetica rounded-md text-blue_gray-400 text-left text-sm w-full"
                      placeholderClassName="text-blue_gray-400"
                      indicator={
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowdown_blue_gray_400_16x16.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="country"
                      options={countryOptionsList1}
                      isSearchable={false}
                      placeholder="e.g. Japan"
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[778px] w-full">
                  <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                    <Text
                      className="text-[13px] text-blue_gray-900 w-auto"
                      size="txtNotoSansSemiBold13"
                    >
                      {props?.nameSix}
                    </Text>
                    <SelectBox
                      className="border border-blue_gray-100 border-solid font-helvetica rounded-md text-blue_gray-400 text-left text-sm w-full"
                      placeholderClassName="text-blue_gray-400"
                      indicator={
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowdown_blue_gray_400_16x16.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="country"
                      options={countryOptionsList2}
                      isSearchable={false}
                      placeholder="e.g. Japan"
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                    <Text
                      className="text-[13px] text-blue_gray-900 w-auto"
                      size="txtNotoSansSemiBold13"
                    >
                      {props?.nameSix}
                    </Text>
                    <SelectBox
                      className="border border-blue_gray-100 border-solid font-helvetica rounded-md text-blue_gray-400 text-left text-sm w-full"
                      placeholderClassName="text-blue_gray-400"
                      indicator={
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowdown_blue_gray_400_16x16.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="country"
                      options={countryOptionsList3}
                      isSearchable={false}
                      placeholder="e.g. Japan"
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap sm:gap-10 items-center justify-between max-w-[779px] w-full">
              <Button
                className="cursor-pointer font-bold font-helvetica h-10 min-w-[81px] text-center text-xs uppercase"
                shape="round"
                size="lg"
                variant="gradient"
                color="blue_gray_100_blue_gray_50_01"
              >
                {props?.prevOne}
              </Button>
              <Button
                className="cursor-pointer font-bold font-helvetica h-10 leading-[normal] min-w-[85px] text-[13px] text-center uppercase"
                shape="round"
                size="lg"
                variant="gradient"
                color="blue_gray_700_01_gray_900_02"
              >
                {props?.send}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SectionsColumnSeven.defaultProps = {
  accountTwo: "Account",
  addressTwo: "Address",
  aboutTwo: "About",
  areyoulivingin: "Are you living in a nice area?",
  onethingilove:
    "One thing I love about the later sunsets is the chance to go for a walk through the neighborhood woods before dinner",
  nameThree: "Country Name",
  nameFour: "Country Name",
  nameFive: "Country Name",
  nameSix: "Country Name",
  prevOne: "Prev",
  send: "Send",
};

export default SectionsColumnSeven;
