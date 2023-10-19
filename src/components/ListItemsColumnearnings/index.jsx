import React from "react";

import { Text } from "components";

const ListItemsColumnearnings = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="bg-clip-text bg-gradient7  text-base text-center text-transparent tracking-[-0.80px] w-auto"
          size="txtHelveticaBold16Deeppurple500"
        >
          {props?.earnings}
        </Text>
        <div className="flex flex-row gap-1 items-end justify-start w-auto">
          {!!props?.currencysymbol ? (
            <Text
              className="text-blue_gray-900 text-center text-sm w-full"
              size="txtHelvetica14"
            >
              {props?.currencysymbol}
            </Text>
          ) : null}
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[-0.80px] w-auto"
            size="txtHelveticaBold24Bluegray900"
          >
            {props?.earningsamount}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsColumnearnings.defaultProps = {
  earnings: "Earnings",
  earningsamount: "23,980",
};

export default ListItemsColumnearnings;
