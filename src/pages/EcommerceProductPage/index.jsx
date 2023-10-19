import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import GeneralInput from "components/GeneralInput";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import Sidebar4 from "components/Sidebar4";
import TablesColumnEight from "components/TablesColumnEight";
import TablesProperty1label2 from "components/TablesProperty1label2";

import { CloseSVG } from "../../assets/images";

const inputfieldOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const inputfieldOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EcommerceProductPagePage = () => {
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
  const tablesColumnEightPropList = [
    {
      productname: "Christopher Knight Home",
      separatorzeroSix: "images/img_separator.svg",
      zipcode: "230019",
      userimage: "images/img_imgplaceholder_10.png",
    },
    {
      productname: "Bar Height Swivel Barstool",
      zipcode: "87120",
      userimage: "images/img_imgplaceholder_11.png",
      separatorzeroSix: "images/img_separator.svg",
      price: "$99.99",
    },
    {
      productname: "Signature Design by Ashley",
      progressbar: "images/img_progressbar_indigo_50.png",
      separatorzeroSix: "images/img_separator.svg",
      price: "$129.00",
      userimage: "images/img_imgplaceholder_12.png",
      zipcode: "412301",
    },
    {
      productname: "Modern Square",
      progressbar: "images/img_progressbar_indigo_50.png",
      userimage: "images/img_imgplaceholder_13.png",
      zipcode: "001992",
      price: "$59.99",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-end mx-auto p-[18px] w-full">
        <div className="flex md:flex-col flex-row md:gap-14 items-start justify-between mt-3 mx-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[8%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[124px]">
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
                      / Product Page
                    </span>
                  </Text>
                </div>
                <Text
                  className="mt-0.5 text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Product Page
                </Text>
              </div>
              <Img
                className="h-6 mb-[7px] md:ml-[0] ml-[73px] md:mt-0 mt-[15px] w-6"
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start w-[88%] md:w-full">
                  <div className="h-[561px] md:h-auto p-4 relative w-[771px] md:w-full">
                    <Img
                      className="absolute h-[560px] inset-[0] justify-center m-auto w-[771px]"
                      src="images/img_colorwhite.svg"
                      alt="bg"
                    />
                    <div className="flex flex-col items-start justify-start m-auto relative w-[96%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-blue_gray-900 tracking-[-0.80px]"
                          size="txtHelveticaBold16Bluegray900"
                        >
                          Product details
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[11px] w-full">
                        <Img
                          className="h-[380px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_screenshot20220708.png"
                          alt="screenshot20220"
                        />
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-full justify-start mt-2 md:pr-10 sm:pr-5 pr-[308px] w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <Img
                            className="h-[107px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                            src="images/img_screenshot20220708_107x101.png"
                            alt="screenshot20220"
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <Img
                            className="h-[107px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                            src="images/img_screenshot20220708_1.png"
                            alt="screenshot20220"
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <Img
                            className="h-[107px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                            src="images/img_screenshot20220708_2.png"
                            alt="screenshot20220"
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <Img
                            className="h-[107px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                            src="images/img_screenshot20220708_3.png"
                            alt="screenshot20220"
                          />
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start py-2 w-[569px] sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                          size="txtHelveticaBold30Bluegray900"
                        >
                          Minimal Bar Stool
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconssolid_blue_gray_400_24x24.svg"
                          alt="iconssolid"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconssolid_blue_gray_400_24x24.svg"
                          alt="iconssolid_One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconssolid_blue_gray_400_24x24.svg"
                          alt="iconssolid_Two"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconssolid_blue_gray_400_24x24.svg"
                          alt="iconssolid_Three"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_star_blue_gray_400.svg"
                          alt="star"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-400 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16Bluegray400"
                      >
                        Price
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold20Bluegray900"
                      >
                        $1,419
                      </Text>
                      <Button
                        className="cursor-pointer font-bold min-w-[74px] rounded text-center text-xs"
                        shape="round"
                        color="light_green_A100"
                        size="xs"
                        variant="fill"
                      >
                        IN STOCK
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtHelveticaBold14Bluegray900"
                      >
                        Description:
                      </Text>
                      <Text
                        className="leading-[150.00%] text-base text-blue_gray-400"
                        size="txtHelvetica16Bluegray400"
                      >
                        <>
                          As we live, our hearts turn colder. <br />
                          Cause pain is what we go through as we become older.{" "}
                          <br />
                          We get insulted by others, lose trust for those
                          others. <br />
                          We get back stabbed by friends. <br />
                          It becomes harder for us to give others a hand.{" "}
                        </>
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                      <GeneralInput
                        className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                        nameTen="Material"
                      />
                      <GeneralInput
                        className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                        nameTen="Color"
                      />
                      <GeneralInput
                        className="flex flex-1 flex-col gap-1 items-start justify-center w-full"
                        nameTen="Quantity"
                      />
                    </div>
                    <Button
                      className="cursor-pointer font-bold h-10 leading-[normal] min-w-[154px] text-[13px] text-center uppercase"
                      shape="round"
                      size="lg"
                      variant="gradient"
                      color="deep_purple_500_pink_A400"
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-notosans h-[385px] items-start justify-start max-w-[1572px] sm:px-5 px-6 py-4 w-full"
                  style={{
                    backgroundImage: "url('images/img_colorwhite.svg')",
                  }}
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-blue_gray-900_01 tracking-[-0.80px]"
                        size="txtNotoSansSemiBold16Bluegray90001"
                      >
                        Other products
                      </Text>
                    </div>
                    <TablesProperty1label2 className="flex flex-col font-helvetica gap-4 items-start justify-start mt-1 sm:px-5 px-6 py-4 w-full" />
                    <List
                      className="flex flex-col font-helvetica gap-1 items-center mt-1 w-full"
                      orientation="vertical"
                    >
                      {tablesColumnEightPropList.map((props, index) => (
                        <React.Fragment key={`TablesColumnEight${index}`}>
                          <TablesColumnEight
                            className="flex flex-1 flex-col gap-4 h-[65px] md:h-auto items-center justify-start pb-4 pt-2 sm:px-5 px-6 w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </div>
                </div>
                <GeneralNavigationRow2021madewith
                  className="flex sm:flex-col flex-row font-helvetica md:gap-10 items-start justify-between ml-0.5 md:ml-[0] w-full"
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

export default EcommerceProductPagePage;
