import React from "react";

import { Img, Text } from "components";

const ListItemsItemroom = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
              <div className="bg-gradient7  h-6 rounded-lg w-6"></div>
              <Text
                className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                size="txtHelveticaBold16Bluegray900"
              >
                {props?.titleFour}
              </Text>
            </div>
            <Text
              className="text-blue_gray-900 text-right text-xs w-auto"
              size="txtHelvetica12Bluegray900"
            >
              {props?.value}
            </Text>
          </div>
          <Img
            className="h-px mt-1 w-[301px]"
            src="images/img_separator.svg"
            alt="separator"
          />
        </div>
      </div>
    </>
  );
};

ListItemsItemroom.defaultProps = { titleFour: "Living Room", value: "15%" };

export default ListItemsItemroom;
