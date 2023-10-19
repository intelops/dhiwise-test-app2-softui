import React from "react";

import { Img, Text } from "components";

const TablesRowimgplaceholder = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-12 md:h-auto object-cover rounded-[12px] w-12"
          alt="imgplaceholder"
          src={props?.userimage}
        />
        <div className="flex flex-col items-start justify-start px-3 w-full">
          <Text
            className="text-base text-blue_gray-900 w-full"
            size="txtHelveticaBold16Bluegray900"
          >
            {props?.chair}
          </Text>
          <div className="flex flex-row gap-0.5 items-start justify-start w-[85px]">
            <Text
              className="text-light_green-A700 text-sm w-auto"
              size="txtHelveticaBold14LightgreenA700"
            >
              {props?.ordercount}
            </Text>
            <Text
              className="text-blue_gray-400 text-sm w-auto"
              size="txtHelveticaBold14Bluegray400"
            >
              {props?.orders}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TablesRowimgplaceholder.defaultProps = {
  userimage: "images/img_imgplaceholder_1.png",
  chair: "Chair",
  ordercount: "8.232",
  orders: "orders",
};

export default TablesRowimgplaceholder;
