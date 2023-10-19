import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  Switch,
  Text,
} from "components";
import ListItemsColumnOne from "components/ListItemsColumnOne";
import ListItemsColumnstatus from "components/ListItemsColumnstatus";
import ListItemsColumnstatus1 from "components/ListItemsColumnstatus1";
import ListItemsItemroom from "components/ListItemsItemroom";
import SectionsCameras from "components/SectionsCameras";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DashboardsSmartHomePage = () => {
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
  const listItemsColumnOnePropList = [
    {},
    {
      smalltext: "%",
      description: "Humidity",
      titleThree: "Outside",
      text: "44",
    },
    {
      smalltext: "m³",
      description: "Consumption",
      titleThree: "Water",
      text: "87",
    },
    {
      smalltext: "GB",
      description: "All devices",
      titleThree: "Internet",
      text: "417",
    },
  ];
  const listItemsItemroomPropList = [
    {},
    { value: "20%", titleFour: "Kitchen" },
    { value: "13%", titleFour: "Attic" },
    { value: "32%", titleFour: "Garage" },
    { value: "20%", titleFour: "Basement" },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-end mx-auto p-4 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[3px] mt-5 mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[236px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[31px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start sm:mt-0 mt-1 w-[8%] sm:w-full">
                <div className="flex flex-col items-start justify-start w-[119px]">
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
                      / Smart Home
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Smart Home
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
                      height={39}
                      width={37}
                      viewBox="0 0 37 39"
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
            <div className="flex flex-col font-opensans items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                  <SectionsCameras
                    className="bg-cover bg-no-repeat flex flex-1 flex-col gap-4 h-[491px] items-end justify-start max-w-[931px] p-4 rounded-[12px] w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                    smarthomeeleven="images/img_smarthome11_400x899.png"
                  />
                  <div className="flex md:flex-1 flex-col font-helvetica gap-[22px] items-start justify-start w-[610px] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[103px] items-center justify-between sm:px-5 px-6 py-3 w-full"
                      style={{
                        backgroundImage: "url('images/img_colorgradient.png')",
                      }}
                    >
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col gap-[33px] h-[79px] md:h-auto items-start justify-between">
                          <Text
                            className="text-blue_gray-50 text-sm w-auto"
                            size="txtHelveticaBold14Bluegray50"
                          >
                            Weather Today
                          </Text>
                          <Text
                            className="text-white-A700 text-xl tracking-[-0.80px] w-auto"
                            size="txtHelveticaBold20WhiteA700"
                          >
                            San Francisco - 34°C
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Img
                            className="h-[52px] md:h-auto object-cover w-[70px] sm:w-full"
                            src="images/img_iconsuncloud.png"
                            alt="iconsuncloud"
                          />
                          <Text
                            className="text-white-A700 text-xl tracking-[-0.80px] w-auto"
                            size="txtHelveticaBold20WhiteA700"
                          >
                            Cloudy
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="sm:gap-5 gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      {listItemsColumnOnePropList.map((props, index) => (
                        <React.Fragment key={`ListItemsColumnOne${index}`}>
                          <ListItemsColumnOne
                            className="bg-cover bg-no-repeat flex flex-1 flex-col gap-4 h-[172px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-[12px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_colorwhite.svg')",
                            }}
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-helvetica gap-[31px] items-center justify-between mt-9 w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[293px] items-center justify-start max-w-[771px] p-6 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  >
                    <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                          size="txtHelveticaBold16Bluegray900"
                        >
                          Consumption by room
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconsregular_blue_gray_400.svg"
                          alt="iconsregular"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row font-opensans gap-[54px] items-center justify-start w-full">
                        <div className="h-52 md:h-[206px] relative w-[28%] md:w-full">
                          <Img
                            className="h-[206px] m-auto object-cover"
                            src="images/img_graph_white_a700.png"
                            alt="graph"
                          />
                          <div className="absolute flex flex-col gap-0.5 h-max inset-[0] items-center justify-start m-auto w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                              size="txtOpenSansRomanSemiBold24"
                            >
                              310
                            </Text>
                            <Text
                              className="bg-clip-text bg-gradient12  text-sm text-transparent w-auto"
                              size="txtOpenSansBold14"
                            >
                              WATTS
                            </Text>
                          </div>
                        </div>
                        <List
                          className="flex flex-1 flex-col font-helvetica gap-0.5 items-start w-full"
                          orientation="vertical"
                        >
                          {listItemsItemroomPropList.map((props, index) => (
                            <React.Fragment key={`ListItemsItemroom${index}`}>
                              <ListItemsItemroom
                                className="flex flex-1 flex-col items-center justify-between my-0 p-1 w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ))}
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-start max-w-[769px] w-full">
                    <div className="h-[295px] md:h-auto p-6 sm:px-5 relative w-full">
                      <Img
                        className="absolute h-[295px] inset-[0] justify-center m-auto w-[368px]"
                        src="images/img_colorwhite.svg"
                        alt="bg"
                      />
                      <div className="flex flex-col gap-[33px] items-start justify-start m-auto relative">
                        <Text
                          className="text-base text-blue_gray-900_02 tracking-[-0.80px] w-full"
                          size="txtHelveticaBold16Bluegray90002"
                        >
                          Consumption per Day
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-3.5 items-end justify-start w-full">
                            <div className="flex flex-row gap-[18px] items-center justify-between w-full">
                              <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                                <Text
                                  className="text-[10px] text-blue_gray-400 w-auto"
                                  size="txtHelveticaBold10Bluegray400"
                                >
                                  500
                                </Text>
                                <Text
                                  className="text-[10px] text-blue_gray-400 w-auto"
                                  size="txtHelveticaBold10Bluegray400"
                                >
                                  400
                                </Text>
                                <Text
                                  className="text-[10px] text-blue_gray-400 w-auto"
                                  size="txtHelveticaBold10Bluegray400"
                                >
                                  300
                                </Text>
                                <Text
                                  className="text-[10px] text-blue_gray-400 w-auto"
                                  size="txtHelveticaBold10Bluegray400"
                                >
                                  200
                                </Text>
                                <Text
                                  className="text-[10px] text-blue_gray-400 w-auto"
                                  size="txtHelveticaBold10Bluegray400"
                                >
                                  100
                                </Text>
                                <Text
                                  className="text-[10px] text-blue_gray-400 w-[5px]"
                                  size="txtHelveticaBold10Bluegray400"
                                >
                                  0
                                </Text>
                              </div>
                              <Img
                                className="h-[155px] w-[290px]"
                                src="images/img_lines_blue_gray_900.svg"
                                alt="lines"
                              />
                            </div>
                            <div className="flex flex-row gap-5 items-start justify-between px-2 w-[290px]">
                              <Text
                                className="text-[10px] text-blue_gray-400 text-center w-auto"
                                size="txtHelveticaBold10Bluegray400"
                              >
                                Mon
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-400 text-center w-auto"
                                size="txtHelveticaBold10Bluegray400"
                              >
                                Tue
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-400 text-center w-auto"
                                size="txtHelveticaBold10Bluegray400"
                              >
                                Wed
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-400 text-center w-auto"
                                size="txtHelveticaBold10Bluegray400"
                              >
                                Thu
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-400 text-center"
                                size="txtHelveticaBold10Bluegray400"
                              >
                                Fri
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-400 text-center w-auto"
                                size="txtHelveticaBold10Bluegray400"
                              >
                                Sat
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-400 text-center w-auto"
                                size="txtHelveticaBold10Bluegray400"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[295px] md:h-auto items-center justify-between p-6 sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_colorwhite.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-2 justify-start w-[86%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[-0.80px] w-full"
                          size="txtHelveticaBold16Bluegray900"
                        >
                          Device limit
                        </Text>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[46px] pr-0.5 pt-0.5 w-[84%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[188px] items-center justify-end p-[66px] md:px-10 sm:px-5"
                            style={{
                              backgroundImage: "url('images/img_group447.svg')",
                            }}
                          >
                            <Text
                              className="mt-[18px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700 text-center"
                              size="txtHelveticaBold32Bluegray700"
                            >
                              29°C
                            </Text>
                          </div>
                          <div className="flex flex-row font-opensans gap-4 items-center justify-start mt-0.5 w-auto">
                            <Text
                              className="text-blue_gray-400 text-center text-xs w-auto"
                              size="txtOpenSans12"
                            >
                              16°C
                            </Text>
                            <Text
                              className="text-base text-blue_gray-900 text-center w-auto"
                              size="txtOpenSans16"
                            >
                              Temperature
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-center text-xs w-auto"
                              size="txtOpenSans12"
                            >
                              38°C
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-px mt-[43px]"
                  src="images/img_separator.svg"
                  alt="separatorZero"
                />
                <div className="flex md:flex-col flex-row font-helvetica gap-[30px] items-center justify-start max-w-[1571px] mt-[30px] w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[84%] md:w-full"
                    orientation="horizontal"
                  >
                    <ListItemsColumnstatus className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-2 h-[216px] md:h-auto items-start justify-center p-6 sm:px-5 rounded-[12px] shadow-bs w-full" />
                    <ListItemsColumnstatus1
                      className="bg-gradient7  flex flex-col gap-2 h-[216px] md:h-auto items-start justify-center p-6 sm:px-5 rounded-[12px] shadow-bs w-full"
                      settings="images/img_lightbulb_white_a700.svg"
                      title="Temperature"
                    />
                    <ListItemsColumnstatus
                      className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-2 h-[216px] md:h-auto items-start justify-center p-6 sm:px-5 rounded-[12px] shadow-bs w-full"
                      humidityicon="images/img_iconssmarthome.svg"
                      title="Air Conditioner"
                      duration="Inactive since: 1 hour"
                    />
                    <ListItemsColumnstatus
                      className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-2 h-[216px] md:h-auto items-start justify-center p-6 sm:px-5 rounded-[12px] shadow-bs w-full"
                      humidityicon="images/img_notification.svg"
                      title="Lights"
                      duration="Inactive since: 27 minutes"
                    />
                    <ListItemsColumnstatus1
                      className="bg-gradient7  flex flex-col gap-2 h-[216px] md:h-auto items-start justify-center p-6 sm:px-5 rounded-[12px] shadow-bs w-full"
                      settings="images/img_property1wifi_white_a700.svg"
                      title="Wi-fi"
                    />
                  </List>
                  <div className="bg-white-A700 border border-dashed border-gray-300 flex flex-1 flex-col gap-2 h-[216px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconssolid_blue_gray_400.svg"
                      alt="iconssolid"
                    />
                    <Text
                      className="text-blue_gray-400 text-xl tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold20Bluegray400"
                    >
                      New device
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-helvetica md:gap-10 items-start justify-between mt-[33px] w-full">
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
        </div>
      </div>
    </>
  );
};

export default DashboardsSmartHomePage;
