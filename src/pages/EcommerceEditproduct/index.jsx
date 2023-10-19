import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import GeneralInput from "components/GeneralInput";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import Sidebar5 from "components/Sidebar5";

import { CloseSVG } from "../../assets/images";

const inputfieldTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const inputfieldThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priceOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EcommerceEditproductPage = () => {
  const sideBarMenu = [
    {
      label: "Kanban",
      href: "/applicationskanban",
      active: window.location.pathname === "/applicationskanban",
    },
    { label: "Wizard" },
    {
      label: "DataTables",
      href: "/tables",
      active: window.location.pathname === "/tables",
    },
    {
      label: "Calendar",
      href: "/applicationscalendar",
      active: window.location.pathname === "/applicationscalendar",
    },
    {
      label: "Analytics",
      href: "/applicationsanalytics",
      active: window.location.pathname === "/applicationsanalytics",
    },
  ];
  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-end mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between mb-1 mt-[9px] mx-auto md:px-5 w-full">
          <Sidebar5 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[8%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[115px]">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtHelvetica24"
                  >
                    <span className="text-gray-500 font-helvetica text-left font-normal">
                      Pages
                    </span>
                    <span className="text-gray-800 font-helvetica text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-black-900 font-helvetica text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-gray-800 font-helvetica text-left text-xs font-normal">
                      / Edit product
                    </span>
                  </Text>
                </div>
                <Text
                  className="mt-0.5 text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Edit product
                </Text>
              </div>
              <Img
                className="h-6 mb-[7px] md:ml-[0] ml-[82px] md:mt-0 mt-[15px] w-6"
                src="images/img_ioniconmmenudefault.svg"
                alt="ioniconmmenudef"
              />
              <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[1000px] md:mt-0 mt-1.5 w-[22%] md:w-full">
                <Input
                  name="inputwithaddons"
                  placeholder="Type here..."
                  value={inputwithaddonsvalue}
                  onChange={(e) => setInputwithaddonsvalue(e)}
                  className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid flex pr-[35px] rounded-[15px]"
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
                  color="white_A700"
                  variant="fill"
                ></Input>
                <div className="flex flex-row gap-1 h-4 md:h-auto items-center justify-start w-[58px]">
                  <Img
                    className="h-3 w-3"
                    src="images/img_ioniconppersondefault.svg"
                    alt="ioniconppersond"
                  />
                  <a href="javascript:" className="text-gray-600 text-xs w-10">
                    <Text size="txtHelveticaBold12Bluegray40001">Sign In</Text>
                  </a>
                </div>
                <Img
                  className="h-3 w-3"
                  src="images/img_ioniconssettingssharp.svg"
                  alt="ioniconssetting"
                />
                <Img
                  className="h-3 w-3"
                  src="images/img_ioniconnnotif.svg"
                  alt="ioniconnnotif"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold24Bluegray900"
                    >
                      Make the changes below
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[742px] md:max-w-full text-base text-blue_gray-400"
                      size="txtHelvetica16Bluegray400"
                    >
                      We’re constantly trying to express ourselves and actualize
                      our dreams. If you have the opportunity to play.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-10 leading-[normal] min-w-[83px] md:mt-0 mt-11 text-[13px] text-center uppercase"
                    shape="round"
                    size="lg"
                    variant="gradient"
                    color="deep_purple_500_pink_A400"
                  >
                    Save
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-1 flex-col gap-4 h-[400px] md:h-auto items-start justify-start mb-[26px] p-6 sm:px-5 rounded-[12px] shadow-bs w-[451px] sm:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.80px]"
                        size="txtHelveticaBold16Bluegray900"
                      >
                        Product Image
                      </Text>
                    </div>
                    <div className="h-[259px] relative rounded-[12px] shadow-bs12 w-full">
                      <Img
                        className="h-[259px] m-auto object-cover rounded-[12px] w-full"
                        src="images/img_toaheftibafv3.png"
                        alt="toaheftibafvThree"
                      />
                      <Img
                        className="absolute h-[259px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-full"
                        src="images/img_sofa1.png"
                        alt="sofaOne"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <Button
                        className="cursor-pointer font-bold h-[35px] leading-[normal] min-w-[62px] text-[13px] text-center uppercase"
                        shape="round"
                        size="md"
                        variant="gradient"
                        color="deep_purple_500_pink_A400"
                      >
                        Edit
                      </Button>
                      <Button
                        className="cursor-pointer font-bold h-[35px] min-w-[85px] text-center text-xs uppercase"
                        shape="round"
                        color="blue_gray_900"
                        size="md"
                        variant="outline"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat bg-white-A700 flex flex-1 flex-col font-notosans h-[426px] items-end justify-start max-w-[1091px] p-6 sm:px-5 rounded-[12px] w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-800 text-xl tracking-[-0.80px]"
                          size="txtNotoSansSemiBold20Bluegray90003"
                        >
                          Product Information
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                          <GeneralInput
                            className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                            nameTen="Product Name"
                          />
                          <GeneralInput
                            className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                            nameTen="Weight"
                          />
                        </div>
                        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
                          <div className="flex flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start w-full">
                            <GeneralInput
                              className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                              nameTen="Collection"
                            />
                            <GeneralInput
                              className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                              nameTen="Price"
                            />
                          </div>
                          <GeneralInput
                            className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                            nameTen="Quantity"
                          />
                        </div>
                        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-full">
                          <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[49%] md:w-full">
                            <Text
                              className="text-[13px] text-blue_gray-900"
                              size="txtNotoSansSemiBold13Bluegray900"
                            >
                              Description
                            </Text>
                            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans gap-[11px] h-[127px] md:h-auto items-start justify-start pl-3.5 pt-[54px] rounded-lg w-[506px] sm:w-full">
                              <div className="flex flex-row gap-1 items-center justify-start w-[263px]">
                                <Text
                                  className="text-blue_gray-900 text-xs tracking-[-0.40px] w-auto"
                                  size="txtOpenSansBold12"
                                >
                                  Normal
                                </Text>
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_minimize_blue_gray_900.svg"
                                  alt="minimize"
                                />
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_richtexteditor.svg"
                                  alt="richtexteditor"
                                />
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_arrowright_blue_gray_900_18x18.svg"
                                  alt="arrowright"
                                />
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_menu_blue_gray_900.svg"
                                  alt="menu"
                                />
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_menu_blue_gray_900_18x18.svg"
                                  alt="menu_One"
                                />
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_link_blue_gray_900.svg"
                                  alt="link"
                                />
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_richtexteditor_blue_gray_900.svg"
                                  alt="richtexteditor_One"
                                />
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_maximize_blue_gray_900.svg"
                                  alt="maximize"
                                />
                              </div>
                              <Line className="bg-blue_gray-100 h-px w-full" />
                              <div className="flex flex-col font-notosans items-start justify-center w-auto">
                                <Text
                                  className="text-blue_gray-400 text-sm w-auto"
                                  size="txtNotoSansRegular14Bluegray400"
                                >
                                  <span className="text-blue_gray-400 font-notosans text-left font-normal">
                                    Some initial{" "}
                                  </span>
                                  <span className="text-blue_gray-400 font-notosans text-left font-bold">
                                    Bold
                                  </span>
                                  <span className="text-blue_gray-400 font-notosans text-left font-normal">
                                    {" "}
                                    text
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                            <GeneralInput
                              className="flex flex-col gap-1 items-start justify-center w-full"
                              nameTen="Category"
                            />
                            <GeneralInput
                              className="flex flex-col gap-1 items-start justify-center w-full"
                              nameTen="Color"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-notosans gap-[30px] items-start justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[350px] items-end justify-start p-6 sm:px-5 w-[448px] sm:w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
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
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[280px] items-end justify-start max-w-[1091px] p-6 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-gray-800 text-xl tracking-[-0.80px]"
                            size="txtNotoSansSemiBold20Bluegray90003"
                          >
                            Pricing
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                          <GeneralInput
                            className="flex flex-1 flex-col gap-1 h-[68px] md:h-auto items-start justify-center w-full"
                            nameTen="Price"
                            nameexamplero="99"
                          />
                          <GeneralInput
                            className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                            nameTen="Currency"
                          />
                          <GeneralInput
                            className="flex flex-1 flex-col gap-1 h-full items-start justify-center w-full"
                            nameTen="SKU"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start py-2 w-full">
                          <Text
                            className="text-[13px] text-blue_gray-900_01 w-auto"
                            size="txtNotoSansSemiBold13Bluegray90001"
                          >
                            Tags
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row font-helvetica md:gap-5 h-[47px] md:h-auto items-center justify-start px-3.5 rounded-lg w-full">
                          <div className="flex flex-1 flex-row gap-1 items-center justify-start w-full">
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[86px] rounded-[13px]"
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
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[109px] rounded-[13px]"
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
                              <div className="text-left text-xs">
                                Out of Stock
                              </div>
                            </Button>
                          </div>
                          <Img
                            className="h-[15px] max-h-[15px] sm:w-[] md:w-[]"
                            src="images/img_arrowdown_blue_gray_500.svg"
                            alt="arrowdown_Six"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <GeneralNavigationRow2021madewith
                  className="flex sm:flex-col flex-row font-helvetica md:gap-10 items-start justify-between w-full"
                  p2021madewith={
                    <Text className="text-gray-500 text-xs">
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
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceEditproductPage;
