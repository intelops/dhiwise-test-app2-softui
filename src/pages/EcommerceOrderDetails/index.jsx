import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import ListItemsRowbillinginfo from "components/ListItemsRowbillinginfo";
import ListItemsRoworders from "components/ListItemsRoworders";
import Sidebar5 from "components/Sidebar5";

import { CloseSVG } from "../../assets/images";

const EcommerceOrderDetailsPage = () => {
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
  const listItemsRowordersPropList = [
    {
      price: "Order received",
      iconssolidNine: "images/img_iconssolid_blue_gray_400_16x16.svg",
    },
    {
      price: "Generate order id #1832412",
      iconssolidNine: "images/img_iconssolid_5.png",
    },
    { time: "21 DEC 9:34 PM", price: "Order transmited to courier" },
    {
      price: "Order delivered",
      iconssolidNine: "images/img_iconssolid_6.png",
      time: "20 DEC 2:20 AM",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between mx-auto my-[7px] md:px-5 w-full">
          <Sidebar5 className="!sticky !w-[233px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[8%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[122px]">
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
                      / Order Details
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Order Details
                </Text>
              </div>
              <Img
                className="h-6 mb-1.5 md:ml-[0] ml-[75px] md:mt-0 mt-4 w-6"
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
            <div className="flex flex-col md:gap-10 gap-[265px] items-center justify-start pl-0.5 w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[12px] shadow-bs w-auto md:w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col font-notosans items-start justify-start pb-2 w-auto">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                        size="txtNotoSansSemiBold16Bluegray900"
                      >
                        Order Details
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtHelvetica14Bluegray400"
                    >
                      <span className="text-blue_gray-400 font-helvetica text-left font-normal">
                        Order no.{" "}
                      </span>
                      <span className="text-blue_gray-400 font-helvetica text-left font-bold">
                        241342
                      </span>
                      <span className="text-blue_gray-400 font-helvetica text-left font-normal">
                        {" "}
                        from{" "}
                      </span>
                      <span className="text-blue_gray-400 font-helvetica text-left font-bold">
                        23.02.2021
                      </span>
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtHelvetica14Bluegray400"
                    >
                      <span className="text-blue_gray-400 font-helvetica text-left font-normal">
                        Code:{" "}
                      </span>
                      <span className="text-blue_gray-400 font-helvetica text-left font-bold">
                        KF332
                      </span>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-10 min-w-[82px] text-center text-xs uppercase"
                    shape="round"
                    size="lg"
                    variant="gradient"
                    color="blue_gray_100_blue_gray_50_01"
                  >
                    Invoice
                  </Button>
                </div>
                <Img
                  className="h-px w-full"
                  src="images/img_separator.svg"
                  alt="separatorZero"
                />
                <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                  <div className="flex flex-col h-[110px] items-center justify-start w-[110px]">
                    <Img
                      className="h-[110px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-[110px]"
                      src="images/img_img_110x110.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 h-full items-start justify-center w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16Bluegray900"
                      >
                        Wooden chair
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtHelvetica14Bluegray400"
                      >
                        Order was delivered 2 days ago.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-bold min-w-[71px] rounded text-center text-xs"
                      shape="round"
                      color="light_green_A100"
                      size="xs"
                      variant="fill"
                    >
                      Delivered
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2 h-[110px] md:h-auto items-end justify-center">
                    <Button
                      className="!text-blue_gray-50 cursor-pointer font-bold h-10 min-w-[110px] text-center text-xs uppercase"
                      shape="round"
                      size="lg"
                      variant="gradient"
                      color="light_blue_400_indigo_A700"
                    >
                      Contact us
                    </Button>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtHelvetica14Bluegray400"
                    >
                      <span className="text-blue_gray-400 font-helvetica text-left font-normal">
                        Do you like the product? Leave us a review{" "}
                      </span>
                      <span className="text-blue_gray-900 font-helvetica text-left font-normal">
                        here
                      </span>
                      <span className="text-blue_gray-400 font-helvetica text-left font-normal">
                        .
                      </span>
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-px w-full"
                  src="images/img_separator.svg"
                  alt="separatorZero_One"
                />
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-8 h-[333px] md:h-auto items-start justify-start w-[279px]">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16Bluegray900"
                      >
                        Track order
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        {listItemsRowordersPropList.map((props, index) => (
                          <React.Fragment key={`ListItemsRoworders${index}`}>
                            <ListItemsRoworders
                              className="flex flex-1 flex-row gap-[22px] items-start justify-start w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-[374px] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16Bluegray900"
                      >
                        Payment Method
                      </Text>
                      <div className="border border-gray-300 border-solid flex flex-row font-roboto items-center justify-start p-[22px] sm:px-5 rounded-lg w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_volume_yellow_800_02.svg"
                          alt="volume"
                        />
                        <div className="flex flex-row gap-[13px] items-start justify-start ml-[15px] w-auto">
                          <Text
                            className="text-base text-blue_gray-900 text-center w-auto"
                            size="txtRobotoRomanBold16"
                          >
                            ****
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900 text-center w-auto"
                            size="txtRobotoRomanBold16"
                          >
                            ****
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900 text-center w-auto"
                            size="txtRobotoRomanBold16"
                          >
                            ****
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900 text-center w-auto"
                            size="txtRobotoRomanBold16"
                          >
                            7852
                          </Text>
                        </div>
                        <Button
                          className="flex h-6 items-center justify-center ml-[91px] rounded-[50%] w-6"
                          shape="circle"
                          color="blue_gray_400"
                          size="sm"
                          variant="outline"
                        >
                          <Img
                            src="images/img_info_blue_gray_400_24x24.svg"
                            alt="info"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-[374px] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16Bluegray900"
                      >
                        Billing Information
                      </Text>
                      <ListItemsRowbillinginfo className="bg-gray-50 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 h-[333px] md:h-auto items-start justify-start">
                    <Text
                      className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold16Bluegray900"
                    >
                      Order Summary
                    </Text>
                    <div className="flex flex-row gap-[42px] items-start justify-start w-auto">
                      <Text
                        className="leading-[150.00%] text-blue_gray-400 text-sm"
                        size="txtHelvetica14Bluegray400"
                      >
                        <>
                          Product Price:
                          <br />
                          Delivery:
                          <br />
                          Taxes:
                        </>
                      </Text>
                      <Text
                        className="leading-[150.00%] text-blue_gray-900 text-right text-sm"
                        size="txtHelveticaBold14Bluegray900"
                      >
                        <>
                          $90
                          <br />
                          $15
                          <br />
                          $1.95
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtHelvetica18"
                      >
                        Total:
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-lg text-right"
                        size="txtHelveticaBold18Bluegray900"
                      >
                        $105.95
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <GeneralNavigationRow2021madewith
                className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full"
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

export default EcommerceOrderDetailsPage;
