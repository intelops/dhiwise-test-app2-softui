import React from "react";

import { Img, List, Text } from "components";

const TablesColumnSix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
            <div className="flex flex-row gap-3 items-start justify-start w-[200px]">
              <div className="flex flex-col h-10 items-center justify-start p-2 w-10">
                <div className="flex flex-col items-center justify-start my-[3px] w-[96%] md:w-full">
                  {!!props?.us ? (
                    <Img
                      className="h-[17px] md:h-auto object-cover w-full"
                      alt="us"
                      src={props?.us}
                    />
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-400_02 text-xs w-auto"
                  size="txtHelveticaBold12Bluegray40002"
                >
                  {props?.labelcountry}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold16Bluegray900"
                >
                  {props?.country}
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[132px] grid sm:grid-cols-1 grid-cols-3 w-[63%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[5px] items-center justify-start sm:ml-[0] w-[100px]">
                <Text
                  className="text-blue_gray-400 text-center text-xs w-auto"
                  size="txtHelveticaBold12Bluegray400"
                >
                  {props?.labelsales}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 text-center tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold16Bluegray900"
                >
                  {props?.value}
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-start sm:ml-[0] w-[100px]">
                <Text
                  className="text-blue_gray-400 text-center text-xs w-auto"
                  size="txtHelveticaBold12Bluegray400"
                >
                  {props?.labelvalue}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 text-center tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold16Bluegray900"
                >
                  {props?.price}
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-start sm:ml-[0] w-[100px]">
                <Text
                  className="text-blue_gray-400 text-center text-xs w-auto"
                  size="txtHelveticaBold12Bluegray400"
                >
                  {props?.labelbounce}
                </Text>
                <Text
                  className="text-base text-blue_gray-900 text-center tracking-[-0.80px] w-auto"
                  size="txtHelveticaBold16Bluegray900"
                >
                  {props?.value1}
                </Text>
              </div>
            </List>
          </div>
          {!!props?.separatorzero ? (
            <Img
              className="h-px w-[929px]"
              alt="separatorZero"
              src={props?.separatorzero}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

TablesColumnSix.defaultProps = {
  labelcountry: "Country:",
  country: "United States",
  labelsales: "Sales:",
  value: "2.500",
  labelvalue: "Value:",
  price: "$230,900",
  labelbounce: "Bounce:",
  value1: "29.90%",
};

export default TablesColumnSix;
