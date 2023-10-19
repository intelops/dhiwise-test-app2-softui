import React from "react";

import {
  Button,
  CheckBox,
  Datepicker,
  Img,
  Input,
  Line,
  List,
  Switch,
  Text,
} from "components";
import ListItemsCardbilling from "components/ListItemsCardbilling";
import ListItemsCardkanban from "components/ListItemsCardkanban";
import ListItemsCategorycrm from "components/ListItemsCategorycrm";
import ListItemsColumnFive from "components/ListItemsColumnFive";
import ListItemsColumnOne from "components/ListItemsColumnOne";
import ListItemsColumnSeven from "components/ListItemsColumnSeven";
import ListItemsColumnSix from "components/ListItemsColumnSix";
import ListItemsColumncardvisaone from "components/ListItemsColumncardvisaone";
import ListItemsColumnearnings from "components/ListItemsColumnearnings";
import ListItemsColumnfacebook from "components/ListItemsColumnfacebook";
import ListItemsColumnicon from "components/ListItemsColumnicon";
import ListItemsColumniconssolid from "components/ListItemsColumniconssolid";
import ListItemsColumniconssolidEight from "components/ListItemsColumniconssolidEight";
import ListItemsColumniconssolidOne from "components/ListItemsColumniconssolidOne";
import ListItemsColumnstatus from "components/ListItemsColumnstatus";
import ListItemsColumnstatus1 from "components/ListItemsColumnstatus1";
import ListItemsDialoguebox from "components/ListItemsDialoguebox";
import ListItemsItemroom from "components/ListItemsItemroom";
import ListItemsPricing from "components/ListItemsPricing";
import ListItemsPropertydark from "components/ListItemsPropertydark";
import ListItemsPropertydefaul from "components/ListItemsPropertydefaul";
import ListItemsPropertyrest from "components/ListItemsPropertyrest";
import ListItemsPropertyselect from "components/ListItemsPropertyselect";
import ListItemsRowbillinginfo from "components/ListItemsRowbillinginfo";
import ListItemsRowevents from "components/ListItemsRowevents";
import ListItemsRowinvoice from "components/ListItemsRowinvoice";
import ListItemsRowlogomastercard from "components/ListItemsRowlogomastercard";
import ListItemsRoworders from "components/ListItemsRoworders";
import ListItemsRowtransaction from "components/ListItemsRowtransaction";
import ListItemsSlackbot from "components/ListItemsSlackbot";
import ListItemsStackbg from "components/ListItemsStackbg";
import ListItemsStatisticscard from "components/ListItemsStatisticscard";
import ListItemsTypeautomotive from "components/ListItemsTypeautomotive";
import ListItemsTypeiconr from "components/ListItemsTypeiconr";

const ListitemsPage = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-inter items-center justify-start mx-auto pb-[154px] w-full">
        <div className="flex flex-col gap-[37px] justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[2705px] w-full">
            <div className="bg-purple-500 h-3 w-full"></div>
            <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[2545px] mx-auto w-full">
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
              <div className="flex flex-col font-helvetica items-start justify-start max-w-[2545px] mx-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold40Bluegray900"
                    >
                      List Items & Cards
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
                    Cards & list items used in the theme.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-helvetica items-start justify-start md:ml-[0] ml-[92px] md:px-5 w-[84%] md:w-full">
            <Text
              className="ml-0.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
              size="txtHelveticaBold30Bluegray900"
            >
              BACKGROUND
            </Text>
            <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-start mt-[39px] w-[61%] md:w-full">
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col items-center justify-start p-[18px] rounded-[5px] w-[63%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start mb-0.5 w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                    <Img
                      className="h-[123px]"
                      src="images/img_colorwhite.svg"
                      alt="colorwhite"
                    />
                    <Img
                      className="h-[123px]"
                      src="images/img_colorwhite.svg"
                      alt="colorprimary"
                    />
                  </div>
                  <Img
                    className="h-[123px] md:h-auto object-cover"
                    src="images/img_colorgradient.png"
                    alt="colorgradient"
                  />
                </div>
              </div>
              <Img
                className="h-40 md:ml-[0] ml-[54px] rounded-[5px]"
                src="images/img_background.svg"
                alt="background_One"
              />
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-[30px] items-center justify-start md:ml-[0] ml-[42px] p-4 rounded-[5px] w-[5%] md:w-full">
                <div className="flex flex-col h-9 md:h-auto items-center justify-start pl-1 pr-2 py-2 w-9">
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowright_blue_gray_900_02.svg"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col h-9 md:h-auto items-center justify-end pl-2 pr-1 py-2 w-9">
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowright_blue_gray_900_02.svg"
                    alt="arrowright_One"
                  />
                </div>
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[54px] p-4 rounded-[5px] w-[18%] md:w-full">
                <Button
                  className="flex h-[34px] items-center justify-center w-[34px]"
                  shape="circle"
                  color="blue_gray_400"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-2"
                    src="images/img_arrowdown_blue_gray_400.svg"
                    alt="arrowdown"
                  />
                </Button>
                <Text
                  className="border border-blue_gray-400 border-solid flex h-[34px] items-center justify-center rounded-[50%] text-blue_gray-400 text-center text-lg w-[34px]"
                  size="txtRobotoRomanBold18"
                >
                  !
                </Text>
                <Button
                  className="flex h-[34px] items-center justify-center w-[34px]"
                  shape="circle"
                  color="blue_gray_400"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-2"
                    src="images/img_arrowup_blue_gray_400.svg"
                    alt="arrowup"
                  />
                </Button>
                <Button
                  className="flex h-[34px] items-center justify-center rotate-[-90deg] w-[34px]"
                  shape="circle"
                  color="blue_gray_400"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-2"
                    src="images/img_arrowright_blue_gray_400.svg"
                    alt="arrowright_Two"
                  />
                </Button>
                <Button
                  className="flex h-[34px] items-center justify-center rotate-[90deg] w-[34px]"
                  shape="circle"
                  color="blue_gray_400"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-2"
                    src="images/img_arrowleft_blue_gray_400.svg"
                    alt="arrowleft"
                  />
                </Button>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[17px] mt-[75px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
              size="txtHelveticaBold30Bluegray900"
            >
              DASHBOARD
            </Text>
            <div className="flex md:flex-col flex-row font-helvetica md:gap-10 items-start justify-between mt-[29px] w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[153px] justify-start md:mt-0 mt-2 w-[35%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between w-full">
                  <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-[23px] items-center justify-start p-4 rounded-[5px] w-[54%] md:w-full">
                    <ListItemsTypeautomotive
                      className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-between p-4 w-[386px] sm:w-full"
                      style={{
                        backgroundImage: "url('images/img_colorgradient.png')",
                      }}
                      threehundredfortyeight="+55%"
                    />
                    <ListItemsColumnicon
                      className="bg-cover bg-no-repeat flex flex-col gap-4 h-20 items-center justify-start p-4 w-auto sm:w-full"
                      style={{
                        backgroundImage: "url('images/img_colorwhite.svg')",
                      }}
                    />
                    <ListItemsTypeiconr
                      className="bg-cover bg-no-repeat flex flex-col gap-4 h-20 items-center justify-start p-4 w-auto sm:w-full"
                      style={{
                        backgroundImage: "url('images/img_colorwhite.svg')",
                      }}
                    />
                  </div>
                  <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col font-notosans gap-6 items-start justify-start p-4 rounded-[5px] w-[43%] md:w-full">
                    <ListItemsColumniconssolid className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-4 items-start justify-center p-4 rounded-md shadow-bs3 w-[280px]" />
                    <ListItemsColumniconssolidOne className="bg-white-A700_bf border border-solid border-white-A700 flex flex-col gap-4 items-start justify-center mb-[5px] p-6 sm:px-5 rounded-md shadow-bs2 w-[280px]" />
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[21px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                  size="txtHelveticaBold30Bluegray900"
                >
                  PAGES
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[29px] justify-start md:mt-0 mt-0.5 w-[14%] md:w-full">
                <ListItemsColumnOne
                  className="bg-cover bg-no-repeat flex flex-col gap-4 h-[172px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-[12px] w-[290px]"
                  style={{
                    backgroundImage: "url('images/img_colorwhite.svg')",
                  }}
                />
                <ListItemsItemroom className="flex flex-col items-center justify-between md:ml-[0] ml-[9px] p-1 w-[301px]" />
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 md:flex-col flex-row gap-[27px] items-center justify-start md:mt-0 mt-1.5 p-4 rounded-[5px] w-[31%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-7 grid grid-cols-2 w-3/5 md:w-full"
                  orientation="horizontal"
                >
                  <ListItemsColumnstatus className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col gap-2 h-[216px] md:h-auto items-start justify-center sm:ml-[0] p-6 sm:px-5 rounded-[12px] shadow-bs w-[180px]" />
                  <ListItemsColumnstatus1 className="bg-gradient7  flex flex-col gap-2 h-[216px] md:h-auto items-start justify-center sm:ml-[0] p-6 sm:px-5 rounded-[12px] shadow-bs w-[180px]" />
                </List>
                <div className="bg-white-A700 border border-dashed border-gray-300 flex flex-col gap-2 h-[216px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-[12px] shadow-bs w-[236px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconssolid_blue_gray_400.svg"
                    alt="iconssolid_Two"
                  />
                  <Text
                    className="text-blue_gray-400 text-xl tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold20Bluegray400"
                  >
                    New device
                  </Text>
                </div>
              </div>
              <ListItemsCategorycrm
                className="flex flex-row gap-4 items-center justify-between sm:px-5 px-6 py-2 w-[360px]"
                p250instock346={
                  <Text className="font-opensans text-blue_gray-400 text-xs w-auto">
                    <span className="text-blue_gray-400 font-helvetica text-left font-normal">
                      250 in stock,
                    </span>
                    <span className="text-blue_gray-400 text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-blue_gray-400 font-helvetica text-left font-bold">
                      346+ sold
                    </span>
                  </Text>
                }
              />
            </div>
            <div className="flex md:flex-col flex-row font-helvetica md:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[74px] w-[71%] md:w-full">
              <ListItemsCardbilling
                className="bg-cover bg-no-repeat flex flex-col h-[222px] items-center justify-start p-[11px] w-[13%] md:w-full"
                style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
              />
              <ListItemsColumncardvisaone className="flex flex-col items-center justify-start ml-12 md:ml-[0] w-[21%] md:w-full" />
              <ListItemsRowlogomastercard className="border border-gray-300 border-solid flex flex-row font-opensans items-center justify-end ml-12 md:ml-[0] p-[25px] sm:px-5 rounded-lg w-1/4 md:w-full" />
              <ListItemsSlackbot className="bg-white-A700 border border-gray-300 border-solid flex flex-col font-helvetica gap-4 items-start justify-start md:ml-[0] ml-[39px] p-6 sm:px-5 rounded-[15px] shadow-bs w-auto sm:w-full" />
            </div>
            <div className="flex md:flex-col flex-row font-notosans gap-[38px] items-start justify-start md:ml-[0] ml-[3px] mt-[92px] w-[66%] md:w-full">
              <List
                className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-[18px] md:mt-0 mt-0.5 p-4 rounded-[5px] w-[43%]"
                orientation="vertical"
              >
                <ListItemsPropertydefaul className="flex sm:flex-col flex-row gap-[22px] items-start justify-start py-1 w-[481px] sm:w-full" />
                <ListItemsPropertydark className="flex sm:flex-col flex-row gap-[22px] items-start justify-start py-1 w-[481px] sm:w-full" />
              </List>
              <div className="flex flex-col font-helvetica gap-[27px] items-start justify-start w-[55%] md:w-full">
                <Input
                  name="cardalert"
                  placeholder="A simple primary alert with an example link. Give it a click if you like"
                  className="p-0 placeholder:text-white-A700 text-left text-sm w-full"
                  wrapClassName="flex max-w-[807px] p-4 w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_icons_solid_blue_gray_50.svg"
                      alt="Icons Solid"
                    />
                  }
                  shape="round"
                  variant="gradient"
                  color="blue_800_deep_purple_A200"
                ></Input>
                <ListItemsStackbg
                  className="bg-cover bg-no-repeat flex flex-col gap-4 h-[123px] items-center justify-center p-6 sm:px-5 rounded-md w-[280px]"
                  style={{
                    backgroundImage: "url('images/img_colorwhite.svg')",
                  }}
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-helvetica md:gap-10 gap-[97px] items-start justify-start md:ml-[0] ml-[3px] mt-[151px] w-[88%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[141px] justify-start w-[59%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between w-full">
                  <List
                    className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-3.5 p-4 rounded-[5px] w-[41%]"
                    orientation="vertical"
                  >
                    <ListItemsPropertyrest className="flex sm:flex-col flex-row gap-4 items-start justify-start my-0 px-4 py-2 rounded-lg w-[440px] sm:w-full" />
                    <ListItemsPropertyselect
                      className="bg-gradient13  flex sm:flex-col flex-row gap-4 items-start justify-start my-0 px-4 py-2 rounded-lg w-[440px] sm:w-full"
                      duration="1 hour ago"
                    />
                  </List>
                  <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-[42px] justify-start p-[15px] rounded-[5px] w-[55%] md:w-full">
                    <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start mr-[82px] px-4 py-2 rounded-[12px] shadow-bs w-auto sm:w-full">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtHelvetica14"
                      >
                        Can it generate daily design links that include essays
                        and data visualizations ?
                      </Text>
                      <Datepicker.Time
                        className="frameEighteen"
                        placeholder="3:14am"
                      ></Datepicker.Time>
                    </div>
                    <ListItemsDialoguebox className="bg-gradient15  flex flex-col gap-2 items-end justify-start md:ml-[0] ml-[82px] px-4 py-2 rounded-[12px] shadow-bs w-auto sm:w-full" />
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[55px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                  size="txtHelveticaBold30Bluegray900"
                >
                  APPLICATIONS
                </Text>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-[37%] md:w-full">
                <div className="flex flex-col gap-12 items-start justify-start w-[65%] md:w-full">
                  <ListItemsRowinvoice className="flex flex-row items-center justify-start pb-0.5 w-[77%] md:w-full" />
                  <ListItemsRowtransaction className="flex flex-col items-center justify-end w-full" />
                </div>
                <ListItemsRowbillinginfo
                  className="bg-gray-50 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg w-auto md:w-full"
                  delete="images/img_delete.svg"
                  textOne="DELETE"
                  arrowrightSix="images/img_arrowright_blue_gray_900.svg"
                  textTwo="EDIT"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-helvetica gap-12 items-start justify-start md:ml-[0] ml-[38px] mt-[59px] w-[88%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[252px] justify-start w-[45%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <ListItemsCardkanban
                    className="p-6 sm:px-5 relative rounded-[15px] w-[415px] sm:w-full"
                    pending="ERRORS"
                    descriptiontext="Fix Firefox Errors!"
                    attachmenticon="images/img_attach.svg"
                    eleven="11"
                    pexelsimage="images/img_creditstopexelscom_20x18.png"
                  />
                  <ListItemsPricing
                    className="bg-cover bg-no-repeat flex sm:flex-1 flex-col gap-[27px] h-[456px] items-center justify-center p-6 sm:px-5 rounded-[15px] w-[400px] sm:w-full"
                    style={{
                      backgroundImage: "url('images/img_colorwhite.svg')",
                    }}
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[17px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                  size="txtHelveticaBold30Bluegray900"
                >
                  E-COMMERCE DASHBOARD
                </Text>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start md:mt-0 mt-0.5 w-[53%] md:w-full">
                <ListItemsColumnFive
                  className="flex flex-col gap-2 items-center justify-start pb-4 pr-3 w-[516px] sm:w-full"
                  logosoneOne="images/img_property1logojira.png"
                  separatorzeroTwo="images/img_separator.svg"
                />
                <ListItemsColumnfacebook
                  className="flex flex-col gap-2 items-start justify-center pb-4 pr-3 w-[516px] sm:w-full"
                  facebook="images/img_facebook.svg"
                />
                <ListItemsRowevents className="flex flex-col items-start justify-start w-1/4 md:w-full" />
                <div className="border border-dashed border-deep_purple-A200_02 flex flex-col font-notosans gap-[17px] items-center justify-center p-4 rounded-[5px] w-full">
                  <ListItemsColumnSix className="flex flex-col items-center justify-start mt-[3px] w-full" />
                  <ListItemsColumnSeven className="flex flex-col items-center justify-start mb-20 w-full" />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-helvetica md:gap-5 items-start justify-start md:ml-[0] ml-[35px] mt-[59px] w-[54%] md:w-full">
              <ListItemsColumnearnings
                className="border border-blue_gray-400 border-dashed flex flex-col gap-4 items-center justify-center p-6 sm:px-5 rounded-[15px] w-[148px]"
                currencysymbol="$"
              />
              <ListItemsStatisticscard
                className="bg-cover bg-no-repeat flex flex-col h-[120px] items-start justify-start ml-12 md:ml-[0] sm:px-5 px-6 py-4 w-auto"
                style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
              />
              <ListItemsColumniconssolidEight
                className="flex flex-col gap-2 items-center justify-center ml-12 md:ml-[0] p-4 rounded-[15px] w-[280px]"
                currencytext="$"
              />
              <ListItemsRoworders
                className="flex flex-row gap-[22px] items-start justify-start ml-12 md:ml-[0] w-[340px]"
                iconssolidNine="images/img_iconssolid_light_green_a700.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListitemsPage;
