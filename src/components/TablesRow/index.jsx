import React from "react";

import { List, Text } from "components";

const TablesRow = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 grid-cols-2 w-[54%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-start justify-start py-2 w-full">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.transaction}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start py-2 w-full">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.transaction1}
            </Text>
          </div>
        </List>
        <List
          className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 grid-cols-2 w-[42%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-start justify-start py-2 w-[200px]">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.transaction2}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start py-2 w-[200px]">
            <Text
              className="text-blue_gray-500_b2 text-xs w-auto"
              size="txtNotoSansBold12Bluegray500b2"
            >
              {props?.transaction3}
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

TablesRow.defaultProps = {
  transaction: "Member",
  transaction1: "Function",
  transaction2: "Status",
  transaction3: "Employed",
};

export default TablesRow;
