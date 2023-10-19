import React from "react";

import { Line, Text } from "components";

const SectionsNamestep = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[43px] md:h-[50px] mt-[7px] relative w-3/4 sm:w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[19%] w-[90%]">
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
              <Line className="bg-blue_gray-900_01 h-0.5 w-[49%]" />
              <Line className="bg-gray-300_87 h-0.5 w-[49%]" />
            </div>
          </div>
          <div className="absolute flex flex-col gap-[7px] h-full inset-[0] items-center justify-center m-auto w-[10%]">
            <div className="bg-blue_gray-900_01 border border-blue_gray-900_01 border-solid h-4 rounded-[50%] w-4"></div>
            <Text
              className="text-blue_gray-900_01 text-center text-sm"
              size="txtNotoSansRegular14Bluegray90001"
            >
              {props?.useraccount}
            </Text>
          </div>
          <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[10%]">
            <div className="bg-white-A700 border border-gray-300 border-solid h-4 rounded-[50%] w-4"></div>
            <Text
              className="text-blue_gray-900_01 text-center text-sm"
              size="txtNotoSansRegular14Bluegray90001"
            >
              {props?.useraddress}
            </Text>
          </div>
          <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[7%]">
            <div className="bg-blue_gray-900_01 h-4 rounded-[50%] w-4"></div>
            <Text
              className="text-blue_gray-900_01 text-center text-sm"
              size="txtNotoSansRegular14Bluegray90001"
            >
              {props?.userabout}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SectionsNamestep.defaultProps = {
  useraccount: "Account",
  useraddress: "Address",
  userabout: "About",
};

export default SectionsNamestep;
