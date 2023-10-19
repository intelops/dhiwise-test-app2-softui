import React from "react";

import { Img, Text } from "components";

const TablesPropertyrowpag = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
            <div className="flex flex-1 flex-col items-center justify-start sm:mt-0 mt-[3px] w-full">
              <Text
                className="text-blue_gray-500 text-sm"
                size="txtHelvetica14Bluegray500"
              >
                {props?.bitscounter}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[70px]">
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtHelvetica14Bluegray500"
              >
                {props?.threehundredfortyfive}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[70px]">
              <Text
                className="text-blue_gray-400_02 text-sm w-auto"
                size="txtHelvetica14Bluegray40002"
              >
                {props?.time}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[70px]">
              <Text
                className="text-blue_gray-400_02 text-sm w-auto"
                size="txtHelvetica14Bluegray40002"
              >
                {props?.edit}
              </Text>
            </div>
          </div>
          <Img
            className="h-px w-[519px]"
            src="images/img_separator.svg"
            alt="separatorZero"
          />
        </div>
      </div>
    </>
  );
};

TablesPropertyrowpag.defaultProps = {
  bitscounter: "1. /bits",
  threehundredfortyfive: "345",
  time: "00:17:07",
  edit: "40.19%",
};

export default TablesPropertyrowpag;
