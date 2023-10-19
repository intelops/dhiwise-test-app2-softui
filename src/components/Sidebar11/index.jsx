import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const Sidebar11 = (props) => {
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

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-3.5 mb-[1004px] ml-3.5 mr-[196px]"
          src="images/img_calculator_blue_gray_900_03.svg"
          alt="calculator"
        />
        <Text
          className="mb-[984px] ml-12 mr-[25px] mt-5 text-gray-800 text-xs"
          size="txtHelveticaBold12Bluegray90003"
        >
          SOFT UI DASHBOARD PRO
        </Text>
        <Line className="bg-gradient18  h-px mb-[948px] mt-[70px] w-full" />
        <Menu
          menuItemStyles={{
            button: {
              padding: "14px 14px 14px 190px",
              width: "100%",
              fontFamily: "Helvetica",
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
          className="flex flex-col items-center justify-start mb-[269px] mt-[72px] pt-5 px-1.5 w-[94%]"
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
                  >
                    <Text className="md:ml-[0]">Pages</Text>
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
                >
                  <Text className="text-gray-600">Applications</Text>
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
                >
                  <Text className="md:ml-[0]">Ecommerce</Text>
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
                    window.location.pathname === "/authenticationscreenerror404"
                  }
                >
                  <Text className="md:ml-[0]">Authentication</Text>
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
                  >
                    <Text className="md:ml-[0]">Basic</Text>
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
        <div className="md:h-[1018px] h-[169px] ml-[15px] mt-[849px] relative w-[94%]">
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
              className="!text-gray-800 cursor-pointer font-bold font-helvetica h-[35px] mt-2.5 rounded-lg text-[10px] text-center w-[186px]"
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
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
