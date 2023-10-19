import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardScreenCRMButtondefault from "components/DashboardScreenCRMButtondefault";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DashboardScreenCRMPage = () => {
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
      <div className="flex flex-col font-helvetica items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[1326px] items-center justify-start p-[19px] w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mx-auto my-1 md:px-5 w-full">
              <Sidebar1 className="!sticky !w-[236px] flex h-screen md:hidden justify-start md:mt-0 mt-2 overflow-auto top-[0]" />
              <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-[98%] md:w-full">
                  <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-1 w-[6%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[79px]">
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
                            / CRM
                          </span>
                        </Text>
                      </div>
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtHelveticaBold14Bluegray90003"
                      >
                        CRM
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-row items-center justify-between mb-[11px] md:ml-[0] ml-[1144px] w-[22%] md:w-full">
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
                        <a
                          href="javascript:"
                          className="text-gray-600 text-xs w-10"
                        >
                          <Text size="txtHelveticaBold12Bluegray40001">
                            Sign In
                          </Text>
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
                  </header>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-800"
                    size="txtHelveticaBold32"
                  >
                    General Statistics
                  </Text>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[66%] md:w-full">
                          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                            <List
                              className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                              orientation="horizontal"
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[184px] items-center justify-end sm:ml-[0] p-[15px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_firstcard.svg')",
                                }}
                              >
                                <div className="flex flex-col gap-[11px] items-start justify-start mt-1 w-[96%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
                                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12Bluegray20001"
                                      >
                                        Visitors
                                      </Text>
                                      <div className="flex flex-row gap-[5px] items-center justify-between w-full">
                                        <Text
                                          className="text-gray-800 text-lg"
                                          size="txtHelveticaBold18Bluegray90003"
                                        >
                                          5,927
                                        </Text>
                                        <Text
                                          className="text-green-500 text-sm"
                                          size="txtHelveticaBold14Green400"
                                        >
                                          +55%
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col gap-[37px] items-center justify-start">
                                        <Text
                                          className="h-3 text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray10001"
                                        >
                                          80
                                        </Text>
                                        <Text
                                          className="h-3 text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray10001"
                                        >
                                          40
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-[95%]">
                                        <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-[72px] items-center justify-start w-[93%] md:w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group280.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[71px] md:h-auto object-cover"
                                              src="images/img_teal.png"
                                              alt="teal"
                                            />
                                          </div>
                                          <div className="flex flex-row items-start justify-between w-full">
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Apr
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              May
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Jun
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Jul
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Aug
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Sep
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Oct
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Nov
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Dec
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[184px] items-center justify-start sm:ml-[0] p-[11px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_firstcard.svg')",
                                }}
                              >
                                <div className="flex flex-col gap-[11px] justify-start mb-1 mt-2 w-[97%] md:w-full">
                                  <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] w-[39%] md:w-full">
                                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12Bluegray20001"
                                      >
                                        Income
                                      </Text>
                                      <div className="flex flex-row items-start justify-evenly w-full">
                                        <Text
                                          className="text-gray-800 text-lg"
                                          size="txtHelveticaBold18Bluegray90003"
                                        >
                                          $130,912
                                        </Text>
                                        <Text
                                          className="mt-0.5 text-green-500 text-sm"
                                          size="txtHelveticaBold14Green400"
                                        >
                                          +90%
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col gap-[38px] items-end justify-start">
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray10001"
                                        >
                                          $200
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-400 text-right"
                                          size="txtHelveticaBold10Bluegray10001"
                                        >
                                          $50
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-[92%]">
                                        <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-[72px] items-center justify-start w-[93%] md:w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group280.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[71px] md:h-auto object-cover"
                                              src="images/img_teal.png"
                                              alt="teal"
                                            />
                                          </div>
                                          <div className="flex flex-row items-start justify-between w-full">
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Apr
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              May
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Jun
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Jul
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Aug
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Sep
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Oct
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Nov
                                            </Text>
                                            <Text
                                              className="text-[10px] text-gray-400"
                                              size="txtHelveticaBold10Bluegray10001"
                                            >
                                              Dec
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </List>
                            <div
                              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[184px] items-center justify-start p-[59px] md:px-10 sm:px-5 w-[32%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_firstcard.svg')",
                              }}
                            >
                              <div className="flex flex-col gap-[13px] items-center justify-start w-[34%] md:w-full">
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_ioniconaaddoutline_blue_gray_400_01.svg"
                                  alt="ioniconaaddoutl"
                                />
                                <Text
                                  className="text-center text-gray-600 text-lg"
                                  size="txtHelveticaBold18Bluegray40001"
                                >
                                  New Tab
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[570px] items-center justify-end p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[9px] w-full">
                              <div className="flex flex-col gap-2.5 items-start justify-start">
                                <Text
                                  className="text-gray-800 text-lg"
                                  size="txtHelveticaBold18Bluegray90003"
                                >
                                  Calendar
                                </Text>
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelvetica14Bluegray20001"
                                >
                                  Wednesday, 2021
                                </Text>
                              </div>
                              <div className="flex flex-col font-roboto gap-[5px] items-center justify-start md:ml-[0] ml-[3px] rotate-[-90deg] w-full">
                                <List
                                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[143px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[143px]">
                                      <div className="absolute bg-white-A700 h-3.5 inset-[0] m-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Mon
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[143px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[142px]">
                                      <div className="absolute bg-white-A700 h-3.5 inset-[0] m-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Tue
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-36">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[141px]">
                                      <div className="absolute bg-white-A700 bottom-[0] h-3.5 inset-x-[0] mx-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Wed
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[142px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[142px]">
                                      <div className="absolute bg-white-A700 bottom-[0] h-3.5 inset-x-[0] mx-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Thu
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[143px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[143px]">
                                      <div className="absolute bg-white-A700 bottom-[1%] h-3.5 inset-x-[0] mx-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Fri
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[142px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[141px]">
                                      <div className="absolute bg-white-A700 h-3.5 inset-[0] m-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Sat
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-center sm:ml-[0] rotate-[90deg] w-[143px]">
                                    <div className="h-[15px] relative rotate-[-90deg] w-[143px]">
                                      <div className="absolute bg-white-A700 h-3.5 inset-[0] m-auto rotate-[-90deg] w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto rotate-[90deg] text-gray-800 text-xs w-max"
                                        size="txtRobotoMedium12"
                                      >
                                        Sun
                                      </Text>
                                    </div>
                                  </div>
                                </List>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                                      <div className="md:h-[1504px] h-[341px] sm:h-[423px] relative w-[86%] md:w-full">
                                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                          <div className="flex flex-col relative w-full">
                                            <div className="md:h-[289px] h-[85px] mx-auto w-full">
                                              <div className="md:h-[289px] h-[85px] m-auto w-full">
                                                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                                    <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                      <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                        <Text
                                                          className="h-[19px] mb-[54px] rotate-[90deg] text-base text-gray-500 text-right"
                                                          size="txtRobotoMedium16"
                                                        >
                                                          28
                                                        </Text>
                                                      </div>
                                                    </div>
                                                    <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[430px] rotate-[90deg] w-[17%] md:w-full">
                                                      <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                        <Text
                                                          className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                          size="txtRobotoMedium16Bluegray90003"
                                                        >
                                                          2
                                                        </Text>
                                                      </div>
                                                    </div>
                                                    <div className="bg-gray-100 flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                      <div className="bg-gray-50_02 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                        <Text
                                                          className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                          size="txtRobotoMedium16Bluegray90003"
                                                        >
                                                          3
                                                        </Text>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[17%] my-auto rotate-[90deg] w-[17%]">
                                                  <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                    <Text
                                                      className="h-[19px] mb-[55px] rotate-[90deg] text-base text-gray-500 text-right"
                                                      size="txtRobotoMedium16"
                                                    >
                                                      29
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[33%] rotate-[90deg] w-[17%]">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  1
                                                </Button>
                                              </div>
                                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[33%] my-auto rotate-[90deg] w-[17%]">
                                                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="h-[19px] mb-[54px] rotate-[90deg] text-base text-gray-500 text-right"
                                                    size="txtRobotoMedium16"
                                                  >
                                                    30
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                            <Button
                                              className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] ml-auto mt-[-0.7px] rotate-[90deg] text-base text-center z-[1]"
                                              shape="square"
                                              color="gray_50_02"
                                              size="2xl"
                                              variant="fill"
                                            >
                                              10
                                            </Button>
                                            <div className="flex flex-col items-center justify-start ml-auto mr-[143px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                <Text
                                                  className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                  size="txtRobotoMedium16Bluegray90003"
                                                >
                                                  9
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start ml-auto mr-[287px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                <Text
                                                  className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                  size="txtRobotoMedium16Bluegray90003"
                                                >
                                                  8
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start ml-[287px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <div className="bg-white-A700 flex flex-col items-end justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                <Text
                                                  className="mb-[54px] mr-[57px] rotate-[90deg] text-base text-gray-800 text-right"
                                                  size="txtRobotoMedium16Bluegray90003"
                                                >
                                                  7
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start ml-[143px] mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <Button
                                                className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                shape="square"
                                                color="white_A700"
                                                size="2xl"
                                                variant="fill"
                                              >
                                                6
                                              </Button>
                                            </div>
                                            <div className="flex flex-col items-center justify-start mt-[-0.7px] rotate-[90deg] w-[17%] z-[1]">
                                              <Button
                                                className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                shape="square"
                                                color="white_A700"
                                                size="2xl"
                                                variant="fill"
                                              >
                                                5
                                              </Button>
                                            </div>
                                          </div>
                                          <List
                                            className="flex flex-col gap-px items-center w-full"
                                            orientation="vertical"
                                          >
                                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  12
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  13
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  14
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  15
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  16
                                                </Button>
                                              </div>
                                              <Button
                                                className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                                shape="square"
                                                color="gray_50_02"
                                                size="2xl"
                                                variant="fill"
                                              >
                                                17
                                              </Button>
                                            </div>
                                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  19
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  20
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray90003"
                                                  >
                                                    21
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <Button
                                                  className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                                  shape="square"
                                                  color="white_A700"
                                                  size="2xl"
                                                  variant="fill"
                                                >
                                                  22
                                                </Button>
                                              </div>
                                              <div className="flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="h-[19px] mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray90003"
                                                  >
                                                    23
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="bg-gray-100 flex md:flex-1 flex-col items-center justify-start rotate-[90deg] w-[17%] md:w-full">
                                                <div className="bg-gray-50_02 flex flex-col items-center justify-start outline outline-[1px] outline-indigo-50 p-[5px] rotate-[-90deg] w-full">
                                                  <Text
                                                    className="h-[19px] mb-[54px] rotate-[90deg] text-base text-gray-800 text-right"
                                                    size="txtRobotoMedium16Bluegray90003"
                                                  >
                                                    24
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </List>
                                        </div>
                                        <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                          <div className="flex flex-col items-end justify-start w-full">
                                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                                              <Button
                                                className="!text-white-A700 cursor-pointer font-medium leading-[normal] min-w-[135px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="sm"
                                                variant="gradient"
                                                color="pink_A400_deep_purple_500_01"
                                              >
                                                Dinner with family
                                              </Button>
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[280px] sm:ml-[0] ml-[9px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="sm"
                                                variant="gradient"
                                                color="light_blue_400_indigo_A700_01"
                                              >
                                                Meeting with Michael
                                              </Button>
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[280px] sm:ml-[0] ml-[150px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="sm"
                                                variant="gradient"
                                                color="yellow_600_red_500_03"
                                              >
                                                Digital Event
                                              </Button>
                                            </div>
                                            <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-end mt-[55px] w-1/2 md:w-full">
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[280px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="sm"
                                                variant="gradient"
                                                color="light_blue_400_indigo_A700_01"
                                              >
                                                Facebook ADS Webinar
                                              </Button>
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[137px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="sm"
                                                variant="gradient"
                                                color="pink_300_red_A700"
                                              >
                                                Black Friday
                                              </Button>
                                            </div>
                                            <div className="flex md:flex-col flex-row gap-2 items-center justify-end mt-[141px] w-[84%] md:w-full">
                                              <Button
                                                className="cursor-pointer font-medium leading-[normal] min-w-[423px] sm:min-w-full rounded-lg text-center text-xs"
                                                shape="round"
                                                size="sm"
                                                variant="gradient"
                                                color="pink_300_red_A700"
                                              >
                                                Marketing Online Event
                                              </Button>
                                              <Button
                                                className="!text-white-A700 cursor-pointer font-medium leading-[normal] min-w-[279px] rounded-lg text-center text-xs"
                                                shape="round"
                                                size="sm"
                                                variant="gradient"
                                                color="pink_A400_deep_purple_500_01"
                                              >
                                                Business Plan Strategy
                                              </Button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
                                        <Button
                                          className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                          shape="square"
                                          color="gray_50_02"
                                          size="2xl"
                                          variant="fill"
                                        >
                                          4
                                        </Button>
                                        <Button
                                          className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                          shape="square"
                                          color="gray_50_02"
                                          size="2xl"
                                          variant="fill"
                                        >
                                          11
                                        </Button>
                                        <Button
                                          className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                          shape="square"
                                          color="gray_50_02"
                                          size="2xl"
                                          variant="fill"
                                        >
                                          18
                                        </Button>
                                        <Button
                                          className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                          shape="square"
                                          color="gray_50_02"
                                          size="2xl"
                                          variant="fill"
                                        >
                                          25
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                                      <List
                                        className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[72%] md:w-full"
                                        orientation="horizontal"
                                      >
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="2xl"
                                            variant="fill"
                                          >
                                            26
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="2xl"
                                            variant="fill"
                                          >
                                            27
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="2xl"
                                            variant="fill"
                                          >
                                            28
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="2xl"
                                            variant="fill"
                                          >
                                            29
                                          </Button>
                                        </div>
                                        <div className="flex flex-col items-center justify-start sm:ml-[0] rotate-[90deg] w-full">
                                          <Button
                                            className="!text-gray-800 cursor-pointer font-medium min-w-[143px] outline outline-[1px] outline-indigo-50 rotate-[-90deg] text-base text-center"
                                            shape="square"
                                            color="white_A700"
                                            size="2xl"
                                            variant="fill"
                                          >
                                            30
                                          </Button>
                                        </div>
                                      </List>
                                      <Button
                                        className="border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                        shape="square"
                                        color="gray_50_02"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        31
                                      </Button>
                                      <Button
                                        className="!text-gray-500 border border-gray-300 border-solid cursor-pointer font-medium min-w-[143px] rotate-[90deg] text-base text-center"
                                        shape="square"
                                        color="gray_50_02"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        1
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[33%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[250px] items-center justify-start p-4 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="h-[218px] relative w-full">
                              <Img
                                className="h-[218px] m-auto object-cover rounded-[15px] w-full"
                                src="images/img_brookecagleg1.png"
                                alt="brookecaglegOne"
                              />
                              <div className="absolute bg-gradient21  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[11px] rounded-[15px] w-full">
                                <div className="flex flex-col md:gap-10 gap-[78px] justify-start mb-[9px] mt-[15px] w-[85%] md:w-full">
                                  <div className="flex flex-col gap-1.5 items-start justify-start ml-3 md:ml-[0]">
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtHelveticaBold18WhiteA700"
                                    >
                                      Hello, John!
                                    </Text>
                                    <Text
                                      className="leading-[140.00%] text-sm text-white-A700"
                                      size="txtHelvetica14WhiteA700"
                                    >
                                      <>
                                        Wealth creation is an evolutionarily
                                        recent positive-sum game.
                                        <br />
                                        It is all about who take the opportunity
                                        first.
                                      </>
                                    </Text>
                                  </div>
                                  <div className="h-6 md:h-[15px] relative w-[21%]">
                                    <DashboardScreenCRMButtondefault className="absolute flex flex-col h-full inset-y-[0] items-center justify-center left-[0] my-auto w-[76px]" />
                                    <Img
                                      className="absolute bottom-[21%] h-3 right-[0] w-3"
                                      src="images/img_arrowright_white_a700_12x12.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[278px] items-center justify-start p-[21px] sm:px-5 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[31px] items-start justify-start mt-[9px] w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-800 text-lg"
                                  size="txtHelveticaBold18Bluegray90003"
                                >
                                  Invoices
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <List
                                  className="flex flex-col gap-[27px] items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-lg w-[38px]"
                                      shape="round"
                                      size="md"
                                      variant="gradient"
                                      color="blue_gray_700_01_gray_900_06"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_ioniconrrocketsharp_white_a700.svg"
                                        alt="ioniconrrockets"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-2 items-start justify-start sm:ml-[0] ml-[17px]">
                                      <Text
                                        className="text-gray-800 text-sm"
                                        size="txtHelveticaBold14Bluegray90003"
                                      >
                                        Devices
                                      </Text>
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12Bluegray20001"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-bold">
                                          250 in stock,{" "}
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          346+ sold
                                        </span>
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[15px] sm:ml-[0] ml-[279px] sm:mt-0 mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200_01.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-lg w-[38px]"
                                      shape="round"
                                      size="md"
                                      variant="gradient"
                                      color="blue_gray_700_01_gray_900_06"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_ioniconbbuilddefault_white_a700.svg"
                                        alt="ioniconbbuildde"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-2 items-start justify-start sm:ml-[0] ml-[17px]">
                                      <Text
                                        className="text-gray-800 text-sm"
                                        size="txtHelveticaBold14Bluegray90003"
                                      >
                                        Tickets
                                      </Text>
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12Bluegray20001"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-bold">
                                          123 closed,{" "}
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          15 open
                                        </span>
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[15px] sm:ml-[0] ml-[296px] sm:mt-0 mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200_01.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <Button
                                      className="flex h-[38px] items-center justify-center rounded-lg w-[38px]"
                                      shape="round"
                                      size="md"
                                      variant="gradient"
                                      color="blue_gray_700_01_gray_900_06"
                                    >
                                      <Img
                                        className="h-[19px]"
                                        src="images/img_map_white_a700.svg"
                                        alt="map"
                                      />
                                    </Button>
                                    <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[17px]">
                                      <Text
                                        className="text-gray-800 text-sm"
                                        size="txtHelveticaBold14Bluegray90003"
                                      >
                                        Error logs
                                      </Text>
                                      <Text
                                        className="text-gray-500 text-xs"
                                        size="txtHelveticaBold12Bluegray20001"
                                      >
                                        <span className="text-gray-500 font-helvetica text-left font-bold">
                                          1 is active,{" "}
                                        </span>
                                        <span className="text-gray-600 font-helvetica text-left font-bold">
                                          40 closed
                                        </span>
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[15px] sm:ml-[0] ml-[291px] sm:mt-0 mt-3.5 w-[15px]"
                                      src="images/img_arrowright_blue_gray_200_01.svg"
                                      alt="arrowright"
                                    />
                                  </div>
                                </List>
                              </div>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[202px] items-start justify-start p-4 w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_firstcard.svg')",
                            }}
                          >
                            <div className="flex sm:flex-col flex-row gap-9 items-center justify-start w-[93%] md:w-full">
                              <div className="flex flex-col h-[170px] items-center justify-start w-[170px]">
                                <Img
                                  className="h-[170px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[170px]"
                                  src="images/img_batelstudiott.png"
                                  alt="batelstudiott"
                                />
                              </div>
                              <div className="flex flex-col gap-[21px] items-start justify-start w-[55%] sm:w-full">
                                <Text
                                  className="leading-[140.00%] text-gray-600 text-sm w-full"
                                  size="txtHelveticaBold14Bluegray40001"
                                >
                                  <>
                                    Today is Martina&#39;s birthday. Wish her
                                    the best of luck!
                                  </>
                                </Text>
                                <div className="bg-gradient8  flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg w-[134px]">
                                  <div className="flex flex-col items-center justify-center w-auto">
                                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-[10px] text-center text-white-A700"
                                          size="txtHelveticaBold10WhiteA700"
                                        >
                                          SEND MESSAGE
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-px w-6"
                                      src="images/img_minwidth.svg"
                                      alt="minwidth_One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[279px] items-center justify-start p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-7 items-center justify-start my-2 w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18Bluegray90003"
                              >
                                Your Transactions
                              </Text>
                              <div className="flex flex-row gap-1.5 items-start justify-start mt-0.5">
                                <Img
                                  className="h-[15px] w-[15px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelveticaBold14Bluegray20001"
                                >
                                  23 - 30 March 2020
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                    color="red_600"
                                    size="lg"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowdown_red_600.svg"
                                      alt="arrowdown"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14Bluegray90003"
                                    >
                                      Netflix
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12Bluegray20001"
                                    >
                                      27 March 2020, at 12:30 PM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[496px] md:mt-0 mt-2">
                                    <Text
                                      className="text-red-600 text-right text-sm"
                                      size="txtHelveticaBold14Red600"
                                    >
                                      -$2500
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                    color="green_400"
                                    size="lg"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowup_green_400.svg"
                                      alt="arrowup"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-1.5 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14Bluegray90003"
                                    >
                                      Apple
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12Bluegray20001"
                                    >
                                      27 March 2020, at 12:30 PM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[493px] md:mt-0 mt-[7px]">
                                    <Text
                                      className="text-green-500 text-right text-sm"
                                      size="txtHelveticaBold14Green400"
                                    >
                                      +$2500
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                    color="green_400"
                                    size="lg"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowup_green_400.svg"
                                      alt="arrowup_One"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-1.5 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14Bluegray90003"
                                    >
                                      Stripe
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12Bluegray20001"
                                    >
                                      26 March 2020, at 10:10 AM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[492px] md:mt-0 mt-[7px]">
                                    <Text
                                      className="text-green-500 text-right text-sm"
                                      size="txtHelveticaBold14Green400"
                                    >
                                      +$9900
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[279px] items-center justify-start p-[21px] sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_firstcard.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[29px] items-center justify-start my-2 w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-gray-800 text-lg"
                                size="txtHelveticaBold18Bluegray90003"
                              >
                                Revenue
                              </Text>
                              <div className="flex flex-row gap-1.5 items-start justify-start">
                                <Img
                                  className="h-[15px] w-[15px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar"
                                />
                                <Text
                                  className="text-gray-500 text-sm"
                                  size="txtHelveticaBold14Bluegray20001"
                                >
                                  23 - 30 March 2020
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rotate-[180deg] rounded-[17px] w-[35px]"
                                    color="green_400"
                                    size="lg"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowup_green_400_35x35.svg"
                                      alt="arrowup"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-1.5 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14Bluegray90003"
                                    >
                                      via PayPal
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12Bluegray20001"
                                    >
                                      27 March 2020, at 12:30 PM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[492px] md:mt-0 mt-[7px]">
                                    <Text
                                      className="text-green-500 text-right text-sm"
                                      size="txtHelveticaBold14Green400"
                                    >
                                      +$8700
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                                    color="green_400"
                                    size="lg"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowup_green_400.svg"
                                      alt="arrowup_One"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14Bluegray90003"
                                    >
                                      Partner #01424
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12Bluegray20001"
                                    >
                                      27 March 2020, at 12:30 PM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[485px] md:mt-0 mt-2">
                                    <Text
                                      className="text-green-500 text-right text-sm"
                                      size="txtHelveticaBold14Green400"
                                    >
                                      +$12000
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                  <Button
                                    className="flex h-[35px] items-center justify-center rotate-[180deg] rounded-[17px] w-[35px]"
                                    color="red_600"
                                    size="lg"
                                    variant="outline"
                                  >
                                    <Img
                                      className="h-3"
                                      src="images/img_arrowdown_red_600_35x35.svg"
                                      alt="arrowdown"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-2 items-start justify-start ml-3.5 md:ml-[0]">
                                    <Text
                                      className="text-gray-800 text-sm"
                                      size="txtHelveticaBold14Bluegray90003"
                                    >
                                      Services
                                    </Text>
                                    <Text
                                      className="text-gray-500 text-xs"
                                      size="txtHelveticaBold12Bluegray20001"
                                    >
                                      26 March 2020, at 10:10 AM
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[496px] md:mt-0 mt-2">
                                    <Text
                                      className="text-red-600 text-right text-sm"
                                      size="txtHelveticaBold14Red600"
                                    >
                                      -$1900
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreenCRMPage;
