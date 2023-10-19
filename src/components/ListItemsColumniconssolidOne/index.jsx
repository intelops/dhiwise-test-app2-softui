import React from "react";

import { Button, Img, Text } from "components";

const ListItemsColumniconssolidOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-12 items-center justify-center w-12"
          shape="round"
          color="white_A700"
          size="lg"
          variant="fill"
        >
          <Img
            className="h-6"
            src="images/img_iconssolid_gray_900.svg"
            alt="iconssolid_One"
          />
        </Button>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Text
            className="text-blue_gray-500 text-sm w-full"
            size="txtNotoSansRegular14Bluegray500"
          >
            {props?.todaysrevenuetext}
          </Text>
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_01 tracking-[-0.80px] w-full"
            size="txtNotoSansSemiBold30"
          >
            {props?.pricetext}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsColumniconssolidOne.defaultProps = {
  todaysrevenuetext: <>Today&#39;s Revenue</>,
  pricetext: "$99,118.5",
};

export default ListItemsColumniconssolidOne;
