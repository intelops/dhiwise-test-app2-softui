import React from "react";

import { Img, Text } from "components";

const ListItemsColumnSeven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[17px] items-center justify-start w-full">
          <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
            <Text
              className="text-blue_gray-900 text-xl tracking-[-0.80px]"
              size="txtNotoSansSemiBold20"
            >
              {props?.howdoiorderOne}
            </Text>
            <Img
              className="h-5 mt-2 w-[19px]"
              src="images/img_iconssolid_blue_gray_900_01_20x19.svg"
              alt="iconssolid_Seven"
            />
          </div>
          <Img
            className="h-px"
            src="images/img_separator.svg"
            alt="separatorZero_Four"
          />
        </div>
      </div>
    </>
  );
};

ListItemsColumnSeven.defaultProps = { howdoiorderOne: "How do I order?" };

export default ListItemsColumnSeven;
