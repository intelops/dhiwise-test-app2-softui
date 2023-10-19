import React from "react";

import { CheckBox, List, Text } from "components";

const TablesRowtransactionTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <CheckBox
          className="font-bold font-notosans text-blue_gray-500_b2 text-left text-xs"
          inputClassName="mr-[5px]"
          name="transaction_Two"
          id="transaction_Two"
          label="All invoices"
          shape="square"
          size="md"
        ></CheckBox>
        <List
          className="sm:flex-col flex-row gap-2 grid grid-cols-3 w-[38%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-start justify-start py-2 w-[120px]">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.transaction}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start py-2 w-[120px]">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.transaction1}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start py-2 w-[120px]">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.transaction2}
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

TablesRowtransactionTwo.defaultProps = {
  transaction: "Status",
  transaction1: "Amount",
  transaction2: "Plan",
};

export default TablesRowtransactionTwo;
