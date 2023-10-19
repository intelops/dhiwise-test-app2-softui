import React from "react";

import { Button, Img, Line, Text } from "components";

const ListItemsPropertydark = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[7px] h-[136px] md:h-auto items-center justify-start w-auto">
          <Button
            className="flex h-[26px] items-center justify-center rounded-[50%] w-[26px]"
            shape="circle"
            color="blue_gray_900"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_iconssolid_blue_gray_500.png"
              alt="iconssolid"
            />
          </Button>
          <Line className="bg-blue_gray-50 h-[103px] w-0.5" />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-base text-gray-50 tracking-[-0.80px] w-auto"
            size="txtNotoSansSemiBold16Gray50"
          >
            {props?.price}
          </Text>
          <Text
            className="text-blue_gray-100 text-xs w-auto"
            size="txtNotoSansBold12Bluegray100"
          >
            {props?.time}
          </Text>
          <div className="flex flex-col items-start justify-start py-4 w-full">
            <Text
              className="leading-[150.00%] max-w-[433px] md:max-w-full text-blue_gray-100 text-sm"
              size="txtNotoSansRegular14Bluegray100"
            >
              {props?.peoplecareabout}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="bg-gradient17  px-2 rounded-md text-center text-white-A700 text-xs uppercase w-auto"
              size="txtOpenSansBold12WhiteA700"
            >
              {props?.badge}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsPropertydark.defaultProps = {
  price: "$2400, Design changes",
  time: "22 DEC 7:20 PM",
  peoplecareabout:
    "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
  badge: "DESIGN",
};

export default ListItemsPropertydark;
