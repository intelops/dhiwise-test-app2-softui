import React from "react";

import { Text } from "components";

const TablesRowletter = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="bg-blue_gray-900 flex h-6 items-center justify-center rounded-[50%] text-center text-white-A700 text-xs w-6"
          size="txtNotoSansBold12WhiteA700"
        >
          {props?.letter}
        </Text>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-blue_gray-700 text-xs w-full"
            size="txtHelveticaBold12Bluegray700"
          >
            {props?.orlandoimietoOne}
          </Text>
        </div>
      </div>
    </>
  );
};

TablesRowletter.defaultProps = {
  letter: "M",
  orlandoimietoOne: "Orlando Imieto",
};

export default TablesRowletter;
