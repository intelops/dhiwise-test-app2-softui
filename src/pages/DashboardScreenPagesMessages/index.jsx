import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Datepicker, Img, Input, Line, List, Text } from "components";
import DashboardScreenPagesMessagesCardchat from "components/DashboardScreenPagesMessagesCardchat";
import ListItemsDialoguebox from "components/ListItemsDialoguebox";
import ListItemsPropertyrest from "components/ListItemsPropertyrest";
import ListItemsPropertyselect from "components/ListItemsPropertyselect";

import { CloseSVG } from "../../assets/images";

const DashboardScreenPagesMessagesPage = () => {
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
  const [searchonevalue, setSearchonevalue] = React.useState("");
  const listItemsPropertyrestPropList = [
    { typingstatus: "Computer users & programs", username: "Jane Doe" },
    {
      username: "Mila Skyler",
      typingstatus: "You can subscribe to receive weekly",
      duration: "24 min ago",
      userimage: "images/img_imgplaceholder_24x24.png",
    },
    {
      username: "Sofia Scarlet",
      typingstatus: <>It&#39;s an effective resource regarding</>,
      duration: "7 hour ago",
      userimage: "images/img_rectangle57.png",
    },
    {
      username: "Tom Klein",
      typingstatus: "Be sure to check it out if your dev",
      duration: "1 day ago",
      userimage: "images/img_2.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col font-helvetica items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex md:flex-col flex-row gap-[26px] h-[1353px] items-start justify-between p-[18px] w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <Sidebar className="!sticky !w-[236px] flex h-screen md:hidden justify-start md:mt-0 mt-[21px] overflow-auto md:px-5 top-[0]">
              <div className="flex flex-row gap-3 items-start justify-start mb-[1012px] ml-3.5 mr-[29px] w-[82%]">
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
              <Line className="bg-gradient18  h-px mb-[979px] mr-[3px] mt-[54px] w-[99%]" />
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
                className="flex flex-col items-center justify-start mb-[300px] mt-[57px] pl-[7px] pr-2.5 pt-5 w-[93%]"
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
                        active={
                          window.location.pathname === "/ecommerceoverview"
                        }
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
              <div className="md:h-[1034px] h-[169px] ml-[18px] mt-[865px] relative w-[93%]">
                <Img
                  className="h-[169px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_whitecurved1.png"
                  alt="whitecurvedOne"
                />
                <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[86%]">
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
                  <div className="flex flex-col items-start justify-start mt-6">
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
                  <Button
                    className="!text-gray-800 cursor-pointer font-bold h-[35px] mt-2.5 rounded-lg text-[10px] text-center w-[186px]"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    DOCUMENTATION
                  </Button>
                </div>
              </div>
            </Sidebar>
            <div className="flex-1 h-[1305px] sm:h-[1361px] md:h-[1554px] mr-1.5 md:mt-0 my-1.5 md:px-5 relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[989px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[300px] sm:h-[337px] relative w-full">
                      <Img
                        className="h-[300px] m-auto object-cover rounded-[15px] w-full"
                        src="images/img_curved01.png"
                        alt="curvedOne"
                      />
                      <div className="absolute bg-gradient25  flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto p-[19px] rounded-[15px] w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start mb-[213px] sm:ml-[0] ml-[3px] w-[7%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-[106px]">
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
                                / Messages
                              </span>
                            </Text>
                          </div>
                          <Text
                            className="mt-0.5 text-sm text-white-A700"
                            size="txtHelveticaBold14WhiteA700"
                          >
                            Messages
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
              <div className="absolute flex flex-col md:gap-10 gap-[66px] h-max inset-[0] items-center justify-center m-auto w-[97%]">
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
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col h-[35px] md:h-auto items-center justify-center px-2 w-[134px]">
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
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[134px] rounded-lg"
                        leftIcon={
                          <Img
                            className="h-[11px] mb-px mr-1"
                            src="images/img_icon_blue_gray_900_03.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        <div className="!text-gray-800 font-bold text-[10px] text-center">
                          Messages
                        </div>
                      </Button>
                      <div className="flex flex-col h-[35px] md:h-auto items-center justify-center px-2 w-[134px]">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                            <div className="flex flex-row gap-1 items-center justify-center w-auto">
                              <Img
                                className="h-[11px] w-[11px]"
                                src="images/img_icon_blue_gray_900_03_11x11.svg"
                                alt="icon_One"
                              />
                              <Text
                                className="text-[10px] text-center text-gray-800 w-[39px]"
                                size="txtHelveticaBold10Bluegray90003"
                              >
                                Settings
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[650px] md:h-auto items-start justify-start md:mt-0 mt-0.5 px-3 py-4 rounded-[12px] shadow-bs12 w-[444px] sm:w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-col font-helvetica items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-900_01 tracking-[-0.80px] w-auto"
                            size="txtHelveticaBold16Bluegray90001"
                          >
                            Friends
                          </Text>
                        </div>
                        <Input
                          name="search_One"
                          placeholder="Search"
                          value={searchonevalue}
                          onChange={(e) => setSearchonevalue(e)}
                          className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-notosans p-0 text-left text-sm w-full"
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
                              onClick={() => setSearchonevalue("")}
                              style={{
                                visibility:
                                  searchonevalue?.length <= 0
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
                      </div>
                      <ListItemsPropertyselect
                        className="bg-gradient7  flex sm:flex-col flex-row gap-4 items-start justify-start px-4 py-2 rounded-lg w-full"
                        username="Charlie Watson"
                        typing="Typing..."
                      />
                      <List
                        className="flex flex-col gap-4 items-center w-full"
                        orientation="vertical"
                      >
                        {listItemsPropertyrestPropList.map((props, index) => (
                          <React.Fragment key={`ListItemsPropertyrest${index}`}>
                            <ListItemsPropertyrest
                              className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start px-4 py-2 rounded-lg w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col font-notosans h-[650px] items-center justify-start mb-0.5 rounded-[12px] shadow-bs12 w-[70%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 h-28 md:h-auto items-center justify-between max-w-[1076px] p-6 sm:px-5 rounded-tl-[12px] rounded-tr-[12px] shadow-bs12 w-full">
                        <DashboardScreenPagesMessagesCardchat className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start py-2 rounded-lg w-[440px] sm:w-full" />
                        <div className="flex flex-row gap-6 items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_iconssolid_blue_gray_900_01_16x16.svg"
                            alt="iconssolid"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_iconssolid_4.svg"
                            alt="iconssolid_One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col font-helvetica justify-start mt-[25px] w-[97%] md:w-full">
                        <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start mr-[656px] px-4 py-2 rounded-[12px] shadow-bs w-auto sm:w-full">
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtHelvetica14"
                          >
                            It contains a lot of good lessons about effective
                            practices
                          </Text>
                          <Datepicker.Time
                            className="frameEighteen"
                            placeholder="3:14am"
                          ></Datepicker.Time>
                        </div>
                        <ListItemsDialoguebox
                          className="bg-gradient15  flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[521px] mt-[35px] px-4 py-2 rounded-[12px] shadow-bs w-auto sm:w-full"
                          checkmarkimage="images/img_checkmark_blue_gray_400.svg"
                          timetext="3:14am"
                        />
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[467px] mt-7 p-2 w-auto">
                          <Text
                            className="text-blue_gray-900_01 text-sm w-auto"
                            size="txtHelveticaBold14Bluegray90001"
                          >
                            WED, 3:27pm
                          </Text>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start mr-[544px] mt-[27px] px-4 py-2 rounded-[12px] shadow-bs w-auto sm:w-full">
                          <Text
                            className="text-blue_gray-900 text-sm w-auto"
                            size="txtHelvetica14"
                          >
                            Yeah! Responsive Design is geared towards those
                            trying to build web apps
                          </Text>
                          <Datepicker.Time
                            className="frameEighteen_One"
                            placeholder="3:14am"
                          ></Datepicker.Time>
                        </div>
                        <ListItemsDialoguebox
                          className="bg-gradient15  flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[857px] mt-[18px] px-4 py-2 rounded-[12px] shadow-bs w-auto"
                          dailydesignlinktext="Excellent, I want it now ! "
                          checkmarkimage="images/img_checkmark_blue_gray_400.svg"
                          timetext="3:14am"
                        />
                      </div>
                      <div className="bg-white-A700 flex md:flex-col flex-row font-notosans gap-4 items-center justify-center max-w-[1075px] mt-[31px] p-6 sm:px-5 rounded-bl-[12px] rounded-br-[12px] shadow-bs6 w-full">
                        <Input
                          name="searchinput"
                          placeholder="Type here"
                          className="!placeholder:text-blue_gray-500 !text-blue_gray-500 p-0 text-left text-sm w-full"
                          wrapClassName="md:flex-1 w-[93%] md:w-full"
                          shape="round"
                          color="blue_gray_50"
                          size="3xl"
                          variant="outline"
                        ></Input>
                        <div className="bg-gradient7  flex flex-col h-[45px] md:h-auto items-center justify-center p-2 rounded-lg w-14">
                          <Img
                            className="h-5 w-5"
                            src="images/img_iconssolid_white_a700_20x20.svg"
                            alt="iconssolid_Two"
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
      </div>
    </>
  );
};

export default DashboardScreenPagesMessagesPage;
