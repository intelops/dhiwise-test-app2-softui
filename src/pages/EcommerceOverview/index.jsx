import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import GraphsCharts from "components/GraphsCharts";
import GraphsGraphs from "components/GraphsGraphs";
import ListItemsStatisticscard from "components/ListItemsStatisticscard";
import TablesColumnSix from "components/TablesColumnSix";
import TablesProductstable from "components/TablesProductstable";
import TablesProperty1label from "components/TablesProperty1label";

import { CloseSVG } from "../../assets/images";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const refundsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const refundsOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EcommerceOverviewPage = () => {
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
  const listItemsStatisticscardPropList = [
    { priceTen: "$230,220", titleEight: "Sales" },
    { threehundredfortyeightThree: "+12%", priceTen: "3.200" },
    {
      priceTen: "$1,200",
      threehundredfortyeightThree: "+$213",
      titleEight: "Average Revenue",
    },
  ];
  const tablesColumnSixPropList = [
    { separatorzero: "images/img_separator0.svg", us: "images/img_us.png" },
    {
      value: "3.900",
      value1: "40.22%",
      country: "Germany",
      separatorzero: "images/img_separator0.svg",
      price: "$440,000",
    },
    {
      value: "1.400",
      value1: "23.44%",
      country: "Great Britain",
      separatorzero: "images/img_separator0.svg",
      price: "$190,700",
    },
    { value: "562", value1: "32.14%", price: "$143,900", country: "Brasil" },
  ];
  const tablesProductstablePropList = [
    { priceOne: "$9.500", price: "$130.992" },
    { priceOne: "$4.200", price: "$80.250" },
    { priceOne: "$9.430", price: "$40.600" },
    { priceOne: "$7.364", price: "$91.300" },
    {},
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-end mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between mb-[3px] mt-2 mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-4 overflow-auto top-[0]">
            <div className="flex flex-row gap-3 items-end justify-start mb-[983px] ml-3.5 mr-[25px] w-[83%]">
              <Img
                className="h-[21px] w-[22px]"
                src="images/img_calculator_blue_gray_900_03.svg"
                alt="calculator"
              />
              <Text
                className="mt-[5px] text-gray-800 text-xs"
                size="txtHelveticaBold12Bluegray90003"
              >
                SOFT UI DASHBOARD PRO
              </Text>
            </div>
            <Line className="bg-gradient18  h-px mb-[948px] mt-[55px] w-full" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "14px 14px 14px 190px",
                  width: "100%",
                  fontSize: "12px",
                  gap: "19px",
                  color: "#a0aec0",
                  fontWeight: 700,
                  borderRadius: "8px",
                  [`&:hover, &.ps-active`]: {
                    color: "#2d3748",
                    backgroundColor: "#ffffffff !important",
                    boxShadow: "0px 3.5px  5.5px 0px #00000005",
                  },
                },
              }}
              renderExpandIcon={() => (
                <Img
                  className="h-[15px] mb-1.5 w-[15px]"
                  src="images/img_arrowdown_blue_gray_200_01.svg"
                  alt="arrowdown"
                />
              )}
              className="flex flex-col items-center justify-start mb-[269px] mt-[58px] pt-5 px-1.5 w-[94%]"
            >
              <div className="flex flex-col items-center justify-start pb-[50px] w-full">
                <div className="flex flex-col gap-[51px] items-center justify-start pb-5 w-full">
                  <SubMenu
                    icon={
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_ionicon_h_home_default.svg"
                        alt="ioniconhhomedef"
                      />
                    }
                    label={<Text>Dashboards</Text>}
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                  <SubMenu
                    label={
                      <MenuItem
                        active={
                          window.location.pathname ===
                          "/dashboardscreenpagesmessages"
                        }
                        href="/dashboardscreenpagesmessages"
                      >
                        <Text
                          className="md:ml-[0]"
                          href="/dashboardscreenpagesmessages"
                        >
                          Pages
                        </Text>
                      </MenuItem>
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                </div>
                <Text
                  className="text-gray-800 text-xs"
                  size="txtHelveticaBold12Bluegray90003"
                >
                  PAGES
                </Text>
              </div>
              <div className="h-[170px] md:h-[191px] sm:h-[445px] mt-[29px] relative w-full">
                <div className="absolute bottom-[0] flex flex-col gap-[22px] inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start">
                    <MenuItem
                      active={
                        window.location.pathname === "/applicationskanban"
                      }
                      href="/applicationskanban"
                    >
                      <Text
                        className="text-gray-600"
                        href="/applicationskanban"
                      >
                        Applications
                      </Text>
                    </MenuItem>
                    <Img
                      className="h-[15px] w-[219px]"
                      src="images/img_arrowup_blue_gray_400_01.svg"
                      alt="arrowup"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <Img
                            className="h-[115px]"
                            src="images/img_dots.svg"
                            alt="dots"
                          />
                          <div className="flex flex-1 flex-col gap-[-25.21px] items-center justify-start w-full">
                            {sideBarMenu?.map((menu, i) => (
                              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                                {menu.label}
                              </MenuItem>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute flex inset-x-[0] items-center justify-center mx-auto rounded-lg top-[0] w-full"
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
              <div className="flex flex-col items-center justify-start mt-[25px] pb-[27px] w-full">
                <SubMenu
                  label={
                    <MenuItem
                      active={window.location.pathname === "/ecommerceoverview"}
                      href="/ecommerceoverview"
                    >
                      <Text className="md:ml-[0]" href="/ecommerceoverview">
                        Ecommerce
                      </Text>
                    </MenuItem>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  label={
                    <Button
                      className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  label={
                    <MenuItem
                      active={
                        window.location.pathname ===
                        "/authenticationscreenerror404"
                      }
                      href="/authenticationscreenerror404"
                    >
                      <Text
                        className="md:ml-[0]"
                        href="/authenticationscreenerror404"
                      >
                        Authentication
                      </Text>
                    </MenuItem>
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <SubMenu
                  label={
                    <Button
                      className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                  }
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
              </div>
              <Line className="bg-gradient18  h-px mt-6 w-full" />
              <div className="flex flex-col gap-[26px] items-center justify-end mt-6 w-full">
                <Text
                  className="text-gray-800 text-xs"
                  size="txtHelveticaBold12Bluegray90003"
                >
                  DOCS
                </Text>
                <div className="flex flex-col items-center justify-start pb-[25px] w-full">
                  <SubMenu
                    label={
                      <MenuItem
                        active={window.location.pathname === "/signinbasic"}
                        href="/signinbasic"
                      >
                        <Text className="md:ml-[0]" href="/signinbasic">
                          Basic
                        </Text>
                      </MenuItem>
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                  <SubMenu
                    label={
                      <Button
                        className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                  <SubMenu
                    label={
                      <MenuItem>
                        <Text className="md:ml-[0]">Components</Text>
                      </MenuItem>
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                  <SubMenu
                    label={
                      <Button
                        className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                  <SubMenu
                    label={
                      <MenuItem>
                        <Text className="md:ml-[0]">Changelog</Text>
                      </MenuItem>
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                  <SubMenu
                    label={
                      <Button
                        className="flex h-[30px] items-center justify-center mb-2 rounded-lg w-[30px]"
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
                    }
                  >
                    <MenuItem>Submenu Item</MenuItem>
                  </SubMenu>
                </div>
              </div>
            </Menu>
            <div className="md:h-[1004px] h-[169px] ml-[15px] mt-[835px] relative w-[94%]">
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
          </Sidebar>
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[7%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[101px]">
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
                      / Overview
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Overview
                </Text>
              </div>
              <Img
                className="h-6 mb-1.5 md:ml-[0] ml-[95px] md:mt-0 mt-4 w-6"
                src="images/img_ioniconmmenudefault.svg"
                alt="ioniconmmenudef"
              />
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[993px] md:mt-0 mt-[7px] w-[22%] md:w-full">
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
              <div className="flex flex-col items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1572px] w-full"
                  orientation="horizontal"
                >
                  {listItemsStatisticscardPropList.map((props, index) => (
                    <React.Fragment key={`ListItemsStatisticscard${index}`}>
                      <ListItemsStatisticscard
                        className="bg-cover bg-no-repeat flex flex-1 flex-col h-[120px] items-start justify-start sm:px-5 px-6 py-4 w-full"
                        style={{
                          backgroundImage: "url('images/img_colorwhite.svg')",
                        }}
                        timeThree="since last month"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col gap-[25px] items-start justify-start p-6 sm:px-5 rounded-[12px] shadow-bs w-[611px] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="flex-1 text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16Bluegray900"
                      >
                        Referrals
                      </Text>
                      <Button
                        className="flex h-6 items-center justify-center rounded-[50%] w-6"
                        shape="circle"
                        color="blue_gray_400"
                        size="sm"
                        variant="outline"
                      >
                        <Img
                          src="images/img_info_blue_gray_400_24x24.svg"
                          alt="info"
                        />
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                      <Img
                        className="h-[200px] w-[200px]"
                        src="images/img_piechart.svg"
                        alt="piechart"
                      />
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row gap-1 items-center justify-start px-1 py-0.5 w-auto">
                          <div className="bg-purple-500 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtHelvetica12Bluegray900"
                          >
                            Facebook Ads
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start px-1 py-0.5 w-auto">
                          <div className="bg-blue_gray-900 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtHelvetica12Bluegray900"
                          >
                            Google Ads
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start px-1 py-0.5 w-auto">
                          <div className="bg-cyan-400 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtHelvetica12Bluegray900"
                          >
                            Instagram Ads
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start px-1 py-0.5 w-auto">
                          <div className="bg-blue_gray-400 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtHelvetica12Bluegray900"
                          >
                            Organic
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                      <Text
                        className="leading-[150.00%] max-w-[236px] md:max-w-full text-blue_gray-500 text-sm"
                        size="txtHelvetica14Bluegray500"
                      >
                        <span className="text-blue_gray-500 font-helvetica text-left font-normal">
                          More than{" "}
                        </span>
                        <span className="text-blue_gray-500 font-helvetica text-left font-bold">
                          1,200,000
                        </span>
                        <span className="text-blue_gray-500 font-helvetica text-left font-normal">
                          {" "}
                          sales are made using referral marketing, and{" "}
                        </span>
                        <span className="text-blue_gray-500 font-helvetica text-left font-bold">
                          700,000
                        </span>
                        <span className="text-blue_gray-500 font-helvetica text-left font-normal">
                          {" "}
                          are from social media.{" "}
                        </span>
                      </Text>
                      <Button
                        className="cursor-pointer font-bold h-[35px] leading-[normal] min-w-[112px] text-[13px] text-center uppercase"
                        shape="round"
                        size="md"
                        variant="gradient"
                        color="blue_gray_700_01_gray_900_02"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col font-notosans gap-[25px] h-[385px] md:h-auto items-start justify-start max-w-[931px] p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900_01 tracking-[-0.80px] w-full"
                        size="txtNotoSansSemiBold16Bluegray90001"
                      >
                        Revenue
                      </Text>
                      <div className="flex flex-row font-helvetica gap-4 items-start justify-start w-[331px]">
                        <div className="flex flex-row gap-1 items-center justify-start px-1 py-0.5 w-auto">
                          <div className="bg-purple-500 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtHelvetica12Bluegray900"
                          >
                            Facebook Ads
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start px-1 py-0.5 w-auto">
                          <div className="bg-blue_gray-900 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtHelvetica12Bluegray900"
                          >
                            Google Ads
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start px-1 py-0.5 w-auto">
                          <div className="bg-cyan-400 h-2 rounded-[50%] w-2"></div>
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtHelvetica12Bluegray900"
                          >
                            Instagram Ads
                          </Text>
                        </div>
                      </div>
                    </div>
                    <GraphsGraphs
                      className="flex flex-col font-roboto items-center justify-start w-full"
                      brightness="images/img_brightness_cyan_400.svg"
                      brightnessOne="images/img_brightness_cyan_400.svg"
                      vectorFour="images/img_property1menu.svg"
                      eye="images/img_eye_blue_gray_900_01.svg"
                      vectorFive="images/img_property1menu.svg"
                      eyeOne="images/img_eye_blue_gray_900_01.svg"
                      eyeTwo="images/img_eye_blue_gray_900_01.svg"
                      vectorSix="images/img_property1menu.svg"
                      vectorSeven="images/img_property1menu.svg"
                      eyeThree="images/img_eye_blue_gray_900_01.svg"
                      brightnessTwo="images/img_brightness_cyan_400.svg"
                      eyeFour="images/img_eye_blue_gray_900_01.svg"
                      brightnessThree="images/img_brightness_cyan_400.svg"
                      brightnessFour="images/img_brightness_cyan_400.svg"
                      brightnessFive="images/img_brightness_cyan_400.svg"
                      vectorEight="images/img_property1menu.svg"
                      eyeFive="images/img_eye_blue_gray_900_01.svg"
                      brightnessSix="images/img_brightness_cyan_400.svg"
                      vectorNine="images/img_property1menu.svg"
                      brightnessSeven="images/img_brightness_cyan_400.svg"
                      vectorTen="images/img_property1menu.svg"
                      eyeSix="images/img_eye_blue_gray_900_01.svg"
                      vectorEleven="images/img_property1menu.svg"
                      vectorTwelve="images/img_property1menu.svg"
                      eyeSeven="images/img_eye_blue_gray_900_01.svg"
                      brightnessEight="images/img_brightness_cyan_400.svg"
                      vectorFourteen="images/img_vector_blue_gray_900_01_162x814.svg"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[29px] w-full">
                  <GraphsCharts
                    className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-4 h-[393px] md:h-auto items-start justify-start max-w-[771px] p-6 sm:px-5 rounded-[12px] shadow-bs w-full"
                    title="Sales by age"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-96 items-start justify-start max-w-[771px] py-4 w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start px-4 w-full">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                          size="txtHelveticaBold16Bluegray900"
                        >
                          Sales by Country
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-3 items-start w-full"
                        orientation="vertical"
                      >
                        {tablesColumnSixPropList.map((props, index) => (
                          <React.Fragment key={`TablesColumnSix${index}`}>
                            <TablesColumnSix
                              className="flex flex-1 flex-col items-center justify-between my-0 px-4 py-3 w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[441px] items-start justify-start max-w-[1572px] mt-[30px] p-6 sm:px-5 w-full"
                  style={{
                    backgroundImage: "url('images/img_colorwhite.svg')",
                  }}
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16Bluegray900"
                      >
                        Top selling products
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <TablesProperty1label className="flex flex-col gap-4 items-start justify-start py-4 w-full" />
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        {tablesProductstablePropList.map((props, index) => (
                          <React.Fragment key={`TablesProductstable${index}`}>
                            <TablesProductstable
                              className="flex flex-1 flex-col gap-4 items-center justify-start py-2 w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                  </div>
                </div>
                <GeneralNavigationRow2021madewith
                  className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[21px] w-full"
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

export default EcommerceOverviewPage;
