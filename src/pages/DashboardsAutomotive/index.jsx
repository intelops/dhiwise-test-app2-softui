import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardsAutomotiveSearch from "components/DashboardsAutomotiveSearch";
import ListItemsTypeautomotive from "components/ListItemsTypeautomotive";

import { CloseSVG } from "../../assets/images";

const DashboardsAutomotivePage = () => {
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
  const listItemsTypeautomotivePropList = [
    { price: "145 Km", title: <>Today&#39;s Tripe</> },
    { price: "99%", title: "Battery Health" },
    { price: "56 Km/h", title: "Average Speed" },
    { price: "15/100", title: "Music Volume" },
  ];

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-helvetica sm:gap-10 md:gap-10 gap-[72px] items-start mx-auto pb-9 w-full">
        <Sidebar className="!sticky !w-[236px] flex h-screen md:hidden justify-start md:mt-0 mt-[26px] overflow-auto md:px-5 top-[0]">
          <div className="flex flex-row gap-3 items-start justify-start mb-[1011px] ml-3.5 mr-[29px] w-[82%]">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_calculator_blue_gray_900_03.svg"
              alt="calculator"
            />
            <Text
              className="mt-[3px] text-gray-800 text-xs"
              size="txtHelveticaBold12Bluegray90003"
            >
              SOFT UI DASHBOARD PRO
            </Text>
          </div>
          <Line className="bg-gradient18  h-px mb-[979px] mr-[3px] mt-[53px] w-[99%]" />
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
            className="flex flex-col items-center justify-start mb-[300px] mt-14 pl-[7px] pr-2.5 pt-5 w-[93%]"
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
                    active={window.location.pathname === "/applicationskanban"}
                    href="/applicationskanban"
                  >
                    <Text className="text-gray-600" href="/applicationskanban">
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
          <div className="md:h-[1033px] h-[169px] ml-[18px] mt-[864px] relative w-[93%]">
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
        <div className="flex-1 h-[1108px] sm:h-[1421px] md:h-[Infinitypx] md:px-5 relative w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 h-full items-start justify-between mt-[23px] mx-auto w-[99%]">
            <div className="flex flex-col items-start justify-start sm:mt-0 mt-1 w-[8%] sm:w-full">
              <div className="flex flex-col items-start justify-start w-[111px]">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtHelvetica24"
                >
                  <span className="text-gray-500 font-helvetica text-left font-normal">
                    Pages{" "}
                  </span>
                  <span className="text-black-900 font-helvetica text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-800 font-helvetica text-left text-xs font-normal">
                    / Automotive
                  </span>
                </Text>
              </div>
              <Text
                className="text-gray-800 text-sm"
                size="txtHelveticaBold14Bluegray90003"
              >
                Automotive
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between w-[22%] sm:w-full">
              <Input
                name="inputwithaddons"
                placeholder="Type here..."
                value={inputwithaddonsvalue}
                onChange={(e) => setInputwithaddonsvalue(e)}
                className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
                wrapClassName="border border-gray-300 border-solid flex pr-[35px]"
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
                    height={40}
                    width={37}
                    viewBox="0 0 37 40"
                  />
                }
                shape="round"
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
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="h-[360px] md:h-auto md:px-10 px-12 sm:px-5 py-6 relative w-[1567px] md:w-full">
              <div className="m-auto w-full">
                <div className="mt-auto mx-auto w-full">
                  <div className="bg-gradient12  h-[222px] m-auto rounded-[12px] w-full"></div>
                  <Img
                    className="absolute h-[222px] inset-[0] m-auto w-[1190px]"
                    src="images/img_waveswhitesvg.svg"
                    alt="waveswhitesvg"
                  />
                </div>
                <div className="flex flex-col gap-9 items-start justify-start mb-[41px] ml-12 mt-auto w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-50 sm:text-xl tracking-[-0.80px] w-[197px]"
                    size="txtHelveticaBold24Bluegray50"
                  >
                    Since Last Charge
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-10 grid grid-cols-2 justify-start w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-50 w-auto"
                          size="txtHelvetica16Bluegray50"
                        >
                          Distance
                        </Text>
                        <div className="flex flex-row font-notosans gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.80px] w-auto"
                            size="txtNotoSansBold36"
                          >
                            145
                          </Text>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtNotoSansBold14WhiteA700"
                          >
                            KM
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-50 w-auto"
                          size="txtHelvetica16Bluegray50"
                        >
                          Average Energy
                        </Text>
                        <div className="flex flex-row font-notosans gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.80px] w-auto"
                            size="txtNotoSansBold36"
                          >
                            300
                          </Text>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtNotoSansBold14WhiteA700"
                          >
                            KW
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-col gap-9 items-start justify-start mb-[50px] ml-auto mr-12 mt-auto w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-50 sm:text-xl tracking-[-0.80px] w-44"
                    size="txtHelveticaBold24Bluegray50"
                  >
                    Nearest Charger
                  </Text>
                  <div className="flex flex-row gap-[60px] items-center justify-start w-[292px]">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-50 w-full"
                        size="txtHelvetica16Bluegray50"
                      >
                        Miclan, DW
                      </Text>
                      <Text
                        className="text-base text-blue_gray-50 w-full"
                        size="txtHelvetica16Bluegray50"
                      >
                        891 Limarenda road
                      </Text>
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
                        src="images/img_iconssolid_30x30.svg"
                        alt="iconssolid"
                      />
                    </Button>
                  </div>
                </div>
                <Img
                  className="absolute h-[282px] inset-x-[0] mx-auto object-cover top-[0] w-[718px]"
                  src="images/img_tesla2.png"
                  alt="teslaTwo"
                />
              </div>
              <div className="absolute bottom-[13%] flex flex-row gap-3 inset-x-[0] items-center justify-center mx-auto w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-50 sm:text-xl tracking-[-0.80px] w-[174px]"
                  size="txtHelveticaBold24Bluegray50"
                >
                  Available Range
                </Text>
                <div className="flex flex-row font-notosans gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.80px] w-auto"
                    size="txtNotoSansBold36"
                  >
                    70
                  </Text>
                  <Text
                    className="text-sm text-white-A700 w-3"
                    size="txtNotoSansBold14WhiteA700"
                  >
                    %
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row font-notosans gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1567px] mt-[29px] w-full"
              orientation="horizontal"
            >
              {listItemsTypeautomotivePropList.map((props, index) => (
                <React.Fragment key={`ListItemsTypeautomotive${index}`}>
                  <ListItemsTypeautomotive
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-20 items-center justify-between p-4 w-full"
                    style={{
                      backgroundImage: "url('images/img_colorgradient.png')",
                    }}
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <div className="flex flex-col font-notosans items-start justify-start max-w-[1567px] mt-[38px] outline outline-[1px] outline-blue_gray-50 rounded-[12px] shadow-bs w-full">
              <div className="bg-gradient14  flex flex-col gap-8 items-start justify-start p-6 sm:px-5 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <DashboardsAutomotiveSearch className="flex flex-row items-center justify-start rounded-md w-60" />
                  <div className="flex flex-row font-helvetica gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[18px] w-[17px]"
                      src="images/img_music_white_a700.svg"
                      alt="music"
                    />
                    <Img
                      className="h-[18px] w-[17px]"
                      src="images/img_iconssolid_white_a700_18x17.svg"
                      alt="iconssolid_One"
                    />
                    <Img
                      className="h-[18px] w-[17px]"
                      src="images/img_iconssolid_18x17.svg"
                      alt="iconssolid_Two"
                    />
                    <Img
                      className="h-[18px] w-[17px]"
                      src="images/img_iconssolid_3.svg"
                      alt="iconssolid_Three"
                    />
                    <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold24WhiteA700"
                      >
                        10:45
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-gradient23  h-px w-[76%]" />
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.80px] w-auto"
                      size="txtNotoSansBold30"
                    >
                      11:43
                    </Text>
                    <Text
                      className="text-blue_gray-50 text-sm w-auto"
                      size="txtHelvetica14Bluegray50"
                    >
                      Estimated arrival time
                    </Text>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[215.5px] grid md:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] w-[58%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row gap-[7px] items-center justify-start w-auto">
                      <div className="flex flex-row font-notosans gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-right text-white-A700 tracking-[-0.80px] w-auto"
                          size="txtNotoSansBold30"
                        >
                          2.4
                        </Text>
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtNotoSansBold14WhiteA700"
                        >
                          Km
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-50 text-sm w-auto"
                        size="txtHelvetica14Bluegray50"
                      >
                        Turn Right in 2.4 miles
                      </Text>
                    </div>
                    <Line className="self-center h-[41px] bg-gradient24  w-px" />
                    <div className="flex flex-row gap-[7px] items-center justify-start w-auto">
                      <div className="flex flex-row font-notosans gap-[7px] items-start justify-start w-auto">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-right text-white-A700 tracking-[-0.80px] w-auto"
                          size="txtNotoSansBold30"
                        >
                          6.7
                        </Text>
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtNotoSansBold14WhiteA700"
                        >
                          Km
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-50 text-sm w-auto"
                        size="txtHelvetica14Bluegray50"
                      >
                        Distance to Starbucks
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[281px] md:h-auto object-cover w-full"
                  src="images/img_mapsiclemap.png"
                  alt="mapsiclemap"
                />
              </div>
              <div className="bg-gradient14  flex md:flex-col flex-row font-helvetica md:gap-10 items-center justify-between p-6 sm:px-5 w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <div className="md:h-[58px] h-[66px] relative w-[27%]">
                    <Img
                      className="absolute h-[58px] left-[0] rounded-[50%] top-[0] w-[58px]"
                      src="images/img_curved10jpg.png"
                      alt="curved10jpg"
                    />
                    <Img
                      className="absolute bottom-[0] h-[29px] right-[0] w-[34px]"
                      src="images/img_signal_green_500.svg"
                      alt="signal"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-50 text-sm w-auto"
                      size="txtHelveticaBold14Bluegray50"
                    >
                      <>You&#39;re Mines Still (feat Drake)</>
                    </Text>
                    <Text
                      className="text-blue_gray-50 text-xs w-auto"
                      size="txtHelvetica12Bluegray50"
                    >
                      Future, Drake - Hip-Hop
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-center justify-start w-auto">
                  <Button
                    className="border border-blue_gray-50 border-solid flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    shape="circle"
                    color="gray_50_26"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[27px]"
                      src="images/img_iconssolid_blue_gray_50_1.svg"
                      alt="iconssolid_Four"
                    />
                  </Button>
                  <Button
                    className="border border-blue_gray-50 border-solid flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    shape="circle"
                    color="gray_50_26"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[27px]"
                      src="images/img_iconssolid_blue_gray_50_2.svg"
                      alt="iconssolid_Five"
                    />
                  </Button>
                  <Button
                    className="border border-blue_gray-50 border-solid flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    shape="circle"
                    color="gray_50_26"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[27px]"
                      src="images/img_iconssolid_blue_gray_50_1.svg"
                      alt="iconssolid_Six"
                    />
                  </Button>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-50 text-sm w-full"
                      size="txtHelvetica14Bluegray50"
                    >
                      Volume
                    </Text>
                    <Img
                      className="h-[17px] md:h-auto object-cover w-[218px] sm:w-full"
                      src="images/img_searchslider.png"
                      alt="searchslider"
                    />
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconssolid_blue_gray_50_3.svg"
                    alt="iconssolid_Seven"
                  />
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconssolid_blue_gray_50_4.svg"
                    alt="iconssolid_Eight"
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-helvetica md:gap-10 items-start justify-between mt-[29px] w-full">
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
              <div className="flex sm:flex-1 flex-row items-start justify-between w-[15%] sm:w-full">
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
      </div>
    </>
  );
};

export default DashboardsAutomotivePage;
