import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import GeneralNavigation2ndarymenutop from "components/GeneralNavigation2ndarymenutop";
import GeneralNavigationRow2021madewith from "components/GeneralNavigationRow2021madewith";
import GeneralNavigationRowsoftuidashboardSeven from "components/GeneralNavigationRowsoftuidashboardSeven";
import GeneralNavigationSidebar from "components/GeneralNavigationSidebar";
import GeneralNavigationStateactive from "components/GeneralNavigationStateactive";
import GeneralNavigationStatehover from "components/GeneralNavigationStatehover";
import GeneralNavigationStatusannual from "components/GeneralNavigationStatusannual";
import GeneralNavigationStatusmonthly from "components/GeneralNavigationStatusmonthly";
import GeneralNavigationSubmenu from "components/GeneralNavigationSubmenu";
import GeneralNavigationTabbuttons from "components/GeneralNavigationTabbuttons";

import { CloseSVG } from "../../assets/images";

const dashboardsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const pagesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ecommerceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const authenticationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const basicOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const componentsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const changelogOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const GeneralNavigationPage = () => {
  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-inter items-center justify-start mx-auto pb-[250px] w-full">
        <div className="flex flex-col gap-[43px] items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[4255px] w-full">
            <div className="bg-purple-500 h-3 w-full"></div>
            <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[4095px] mx-auto w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-[31px] w-24"
                    src="images/img_logoctwhite1.svg"
                    alt="logoctwhiteOne"
                  />
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtNotoSansRegular24"
                    >
                      Components
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                      size="txtInterRegular24"
                    >
                      <>-&gt;</>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold24Gray900"
                    >
                      General
                    </Text>
                  </div>
                </div>
                <a
                  href="www.creative-tim.com"
                  className="text-blue_gray-400 text-xl w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text size="txtInterRegular20">www.creative-tim.com</Text>
                </a>
              </div>
              <div className="flex flex-col font-helvetica items-start justify-start max-w-[4095px] mx-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold40Bluegray900"
                    >
                      Navigation
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[100px] rounded"
                      leftIcon={
                        <Img
                          className="h-[9px] mt-px mb-[3px] mr-1"
                          src="images/img_checkmark_light_green_a700_01.svg"
                          alt="checkmark"
                        />
                      }
                      shape="round"
                      color="light_green_A100"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-bold text-center text-xs">
                        Auto Layout
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[103px] rounded"
                      leftIcon={
                        <Img
                          className="h-[9px] mt-px mb-[3px] mr-1"
                          src="images/img_checkmark_light_green_a700_01.svg"
                          alt="checkmark"
                        />
                      }
                      shape="round"
                      color="light_green_A100"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-bold text-center text-xs">
                        Components
                      </div>
                    </Button>
                  </div>
                  <Text
                    className="text-blue_gray-400 text-lg w-full"
                    size="txtHelvetica18"
                  >
                    Menus and other general components used in the theme.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-helvetica gap-8 items-start justify-start max-w-[4021px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1 md:ml-[0] w-[86%] md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                LOGO
              </Text>
              <Text
                className="md:ml-[0] ml-[471px] md:mt-0 mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                SIDE MENU SOFT UI DASHBOARD PRO
              </Text>
              <Text
                className="mb-[9px] md:ml-[0] ml-[121px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01 tracking-[-0.80px]"
                size="txtNotoSansSemiBold30"
              >
                TOP MENU DASHBOARD
              </Text>
              <Text
                className="md:ml-[0] ml-[1790px] md:mt-0 mt-2.5 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01 tracking-[-0.80px]"
                size="txtNotoSansSemiBold30"
              >
                TABS
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="bg-gradient7  border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-4 items-start justify-start p-4 rounded-[5px] w-[8%] md:w-full">
                <div className="flex flex-row gap-2 items-center justify-center pb-2 pt-6 px-4 w-[250px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_calculator.svg"
                    alt="calculator"
                  />
                  <Text
                    className="text-white-A700 text-xs w-auto"
                    size="txtHelveticaBold12WhiteA700"
                  >
                    Soft UI Dashboard PRO
                  </Text>
                </div>
                <div className="flex flex-row font-notosans gap-2 items-center justify-start sm:px-5 px-8 py-6 w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_calculator.svg"
                    alt="calculator_One"
                  />
                  <Text
                    className="text-[10px] text-white-A700 w-auto"
                    size="txtNotoSansBold10"
                  >
                    Soft UI Dashboard PRO
                  </Text>
                </div>
              </div>
              <div className="bg-gradient7  border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-6 items-center justify-start ml-6 md:ml-[0] p-4 rounded-[5px] w-[2%] md:w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_calculator.svg"
                  alt="calculator_Two"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_calculator.svg"
                  alt="calculator_Three"
                />
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-row gap-3.5 items-center justify-start md:ml-[0] ml-[187px] md:mt-0 mt-0.5 p-4 rounded-[5px] w-[2%] md:w-full">
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_blue_gray_400_05.svg"
                  alt="arrowdown"
                />
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowup_blue_gray_400_05.svg"
                  alt="arrowup"
                />
              </div>
              <GeneralNavigationSidebar className="flex md:flex-1 flex-col gap-8 justify-start md:ml-[0] ml-[61px] md:mt-0 mt-2.5 w-[6%] md:w-full" />
              <div className="flex md:flex-1 flex-col font-notosans items-start justify-start md:ml-[0] ml-[295px] md:mt-0 mt-[19px] w-[70%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-[86%] md:w-full">
                    <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start p-4 rounded-[5px] w-[68%] md:w-full">
                      <GeneralNavigationRowsoftuidashboardSeven className="bg-white-A700_cc flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1569px] mb-6 sm:px-5 px-6 py-2 rounded-[28px] shadow-bs8 w-full" />
                    </div>
                    <List
                      className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-3 md:mt-0 mt-[26px] p-4 rounded-[5px] w-[12%]"
                      orientation="vertical"
                    >
                      <GeneralNavigationStateactive className="bg-white-A700 flex flex-row items-center justify-start rounded-md w-auto" />
                      <GeneralNavigationStatehover className="bg-white-A700 flex flex-row items-center justify-start rounded-md w-auto" />
                    </List>
                  </div>
                  <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-row font-helvetica gap-3 items-center justify-start md:mt-0 mt-[26px] p-4 rounded-[5px] w-[12%] md:w-full">
                    <Button
                      className="!text-blue_gray-900 cursor-pointer h-[35px] rounded-lg text-center text-xs w-[134px]"
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      Lounge
                    </Button>
                    <GeneralNavigationTabbuttons
                      className="flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg shadow-bs7 w-[134px]"
                      officetext="Lounge"
                    />
                  </div>
                </div>
                <Text
                  className="mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01 tracking-[-0.80px]"
                  size="txtNotoSansSemiBold30"
                >
                  DROPDOWN MENU DASHBOARD
                </Text>
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-1 w-[88%] md:w-full">
                  <GeneralNavigationSubmenu
                    className="bg-cover bg-no-repeat flex flex-col gap-1 h-24 items-start justify-start p-2 rounded-md w-auto"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  />
                  <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-4 items-center justify-start p-4 rounded-[5px] w-[13%] sm:w-full">
                    <GeneralNavigationStatusmonthly className="bg-gray-50 flex flex-row gap-px h-12 md:h-auto items-start justify-start p-1 rounded-[12px] w-auto" />
                    <GeneralNavigationStatusannual className="bg-gray-50 flex flex-row gap-px h-12 md:h-auto items-start justify-start p-1 rounded-[12px] w-auto" />
                  </div>
                </div>
                <Text
                  className="mt-[39px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01 tracking-[-0.80px]"
                  size="txtNotoSansSemiBold30"
                >
                  SECONDARY MENU SOFT UI DASHBOARD
                </Text>
                <div className="flex flex-col md:gap-10 gap-[101px] items-start justify-start mt-[43px] w-[56%] md:w-full">
                  <GeneralNavigation2ndarymenutop
                    className="flex sm:flex-col flex-row font-helvetica md:gap-10 items-start justify-between w-full"
                    language={
                      <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto">
                        <span className="text-gray-500 font-helvetica text-left font-normal">
                          Pages{" "}
                        </span>
                        <span className="text-black-900 font-helvetica text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-gray-800 font-helvetica text-left text-xs font-normal">
                          / Default
                        </span>
                      </Text>
                    }
                  />
                  <Text
                    className="md:ml-[0] ml-[5px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01 tracking-[-0.80px]"
                    size="txtNotoSansSemiBold30"
                  >
                    FOOTER
                  </Text>
                </div>
                <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica items-center justify-start mt-14 p-3.5 rounded-[5px] w-[58%] md:w-full">
                  <GeneralNavigationRow2021madewith
                    className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full"
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
      </div>
    </>
  );
};

export default GeneralNavigationPage;
