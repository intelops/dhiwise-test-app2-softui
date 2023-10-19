import React from "react";

import { Img, Text } from "components";

const ListItemsRowlogomastercard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[25px]"
          src="images/img_logomastercard.svg"
          alt="logomastercard"
        />
        <Text
          className="ml-[15px] text-base text-blue_gray-900_01 text-center"
          size="txtOpenSansBold16"
        >
          {props?.passwordone}
        </Text>
        <Text
          className="ml-1.5 text-base text-blue_gray-900_01 text-center"
          size="txtOpenSansBold16"
        >
          {props?.passwordtwo}
        </Text>
        <Text
          className="ml-1.5 text-base text-blue_gray-900_01 text-center"
          size="txtOpenSansBold16"
        >
          {props?.passwordthree}
        </Text>
        <Text
          className="ml-2 text-base text-blue_gray-900_01 text-center"
          size="txtOpenSansBold16"
        >
          {props?.zipcode}
        </Text>
        <Img
          className="h-[22px] ml-[116px]"
          src="images/img_arrowright_blue_gray_900.svg"
          alt="arrowright_Four"
        />
      </div>
    </>
  );
};

ListItemsRowlogomastercard.defaultProps = {
  passwordone: "****",
  passwordtwo: "****",
  passwordthree: "****",
  zipcode: "7852",
};

export default ListItemsRowlogomastercard;
