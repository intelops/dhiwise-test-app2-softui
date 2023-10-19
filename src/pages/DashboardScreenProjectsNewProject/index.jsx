import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const inputwithaddonsOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const inputwithaddonsTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardScreenProjectsNewProjectPage = () => {
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
  const [inputwithaddonsthreevalue, setInputwithaddonsthreevalue] =
    React.useState("");

  return (
    <>
      <div className="bg-gray-50_01 flex sm:flex-col md:flex-col flex-row font-helvetica gap-[59px] items-start justify-end mx-auto p-4 w-full">
        <Sidebar2 className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-[30px] overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 font-notosans sm:h-[1015px] md:h-[1087px] h-[1182px] mb-[7px] md:mt-0 mt-[26px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-[58px] h-max inset-[0] items-center justify-center m-auto pt-[39px] w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[1025px] items-end justify-start max-w-[926px] p-6 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
            >
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-blue_gray-700 tracking-[-0.80px]"
                      size="txtNotoSansSemiBold16Bluegray700"
                    >
                      New Project
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtNotoSansRegular14Bluegray700"
                    >
                      Create New Project
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start px-3.5 py-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtNotoSansBold12"
                    >
                      Project Name
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid h-10 rounded-lg w-full"></div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start px-3.5 w-full">
                  <div className="flex flex-col items-start justify-start py-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtNotoSansBold12"
                    >
                      Private Project{" "}
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtNotoSansRegular14Bluegray500"
                    >
                      If you are available for hire outside of the current
                      situation, you can encourage others to hire you.{" "}
                    </Text>
                  </div>
                  <Switch
                    onColor="#e9ecef"
                    offColor="#e9ecef"
                    onHandleColor="#ffffff"
                    offHandleColor="#ffffff"
                    value={false}
                    className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start px-3.5 w-auto sm:w-full">
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtNotoSansBold12"
                    >
                      <span className="text-blue_gray-900 font-notosans text-left font-bold">
                        Description{" "}
                      </span>
                      <span className="text-blue_gray-500 font-notosans text-left font-normal">
                        (optional)
                      </span>
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-xs w-auto"
                      size="txtNotoSansRegular12"
                    >
                      This is how others will learn about the project, so make
                      it good!{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col font-opensans items-center justify-start w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-[127px] md:h-auto items-start justify-start max-w-[878px] pl-3.5 pt-[54px] rounded-lg w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-[451px] sm:w-full">
                        <Text
                          className="text-blue_gray-900 text-xs tracking-[-0.40px] w-auto"
                          size="txtOpenSansMedium12"
                        >
                          Normal
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_minimize_blue_gray_900.svg"
                          alt="minimize"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_richtexteditor.svg"
                          alt="richtexteditor"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright_blue_gray_900_18x18.svg"
                          alt="arrowright"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_menu_blue_gray_900.svg"
                          alt="menu"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_menu_blue_gray_900_18x18.svg"
                          alt="menu_One"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_link_blue_gray_900.svg"
                          alt="link"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_richtexteditor_blue_gray_900.svg"
                          alt="richtexteditor_One"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_maximize_blue_gray_900.svg"
                          alt="maximize"
                        />
                      </div>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                      <div className="flex flex-col font-notosans items-start justify-center w-full">
                        <Text
                          className="leading-[150.00%] text-blue_gray-500 text-sm"
                          size="txtNotoSansRegular14Bluegray500"
                        >
                          <span className="text-blue_gray-500 font-notosans text-left font-normal">
                            <>
                              Hello World!
                              <br />
                              Some initial{" "}
                            </>
                          </span>
                          <span className="text-blue_gray-500 font-opensans text-left font-bold">
                            bold{" "}
                          </span>
                          <span className="text-blue_gray-500 font-notosans text-left font-normal">
                            text.
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start px-3.5 py-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtNotoSansBold12"
                      >
                        Start date
                      </Text>
                    </div>
                    <SelectBox
                      className="!text-blue_gray-500 border border-blue_gray-100 border-solid h-10 text-left text-sm w-full"
                      placeholderClassName="!text-blue_gray-500"
                      indicator={
                        <Img
                          className="h-[15px] w-[17px]"
                          src="images/img_arrowdown_blue_gray_500.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="inputwithaddons_One"
                      options={inputwithaddonsOneOptionsList}
                      isSearchable={false}
                      placeholder="Please select start date"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start px-3.5 py-2 w-full">
                      <Text
                        className="text-blue_gray-900 text-xs w-auto"
                        size="txtNotoSansBold12"
                      >
                        End date
                      </Text>
                    </div>
                    <SelectBox
                      className="!text-blue_gray-500 border border-blue_gray-100 border-solid h-10 text-left text-sm w-full"
                      placeholderClassName="!text-blue_gray-500"
                      indicator={
                        <Img
                          className="h-[15px] w-[17px]"
                          src="images/img_arrowdown_blue_gray_500.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="inputwithaddons_Two"
                      options={inputwithaddonsTwoOptionsList}
                      isSearchable={false}
                      placeholder="Please select end date"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start px-3.5 py-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtNotoSansBold12"
                    >
                      Project Tags
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[70px] md:h-auto items-center justify-start px-3.5 rounded-lg w-full">
                    <div className="flex flex-1 flex-row gap-1 items-center justify-start w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[80px] rounded-[11px]"
                        rightIcon={
                          <Img
                            className="h-2 ml-[9px] my-1"
                            src="images/img_close_gray_300.svg"
                            alt="close"
                          />
                        }
                        color="blue_gray_700_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="text-left text-xs">Choice 1</div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[73px] rounded-[11px]"
                        rightIcon={
                          <Img
                            className="h-2 ml-2 my-1"
                            src="images/img_close_gray_300.svg"
                            alt="close"
                          />
                        }
                        color="blue_gray_700_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="text-left text-xs">Label 2</div>
                      </Button>
                    </div>
                    <Img
                      className="h-[15px] max-h-[15px] sm:w-[] md:w-[]"
                      src="images/img_arrowdown_blue_gray_500.svg"
                      alt="arrowdown_Six"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start px-3.5 py-2 w-full">
                    <Text
                      className="text-blue_gray-900 text-xs w-auto"
                      size="txtNotoSansBold12"
                    >
                      Starting Files
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-[181px] md:h-auto items-start justify-start px-3.5 py-2 rounded-lg w-full">
                    <div className="flex flex-col h-full items-center justify-center w-full">
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-full"
                        size="txtNotoSansRegular14Bluegray500"
                      >
                        Drop some files here to upload
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-helvetica gap-6 items-start justify-end md:ml-[0] ml-[589px] w-auto">
                  <Button
                    className="cursor-pointer font-bold h-10 min-w-[99px] text-center text-xs uppercase"
                    shape="round"
                    size="lg"
                    variant="gradient"
                    color="blue_gray_100_blue_gray_50_01"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="cursor-pointer font-bold h-10 leading-[normal] min-w-[166px] text-[13px] text-center uppercase"
                    shape="round"
                    size="lg"
                    variant="gradient"
                    color="blue_gray_700_01_gray_900_02"
                  >
                    Create project
                  </Button>
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
          <div className="absolute flex md:flex-col flex-row font-helvetica md:gap-5 inset-x-[0] items-end justify-start mx-auto top-[0] w-[98%]">
            <div className="flex flex-col items-start justify-start w-[11%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[169px]">
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
                    / Projects / New Project
                  </span>
                </Text>
              </div>
              <Text
                className="mt-0.5 text-gray-800 text-sm"
                size="txtHelveticaBold14Bluegray90003"
              >
                New Project
              </Text>
            </div>
            <Img
              className="h-6 mb-[7px] md:ml-[0] ml-[27px] md:mt-0 mt-[15px] w-6"
              src="images/img_ioniconmmenudefault.svg"
              alt="ioniconmmenudef"
            />
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[993px] md:mt-0 mt-1.5 w-[22%] md:w-full">
              <Input
                name="inputwithaddons_Three"
                placeholder="Type here..."
                value={inputwithaddonsthreevalue}
                onChange={(e) => setInputwithaddonsthreevalue(e)}
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
                    onClick={() => setInputwithaddonsthreevalue("")}
                    style={{
                      visibility:
                        inputwithaddonsthreevalue?.length <= 0
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

export default DashboardScreenProjectsNewProjectPage;
