import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import ListItemsStackbg from "components/ListItemsStackbg";
import Sidebar3 from "components/Sidebar3";

import { CloseSVG } from "../../assets/images";

const SweetAlertsPage = () => {
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
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-helvetica gap-[59px] items-start justify-end mx-auto p-4 w-full">
        <Sidebar3 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 h-[1013px] sm:h-[1600px] md:h-[1634px] mb-[7px] md:mt-0 mt-[26px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[78px] w-full">
            <div className="flex flex-col gap-[11px] items-center justify-start">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                Sweet Alerts
              </Text>
              <Text
                className="leading-[150.00%] text-base text-blue_gray-400 text-center"
                size="txtHelvetica16Bluegray400"
              >
                <>
                  A beautiful plugin, that replace the classic alert,
                  Handcrafted by our friend Tristan Edwards. <br />
                  Please check out the full documentation.
                </>
              </Text>
            </div>
            <List
              className="flex flex-col gap-[26px] items-start max-w-[928px] mt-[30px] w-full"
              orientation="vertical"
            >
              <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[928px] w-full">
                <ListItemsStackbg className="p-6 sm:px-5 relative rounded-md w-full" />
                <ListItemsStackbg
                  className="p-6 sm:px-5 relative rounded-md w-full"
                  subtitle="A success message"
                />
                <ListItemsStackbg
                  className="p-6 sm:px-5 relative rounded-md w-full"
                  subtitle="Custom HTML description"
                />
              </div>
              <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start max-w-[928px] w-full">
                <ListItemsStackbg
                  className="p-6 sm:px-5 relative rounded-md w-full"
                  subtitle="Gitgub avatar request"
                />
                <ListItemsStackbg
                  className="p-6 sm:px-5 relative rounded-md w-full"
                  subtitle="A title with a text under"
                />
                <ListItemsStackbg
                  className="p-6 sm:px-5 relative rounded-md w-full"
                  subtitle="A message with auto close"
                />
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-start max-w-[928px] w-full">
                <ListItemsStackbg
                  className="p-6 sm:px-5 relative rounded-md w-full"
                  subtitle={
                    <>
                      A warning message, with a function attached to the
                      &quot;Confirm&quot; Button...
                    </>
                  }
                />
                <ListItemsStackbg
                  className="p-6 sm:px-5 relative rounded-md w-full"
                  subtitle={
                    <>
                      ...and by passing a parameter, you can execute something
                      else for &quot;Cancel&quot;
                    </>
                  }
                />
                <ListItemsStackbg
                  className="p-6 sm:px-5 relative rounded-md w-full"
                  subtitle="Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages"
                />
              </div>
            </List>
            <GeneralNavigationRow2021madewith
              className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[280px] w-full"
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
          <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto top-[0] w-[98%]">
            <div className="flex flex-col items-start justify-start w-[8%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[118px]">
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
                    / Sweet Alerts
                  </span>
                </Text>
              </div>
              <Text
                className="text-gray-800 text-sm"
                size="txtHelveticaBold14Bluegray90003"
              >
                Sweet Alerts
              </Text>
            </div>
            <Img
              className="h-6 mb-1.5 md:ml-[0] ml-[78px] md:mt-0 mt-4 w-6"
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
        </div>
      </div>
    </>
  );
};

export default SweetAlertsPage;
