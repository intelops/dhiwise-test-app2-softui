import React from "react";

import { Button, Img, Text } from "components";

const ListItemsColumniconssolid = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-8 items-center justify-center w-8"
          shape="round"
          color="blue_gray_900"
          size="sm"
          variant="fill"
        >
          <Img
            className="h-4"
            src="images/img_iconssolid.svg"
            alt="iconssolid"
          />
        </Button>
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtNotoSansRegular14Bluegray500"
          >
            {props?.todaysrevenue}
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl tracking-[-0.80px] w-auto"
            size="txtNotoSansSemiBold24"
          >
            {props?.priceThree}
          </Text>
          <div className="flex flex-row gap-1 items-center justify-start w-auto">
            <div className="flex flex-row gap-0.5 items-center justify-start px-2 py-1 rounded-md w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_arrowup_light_green_a700_16x16.svg"
                alt="arrowup_One"
              />
              <Text
                className="text-center text-light_green-A700 text-sm w-auto"
                size="txtHelveticaBold14LightgreenA700"
              >
                {props?.onehundredfive}
              </Text>
            </div>
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtNotoSansRegular14Bluegray500"
            >
              {props?.priceFour}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsColumniconssolid.defaultProps = {
  todaysrevenue: <>Today&#39;s Revenue</>,
  priceThree: "$99,118.5",
  onehundredfive: "10.5%",
  priceFour: "from $89,740.00",
};

export default ListItemsColumniconssolid;
