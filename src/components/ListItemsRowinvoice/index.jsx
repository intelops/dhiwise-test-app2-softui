import React from "react";

import { Img, Text } from "components";

const ListItemsRowinvoice = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtHelveticaBold14Bluegray900"
          >
            {props?.date}
          </Text>
          <Text
            className="text-blue_gray-400 text-xs w-auto"
            size="txtHelvetica12Bluegray400"
          >
            {props?.code}
          </Text>
        </div>
        <Text
          className="ml-[151px] text-blue_gray-400 text-sm"
          size="txtHelvetica14Bluegray400"
        >
          {props?.price}
        </Text>
        <div className="flex flex-row gap-1 items-start justify-start ml-[31px] w-auto">
          <Img
            className="h-[17px] w-[11px]"
            src="images/img_arrowright_blue_gray_900.svg"
            alt="arrowright_Five"
          />
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtHelveticaBold14Bluegray900"
          >
            {props?.label}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsRowinvoice.defaultProps = {
  date: "March, 01, 2020",
  code: "#MS-415646",
  price: "$180",
  label: "PDF",
};

export default ListItemsRowinvoice;
