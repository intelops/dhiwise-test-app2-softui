import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import GeneralWeekday from "components/GeneralWeekday";
import ListItemsRowevents from "components/ListItemsRowevents";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const ApplicationsCalendarPage = () => {
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
  const generalWeekdayPropList = [
    { meetingdetails: "Meeting with Mary", daynumber: "1" },
    { meetingdetails: "Cyber Week", daynumber: "2" },
    { meetingdetails: "Winter Hackaton", daynumber: "3" },
  ];
  const generalWeekdayPropList1 = [
    { daynumber: "13" },
    { daynumber: "14" },
    { daynumber: "15" },
    { daynumber: "16" },
    { daynumber: "17" },
    { daynumber: "18" },
  ];
  const generalWeekdayPropList2 = [
    { daynumber: "20" },
    { daynumber: "21" },
    { daynumber: "22" },
  ];
  const generalWeekdayPropList3 = [
    { daynumber: "24" },
    { daynumber: "25" },
    { daynumber: "26" },
  ];
  const listItemsRoweventsPropList = [
    {},
    {
      eventtime: "24 March 2021, at 10:00 PM",
      eventtitle: "Meeting with Marry",
    },
    { eventtime: "25 March 2021, at 9:30 AM", eventtitle: "Book Deposit Hall" },
    { eventtime: "25 March 2021, at 2:00 PM", eventtitle: "Shipment Deal UK" },
    {
      eventtime: "26 March 2021, at 9:00 AM",
      eventtitle: "Verify Dashboard Color Palette",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-end mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[9px] mx-auto md:px-5 w-full">
          <Sidebar11 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[31px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[6%] md:w-full">
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
              <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[993px] md:mt-0 mt-1.5 w-[22%] md:w-full">
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
            <div className="flex flex-col font-notosans items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-72 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-end justify-between w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 h-[583px] md:h-auto items-start justify-center max-w-[1154px] md:mt-0 mt-[87px] p-6 sm:px-5 rounded-[12px] shadow-bs w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.80px] w-[65px]"
                        size="txtNotoSansSemiBold16Bluegray900"
                      >
                        Calendar
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtNotoSansBold14"
                      >
                        Tuesday, 2022
                      </Text>
                    </div>
                    <div className="flex flex-col font-helvetica h-full items-start justify-start rotate-[-90deg] w-full">
                      <List
                        className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 h-[37px] justify-start max-w-[1106px] rotate-[90deg] w-full"
                        orientation="horizontal"
                      >
                        <div className="border-b border-blue_gray-50 border-r border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2 w-full">
                          <Text
                            className="text-blue_gray-200 text-sm w-auto"
                            size="txtHelveticaBold14Bluegray200"
                          >
                            Sun
                          </Text>
                        </div>
                        <div className="border-b border-blue_gray-50 border-r border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2 w-full">
                          <Text
                            className="text-blue_gray-200 text-sm w-auto"
                            size="txtHelveticaBold14Bluegray200"
                          >
                            Mon
                          </Text>
                        </div>
                        <div className="border-b border-blue_gray-50 border-r border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2 w-full">
                          <Text
                            className="text-blue_gray-200 text-sm w-auto"
                            size="txtHelveticaBold14Bluegray200"
                          >
                            Tue
                          </Text>
                        </div>
                        <div className="border-b border-blue_gray-50 border-r border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2 w-full">
                          <Text
                            className="text-blue_gray-200 text-sm w-auto"
                            size="txtHelveticaBold14Bluegray200"
                          >
                            Wed
                          </Text>
                        </div>
                        <div className="border-b border-blue_gray-50 border-r border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2 w-full">
                          <Text
                            className="text-blue_gray-200 text-sm w-auto"
                            size="txtHelveticaBold14Bluegray200"
                          >
                            Thu
                          </Text>
                        </div>
                        <div className="border-b border-blue_gray-50 border-r border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2 w-full">
                          <Text
                            className="text-blue_gray-200 text-sm"
                            size="txtHelveticaBold14Bluegray200"
                          >
                            Fri
                          </Text>
                        </div>
                        <div className="border-b border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-2 w-full">
                          <Text
                            className="text-blue_gray-200 text-sm w-auto"
                            size="txtHelveticaBold14Bluegray200"
                          >
                            Sat
                          </Text>
                        </div>
                      </List>
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-end justify-start w-full">
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          meetingdetails="All day conference"
                        />
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          daynumber="30"
                        />
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
                          orientation="horizontal"
                        >
                          {generalWeekdayPropList.map((props, index) => (
                            <React.Fragment key={`GeneralWeekday${index}`}>
                              <GeneralWeekday
                                className="md:h-[84px] h-[85px] relative rotate-[90deg] w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ))}
                        </List>
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid grid-cols-2 w-[29%] md:w-full"
                          orientation="horizontal"
                        >
                          <GeneralWeekday
                            className="md:h-[84px] h-[85px] relative rotate-[90deg] w-full"
                            daynumber="4"
                          />
                          <GeneralWeekday
                            className="md:h-[84px] h-[85px] relative rotate-[90deg] w-full"
                            daynumber="5"
                          />
                        </List>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-end justify-start w-full">
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          daynumber="6"
                        />
                        <div className="relative w-[29%] md:w-full">
                          <div className="flex flex-col items-center justify-start m-auto w-full">
                            <div className="flex flex-row gap-px items-center justify-evenly w-full">
                              <GeneralWeekday
                                className="md:h-[84px] h-[85px] relative rotate-[90deg] w-1/2"
                                daynumber="7"
                              />
                              <GeneralWeekday
                                className="md:h-[84px] h-[85px] relative rotate-[90deg] w-1/2"
                                daynumber="8"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-[12%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[97%] sm:w-full">
                            <Input
                              name="meetingdetails_One"
                              placeholder="Digital event"
                              className="font-bold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[10px] text-left w-full"
                              wrapClassName="w-full"
                              shape="round"
                              size="2xl"
                              variant="gradient"
                              color="yellow_600_red_500_01"
                            ></Input>
                          </div>
                        </div>
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          daynumber="9"
                        />
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          daynumber="10"
                          meetingdetails="Marketing event"
                        />
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          daynumber="11"
                        />
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          daynumber="12"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-end justify-start w-full">
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 w-[86%] md:w-full"
                          orientation="horizontal"
                        >
                          {generalWeekdayPropList1.map((props, index) => (
                            <React.Fragment key={`GeneralWeekday${index}`}>
                              <GeneralWeekday
                                className="md:h-[84px] h-[85px] relative rotate-[90deg] w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ))}
                        </List>
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          daynumber="19"
                          meetingdetails="Dinner with Family"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-end justify-start w-full">
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
                          orientation="horizontal"
                        >
                          {generalWeekdayPropList2.map((props, index) => (
                            <React.Fragment key={`GeneralWeekday${index}`}>
                              <GeneralWeekday
                                className="md:h-[84px] h-[85px] relative rotate-[90deg] w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ))}
                        </List>
                        <GeneralWeekday
                          className="md:h-[84px] h-[85px] relative rotate-[90deg] w-[15%] md:w-full"
                          daynumber="23"
                          meetingdetails="Black Friday"
                        />
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
                          orientation="horizontal"
                        >
                          {generalWeekdayPropList3.map((props, index) => (
                            <React.Fragment key={`GeneralWeekday${index}`}>
                              <GeneralWeekday
                                className="md:h-[84px] h-[85px] relative rotate-[90deg] w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ))}
                        </List>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-end justify-start w-full">
                        <Button
                          className="cursor-pointer font-bold min-w-[158px] rotate-[90deg] text-center text-sm"
                          shape="square"
                          color="blue_gray_50"
                          size="2xl"
                          variant="outline"
                        >
                          27
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[158px] rotate-[90deg] text-center text-sm"
                          shape="square"
                          color="blue_gray_50"
                          size="2xl"
                          variant="outline"
                        >
                          28
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[158px] rotate-[90deg] text-center text-sm"
                          shape="square"
                          color="blue_gray_50"
                          size="2xl"
                          variant="outline"
                        >
                          29
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[158px] rotate-[90deg] text-center text-sm"
                          shape="square"
                          color="blue_gray_50"
                          size="2xl"
                          variant="outline"
                        >
                          30
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[158px] rotate-[90deg] text-center text-sm"
                          shape="square"
                          color="blue_gray_50"
                          size="2xl"
                          variant="outline"
                        >
                          31
                        </Button>
                        <Button
                          className="!text-blue_gray-400 cursor-pointer font-bold min-w-[158px] rotate-[90deg] text-center text-sm"
                          shape="square"
                          color="blue_gray_50"
                          size="2xl"
                          variant="outline"
                        >
                          1
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[158px] rotate-[90deg] text-center text-sm"
                          shape="square"
                          color="gray_300"
                          size="2xl"
                          variant="outline"
                        >
                          2
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col font-helvetica gap-[30px] items-end justify-start w-[24%] md:w-full">
                    <div className="flex flex-row gap-5 items-center justify-start w-[187px]">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-400 text-xs w-auto"
                          size="txtHelveticaBold12Bluegray400"
                        >
                          Team members:
                        </Text>
                        <div className="flex p-0.5 relative w-full">
                          <div className="flex my-auto w-[74%]">
                            <div className="flex my-auto w-[70%]">
                              <div className="flex flex-col h-8 items-center justify-start my-auto w-8">
                                <div className="h-8 relative w-8">
                                  <Img
                                    className="h-8 m-auto object-cover rounded-[50%] w-8"
                                    src="images/img_creditstounsplashcom_32x32.png"
                                    alt="creditstounspla"
                                  />
                                  <Img
                                    className="absolute h-8 inset-[0] justify-center m-auto object-cover rounded-[50%] w-8"
                                    src="images/img_ellipse5_4.png"
                                    alt="ellipseFive"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-8 items-center justify-start ml-[-8px] my-auto w-8 z-[1]">
                                <div className="h-8 relative w-8">
                                  <Img
                                    className="h-8 m-auto object-cover rounded-[50%] w-8"
                                    src="images/img_creditstounsplashcom_32x32.png"
                                    alt="creditstounspla_One"
                                  />
                                  <Img
                                    className="absolute h-8 inset-[0] justify-center m-auto object-cover rounded-[50%] w-8"
                                    src="images/img_ellipse5_7.png"
                                    alt="ellipseFive_One"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col h-8 items-start justify-start ml-[-8px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-8 z-[1]">
                              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                                <Img
                                  className="h-8 md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                                  src="images/img_creditstopexelscom_3.png"
                                  alt="creditstopexels"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col h-8 items-center justify-start ml-[-8px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-8 z-[1]">
                            <Img
                              className="h-8 md:h-auto object-cover rounded-[50%] w-8"
                              src="images/img_elipse5_32x32.png"
                              alt="elipseFive"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        className="flex-1 md:flex-none h-12 sm:h-auto object-cover w-full"
                        src="images/img_separator0_48x1.png"
                        alt="separatorZero"
                      />
                      <Button
                        className="flex h-[30px] items-center justify-center shadow-bs w-[30px]"
                        shape="round"
                        color="blue_gray_900"
                        size="sm"
                        variant="outline"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_iconssolid_blue_gray_900_30x30.svg"
                          alt="iconssolid"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-7 items-center justify-start w-full">
                      <div className="p-4 relative w-[364px]">
                        <Img
                          className="absolute h-[376px] inset-[0] justify-center m-auto w-[363px]"
                          src="images/img_colorwhite.svg"
                          alt="bg"
                        />
                        <div className="flex flex-col gap-[18px] items-start justify-start my-auto relative w-[78%] md:w-full">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtHelveticaBold16Bluegray800"
                          >
                            Next events
                          </Text>
                          <List
                            className="flex flex-col gap-4 items-center w-full"
                            orientation="vertical"
                          >
                            {listItemsRoweventsPropList.map((props, index) => (
                              <React.Fragment
                                key={`ListItemsRowevents${index}`}
                              >
                                <ListItemsRowevents
                                  className="flex flex-1 flex-col items-start justify-start w-full"
                                  {...props}
                                />
                              </React.Fragment>
                            ))}
                          </List>
                        </div>
                      </div>
                      <div className="bg-gradient14  h-[179px] relative rounded-[12px] shadow-bs4 w-full">
                        <div className="flex flex-row h-full items-start justify-between mt-[17px] mx-auto w-[92%]">
                          <div className="flex flex-col h-[42px] md:h-auto items-start justify-start w-[129px]">
                            <Text
                              className="text-base text-white-A700 tracking-[-0.80px] w-auto"
                              size="txtHelveticaBold16WhiteA700"
                            >
                              Productivity
                            </Text>
                            <Input
                              name="subtitle"
                              placeholder="4% more in 2021"
                              className="font-notosans p-0 placeholder:text-white-A700 text-left text-sm text-white-A700 w-full"
                              wrapClassName="flex pr-0.5 w-[97%]"
                              prefix={
                                <div className="mt-0.5 mr-1 w-[11px] bg-light_green-A700">
                                  <Img
                                    className="my-auto"
                                    src="images/img_arrowup_light_green_a700_12x11.svg"
                                    alt="arrow_up"
                                  />
                                </div>
                              }
                              size="xs"
                            ></Input>
                          </div>
                          <Img
                            className="h-[13px] mt-[3px] w-3"
                            src="images/img_iconssolid_white_a700_13x12.svg"
                            alt="iconssolid_One"
                          />
                        </div>
                        <Img
                          className="absolute h-[179px] inset-[0] justify-center m-auto object-cover"
                          src="images/img_maskgroup.png"
                          alt="maskgroup"
                        />
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

export default ApplicationsCalendarPage;
