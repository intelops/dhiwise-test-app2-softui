import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import GeneralInput from "components/GeneralInput";
import SectionsNamestep4 from "components/SectionsNamestep4";

import { CloseSVG } from "../../assets/images";

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

const EcommerceNewProductThreePage = () => {
  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");

  return (
    <>
      <div className="flex flex-col font-helvetica items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex md:flex-col flex-row gap-[26px] h-[1353px] items-start justify-between p-[18px] w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-1 flex-col gap-8 justify-start md:mt-0 mt-[21px] md:px-5 w-[13%] md:w-full">
              <div className="flex flex-row gap-3 items-start justify-start ml-3.5 md:ml-[0] w-[82%] md:w-full">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_calculator_blue_gray_900_03.svg"
                  alt="calculator"
                />
                <Text
                  className="mt-1 text-gray-800 text-xs"
                  size="txtHelveticaBold12Bluegray90003"
                >
                  SOFT UI DASHBOARD PRO
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-gradient18  h-px w-[99%]" />
                <div className="flex flex-col items-center justify-start mt-[21px] w-[99%] md:w-full">
                  <SelectBox
                    className="font-bold text-left text-xs w-[94%] sm:w-full"
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
                      PAGES
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
                        className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                        placeholderClassName="text-gray-500"
                        indicator={
                          <Img
                            className="h-[15px] mr-[0] w-[15px]"
                            src="images/img_arrowdown_blue_gray_200_01.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group1164"
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
                            Applications
                          </Text>
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_arrowup_blue_gray_400_01.svg"
                            alt="arrowup"
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
                                    Kanban
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelvetica12Bluegray20001"
                                  >
                                    Wizard
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelvetica12Bluegray20001"
                                  >
                                    DataTables
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelvetica12Bluegray20001"
                                  >
                                    Calendar
                                  </Text>
                                  <Text
                                    className="text-gray-500 text-xs"
                                    size="txtHelvetica12Bluegray20001"
                                  >
                                    Analytics
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
                          className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                          placeholderClassName="text-gray-500"
                          indicator={
                            <Img
                              className="h-[15px] mr-[0] w-[15px]"
                              src="images/img_arrowdown_blue_gray_200_01.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group1169"
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
                          className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                          placeholderClassName="text-gray-500"
                          indicator={
                            <Img
                              className="h-[15px] mr-[0] w-[15px]"
                              src="images/img_arrowdown_blue_gray_200_01.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group1170"
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
                        DOCS
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
                            className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                            placeholderClassName="text-gray-500"
                            indicator={
                              <Img
                                className="h-[15px] mr-[0] w-[15px]"
                                src="images/img_arrowdown_blue_gray_200_01.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group1171"
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
                            className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                            placeholderClassName="text-gray-500"
                            indicator={
                              <Img
                                className="h-[15px] mr-[0] w-[15px]"
                                src="images/img_arrowdown_blue_gray_200_01.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group1172"
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
                            className="sm:flex-1 font-bold text-gray-500 text-left text-xs w-[78%] sm:w-full"
                            placeholderClassName="text-gray-500"
                            indicator={
                              <Img
                                className="h-[15px] mr-[0] w-[15px]"
                                src="images/img_arrowdown_blue_gray_200_01.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group1173"
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
                                Need help?
                              </Text>
                              <Text
                                className="text-white-A700 text-xs"
                                size="txtHelvetica12WhiteA700"
                              >
                                Please check our docs
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
                                    DOCUMENTATION
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
            <div className="h-[1305px] sm:h-[1360px] md:h-[707px] mr-1.5 md:mt-0 my-1.5 md:px-5 relative w-[86%] md:w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[989px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[300px] sm:h-[336px] relative w-full">
                      <Img
                        className="h-[300px] m-auto object-cover rounded-[15px] w-full"
                        src="images/img_curved01.png"
                        alt="curvedOne"
                      />
                      <div className="absolute bg-gradient25  flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto p-[19px] rounded-[15px] w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start mb-[214px] sm:ml-[0] ml-[3px] w-[8%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-[120px]">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                              size="txtHelvetica24"
                            >
                              <span className="text-white-A700 font-helvetica text-left font-normal">
                                Pages{" "}
                              </span>
                              <span className="text-black-900 font-helvetica text-left font-normal">
                                {" "}
                              </span>
                              <span className="text-white-A700 font-helvetica text-left text-xs font-normal">
                                / New Product
                              </span>
                            </Text>
                          </div>
                          <Text
                            className="text-sm text-white-A700"
                            size="txtHelveticaBold14WhiteA700"
                          >
                            New Product
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row items-center justify-center mr-[3px] sm:mt-0 mt-[3px] w-[22%] sm:w-full">
                          <Input
                            name="inputwithaddons"
                            placeholder="Type here..."
                            value={inputwithaddonsvalue}
                            onChange={(e) => setInputwithaddonsvalue(e)}
                            className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
                            wrapClassName="border border-gray-300 border-solid flex pr-[35px] w-3/5"
                            prefix={
                              <Img
                                className="cursor-pointer my-auto"
                                src="images/img_search_blue_gray_900_03.svg"
                                alt="search"
                              />
                            }
                            suffix={
                              <CloseSVG
                                fillColor="#a0aec0"
                                className="cursor-pointer my-auto"
                                onClick={() => setInputwithaddonsvalue("")}
                                style={{
                                  visibility:
                                    inputwithaddonsvalue?.length <= 0
                                      ? "hidden"
                                      : "visible",
                                }}
                                height={39}
                                width={37}
                                viewBox="0 0 37 39"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Input>
                          <div className="flex flex-row gap-1 h-4 md:h-auto items-center justify-start ml-[18px] w-[58px]">
                            <Img
                              className="h-3 w-3"
                              src="images/img_ioniconppersondefault_white_a700.svg"
                              alt="ioniconppersond"
                            />
                            <a
                              href="javascript:"
                              className="text-white-A700 text-xs w-10"
                            >
                              <Text size="txtHelveticaBold12WhiteA700">
                                Sign In
                              </Text>
                            </a>
                          </div>
                          <Img
                            className="h-3 ml-[19px] w-3"
                            src="images/img_ioniconssettingssharp_white_a700.svg"
                            alt="ioniconssetting"
                          />
                          <Img
                            className="h-3 ml-[17px] w-3"
                            src="images/img_ioniconnnotif_white_a700.svg"
                            alt="ioniconnnotif"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12Bluegray20001"
                      >
                        <span className="text-gray-500 font-helvetica text-left font-normal">
                          @ 2021, Made with ❤️ by{" "}
                        </span>
                        <span className="text-blue_gray-800 font-helvetica text-left font-bold">
                          Creative Tim
                        </span>
                        <span className="text-gray-500 font-helvetica text-left font-normal">
                          {" "}
                          for a better web.
                        </span>
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-between w-[14%] sm:w-full">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12Bluegray20001"
                      >
                        Creative Tim
                      </Text>
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12Bluegray20001"
                      >
                        Blog
                      </Text>
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtHelvetica12Bluegray20001"
                      >
                        License
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[68px] inset-x-[0] items-center justify-start mx-auto top-[18%] w-[97%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[113px] items-center justify-end p-[11px] w-full"
                  style={{
                    backgroundImage: "url('images/img_profileelements.png')",
                  }}
                >
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[5px] w-[99%] md:w-full">
                    <div className="flex flex-row gap-[17px] items-center justify-between w-[16%] md:w-full">
                      <div className="md:h-20 h-[85px] relative w-[85px]">
                        <div className="absolute bg-gray-400 flex flex-col h-20 items-center justify-start left-[0] rounded-lg top-[0] w-20">
                          <div className="h-20 relative w-20">
                            <Img
                              className="h-20 m-auto object-cover rounded-[12px] w-20"
                              src="images/img_creditstounsplashcom_80x80.png"
                              alt="creditstounspla"
                            />
                            <Img
                              className="absolute h-20 inset-[0] justify-center m-auto object-cover rounded-[12px] w-20"
                              src="images/img_brucemars1.png"
                              alt="brucemarsOne"
                            />
                          </div>
                        </div>
                        <Button
                          className="absolute bottom-[0] flex h-[26px] items-center justify-center right-[0] rounded-lg w-[26px]"
                          shape="round"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-3"
                            src="images/img_edit_26x26.png"
                            alt="edit"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg"
                          size="txtHelveticaBold18Bluegray90003"
                        >
                          Alec Thompson
                        </Text>
                        <Text
                          className="mt-0.5 text-gray-600 text-sm"
                          size="txtHelvetica14Bluegray40001"
                        >
                          CEO / Co-Founder
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-3 justify-start w-auto sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center sm:ml-[0] hover:mx-0 px-2 hover:shadow-bs7 w-[135px] hover:w-full">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                            <div className="flex flex-row gap-1 items-center justify-center w-auto">
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_icon_black_900.svg"
                                alt="icon"
                              />
                              <Text
                                className="text-[10px] text-center text-gray-800 w-5"
                                size="txtHelveticaBold10Bluegray90003"
                              >
                                App
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
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center sm:ml-[0] hover:mx-0 px-2 rounded-lg hover:shadow-bs7 shadow-bs7 w-[135px] hover:w-full">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                            <div className="flex flex-row gap-1 items-center justify-center w-auto">
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_icon_blue_gray_900_03.svg"
                                alt="icon"
                              />
                              <Text
                                className="text-[10px] text-center text-gray-800 w-auto"
                                size="txtHelveticaBold10Bluegray90003"
                              >
                                Messages
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
                      <div className="hover:cursor-pointer flex flex-col h-[35px] md:h-auto items-center justify-center sm:ml-[0] hover:mx-0 px-2 hover:shadow-bs7 w-[135px] hover:w-full">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                            <div className="flex flex-row gap-1 items-center justify-center w-auto">
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_icon_blue_gray_900_03_11x11.svg"
                                alt="icon"
                              />
                              <Text
                                className="text-[10px] text-center text-gray-800 w-[39px]"
                                size="txtHelveticaBold10Bluegray90003"
                              >
                                Settings
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
                    </List>
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
                  <SectionsNamestep4 className="sm:h-[116px] md:h-[42px] h-[43px] pl-2 relative w-[95%] md:w-full" />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-notosans h-[419px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-[29px] items-end justify-start max-w-[931px] p-6 sm:px-5 w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-800 text-xl tracking-[-0.80px]"
                          size="txtNotoSansSemiBold20Bluegray90003"
                        >
                          Socials
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                        <GeneralInput
                          className="flex flex-col gap-1 items-start justify-center w-full"
                          nameTen="Shopify Handle"
                        />
                        <GeneralInput
                          className="flex flex-col gap-1 items-start justify-center w-full"
                          nameTen="Facebook Account"
                        />
                        <GeneralInput
                          className="flex flex-col gap-1 items-start justify-center w-full"
                          nameTen="Instagram Account"
                        />
                      </div>
                      <div className="flex flex-row font-helvetica sm:gap-10 items-center justify-between w-full">
                        <Button
                          className="cursor-pointer font-bold h-10 min-w-[81px] text-center text-xs uppercase"
                          shape="round"
                          size="lg"
                          variant="gradient"
                          color="blue_gray_100_blue_gray_50_01"
                        >
                          Prev
                        </Button>
                        <Button
                          className="cursor-pointer font-bold h-10 leading-[normal] min-w-[83px] text-[13px] text-center uppercase"
                          shape="round"
                          color="gray_900_05"
                          size="lg"
                          variant="fill"
                        >
                          Next
                        </Button>
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

export default EcommerceNewProductThreePage;
