import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import Sidebar4 from "components/Sidebar4";
import TablesPagination from "components/TablesPagination";
import TablesProperty1label1 from "components/TablesProperty1label1";
import TablesProperty1row3 from "components/TablesProperty1row3";

import { CloseSVG } from "../../assets/images";

const dropdowntableOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EcommerceProductsListPage = () => {
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
  const tablesProperty1Row3PropList = [
    {
      editFive: "Furniture",
      hoodie: "BKLGO Full Zip Hoodie",
      inStock: "Out of stock",
    },
    {
      hoodie: "MacBook Pro",
      priceTwo: "$1.869",
      inStock: "Out of stock",
      editFive: "Deco",
      imgplaceholderFour: "images/img_imgplaceholder_14.png",
      editSix: "877712",
    },
    {
      imgplaceholderFour: "images/img_imgplaceholder_15.png",
      editFive: "Furniture",
      editSix: "0134729",
      checkboxOne: "images/img_checkbox.svg",
      priceTwo: "$99",
      hoodie: "Metro Bar Stool",
      editSeven: "978",
    },
    {
      imgplaceholderFour: "images/img_imgplaceholder_16.png",
      editFive: "Furniture",
      editSix: "113213",
      checkboxOne: "images/img_checkbox.svg",
      priceTwo: "$2.999",
      hoodie: "Alchimia Chair",
      inStock: "Out of stock",
    },
    {
      imgplaceholderFour: "images/img_imgplaceholder_17.png",
      editFive: "Furniture",
      editSix: "634729",
      checkboxOne: "images/img_checkbox.svg",
      priceTwo: "$869",
      hoodie: "Fendi Gradient Coat",
      editSeven: "725",
    },
    {
      imgplaceholderFour: "images/img_imgplaceholder_18.png",
      editFive: "Furniture",
      editSix: "634729",
      checkboxOne: "images/img_checkbox.svg",
      priceTwo: "$1.869",
      hoodie: "Off White Cotton Bomber",
      editSeven: "725",
    },
    {
      hoodie: "Y-3 Yohji Yamamoto",
      priceTwo: "$869",
      editSeven: "725",
      editFive: "Furniture",
      imgplaceholderFour: "images/img_imgplaceholder_19.png",
      editSix: "634729",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between mb-[76px] mt-[9px] mx-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[31px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[8%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[121px]">
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
                      / Products List
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Products List
                </Text>
              </div>
              <Img
                className="h-6 mb-1.5 md:ml-[0] ml-[76px] md:mt-0 mt-[15px] w-6"
                src="images/img_ioniconmmenudefault.svg"
                alt="ioniconmmenudef"
              />
              <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[1000px] md:mt-0 mt-1.5 w-[22%] md:w-full">
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
            <div className="flex flex-col font-notosans gap-[39px] items-center justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[889px] items-center justify-start max-w-[1572px] pb-2 pt-6 w-full"
                style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start sm:px-5 px-6 w-full">
                      <div className="flex flex-1 flex-col gap-[9px] items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900_01 text-xl tracking-[-0.80px] w-auto"
                          size="txtNotoSansSemiBold20Bluegray90001"
                        >
                          All products
                        </Text>
                        <Text
                          className="text-blue_gray-900_01 text-sm w-full"
                          size="txtNotoSansRegular14Bluegray90001"
                        >
                          <>
                            A lightweight, extendable, dependency-free
                            javascript HTML table plugin.
                          </>
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 sm:flex-col flex-row font-helvetica gap-4 items-start justify-start w-auto sm:w-full">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[168px]"
                          leftIcon={
                            <Img
                              className="h-3.5 mr-[7px] my-px"
                              src="images/img_icons_solid_gray_50_14x14.svg"
                              alt="Icons Solid"
                            />
                          }
                          shape="round"
                          size="lg"
                          variant="gradient"
                          color="deep_purple_500_pink_A400"
                        >
                          <div className="font-bold leading-[normal] text-[13px] text-left uppercase">
                            New product
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer font-bold h-10 min-w-[95px] text-center text-xs uppercase"
                          shape="round"
                          color="purple_500"
                          size="lg"
                          variant="outline"
                        >
                          Import
                        </Button>
                        <Button
                          className="cursor-pointer font-bold h-10 min-w-[98px] text-center text-xs uppercase"
                          shape="round"
                          color="purple_500"
                          size="lg"
                          variant="outline"
                        >
                          Export
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row font-opensans md:gap-10 items-center justify-between pb-2 pt-10 sm:px-5 px-6 w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <SelectBox
                          className="!text-blue_gray-500 border border-gray-300 border-solid font-roboto rounded text-left text-sm w-[42%] sm:w-full"
                          placeholderClassName="!text-blue_gray-500"
                          indicator={
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowdown_blue_gray_900_01.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="dropdowntable"
                          options={dropdowntableOptionsList}
                          isSearchable={false}
                          placeholder="10"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        />
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
                        className="p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                        wrapClassName=""
                        shape="round"
                        color="blue_gray_50"
                        size="2xl"
                        variant="outline"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <TablesProperty1label1 className="flex flex-col gap-6 items-start justify-start sm:px-5 px-6 py-4 w-full" />
                    <List
                      className="flex flex-col font-helvetica gap-1 items-center w-full"
                      orientation="vertical"
                    >
                      {tablesProperty1Row3PropList.map((props, index) => (
                        <React.Fragment key={`TablesProperty1row3${index}`}>
                          <TablesProperty1row3
                            className="flex flex-1 flex-col gap-6 items-center justify-start sm:px-5 px-6 py-4 w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                    <TablesPagination
                      className="flex flex-row font-helvetica md:gap-10 items-center justify-between sm:px-5 px-6 py-4 w-full"
                      paginationinfo="Showing 1 to 7 of 7 entries"
                      three="3"
                    />
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
    </>
  );
};

export default EcommerceProductsListPage;
