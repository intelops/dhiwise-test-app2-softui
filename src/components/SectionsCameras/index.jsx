import React from "react";

import { Button, Img, List, Radio, Text } from "components";

const SectionsCameras = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
      >
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-blue_gray-900 tracking-[-0.80px]"
                size="txtOpenSansSemiBold16Bluegray900"
              >
                {props?.cameras}
              </Text>
            </div>
            <div className="bg-gray-50 flex sm:flex-1 sm:flex-col flex-row gap-px items-start justify-start p-1 rounded-[12px] w-auto sm:w-full">
              <Button
                className="!text-blue_gray-900 cursor-pointer font-helvetica h-[35px] rounded-lg text-center text-xs w-[134px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                {props?.lounge}
              </Button>
              <List
                className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[67%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg shadow-bs7 w-[134px]">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <Text
                          className="text-blue_gray-900 text-center text-xs w-6"
                          size="txtHelvetica12Bluegray900"
                        >
                          {props?.text1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg shadow-bs7 w-[134px]">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <Text
                          className="text-blue_gray-900 text-center text-xs w-6"
                          size="txtHelvetica12Bluegray900"
                        >
                          {props?.text1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col h-5 items-center justify-start w-5">
              <Img
                className="h-5 w-5"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </div>
          </div>
          <div className="h-[400px] relative w-full">
            <Img
              className="h-[400px] m-auto object-cover rounded-[12px] w-full"
              alt="smarthomeEleven"
              src={props?.smarthomeeleven}
            />
            <div className="absolute flex flex-col items-center justify-start left-[0] px-2 py-4 rounded-[12px] top-[0] w-auto">
              <Text
                className="text-center text-sm text-white-A700 w-auto"
                size="txtOpenSansRomanRegular14WhiteA700"
              >
                {props?.date}
              </Text>
            </div>
            <div className="absolute bg-white-A700_66 flex flex-col h-[27px] md:h-auto items-center justify-center px-2 right-[1%] rounded-[12px] top-[4%] w-[103px]">
              <div className="flex flex-col items-center justify-center rounded-[12px] w-auto">
                <div className="flex flex-col h-6 md:h-auto items-center justify-start rounded-[12px] w-auto sm:w-full">
                  <Radio
                    value="RECORDING"
                    className="font-bold font-helvetica text-[10px] text-center text-gray-900"
                    inputClassName="mr-[5px] rounded-[7px]"
                    checked={false}
                    name="textSix"
                    label="RECORDING"
                    id="RECORDING"
                  ></Radio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SectionsCameras.defaultProps = {
  cameras: "Cameras",
  lounge: "Lounge",
  text: "Attic",
  text1: "Attic",
  smarthomeeleven: "images/img_smarthome11.png",
  date: "17.05.2021 4:34PM",
};

export default SectionsCameras;
