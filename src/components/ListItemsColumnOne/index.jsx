import React from "react";

import { Text } from "components";

const ListItemsColumnOne = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
      >
        <div className="flex flex-col gap-4 items-center justify-start w-[37%] md:w-full">
          <div className="flex flex-row items-end justify-start w-auto">
            <Text
              className="bg-clip-text bg-gradient7  sm:text-4xl md:text-[38px] text-[40px] text-right text-transparent tracking-[-0.80px] w-auto"
              size="txtHelveticaBold40Deeppurple500"
            >
              {props?.text}
            </Text>
            <Text
              className="bg-clip-text bg-gradient7  text-lg text-transparent w-auto"
              size="txtOpenSansBold18"
            >
              {props?.smalltext}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 text-center tracking-[-0.80px] w-auto"
              size="txtHelveticaBold16Bluegray900"
            >
              {props?.titleThree}
            </Text>
            <Text
              className="text-blue_gray-400 text-center text-sm w-auto"
              size="txtHelvetica14Bluegray400"
            >
              {props?.description}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsColumnOne.defaultProps = {
  text: "21",
  smalltext: "°C",
  titleThree: "Living Room",
  description: "Temperature",
};

export default ListItemsColumnOne;
