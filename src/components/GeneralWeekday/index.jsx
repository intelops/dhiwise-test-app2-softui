import React from "react";

import { Text } from "components";

const GeneralWeekday = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.createfromframe ? (
          <div className="absolute border-b border-blue_gray-50 border-r border-solid h-[84px] inset-[0] justify-center m-auto rotate-[90deg] w-full"></div>
        ) : null}
        <div className="absolute flex flex-col gap-3.5 h-full inset-[0] items-center justify-center m-auto p-[3px] rotate-[-90deg] w-full">
          <Text
            className="mt-1.5 rotate-[90deg] text-blue_gray-400 text-right text-sm"
            size="txtHelveticaBold14Bluegray400"
          >
            {props?.daynumber}
          </Text>
          {!!props?.meetingdetails ? (
            <Text
              className="bg-gradient  h-[34px] mb-[7px] pl-1 sm:pr-5 pr-[35px] py-2.5 rounded-lg text-[10px] text-white-A700 w-[151px]"
              size="txtHelveticaBold10WhiteA700"
            >
              {props?.meetingdetails}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

GeneralWeekday.defaultProps = { daynumber: "29" };

export default GeneralWeekday;
