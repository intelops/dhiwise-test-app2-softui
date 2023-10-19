import React from "react";

import { Img, List, Text } from "components";

const TablesProperty1label2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-[96%] md:w-full">
            <div className="flex flex-col h-full items-center justify-start w-full">
              <Text
                className="text-[10px] text-blue_gray-400 text-center w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.product}
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[64%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col h-[15px] md:h-auto items-center justify-start w-40">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.price}
                </Text>
              </div>
              <div className="flex flex-col h-[15px] md:h-auto items-center justify-start w-40">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.review}
                </Text>
              </div>
              <div className="flex flex-col h-[15px] md:h-auto items-center justify-start w-40">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.availability}
                </Text>
              </div>
              <div className="flex flex-col h-[15px] md:h-auto items-center justify-start w-40">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.id}
                </Text>
              </div>
            </List>
          </div>
          <Img
            className="h-px w-[1121px]"
            src="images/img_separator.svg"
            alt="separatorZero_Five"
          />
        </div>
      </div>
    </>
  );
};

TablesProperty1label2.defaultProps = {
  product: "PRODUCT",
  price: "PRICE",
  review: "REVIEW",
  availability: "AVAILABILITY",
  id: "ID",
};

export default TablesProperty1label2;
