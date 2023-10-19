import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  SelectBox,
  Text,
} from "components";
import SectionsCameras from "components/SectionsCameras";
import SectionsColumnFour from "components/SectionsColumnFour";
import SectionsColumnSeven from "components/SectionsColumnSeven";
import SectionsColumnrectanglefiftyseven from "components/SectionsColumnrectanglefiftyseven";
import SectionsInsights from "components/SectionsInsights";
import SectionsNamestep from "components/SectionsNamestep";
import SectionsNamestep1 from "components/SectionsNamestep1";
import SectionsNamestep1about from "components/SectionsNamestep1about";
import SectionsNamestep2 from "components/SectionsNamestep2";
import SectionsNamestep3 from "components/SectionsNamestep3";
import SectionsNamestep4 from "components/SectionsNamestep4";
import SectionsNamestep5 from "components/SectionsNamestep5";
import SectionsNamestepabout from "components/SectionsNamestepabout";
import SectionsProperty1input from "components/SectionsProperty1input";
import SectionsRowimgplaceholder from "components/SectionsRowimgplaceholder";

const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SectionsPage = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-inter items-center justify-start mx-auto pb-[104px] w-full">
        <div className="flex flex-col gap-[39px] items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1993px] w-full">
            <div className="bg-purple-500 h-3 w-full"></div>
            <div className="flex flex-col md:gap-10 gap-32 items-start justify-start pb-24 pt-16 md:px-10 px-20 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1833px] mx-auto w-full">
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
              <div className="flex flex-col font-helvetica items-start justify-start max-w-[1833px] mx-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start max-w-5xl w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 tracking-[-0.80px] w-auto"
                      size="txtHelveticaBold40Bluegray900"
                    >
                      Sections
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
                    More complex components used in the theme.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-helvetica md:gap-10 gap-[74px] items-start justify-start max-w-[1841px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[3px] w-[63%] md:w-full">
              <Text
                className="mb-[11px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                DASHBOARD
              </Text>
              <Text
                className="sm:mt-0 mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                size="txtHelveticaBold30Bluegray900"
              >
                APPLICATIONS
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[38%] md:w-full">
                <SectionsInsights className="flex flex-row sm:gap-10 items-center justify-between px-2 w-[577px] sm:w-full" />
                <div className="border border-dashed border-deep_purple-A200_01 flex flex-col font-opensans items-center justify-end mt-12 p-[15px] rounded-[5px] w-[85%] md:w-full">
                  <SectionsRowimgplaceholder className="flex sm:flex-col flex-row gap-6 items-start justify-start w-[548px] sm:w-full" />
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-[31px] w-[548px] sm:w-full">
                    <div className="bg-blue_gray-100_03 h-12 rounded-[50%] w-12"></div>
                    <Input
                      name="inputwithaddons"
                      placeholder="Write your comment..."
                      className="!placeholder:text-blue_gray-200 !text-blue_gray-200 p-0 text-left text-sm w-full"
                      wrapClassName="border border-gray-300 border-solid flex md:h-auto w-full"
                      suffix={
                        <div className="h-5 mt-3.5 w-5 outline-blue_gray-200 outline-[0.5px] outline">
                          <Img
                            className="h-5 my-auto"
                            src="images/img_edit_blue_gray_200.svg"
                            alt="edit"
                          />
                        </div>
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <SectionsProperty1input className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-9 w-[548px] sm:w-full" />
                </div>
                <SectionsColumnrectanglefiftyseven className="bg-white-A700 border border-gray-300 border-solid flex flex-col font-helvetica gap-6 items-center justify-start mt-12 p-6 sm:px-5 rounded-[12px] shadow-bs w-auto md:w-full" />
                <SectionsCameras
                  className="bg-cover bg-no-repeat flex flex-col font-opensans gap-4 h-[491px] items-end justify-start max-w-[691px] mt-[69px] p-4 rounded-[12px] w-full"
                  style={{
                    backgroundImage: "url('images/img_colorwhite.svg')",
                  }}
                />
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[3px] w-1/2 md:w-full">
                <List
                  className="border border-dashed border-deep_purple-A200_02 flex flex-col font-notosans gap-12 p-4 rounded-[5px] w-[93%]"
                  orientation="vertical"
                >
                  <SectionsNamestepabout className="flex flex-col items-center justify-end my-0 p-3.5 w-full" />
                  <SectionsNamestep className="flex flex-col items-center justify-end my-0 p-3.5 w-full" />
                  <SectionsNamestep1 className="flex flex-col items-center justify-end my-0 p-3.5 w-full" />
                </List>
                <div className="border border-dashed border-deep_purple-A200_02 flex flex-col font-notosans gap-8 items-center justify-start mt-12 p-4 rounded-[5px] w-[98%] md:w-full">
                  <SectionsNamestep1about className="flex flex-col gap-4 items-center justify-start w-[98%] md:w-full" />
                  <SectionsColumnFour className="flex flex-col gap-4 items-center justify-start w-[98%] md:w-full" />
                  <SectionsColumnSeven className="flex flex-col gap-4 items-center justify-start mb-2 w-[98%] md:w-full" />
                </div>
                <Text
                  className="ml-1.5 md:ml-[0] mt-[58px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 tracking-[-0.80px]"
                  size="txtHelveticaBold30Bluegray900"
                >
                  E-COMMERCE
                </Text>
                <List
                  className="border border-dashed border-deep_purple-A200_01 flex flex-col font-helvetica gap-[85px] items-center mt-[21px] p-4 rounded-[5px] w-full"
                  orientation="vertical"
                >
                  <SectionsNamestep2 className="sm:h-[116px] md:h-[42px] h-[43px] pl-2 relative w-full" />
                  <SectionsNamestep3 className="sm:h-[116px] md:h-[42px] h-[43px] pl-2 relative w-full" />
                  <SectionsNamestep4 className="sm:h-[116px] md:h-[42px] h-[43px] pl-2 relative w-full" />
                  <SectionsNamestep5 className="sm:h-[116px] md:h-[42px] h-[43px] pl-2 relative w-full" />
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsPage;
