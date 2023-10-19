import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import SectionsNamestep1about from "components/SectionsNamestep1about";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const ApplicationsWizzardOnePage = () => {
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
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-8 mt-[9px] mx-auto md:px-5 w-full">
          <Sidebar11 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[127px] items-center justify-start w-full">
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
            <div className="flex flex-col items-center justify-end w-full">
              <div className="flex flex-col gap-3 justify-start mt-1">
                <Text
                  className="md:ml-[0] ml-[67px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center tracking-[-0.80px]"
                  size="txtHelveticaBold30Bluegray900"
                >
                  Build your profile
                </Text>
                <Text
                  className="text-base text-blue_gray-400 text-center"
                  size="txtHelvetica16Bluegray400"
                >
                  This information will let us know more about you.
                </Text>
              </div>
              <SectionsNamestep1about className="flex flex-col font-notosans gap-4 items-center justify-start mt-12 w-[55%] md:w-full" />
              <GeneralNavigationRow2021madewith
                className="flex sm:flex-col flex-row font-helvetica md:gap-10 items-start justify-between mt-[135px] w-full"
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

export default ApplicationsWizzardOnePage;
