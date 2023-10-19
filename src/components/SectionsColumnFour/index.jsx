import React from "react";

import { Button, Img, Line, List, Text } from "components";

const SectionsColumnFour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end p-3.5 w-[97%] md:w-full">
          <div className="h-[43px] md:h-[50px] mt-[7px] relative w-3/4 sm:w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[19%] w-[90%]">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Line className="bg-blue_gray-900_01 h-0.5 w-[49%]" />
                <Line className="bg-white-A700_87 h-0.5 w-[49%]" />
              </div>
            </div>
            <div className="absolute flex flex-col gap-[7px] h-full inset-[0] items-center justify-center m-auto w-[10%]">
              <div className="bg-blue_gray-900_01 border border-blue_gray-900_01 border-solid h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-blue_gray-900_01 text-center text-sm"
                size="txtNotoSansRegular14Bluegray90001"
              >
                {props?.accountOne}
              </Text>
            </div>
            <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[10%]">
              <div className="bg-white-A700 border border-gray-300 border-solid h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-center text-sm text-white-A700"
                size="txtNotoSansRegular14WhiteA700"
              >
                {props?.addressOne}
              </Text>
            </div>
            <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[7%]">
              <div className="bg-blue_gray-900_01 h-4 rounded-[50%] w-4"></div>
              <Text
                className="text-blue_gray-900_01 text-center text-sm"
                size="txtNotoSansRegular14Bluegray90001"
              >
                {props?.aboutOne}
              </Text>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start p-8 sm:px-5 rounded-[24px] w-full"
          style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
        >
          <div className="flex flex-col items-center justify-start mb-[66px] mt-[3px] w-full">
            <Text
              className="text-blue_gray-900 text-center text-xl tracking-[-0.80px]"
              size="txtHelveticaBold20Bluegray900"
            >
              {props?.userdoing}
            </Text>
            <Text
              className="mt-3.5 text-base text-blue_gray-400 text-center"
              size="txtHelvetica16Bluegray400"
            >
              {props?.userdetails}
            </Text>
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 justify-start mt-10 w-auto sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[18px] items-center justify-start w-auto">
                <div className="border border-blue_gray-900_01 border-solid flex flex-col items-center justify-start p-[53px] md:px-10 sm:px-5 rounded-[7px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconssolid_gray_900_03.svg"
                    alt="iconssolid"
                  />
                </div>
                <Text
                  className="text-base text-blue_gray-900_01 text-center tracking-[-0.80px] w-auto"
                  size="txtNotoSansSemiBold16Bluegray90001"
                >
                  {props?.userdesigntext}
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start w-auto">
                <div className="border border-blue_gray-900_01 border-solid flex flex-col items-center justify-start p-[53px] md:px-10 sm:px-5 rounded-[7px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_trash_blue_gray_900_01.svg"
                    alt="trash"
                  />
                </div>
                <Text
                  className="text-base text-blue_gray-900_01 text-center tracking-[-0.80px] w-auto"
                  size="txtNotoSansSemiBold16Bluegray90001"
                >
                  {props?.usercodetext}
                </Text>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start w-auto">
                <div className="border border-blue_gray-900_01 border-solid flex flex-col items-center justify-start p-[53px] md:px-10 sm:px-5 rounded-[7px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_ticket_gray_900_03_24x24.svg"
                    alt="ticket"
                  />
                </div>
                <Text
                  className="text-base text-blue_gray-900_01 text-center tracking-[-0.80px] w-auto"
                  size="txtNotoSansSemiBold16Bluegray90001"
                >
                  {props?.userdeveloptext}
                </Text>
              </div>
            </List>
            <div className="flex flex-row flex-wrap sm:gap-10 items-center justify-between max-w-[779px] mt-9 w-full">
              <Button
                className="cursor-pointer font-bold font-helvetica h-10 min-w-[81px] text-center text-xs uppercase"
                shape="round"
                size="lg"
                variant="gradient"
                color="blue_gray_100_blue_gray_50_01"
              >
                {props?.userprevbutton}
              </Button>
              <Button
                className="cursor-pointer font-bold font-helvetica h-10 leading-[normal] min-w-[83px] text-[13px] text-center uppercase"
                shape="round"
                size="lg"
                variant="gradient"
                color="blue_gray_700_01_gray_900_02"
              >
                {props?.usernextbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SectionsColumnFour.defaultProps = {
  accountOne: "Account",
  addressOne: "Address",
  aboutOne: "About",
  userdoing: "What are you doing? (checkboxes)",
  userdetails:
    "Give us more details about you. What do you enjoy doing in your spare time?",
  userdesigntext: "Design",
  usercodetext: "Code",
  userdeveloptext: "Develop",
  userprevbutton: "Prev",
  usernextbutton: "Next",
};

export default SectionsColumnFour;
