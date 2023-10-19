import React from "react";

import { Img, Text } from "components";

const ListItemsColumnSix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
            <Text
              className="text-blue_gray-900_01 text-xl tracking-[-0.80px]"
              size="txtNotoSansSemiBold20Bluegray90001"
            >
              {props?.howdoiorder}
            </Text>
            <Img
              className="h-5 mt-2 w-5"
              src="images/img_iconssolid_blue_gray_900_01.svg"
              alt="iconssolid_Six"
            />
          </div>
          <Img
            className="h-px mt-[17px]"
            src="images/img_separator.svg"
            alt="separatorZero_Three"
          />
          <Text
            className="leading-[150.00%] mt-4 text-blue_gray-900 text-sm w-full"
            size="txtHelvetica14"
          >
            {props?.descriptionTwo}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsColumnSix.defaultProps = {
  howdoiorder: "How do I order?",
  descriptionTwo:
    "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.",
};

export default ListItemsColumnSix;
