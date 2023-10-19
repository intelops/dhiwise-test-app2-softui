import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const dashboardsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const pagesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ecommerceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const authenticationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const basicOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const componentsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const changelogOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const GeneralNavigationSidebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-start justify-start ml-3.5 md:ml-[0] w-[82%] md:w-full">
          <Img
            className="h-[22px] w-[22px]"
            src="images/img_calculator_blue_gray_900_03.svg"
            alt="calculator_Four"
          />
          <Text
            className="mt-1 text-gray-800 text-xs"
            size="txtHelveticaBold12Bluegray90003"
          >
            {props?.softuidashboardFive}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <Line className="bg-gradient18  h-px w-[99%]" />
          <div className="flex flex-col items-center justify-start mt-[21px] w-[99%] md:w-full">
            <SelectBox
              className="font-bold font-helvetica text-left text-xs w-[94%] sm:w-full"
              placeholderClassName="text-gray-800"
              indicator={
                <Img
                  className="h-[15px] mr-[0] w-[15px]"
                  src="images/img_arrowdown_blue_gray_200_01.svg"
                  alt="arrow_down"
                />
              }
              isSearchable={false}
              placeholder="Dashboards"
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    className="h-[15px] mr-[19px] w-[15px]"
                    src="images/img_ionicon_h_home_default.svg"
                    alt="IONIcon/H/home/default"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              name="dashboards"
              isMulti={false}
              options={dashboardsOptionsList}
              shape="round"
              color="white_A700"
              size="xl"
              variant="fill"
            />
            <div className="flex flex-col items-start justify-start mt-[21px] w-[82%] md:w-full">
              <Text
                className="text-gray-800 text-xs"
                size="txtHelveticaBold12Bluegray90003"
              >
                {props?.pages}
              </Text>
              <div className="flex flex-row gap-3 items-center justify-between mt-[26px] w-full">
                <Button
                  className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-[15px]"
                    src="images/img_ioniconddocumentdefault.svg"
                    alt="ioniconddocumen"
                  />
                </Button>
                <SelectBox
                  className="sm:flex-1 font-bold font-helvetica text-gray-500 text-left text-xs w-[78%] sm:w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[15px] mr-[0] w-[15px]"
                      src="images/img_arrowdown_blue_gray_200_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group687"
                  options={pagesOptionsList}
                  isSearchable={false}
                  placeholder="Pages"
                />
              </div>
              <div className="h-[170px] md:h-[186px] mt-6 relative w-full">
                <div className="absolute bottom-[0] flex flex-col gap-[22px] justify-start right-[0] w-[94%]">
                  <div className="flex flex-row gap-[60px] items-start justify-end md:ml-[0] ml-[29px] w-[84%] md:w-full">
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtHelveticaBold12Bluegray40001"
                    >
                      {props?.applications}
                    </Text>
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_arrowup_blue_gray_400_01.svg"
                      alt="arrowup_One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row gap-6 items-center justify-between w-full">
                          <Img
                            className="h-[115px]"
                            src="images/img_dots.svg"
                            alt="dots"
                          />
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="text-gray-500 text-xs"
                              size="txtHelvetica12Bluegray20001"
                            >
                              {props?.kanban}
                            </Text>
                            <Text
                              className="text-gray-500 text-xs"
                              size="txtHelvetica12Bluegray20001"
                            >
                              {props?.wizard}
                            </Text>
                            <Text
                              className="text-gray-500 text-xs"
                              size="txtHelvetica12Bluegray20001"
                            >
                              {props?.datatables}
                            </Text>
                            <Text
                              className="text-gray-500 text-xs"
                              size="txtHelvetica12Bluegray20001"
                            >
                              {props?.calendar}
                            </Text>
                            <Text
                              className="text-gray-500 text-xs"
                              size="txtHelvetica12Bluegray20001"
                            >
                              {props?.analytics}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute flex h-[30px] items-center justify-center left-[0] rounded-lg top-[0] w-[30px]"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-[15px]"
                    src="images/img_ioniconbbuilddefault.svg"
                    alt="ioniconbbuildde"
                  />
                </Button>
              </div>
              <List
                className="flex flex-col gap-6 items-center mt-[25px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-[15px]"
                      src="images/img_cart_blue_gray_800.svg"
                      alt="cart"
                    />
                  </Button>
                  <SelectBox
                    className="sm:flex-1 font-bold font-helvetica text-gray-500 text-left text-xs w-[78%] sm:w-full"
                    placeholderClassName="text-gray-500"
                    indicator={
                      <Img
                        className="h-[15px] mr-[0] w-[15px]"
                        src="images/img_arrowdown_blue_gray_200_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group692"
                    options={ecommerceOptionsList}
                    isSearchable={false}
                    placeholder="Ecommerce"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-[15px]"
                      src="images/img_ioniconddocumentsdefault.svg"
                      alt="ioniconddocumen"
                    />
                  </Button>
                  <SelectBox
                    className="sm:flex-1 font-bold font-helvetica text-gray-500 text-left text-xs w-[78%] sm:w-full"
                    placeholderClassName="text-gray-500"
                    indicator={
                      <Img
                        className="h-[15px] mr-[0] w-[15px]"
                        src="images/img_arrowdown_blue_gray_200_01.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group693"
                    options={authenticationOptionsList}
                    isSearchable={false}
                    placeholder="Authentication"
                  />
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start mt-6 w-full">
              <Line className="bg-gradient18  h-px w-full" />
              <div className="flex flex-col gap-[26px] items-start justify-start w-[82%] md:w-full">
                <Text
                  className="text-gray-800 text-xs"
                  size="txtHelveticaBold12Bluegray90003"
                >
                  {props?.docs}
                </Text>
                <List
                  className="flex flex-col gap-6 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                    <Button
                      className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_ioniconrrocketsharp.svg"
                        alt="ioniconrrockets"
                      />
                    </Button>
                    <SelectBox
                      className="sm:flex-1 font-bold font-helvetica text-gray-500 text-left text-xs w-[78%] sm:w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-[15px] mr-[0] w-[15px]"
                          src="images/img_arrowdown_blue_gray_200_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group694"
                      options={basicOptionsList}
                      isSearchable={false}
                      placeholder="Basic"
                    />
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                    <Button
                      className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_offer_blue_gray_800.svg"
                        alt="offer"
                      />
                    </Button>
                    <SelectBox
                      className="sm:flex-1 font-bold font-helvetica text-gray-500 text-left text-xs w-[78%] sm:w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-[15px] mr-[0] w-[15px]"
                          src="images/img_arrowdown_blue_gray_200_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group695"
                      options={componentsOptionsList}
                      isSearchable={false}
                      placeholder="Components"
                    />
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                    <Button
                      className="flex h-[30px] items-center justify-center rounded-lg w-[30px]"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_ioniconiinfor.svg"
                        alt="ioniconiinfor"
                      />
                    </Button>
                    <SelectBox
                      className="sm:flex-1 font-bold font-helvetica text-gray-500 text-left text-xs w-[78%] sm:w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-[15px] mr-[0] w-[15px]"
                          src="images/img_arrowdown_blue_gray_200_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group696"
                      options={changelogOptionsList}
                      isSearchable={false}
                      placeholder="Changelog"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[18px] mt-[110px] w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-500_7f flex flex-col items-center justify-start rounded-[16px] w-full">
                <div className="h-[169px] relative w-full">
                  <Img
                    className="h-[169px] m-auto object-cover rounded-[15px] w-full"
                    src="images/img_whitecurved1.png"
                    alt="whitecurvedOne"
                  />
                  <div className="absolute flex flex-col gap-[11px] h-max inset-[0] items-start justify-center m-auto w-[86%]">
                    <div className="flex flex-col gap-6 items-start justify-start w-[66%] md:w-full">
                      <Button
                        className="flex h-[35px] items-center justify-center rounded-lg w-[35px]"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_ioniconhhelpcircle.svg"
                          alt="ioniconhhelpcir"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtHelveticaBold14WhiteA700"
                        >
                          {props?.needhelp}
                        </Text>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtHelvetica12WhiteA700"
                        >
                          {props?.pleasecheckour}
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg w-[186px]">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-[10px] text-center text-gray-800"
                              size="txtHelveticaBold10Bluegray90003"
                            >
                              {props?.text}
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-px w-6"
                          src="images/img_minwidth.svg"
                          alt="minwidth"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GeneralNavigationSidebar.defaultProps = {
  softuidashboardFive: "SOFT UI DASHBOARD PRO",
  pages: "PAGES",
  applications: "Applications",
  kanban: "Kanban",
  wizard: "Wizard",
  datatables: "DataTables",
  calendar: "Calendar",
  analytics: "Analytics",
  docs: "DOCS",
  needhelp: "Need help?",
  pleasecheckour: "Please check our docs",
  text: "DOCUMENTATION",
};

export default GeneralNavigationSidebar;
