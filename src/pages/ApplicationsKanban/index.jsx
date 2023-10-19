import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import ListItemsCardkanban from "components/ListItemsCardkanban";
import Sidebar3 from "components/Sidebar3";

import { CloseSVG } from "../../assets/images";

const ApplicationsKanbanPage = () => {
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
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-helvetica sm:gap-10 md:gap-10 gap-[67px] items-start mx-auto p-4 w-full">
        <Sidebar3 className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:ml-[0] ml-[5px] md:mt-0 mt-8 overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 h-[1605px] sm:h-[1624px] md:h-[3283px] mb-[5px] mr-7 md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-[30px] h-full inset-[0] items-end justify-center m-auto pt-[101px] w-full">
            <div className="flex flex-row gap-5 items-center justify-start w-[187px]">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-400 text-xs w-auto"
                  size="txtHelveticaBold12Bluegray400"
                >
                  Team members
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
                            src="images/img_ellipse5_32x32.png"
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
                            src="images/img_ellipse5_4.png"
                            alt="ellipseFive_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-8 items-start justify-start ml-[-8px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-8 z-[1]">
                      <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                          src="images/img_creditstopexelscom_32x29.png"
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
                size="sm"
                variant="gradient"
                color="light_blue_400_indigo_A700"
              >
                <Img
                  className="h-3.5"
                  src="images/img_iconssolid_white_a700_30x30.svg"
                  alt="iconssolid"
                />
              </Button>
            </div>
            <div className="flex flex-col font-notosans gap-[19px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start max-w-[1554px] w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full">
                  <div className="bg-blue_gray-50 flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-[15px] w-[498px] sm:w-full">
                    <div className="flex flex-row gap-[182px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-800 tracking-[-0.80px]"
                          size="txtNotoSansSemiBold16Bluegray90003"
                        >
                          Backlog
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-center p-2 rounded-md shadow-bs w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_iconssolid_blue_gray_400.svg"
                          alt="iconssolid_One"
                        />
                      </div>
                    </div>
                    <Input
                      name="cardOne"
                      placeholder="Click me to change the title"
                      className="!placeholder:text-blue_gray-500 !text-blue_gray-500 p-0 sm:px-5 text-left text-sm w-full"
                      wrapClassName="pl-[22px] pr-[35px] py-[19px] w-full"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    ></Input>
                    <Input
                      name="cardTwo"
                      placeholder="Drag me to “In progress” section!"
                      className="!placeholder:text-blue_gray-500 !text-blue_gray-500 p-0 sm:px-5 text-left text-sm w-full"
                      wrapClassName="pl-[22px] pr-[35px] py-[19px] w-full"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    ></Input>
                    <ListItemsCardkanban
                      className="font-helvetica p-6 sm:px-5 relative rounded-[15px] w-full"
                      coverimage="images/img_coverpuritychakra.png"
                      attachmenticon="images/img_attach.svg"
                      eleven="3"
                      creditsimage="images/img_creditstounsplashcom_20x20.png"
                      ellipseimage="images/img_ellipse5_20x20.png"
                      pexelsimage="images/img_creditstopexelscom_1.png"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full">
                  <div className="bg-blue_gray-50 flex flex-col gap-[22px] items-start justify-start p-6 sm:px-5 rounded-[15px] w-[498px] sm:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-800 tracking-[-0.80px]"
                          size="txtNotoSansSemiBold16Bluegray90003"
                        >
                          In progress
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-center p-2 rounded-md shadow-bs w-14">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_iconssolid_blue_gray_400.svg"
                          alt="iconssolid_Two"
                        />
                      </div>
                    </div>
                    <List
                      className="flex flex-col font-helvetica gap-[22px] items-center w-full"
                      orientation="vertical"
                    >
                      <ListItemsCardkanban
                        className="p-6 sm:px-5 relative rounded-[15px] w-full"
                        pending="ERRORS"
                        descriptiontext="Fix Firefox Errors!"
                        attachmenticon="images/img_attach.svg"
                        eleven="11"
                        pexelsimage="images/img_creditstopexelscom_2.png"
                      />
                      <ListItemsCardkanban
                        className="p-6 sm:px-5 relative rounded-[15px] w-full"
                        pending="Updates"
                        descriptiontext="Argon Dashboard PRO - Angular 11"
                        attachmenticon="images/img_attach.svg"
                        eleven="3"
                        pexelsimage="images/img_creditstopexelscom_2.png"
                      />
                    </List>
                    <ListItemsCardkanban
                      className="font-helvetica p-6 sm:px-5 relative rounded-[15px] w-full"
                      coverimage="images/img_coverpuritychakra_284x402.png"
                      pending="Updates"
                      descriptiontext="Vue 3 Updates"
                      attachmenticon="images/img_attach.svg"
                      eleven="9"
                      creditsimage="images/img_creditstounsplashcom_20x20.png"
                      ellipseimage="images/img_ellipse5_5.png"
                      pexelsimage="images/img_creditstopexelscom_2.png"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[31px] items-center justify-start w-[32%] md:w-full">
                  <div className="bg-blue_gray-50 flex flex-col gap-[22px] items-start justify-start p-6 sm:px-5 rounded-[15px] w-[497px] sm:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-800 tracking-[-0.80px]"
                          size="txtNotoSansSemiBold16Bluegray90003"
                        >
                          In review
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-center p-2 rounded-md shadow-bs w-14">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_iconssolid_blue_gray_400.svg"
                          alt="iconssolid_Three"
                        />
                      </div>
                    </div>
                    <List
                      className="flex flex-col font-helvetica gap-[22px] items-center w-full"
                      orientation="vertical"
                    >
                      <ListItemsCardkanban
                        className="p-6 sm:px-5 relative rounded-[15px] w-full"
                        pending="In testing"
                        descriptiontext="Responsive changes"
                        attachmenticon="images/img_attach.svg"
                        eleven="11"
                        pexelsimage="images/img_creditstopexelscom_2.png"
                      />
                      <ListItemsCardkanban
                        className="p-6 sm:px-5 relative rounded-[15px] w-full"
                        pending="In review"
                        descriptiontext="Change images dimension"
                        pexelsimage="images/img_creditstopexelscom_2.png"
                      />
                    </List>
                    <ListItemsCardkanban
                      className="font-helvetica p-6 sm:px-5 relative rounded-[15px] w-full"
                      pending="Updates"
                      descriptiontext="Update Links"
                      attachmenticon="images/img_attach.svg"
                      eleven="6"
                    />
                  </div>
                  <div className="bg-blue_gray-50 flex flex-col gap-[22px] items-start justify-start p-6 sm:px-5 rounded-[15px] w-[497px] sm:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-800 tracking-[-0.80px]"
                          size="txtNotoSansSemiBold16Bluegray90003"
                        >
                          Done
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-col h-[34px] md:h-auto items-center justify-center px-2 rounded-lg shadow-bs1 w-[70px]">
                        <div className="flex flex-col items-center justify-center w-6">
                          <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                            <div className="flex flex-col items-center justify-center w-[18px]">
                              <Img
                                className="h-[17px] w-[18px]"
                                src="images/img_icon_blue_gray_900_01.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <List
                      className="flex flex-col font-helvetica gap-[22px] items-center w-full"
                      orientation="vertical"
                    >
                      <ListItemsCardkanban
                        className="p-6 sm:px-5 relative rounded-[15px] w-full"
                        coverimage="images/img_coverpuritychakra_1.png"
                        pending="Done"
                        descriptiontext="Change images dimension"
                        attachmenticon="images/img_attach.svg"
                        eleven="3"
                        pexelsimage="images/img_creditstopexelscom_2.png"
                      />
                      <ListItemsCardkanban
                        className="p-6 sm:px-5 relative rounded-[15px] w-full"
                        pending="Done"
                        descriptiontext="Change images dimension"
                        pexelsimage="images/img_creditstopexelscom_2.png"
                      />
                    </List>
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
          <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto top-[2%] w-full">
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
        </div>
      </div>
    </>
  );
};

export default ApplicationsKanbanPage;
