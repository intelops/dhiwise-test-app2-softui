import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import Sidebar4 from "components/Sidebar4";
import TablesPagination from "components/TablesPagination";
import TablesTypeheader from "components/TablesTypeheader";
import TablesTyperow1 from "components/TablesTyperow1";

import { CloseSVG } from "../../assets/images";

const buttonsecondaryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EcommerceOrderListPage = () => {
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
  const tablesTyperow1PropList = [
    {
      usertext1: "Paid",
      usericonbutton: "images/img_checkmark_light_green_a700.svg",
    },
    {
      usertext1: "Paid",
      usertext4: "$42.00",
      usertext3: "Valvet T-shirt",
      usericonbutton: "images/img_checkmark_light_green_a700.svg",
    },
    { usertext4: "$25.00", usertext3: "Leather Wallet +1 more" },
    {
      usertext1: "Paid",
      usertext4: "$19.40",
      usertext3: "Bracelet Onu-Lino ",
      usericonbutton: "images/img_checkmark_light_green_a700.svg",
    },
    { usertext4: "$44.90", usertext3: "Phone Case Pink x 2 " },
    {
      usertext1: "Paid",
      usertext4: "$112.50",
      usertext3: "Backpack Niver ",
      usericonbutton: "images/img_checkmark_light_green_a700.svg",
    },
    {
      usertext1: "Paid",
      usertext4: "$200.00",
      usertext3: "Adidas Vio ",
      usericonbutton: "images/img_checkmark_light_green_a700.svg",
    },
    {
      usertext1: "Paid",
      usertext4: "$350.00",
      usertext3: "Airpods 2 Gen ",
      usericonbutton: "images/img_checkmark_light_green_a700.svg",
    },
    {
      usertext1: "Paid",
      usertext4: "$15.00",
      usertext3: "Bracelet Warre",
      usericonbutton: "images/img_checkmark_light_green_a700.svg",
    },
    { usertext4: "$23.00", usertext3: "Watter Bottle India x 3 " },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between mb-[76px] mt-2 mx-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[7%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[104px]">
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
                      / Order List
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Order List
                </Text>
              </div>
              <Img
                className="h-6 mb-1.5 md:ml-[0] ml-[93px] md:mt-0 mt-4 w-6"
                src="images/img_ioniconmmenudefault.svg"
                alt="ioniconmmenudef"
              />
              <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[1000px] md:mt-0 mt-[7px] w-[22%] md:w-full">
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between max-w-[1560px] w-full">
                <Button
                  className="cursor-pointer font-bold h-10 leading-[normal] min-w-[129px] text-[13px] text-center uppercase"
                  shape="round"
                  size="lg"
                  variant="gradient"
                  color="deep_purple_500_pink_A400"
                >
                  New Order
                </Button>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <SelectBox
                    className="font-bold h-10 rounded-md text-left text-xs uppercase w-[43%] sm:w-full"
                    placeholderClassName="text-blue_gray-900"
                    indicator={
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_gray_900_03_20x20.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="buttonsecondary"
                    options={buttonsecondaryOptionsList}
                    isSearchable={false}
                    placeholder="Filters"
                    shape="round"
                    color="blue_gray_900"
                    size="md"
                    variant="outline"
                  />
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[150px]"
                    leftIcon={
                      <Img
                        className="h-5 mr-1"
                        src="images/img_property1externallink.svg"
                        alt="Icons Solid"
                      />
                    }
                    shape="round"
                    color="blue_gray_900"
                    size="md"
                    variant="outline"
                  >
                    <div className="font-bold text-left text-xs uppercase">
                      Export CSV
                    </div>
                  </Button>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col font-opensans h-[800px] items-center justify-start max-w-[1572px] mt-[30px] pb-2 pt-6 w-full"
                style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-end pb-2 sm:px-5 px-6 w-full">
                    <Input
                      name="menusearch"
                      placeholder="Search here..."
                      className="p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                      wrapClassName="w-[12%]"
                      shape="round"
                      color="blue_gray_50"
                      size="2xl"
                      variant="outline"
                    ></Input>
                  </div>
                  <div className="flex flex-col font-helvetica items-start justify-start w-full">
                    <TablesTypeheader className="flex flex-col gap-6 items-start justify-start sm:px-5 px-6 py-4 w-full" />
                    <List
                      className="flex flex-col gap-px items-center w-full"
                      orientation="vertical"
                    >
                      {tablesTyperow1PropList.map((props, index) => (
                        <React.Fragment key={`TablesTyperow1${index}`}>
                          <TablesTyperow1
                            className="flex flex-1 flex-col gap-6 items-center justify-start sm:px-5 px-6 py-3 w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                    <TablesPagination
                      className="flex flex-row md:gap-10 items-center justify-between sm:px-5 px-6 py-4 w-full"
                      paginationinfo="Showing 1 to 10 of 12 entries"
                    />
                  </div>
                </div>
              </div>
              <GeneralNavigationRow2021madewith
                className="flex sm:flex-col flex-row font-helvetica md:gap-10 items-start justify-between mt-[58px] w-full"
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

export default EcommerceOrderListPage;
