import React from "react";

import { Button, Img, Text } from "components";

const TablesProperty1row = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-start w-full">
          <Button
            className="flex h-8 items-center justify-center rounded-[50%] w-8"
            shape="circle"
            color="gray_50"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-[18px]"
              src="images/img_arrowdown_amber_600.svg"
              alt="arrowdown"
            />
          </Button>
          <Text
            className="text-base text-blue_gray-900_01 tracking-[-0.80px] w-auto"
            size="txtNotoSansSemiBold16Bluegray90001_1"
          >
            {props?.sketch}
          </Text>
        </div>
        <Text
          className="text-blue_gray-500 text-sm w-auto"
          size="txtNotoSansRegular14Bluegray500"
        >
          {props?.price}
        </Text>
        <Text
          className="text-blue_gray-500 text-sm w-auto"
          size="txtNotoSansRegular14Bluegray500"
        >
          {props?.time}
        </Text>
        <div className="flex flex-row gap-4 items-center justify-start w-full">
          <div className="border border-gray-300 border-solid flex flex-col items-center justify-start px-2 rounded-md w-[27%]">
            <Img
              className="h-8 w-8"
              src="images/img_signal_light_blue_900_32x32.svg"
              alt="signal"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-blue_gray-900_01 text-sm w-auto"
              size="txtNotoSansRegular14Bluegray90001"
            >
              {props?.visacounter}
            </Text>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtNotoSansRegular14Bluegray500"
            >
              {props?.expirydate}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 w-10">
          <div className="flex flex-col h-[30px] md:h-auto items-center justify-center p-2 w-[30px]">
            <Img
              className="h-full w-full"
              src="images/img_edit_blue_gray_500.svg"
              alt="edit_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TablesProperty1row.defaultProps = {
  sketch: "Sketch",
  price: "- $198.00",
  time: "Wed 3:00pm",
  visacounter: "Visa 1234",
  expirydate: "Expiry 06/2026",
};

export default TablesProperty1row;
