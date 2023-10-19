import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import ListItemsColumnearnings from "components/ListItemsColumnearnings";
import ListItemsColumniconssolidEight from "components/ListItemsColumniconssolidEight";
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

const EcommerceReferralPage = () => {
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
  const listItemsColumnearningsPropList = [
    {},
    { earnings: "Customers", earningsamount: "2,400" },
    { earnings: "Avg. value", earningsamount: "48" },
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
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between mb-[79px] mt-2 mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-3.5 overflow-auto top-[0]">
            <div className="flex flex-row gap-3 items-end justify-start mb-[984px] ml-3.5 mr-[25px] w-[83%]">
              <Img
                className="h-5 mb-0.5"
                src="images/img_calculator_blue_gray_900_03.svg"
                alt="calculator"
              />
              <Text
                className="mt-2 text-gray-800 text-xs"
                size="txtHelveticaBold12Bluegray90003"
              >
                SOFT UI DASHBOARD PRO
              </Text>
            </div>
            <Line className="bg-gradient18  h-px mb-[948px] mt-[58px] w-full" />
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
              className="flex flex-col items-center justify-start mb-[269px] mt-[60px] pt-5 px-1.5 w-[94%]"
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
            <div className="md:h-[1006px] h-[169px] ml-[15px] mt-[837px] relative w-[94%]">
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
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[7%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[94px]">
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
                      / Referral
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Referral
                </Text>
              </div>
              <Img
                className="h-6 mb-1.5 md:ml-[0] ml-[103px] md:mt-0 mt-4 w-6"
                src="images/img_ioniconmmenudefault.svg"
                alt="ioniconmmenudef"
              />
              <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[1000px] md:mt-0 mt-[7px] w-[22%] md:w-full">
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
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold20Bluegray900"
                >
                  Referral Program
                </Text>
                <Text
                  className="text-blue_gray-400 text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  Track and find all the details about our referral program,
                  your stats and revenues.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1572px] mt-[31px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                  orientation="horizontal"
                >
                  {listItemsColumnearningsPropList.map((props, index) => (
                    <React.Fragment key={`ListItemsColumnearnings${index}`}>
                      <ListItemsColumnearnings
                        className="border border-blue_gray-400 border-dashed flex flex-col gap-4 items-center justify-center p-6 sm:px-5 rounded-[15px] w-full"
                        currencysymbol="$"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
                <ListItemsColumnearnings
                  className="border border-blue_gray-400 border-dashed flex flex-1 flex-col gap-4 items-center justify-center p-6 sm:px-5 rounded-[15px] w-full"
                  earnings="Refund rate"
                  earningsamount="4%"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[1572px] mt-[30px] w-full">
                <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[453px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold16Bluegray900"
                    >
                      Referral Program
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtHelvetica14Bluegray400"
                    >
                      Copy the code bellow to your registered provider.
                    </Text>
                  </div>
                  <div className="border border-blue_gray-400 border-dashed flex flex-col font-notosans gap-4 items-start justify-center p-6 sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtNotoSansRegular14Bluegray400"
                      >
                        <span className="text-blue_gray-400 font-notosans text-left text-xs font-normal">
                          Generated 23 days ago by
                        </span>
                        <span className="text-blue_gray-400 font-notosans text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-blue_gray-400 font-notosans text-left text-xs font-bold">
                          <>softuidash23</>
                        </span>
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtNotoSansBold12Bluegray400"
                      >
                        (Used one time)
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
                      <Input
                        name="inputwithaddons_One"
                        placeholder="soft-dashboard-vmsk392"
                        className="font-notosans p-0 placeholder:text-blue_gray-900 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid flex md:h-auto w-[265px] sm:w-full"
                        suffix={
                          <Img
                            className="mt-px mb-0.5 h-4 ml-[35px]"
                            src="images/img_icons_solid_blue_gray_900_1.svg"
                            alt="Icons Solid"
                          />
                        }
                        shape="round"
                        color="blue_gray_50"
                        size="lg"
                        variant="fill"
                      ></Input>
                      <Button
                        className="cursor-pointer font-bold font-helvetica h-10 min-w-[83px] text-center text-xs uppercase"
                        shape="round"
                        size="lg"
                        variant="gradient"
                        color="blue_gray_100_blue_gray_50_01"
                      >
                        Copy
                      </Button>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtNotoSansRegular12Bluegray400"
                      >
                        You cannot generate codes.
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtNotoSansRegular12Bluegray400"
                      >
                        Contact us to generate more referrals link.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold16Bluegray900"
                    >
                      How to use
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtHelvetica14Bluegray400"
                    >
                      Integrate your referral code in 3 easy steps.
                    </Text>
                  </div>
                  <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                    <ListItemsColumniconssolidEight
                      className="flex flex-1 flex-col gap-2 items-center justify-center p-4 rounded-[15px] w-full"
                      currencytext="$"
                    />
                    <ListItemsColumniconssolidEight
                      className="flex flex-1 flex-col gap-2 items-center justify-center p-4 rounded-[15px] w-full"
                      languagetext="2. For every order you make you get "
                      amounttext="10%"
                    />
                    <ListItemsColumniconssolidEight
                      className="flex flex-1 flex-col gap-2 items-center justify-center p-4 rounded-[15px] w-full"
                      languagetext="3. Get other friends to generate link and get "
                      currencytext="$"
                      amounttext="500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] h-[280px] md:h-auto items-start justify-start max-w-[1572px] mt-[30px] py-4 w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col h-full items-center justify-center p-6 sm:px-5 rounded-[15px] shadow-bs4 w-full">
                    <div className="h-[248px] relative w-full">
                      <Img
                        className="h-[248px] m-auto object-cover rounded-[14px] w-full"
                        src="images/img_brookecagleg1_248x504.png"
                        alt="brookecaglegOne"
                      />
                      <div className="absolute bg-gradient21  flex flex-col gap-4 h-full inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 rounded-[14px] w-full">
                        <div className="flex flex-col h-[72px] md:h-auto items-center justify-center mt-11 w-full">
                          <Text
                            className="leading-[150.00%] max-w-[456px] md:max-w-full text-base text-center text-white-A700"
                            size="txtHelveticaBold16WhiteA700"
                          >
                            User #hashtag in a photo on social media and get $10
                            for each purchase you make.
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start mb-11 w-auto">
                          <Text
                            className="text-base text-blue_gray-50 w-auto"
                            size="txtHelveticaBold16Bluegray50"
                          >
                            Read more
                          </Text>
                          <Img
                            className="h-full w-4"
                            src="images/img_arrowright_blue_gray_50.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-full items-center justify-center px-4 py-6 rounded-[15px] shadow-bs4 w-full">
                    <div className="h-[248px] relative w-full">
                      <Img
                        className="h-[248px] m-auto object-cover rounded-[14px] w-full"
                        src="images/img_brookecagleg1_1.png"
                        alt="brookecaglegOne"
                      />
                      <div className="absolute bg-gradient21  flex flex-col gap-4 h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[14px] w-full">
                        <div className="flex flex-col h-[72px] md:h-auto items-center justify-center mt-[52px] w-full">
                          <Text
                            className="leading-[150.00%] max-w-[472px] md:max-w-full text-base text-center text-white-A700"
                            size="txtHelveticaBold16WhiteA700"
                          >
                            Send the invitation link to 10 friends and get a 50%
                            coupon to use on any purchase.
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start mb-[52px] w-auto">
                          <Text
                            className="text-base text-blue_gray-50 w-auto"
                            size="txtHelveticaBold16Bluegray50"
                          >
                            Read more
                          </Text>
                          <Img
                            className="h-full w-4"
                            src="images/img_arrowright_blue_gray_50.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="border border-dashed border-gray-300_01 flex flex-1 flex-col gap-[9px] h-full items-center justify-center px-5 py-28 rounded-lg w-full">
                  <Img
                    className="h-[140px] md:h-auto object-cover w-[140px]"
                    src="images/img_rectangle606.png"
                    alt="rectangle606"
                  />
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtHelveticaBold16Bluegray900"
                    >
                      Join rocketship program
                    </Text>
                    <Img
                      className="h-full w-4"
                      src="images/img_arrowright_blue_gray_900.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1572px] p-6 sm:px-5 rounded-[15px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold16Bluegray900"
                  >
                    Top referred users
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <TablesProperty1label
                    className="flex flex-col gap-4 items-start justify-start py-4 w-full"
                    product="USER"
                    price="PROFIT"
                  />
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
              <GeneralNavigationRow2021madewith
                className="flex sm:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[35px] w-full"
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
    </>
  );
};

export default EcommerceReferralPage;
