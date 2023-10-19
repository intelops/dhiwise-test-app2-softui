import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const DashboardScreenNewUserPage = () => {
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
            className="bg-cover bg-no-repeat flex flex-col h-[1073px] items-center justify-start p-[19px] w-full"
            style={{ backgroundImage: "url('images/img_maindashboard.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-2.5 mt-[3px] mx-auto md:px-5 w-full">
              <Sidebar2 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[5px] w-[7%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[104px]">
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
                          / New User
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtHelveticaBold14Bluegray90003"
                    >
                      New User
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row items-center justify-between mb-[11px] md:ml-[0] ml-[1119px] w-[22%] md:w-full">
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
                <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start mt-[153px] w-3/5 md:w-full">
                  <div className="h-[46px] relative w-[87%] md:w-full">
                    <Img
                      className="absolute h-[3px] inset-x-[0] mx-auto top-[20%]"
                      src="images/img_background_indigo_50.svg"
                      alt="background"
                    />
                    <div className="absolute flex flex-col gap-[9px] h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[8%]">
                      <div className="bg-gray-800 h-5 rounded-[50%] w-5"></div>
                      <Text
                        className="text-center text-gray-800 text-sm"
                        size="txtHelveticaBold14Bluegray90003"
                      >
                        User Info
                      </Text>
                    </div>
                    <div className="absolute flex flex-row h-full inset-[0] items-center justify-between m-auto w-[38%]">
                      <div className="flex flex-col gap-[9px] items-center justify-start w-[19%]">
                        <div className="bg-white-A700 border-[3px] border-gray-300 border-solid h-5 rounded-[50%] w-5"></div>
                        <Text
                          className="text-center text-gray-400 text-sm"
                          size="txtHelveticaBold14Bluegray10001"
                        >
                          Address
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[9px] items-center justify-start w-[17%]">
                        <div className="bg-white-A700 border-[3px] border-gray-300 border-solid h-5 rounded-[50%] w-5"></div>
                        <Text
                          className="text-center text-gray-400 text-sm"
                          size="txtHelveticaBold14Bluegray10001"
                        >
                          Socials
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[9px] h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[6%]">
                      <div className="bg-white-A700 border-[3px] border-gray-300 border-solid h-5 rounded-[50%] w-5"></div>
                      <Text
                        className="text-center text-gray-400 text-sm"
                        size="txtHelveticaBold14Bluegray10001"
                      >
                        Profile
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[438px] items-center justify-end p-[21px] sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_firstcard.svg')",
                    }}
                  >
                    <div className="flex flex-col items-start justify-start mt-[9px] w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-gray-800 text-lg"
                          size="txtHelveticaBold18Bluegray90003"
                        >
                          About Me
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtHelvetica14Bluegray20001"
                        >
                          Mandatory Informations
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[42px] w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
                            <div className="flex md:flex-1 flex-col gap-[11px] justify-start w-[49%] md:w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] text-gray-800 text-xs"
                                size="txtHelveticaBold12Bluegray90003"
                              >
                                First Name
                              </Text>
                              <Input
                                name="inputwithaddons_One"
                                placeholder="eg. Michael"
                                className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-xs w-full"
                                wrapClassName="border border-gray-300 border-solid rounded-[15px] w-full"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-[11px] justify-start w-[49%] md:w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] text-gray-800 text-xs"
                                size="txtHelveticaBold12Bluegray90003"
                              >
                                Last Name
                              </Text>
                              <Input
                                name="inputwithaddons_Two"
                                placeholder="eg. Jackson"
                                className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-xs w-full"
                                wrapClassName="border border-gray-300 border-solid rounded-[15px] w-full"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
                            <div className="flex md:flex-1 flex-col gap-2.5 justify-start w-[49%] md:w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] text-gray-800 text-xs"
                                size="txtHelveticaBold12Bluegray90003"
                              >
                                Company
                              </Text>
                              <Input
                                name="inputwithaddons_Three"
                                placeholder="eg. Simmmple"
                                className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-xs w-full"
                                wrapClassName="border border-gray-300 border-solid rounded-[15px] w-full"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-[11px] justify-start w-[49%] md:w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] text-gray-800 text-xs"
                                size="txtHelveticaBold12Bluegray90003"
                              >
                                Email Address
                              </Text>
                              <Input
                                name="inputwithaddons_Four"
                                placeholder="eg. example@address.com"
                                className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-xs w-full"
                                wrapClassName="border border-gray-300 border-solid rounded-[15px] w-full"
                                color="white_A700"
                                size="2xl"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
                            <div className="flex md:flex-1 flex-col gap-[11px] justify-start w-[49%] md:w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] text-gray-800 text-xs"
                                size="txtHelveticaBold12Bluegray90003"
                              >
                                Password
                              </Text>
                              <Input
                                name="password_One"
                                placeholder="******"
                                className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-xs w-full"
                                wrapClassName="border border-gray-300 border-solid rounded-[15px] w-full"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-2.5 justify-start w-[49%] md:w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] text-gray-800 text-xs"
                                size="txtHelveticaBold12Bluegray90003"
                              >
                                Repeat Password
                              </Text>
                              <Input
                                name="password_Two"
                                placeholder="******"
                                className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-left text-xs w-full"
                                wrapClassName="border border-gray-300 border-solid rounded-[15px] w-full"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold h-[35px] md:ml-[0] ml-[789px] mt-6 rounded-lg text-[10px] text-center w-[100px]"
                        shape="round"
                        size="lg"
                        variant="gradient"
                        color="blue_gray_800_01_gray_900_07"
                      >
                        NEXT
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[250px] w-full">
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

export default DashboardScreenNewUserPage;
