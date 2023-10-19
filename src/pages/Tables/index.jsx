import React from "react";

import {
  Button,
  CheckBox,
  Img,
  List,
  Radio,
  SelectBox,
  Text,
} from "components";
import TablesColumnEight from "components/TablesColumnEight";
import TablesColumnFive from "components/TablesColumnFive";
import TablesColumnSix from "components/TablesColumnSix";
import TablesPagination from "components/TablesPagination";
import TablesProductstable from "components/TablesProductstable";
import TablesProperty1label from "components/TablesProperty1label";
import TablesProperty1label1 from "components/TablesProperty1label1";
import TablesProperty1label2 from "components/TablesProperty1label2";
import TablesProperty1row from "components/TablesProperty1row";
import TablesProperty1row1 from "components/TablesProperty1row1";
import TablesProperty1row2 from "components/TablesProperty1row2";
import TablesProperty1row3 from "components/TablesProperty1row3";
import TablesPropertylabel from "components/TablesPropertylabel";
import TablesPropertyrowpag from "components/TablesPropertyrowpag";
import TablesRefunds from "components/TablesRefunds";
import TablesRow from "components/TablesRow";
import TablesRowimgplaceholder from "components/TablesRowimgplaceholder";
import TablesRowimgplaceholderOne from "components/TablesRowimgplaceholderOne";
import TablesRowletter from "components/TablesRowletter";
import TablesRowtodo from "components/TablesRowtodo";
import TablesRowtransaction from "components/TablesRowtransaction";
import TablesRowtransactionTwo from "components/TablesRowtransactionTwo";
import TablesTypeheader from "components/TablesTypeheader";
import TablesTyperow from "components/TablesTyperow";
import TablesTyperow1 from "components/TablesTyperow1";
import TablesTypetype3 from "components/TablesTypetype3";
import TablesTypetype31 from "components/TablesTypetype31";

const dropdowntableOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const property1DownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const refundsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TablesPage = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-inter items-center justify-start mx-auto pb-[178px] w-full">
        <div className="flex flex-col items-end justify-start w-full">
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
                      Table elements
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
                    Table elements and type of rows used in the theme.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-helvetica md:gap-5 items-start justify-start mt-[59px] md:px-5 w-[72%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_listbulletpointcircle.svg"
              alt="listbulletpoint"
            />
            <Radio
              value="texthere"
              className="ml-5 md:ml-[0] sm:px-5 text-blue_gray-400 text-left text-xs"
              inputClassName="mr-[5px]"
              checked={false}
              name="texthere"
              label="text here"
              id="texthere"
            ></Radio>
            <div className="border border-dashed border-deep_purple-A200_02 flex flex-col font-roboto gap-5 items-center justify-start ml-8 md:ml-[0] p-5 rounded-[5px]">
              <Text
                className="bg-blue_gray-900 flex h-[34px] items-center justify-center rotate-[-90deg] rounded-[50%] text-center text-shadow-ts text-sm text-white-A700 w-[34px]"
                size="txtRobotoRomanRegular14"
              >
                1
              </Text>
              <Text
                className="border border-blue_gray-200 border-solid flex h-[34px] items-center justify-center rotate-[-90deg] rounded-[50%] text-blue_gray-900 text-center text-sm w-[34px]"
                size="txtRobotoRomanRegular14Bluegray900"
              >
                1
              </Text>
            </div>
            <div className="flex flex-col font-roboto gap-[22px] items-start justify-start md:ml-[0] ml-[99px] w-[82%] md:w-full">
              <SelectBox
                className="!text-blue_gray-500 border border-gray-300 border-solid rounded text-left text-sm w-[5%] sm:w-full"
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
              <div className="flex md:flex-col flex-row font-notosans md:gap-10 items-start justify-between w-full">
                <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-row gap-[29px] items-center justify-between p-4 rounded-[5px] w-[10%] md:w-full">
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer font-semibold h-10 rounded text-center text-sm w-10"
                    shape="round"
                    color="blue_gray_50"
                    size="md"
                    variant="fill"
                  >
                    1
                  </Button>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center p-2 rounded w-10">
                    <Text
                      className="text-blue_gray-400 text-center text-sm w-auto"
                      size="txtNotoSansSemiBold14"
                    >
                      1
                    </Text>
                  </div>
                </div>
                <TablesPagination
                  className="flex md:flex-1 sm:flex-col flex-row font-helvetica md:gap-10 gap-[893px] items-center justify-between py-2 w-auto md:w-full"
                  paginationinfo="Showing 1 to 10 of 12 entries"
                  three="3"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-helvetica items-start justify-start max-w-[2607px] mt-[123px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-12 items-start justify-start w-[42%] md:w-full">
              <TablesRowimgplaceholder className="flex sm:flex-col flex-row gap-3 h-12 md:h-auto items-center justify-start w-[476px] sm:w-full" />
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-notosans gap-8 items-start justify-start p-4 rounded-[5px] w-[12%] md:w-full">
                <TablesRefunds
                  className="flex flex-row gap-[7px] items-center justify-start w-auto"
                  usertext="13"
                />
                <SelectBox
                  className="font-bold text-blue_gray-400_02 text-left text-sm w-[53%] sm:w-full"
                  placeholderClassName="text-blue_gray-400_02"
                  indicator={
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown_red_a700.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="property1down"
                  options={property1DownOptionsList}
                  isSearchable={false}
                  placeholder="13"
                  size="xs"
                />
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica gap-3.5 items-center justify-start p-4 rounded-[5px] w-1/5 md:w-full">
                <TablesRowimgplaceholderOne className="flex flex-row gap-1 items-center justify-start w-[185px]" />
                <TablesRowletter className="flex flex-row font-notosans gap-1 items-center justify-start w-[185px]" />
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica items-start justify-start p-4 rounded-[5px] w-[12%] md:w-full">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Button
                    className="flex h-7 items-center justify-center rounded-[50%] w-7"
                    shape="circle"
                    color="blue_gray_400"
                    size="sm"
                    variant="outline"
                  >
                    <Img src="images/img_clock_blue_gray_400.svg" alt="clock" />
                  </Button>
                  <Text
                    className="text-blue_gray-700 text-xs w-auto"
                    size="txtHelveticaBold12Bluegray700"
                  >
                    Refunded
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start mt-2 w-auto">
                  <Button
                    className="flex h-7 items-center justify-center rounded-[50%] w-7"
                    shape="circle"
                    color="light_green_A700"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      src="images/img_checkmark_light_green_a700.svg"
                      alt="checkmark_One"
                    />
                  </Button>
                  <Text
                    className="text-blue_gray-700 text-xs w-[25px]"
                    size="txtHelveticaBold12Bluegray700"
                  >
                    Paid
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start mt-[11px] w-auto">
                  <Button
                    className="flex h-7 items-center justify-center rounded-[50%] w-7"
                    shape="circle"
                    color="red_A700"
                    size="md"
                    variant="outline"
                  >
                    <Img src="images/img_close_red_a700.svg" alt="close" />
                  </Button>
                  <Text
                    className="text-blue_gray-700 text-xs w-auto"
                    size="txtHelveticaBold12Bluegray700"
                  >
                    Cancelled
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
              size="txtHelveticaBold30Bluegray900"
            >
              DASHBOARD
            </Text>
            <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-notosans gap-[49px] items-center justify-start mt-3.5 p-4 rounded-[5px] w-[28%] md:w-full">
              <TablesProperty1row className="flex sm:flex-col flex-row gap-2 items-center justify-start max-w-[664px] px-4 w-full" />
              <TablesRowtransaction className="bg-gray-50_01 border border-gray-300_01 border-solid flex md:flex-col flex-row gap-2 h-10 md:h-auto items-center justify-start max-w-[689px] px-4 w-full" />
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-[61px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
              size="txtHelveticaBold30Bluegray900"
            >
              APPLICATIONS
            </Text>
            <div className="flex md:flex-col flex-row font-notosans md:gap-10 gap-[62px] items-center justify-start ml-1.5 md:ml-[0] mt-[50px] w-[76%] md:w-full">
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-12 items-center justify-start p-4 rounded-[5px] w-[54%] md:w-full">
                <TablesRow className="bg-gray-50_01 border border-gray-300_01 border-solid flex md:flex-col flex-row gap-2 h-10 md:h-auto items-center justify-start max-w-[1022px] px-4 w-full" />
                <TablesTyperow className="flex md:flex-col flex-row gap-2 items-center justify-start max-w-[1013px] px-4 py-2 w-full" />
              </div>
              <List
                className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica gap-10 p-4 rounded-[5px] w-[44%]"
                orientation="vertical"
              >
                <TablesPropertylabel className="flex flex-col gap-4 items-start justify-start py-4 w-[524px] sm:w-full" />
                <TablesPropertyrowpag className="flex flex-col gap-4 items-center justify-start py-2 w-[521px] sm:w-full" />
              </List>
            </div>
            <div className="flex md:flex-col flex-row font-notosans gap-[19px] items-start justify-between md:ml-[0] ml-[5px] mt-12 w-full">
              <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col gap-[55px] items-center justify-start p-4 rounded-[5px] w-[41%] md:w-full">
                <TablesProperty1row1 className="flex md:flex-col flex-row gap-2 items-center justify-start max-w-[1031px] px-4 w-full" />
                <TablesRowtransactionTwo className="flex md:flex-col flex-row gap-2 h-10 md:h-auto items-center justify-start max-w-[1031px] px-4 w-full" />
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex md:flex-1 flex-col font-helvetica items-center justify-start pl-4 py-4 rounded-[5px] w-[59%] md:w-full">
                <TablesColumnFive className="flex flex-col gap-6 items-start justify-start max-w-[1504px] sm:px-5 px-6 py-4 w-full" />
                <TablesProperty1row2 className="flex flex-col gap-6 items-center justify-start max-w-[1504px] mt-1 sm:px-5 px-6 py-4 w-full" />
              </div>
            </div>
            <Text
              className="mt-[62px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
              size="txtHelveticaBold30Bluegray900"
            >
              PAGES
            </Text>
            <TablesRowtodo className="flex md:flex-col flex-row font-roboto gap-6 h-[88px] md:h-auto items-start justify-start max-w-[882px] mt-[57px] w-full" />
            <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica items-center justify-start mt-12 p-4 rounded-[5px] w-[37%] md:w-full">
              <TablesTypetype3 className="flex flex-col gap-4 items-start justify-start max-w-[916px] p-4 w-full" />
            </div>
            <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica items-center justify-start mt-12 p-4 rounded-[5px] w-[43%] md:w-full">
              <TablesTypetype31 className="flex flex-col gap-4 h-[65px] md:h-auto items-center justify-start max-w-[1087px] pb-4 pt-2 px-4 w-full" />
            </div>
            <Text
              className="md:ml-[0] ml-[3px] mt-[94px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
              size="txtHelveticaBold30Bluegray900"
            >
              E-COMMERCE DASHBOARD
            </Text>
            <div className="flex md:flex-col flex-row font-helvetica md:gap-10 items-start justify-between mt-[43px] w-[94%] md:w-full">
              <TablesColumnSix
                className="flex flex-col items-center justify-between max-w-[929px] md:mt-0 mt-[26px] px-4 py-3 w-full"
                us="images/img_us.png"
                separatorzero="images/img_separator0.svg"
              />
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-10 items-center justify-start p-4 rounded-[5px] w-[48%] md:w-full">
                <TablesProperty1label className="flex flex-col gap-4 items-start justify-start max-w-[1124px] py-4 w-full" />
                <TablesProductstable
                  className="flex flex-col gap-4 items-center justify-start max-w-[1124px] py-2 w-full"
                  price="$4.300"
                  priceOne="$4.300"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-notosans md:gap-10 items-center justify-between ml-3 md:ml-[0] mt-11 w-[93%] md:w-full">
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col gap-[50px] items-center justify-start p-4 rounded-[5px] w-[48%] md:w-full">
                <TablesProperty1label1 className="flex flex-col gap-6 items-start justify-start max-w-[1124px] sm:px-5 px-6 py-4 w-full" />
                <TablesProperty1row3 className="flex flex-col font-helvetica gap-6 items-center justify-start max-w-[1124px] sm:px-5 px-6 py-4 w-full" />
              </div>
              <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica gap-14 items-center justify-start p-4 rounded-[5px] w-[48%] md:w-full">
                <TablesProperty1label2 className="flex flex-col gap-4 items-start justify-start max-w-[1124px] sm:px-5 px-6 py-4 w-full" />
                <TablesColumnEight
                  className="flex flex-col gap-4 h-[65px] md:h-auto items-center justify-start max-w-[1124px] pb-4 pt-2 sm:px-5 px-6 w-full"
                  separatorzeroSix="images/img_separator.svg"
                />
              </div>
            </div>
            <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica items-center justify-start md:ml-[0] ml-[9px] mt-[59px] p-4 rounded-[5px] w-3/5 md:w-full">
              <TablesTypeheader className="flex flex-col gap-6 items-start justify-start max-w-[1522px] sm:px-5 px-6 py-4 w-full" />
              <TablesTyperow1
                className="flex flex-col gap-6 items-center justify-start max-w-[1522px] my-[5px] sm:px-5 px-6 py-3 w-full"
                usericonbutton="images/img_checkmark_light_green_a700.svg"
                usertext1="Paid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablesPage;
