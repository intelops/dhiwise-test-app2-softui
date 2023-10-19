import React from "react";

import { Img, Line, Text } from "components";

const ListItemsPropertydefaul = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[7px] h-[136px] md:h-auto items-center justify-start w-auto">
          <div className="flex flex-col h-[26px] md:h-auto items-center justify-center p-2 w-[26px]">
            <Img
              className="h-4 md:h-auto object-cover w-4"
              src="images/img_iconssolid_blue_gray_500.png"
              alt="iconssolid"
            />
          </div>
          <Line className="bg-blue_gray-50 h-[103px] w-0.5" />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-base text-blue_gray-900_01 tracking-[-0.80px] w-auto"
            size="txtNotoSansSemiBold16Bluegray90001"
          >
            {props?.price}
          </Text>
          <Text
            className="text-blue_gray-500 text-xs w-auto"
            size="txtNotoSansBold12Bluegray500"
          >
            {props?.time}
          </Text>
          <div className="flex flex-col items-start justify-start py-4 w-full">
            <Text
              className="leading-[150.00%] max-w-[433px] md:max-w-full text-blue_gray-500 text-sm"
              size="txtNotoSansRegular14Bluegray500"
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

ListItemsPropertydefaul.defaultProps = {
  price: "$2400, Design changes",
  time: "22 DEC 7:20 PM",
  peoplecareabout:
    "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
  badge: "DESIGN",
};

export default ListItemsPropertydefaul;
