import React from "react";

import { Img, List, Text } from "components";

const TablesProperty1label = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-start w-full">
              <Text
                className="text-[10px] text-blue_gray-400 text-center w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.product}
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[57%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col h-[15px] md:h-auto items-center justify-start sm:ml-[0] w-[200px]">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.value}
                </Text>
              </div>
              <div className="flex flex-col h-[15px] md:h-auto items-center justify-start sm:ml-[0] w-[200px]">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.price}
                </Text>
              </div>
              <div className="flex flex-col h-[15px] md:h-auto items-center justify-start sm:ml-[0] w-[200px]">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.refunds}
                </Text>
              </div>
            </List>
          </div>
          <Img
            className="h-px w-[1122px]"
            src="images/img_separator.svg"
            alt="separatorZero_One"
          />
        </div>
      </div>
    </>
  );
};

TablesProperty1label.defaultProps = {
  product: "PRODUCT",
  value: "VALUE",
  price: "ADS SPENT",
  refunds: "REFUNDS",
};

export default TablesProperty1label;
