import React from "react";

import { Img, Text } from "components";

const ListItemsColumnFive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-[98%] md:w-full">
            {!!props?.logosoneOne ? (
              <Img
                className="h-9 md:h-auto object-cover w-9"
                alt="logosOne_One"
                src={props?.logosoneOne}
              />
            ) : null}
            <div className="flex flex-row gap-2 items-center justify-start w-full">
              <Text
                className="flex-1 text-base text-blue_gray-900 tracking-[-0.80px] w-auto"
                size="txtHelveticaBold16Bluegray900"
              >
                {props?.reactsoftuidashOne}
              </Text>
              <Text
                className="text-blue_gray-400 text-xs w-auto"
                size="txtHelvetica12Bluegray400"
              >
                {props?.twentyfive}
              </Text>
            </div>
          </div>
          {!!props?.separatorzeroTwo ? (
            <Img
              className="h-px w-[514px]"
              alt="separatorZero_Two"
              src={props?.separatorzeroTwo}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

ListItemsColumnFive.defaultProps = {
  reactsoftuidashOne: "React Soft UI Dashboard",
  twentyfive: "25%",
};

export default ListItemsColumnFive;
