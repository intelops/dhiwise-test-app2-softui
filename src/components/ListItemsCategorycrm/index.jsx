import React from "react";

import { Button, Img, Text } from "components";

const ListItemsCategorycrm = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-start w-[260px]">
          <Button
            className="flex h-8 items-center justify-center w-8"
            shape="round"
            color="blue_gray_900"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_iconssolid_white_a700.svg"
              alt="iconssolid_Three"
            />
          </Button>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
              size="txtHelveticaBold16Bluegray900"
            >
              {props?.devices}
            </Text>
            {props?.p250instock346}
          </div>
        </div>
        <div className="flex flex-col h-9 md:h-auto items-center justify-start pl-1 pr-2 py-2 w-9">
          <Img
            className="h-5 w-5"
            src="images/img_arrowright_blue_gray_900_20x20.svg"
            alt="arrowright_Three"
          />
        </div>
      </div>
    </>
  );
};

ListItemsCategorycrm.defaultProps = {
  devices: "Devices",
  p250instock346: (
    <Text className="text-blue_gray-400 text-xs w-auto" size="txtOpenSans12">
      <span className="text-blue_gray-400 font-helvetica text-left font-normal">
        250 in stock,
      </span>
      <span className="text-blue_gray-400 font-opensans text-left font-normal">
        {" "}
      </span>
      <span className="text-blue_gray-400 font-helvetica text-left font-bold">
        346+ sold
      </span>
    </Text>
  ),
};

export default ListItemsCategorycrm;
