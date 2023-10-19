import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import TablesColumnFive from "components/TablesColumnFive";
import TablesPagination from "components/TablesPagination";
import TablesProperty1row2 from "components/TablesProperty1row2";

import { CloseSVG } from "../../assets/images";

const ApplicationsDataTablesPage = () => {
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
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between mb-[5px] mt-[9px] mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-[22px] overflow-auto top-[0]">
            <div className="flex flex-row gap-3 items-start justify-start mb-[975px] ml-3.5 mr-[25px] w-[83%]">
              <Img
                className="h-[23px] w-[22px]"
                src="images/img_calculator_blue_gray_900_03.svg"
                alt="calculator"
              />
              <Text
                className="text-gray-800 text-xs"
                size="txtHelveticaBold12Bluegray90003"
              >
                SOFT UI DASHBOARD PRO
              </Text>
            </div>
            <Line className="bg-gradient18  h-px mb-[948px] mt-[50px] w-full" />
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
              className="flex flex-col items-center justify-start mb-[269px] mt-[52px] pt-5 px-1.5 w-[94%]"
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
            <div className="h-[169px] md:h-[998px] ml-[15px] mt-[829px] relative w-[94%]">
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
          <div className="flex flex-1 flex-col gap-[31px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[6%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[81px]">
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
                      / Alerts
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Alerts
                </Text>
              </div>
              <Img
                className="h-6 mb-1.5 md:ml-[0] ml-[115px] md:mt-0 mt-[15px] w-6"
                src="images/img_ioniconmmenudefault.svg"
                alt="ioniconmmenudef"
              />
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[993px] md:mt-0 mt-1.5 w-[22%] md:w-full">
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
              <div className="bg-white-A700 flex flex-col gap-[13px] items-start justify-start rounded-[15px] w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start p-6 sm:px-5 w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold20Bluegray900"
                  >
                    Datatable Simple
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtHelvetica14"
                  >
                    <>
                      A lightweight, extendable, dependency-free javascript HTML
                      table plugin.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start max-w-[1524px] md:ml-[0] ml-[23px] w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center min-w-[54px] rounded"
                      rightIcon={
                        <Img
                          className="h-2 ml-[5px] my-1"
                          src="images/img_arrowdown_blue_gray_900_8x8.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      size="sm"
                      variant="outline"
                      color="blue_gray_100_blue_gray_50_01"
                    >
                      <div className="text-left text-sm">10</div>
                    </Button>
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtHelvetica12Bluegray400"
                    >
                      entries per page
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[1575px] py-4 w-full">
                  <TablesColumnFive
                    className="flex flex-col gap-6 items-start justify-start sm:px-5 px-6 py-4 w-full"
                    icon18pxunfol="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfolone="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfol1="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfol2="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfol3="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfol4="images/img_icon18pxunfol_18x18.png"
                  />
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    {new Array(7).fill({}).map((props, index) => (
                      <React.Fragment key={`TablesProperty1row2${index}`}>
                        <TablesProperty1row2
                          className="flex flex-1 flex-col gap-6 items-center justify-start sm:px-5 px-6 py-4 w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                  <TablesPagination
                    className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-6 py-2 w-full"
                    three="3"
                    one1="4"
                    one2="4"
                    one3="4"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start mt-[30px] rounded-[15px] w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start p-6 sm:px-5 w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold20Bluegray900"
                  >
                    Datatable Search
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtHelvetica14"
                  >
                    <>
                      A lightweight, extendable, dependency-free javascript HTML
                      table plugin.
                    </>
                  </Text>
                </div>
                <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1524px] md:ml-[0] ml-[23px] mt-[13px] w-full">
                  <div className="flex flex-row font-helvetica gap-1 items-center justify-start w-auto">
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center min-w-[54px] rounded"
                      rightIcon={
                        <Img
                          className="h-2 ml-[5px] my-1"
                          src="images/img_arrowdown_blue_gray_900_8x8.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      size="sm"
                      variant="outline"
                      color="blue_gray_100_blue_gray_50_01"
                    >
                      <div className="text-left text-sm">10</div>
                    </Button>
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtHelvetica12Bluegray400"
                    >
                      entries per page
                    </Text>
                  </div>
                  <Input
                    name="menusearch"
                    placeholder="Search here..."
                    className="font-opensans p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                    wrapClassName=""
                    shape="round"
                    color="blue_gray_50"
                    size="2xl"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[1575px] mt-[3px] py-4 w-full">
                  <TablesColumnFive
                    className="flex flex-col gap-6 items-start justify-start sm:px-5 px-6 py-4 w-full"
                    icon18pxunfol="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfolone="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfol1="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfol2="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfol3="images/img_icon18pxunfol_18x18.png"
                    icon18pxunfol4="images/img_icon18pxunfol_18x18.png"
                  />
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    {new Array(7).fill({}).map((props, index) => (
                      <React.Fragment key={`TablesProperty1row2${index}`}>
                        <TablesProperty1row2
                          className="flex flex-1 flex-col gap-6 items-center justify-start sm:px-5 px-6 py-4 w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                  <TablesPagination
                    className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-6 py-2 w-full"
                    three="3"
                    one1="4"
                    one2="4"
                    one3="4"
                  />
                </div>
              </div>
              <GeneralNavigationRow2021madewith
                className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[47px] w-[99%] md:w-full"
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

export default ApplicationsDataTablesPage;
