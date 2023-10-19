import React from "react";

import { Img, Text } from "components";

const ListItemsColumnfacebook = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
          {!!props?.facebook ? (
            <Img
              className="h-[15px] w-4"
              alt="facebook"
              src={props?.facebook}
            />
          ) : null}
          <div className="flex sm:flex-1 flex-row gap-2 items-center justify-start w-[460px] sm:w-full">
            <Text
              className="flex-1 text-blue_gray-900_01 text-sm w-auto"
              size="txtHelveticaBold14Bluegray90001"
            >
              {props?.reactsoftuidashThree}
            </Text>
            <Text
              className="text-blue_gray-500 text-xs w-auto"
              size="txtHelvetica12Bluegray500"
            >
              {props?.twentyfiveOne}
            </Text>
          </div>
        </div>
        {!!props?.progressbar ? (
          <div className="h-2 overflow-hidden relative w-full">
            <div className="w-full h-full absolute bg-indigo_50 rounded-[3px]"></div>
            <div
              className="h-full absolute bg-gray_900_05  rounded-[3px]"
              style={{ width: `${NaN}%` }}
            ></div>
          </div>
        ) : null}
      </div>
    </>
  );
};

ListItemsColumnfacebook.defaultProps = {
  reactsoftuidashThree: "React Soft UI Dashboard",
  twentyfiveOne: "25%",
};

export default ListItemsColumnfacebook;
