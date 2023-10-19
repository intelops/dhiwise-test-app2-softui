import React from "react";

import { List, Text } from "components";

const TablesRowtransaction = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start py-2 w-full">
          <Text
            className="text-blue_gray-500_b2 text-xs w-auto"
            size="txtNotoSansBold12Bluegray500b2"
          >
            {props?.transactiontext}
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[32%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-start justify-start py-2 w-[100px]">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.amounttext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start py-2 w-[100px]">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.datetext}
            </Text>
          </div>
        </List>
        <div className="flex flex-col items-start justify-start py-2 w-full">
          <Text
            className="text-blue_gray-500_b2 text-xs w-auto"
            size="txtNotoSansBold12Bluegray500b2"
          >
            {props?.accounttext}
          </Text>
        </div>
      </div>
    </>
  );
};

TablesRowtransaction.defaultProps = {
  transactiontext: "Transaction",
  amounttext: "Amount",
  datetext: "Date",
  accounttext: "Account",
};

export default TablesRowtransaction;
