import React from "react";

import { Img, Line, Text } from "components";

const ListItemsRoworders = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 h-[67px] md:h-auto items-center justify-start py-1 w-auto">
          {!!props?.iconssolidNine ? (
            <Img
              className="h-4 w-4"
              alt="iconssolid_Nine"
              src={props?.iconssolidNine}
            />
          ) : null}
          {!!props?.vectortwentyfive ? (
            <Line className="bg-blue_gray-50 h-[35px] w-0.5" />
          ) : null}
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-sm w-full"
            size="txtHelveticaBold14Bluegray900"
          >
            {props?.price}
          </Text>
          <Text
            className="text-blue_gray-400 text-xs w-full"
            size="txtHelveticaBold12Bluegray400"
          >
            {props?.time}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsRoworders.defaultProps = {
  price: "$2400, Design changes",
  time: "22 DEC 7:20 PM",
};

export default ListItemsRoworders;
