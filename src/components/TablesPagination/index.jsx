import React from "react";

import { Img, List, Text } from "components";

const TablesPagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-400 text-sm w-auto"
          size="txtHelvetica14Bluegray400"
        >
          {props?.paginationinfo}
        </Text>
        <div className="flex flex-row gap-1 items-start justify-start w-auto">
          <Img className="h-9 w-9" src="images/img_left.svg" alt="left" />
          <List
            className="sm:flex-col flex-row gap-1 grid grid-cols-3 w-[37%]"
            orientation="horizontal"
          >
            <div className="h-9 md:h-[34px] pb-0.5 pl-0.5 relative rotate-[-90deg] shadow-bs5 w-full">
              <div className="absolute bg-gradient7  h-[34px] right-[0] rounded-[50%] top-[0] w-[34px]"></div>
              <Text
                className="absolute inset-x-[0] mx-auto rotate-[90deg] text-center text-sm text-white-A700 top-[22%] w-max"
                size="txtHelvetica14WhiteA700"
              >
                {props?.one}
              </Text>
            </div>
            <div className="h-9 md:h-[34px] pb-0.5 pl-0.5 relative rotate-[-90deg] shadow-bs5 w-full">
              <div className="absolute border border-blue_gray-50 border-solid h-[34px] right-[0] rounded-[50%] top-[0] w-[34px]"></div>
              <Text
                className="absolute right-[36%] rotate-[90deg] text-blue_gray-400 text-center text-sm top-[22%]"
                size="txtHelvetica14Bluegray400"
              >
                {props?.two}
              </Text>
            </div>
            <div className="h-9 md:h-[34px] pb-0.5 pl-0.5 relative rotate-[-90deg] shadow-bs5 w-full">
              {!!props?.ellipsetwo ? (
                <div className="absolute border border-blue_gray-50 border-solid h-[34px] right-[0] rounded-[50%] top-[0] w-[34px]"></div>
              ) : null}
              {!!props?.three ? (
                <Text
                  className="absolute right-[36%] rotate-[90deg] text-blue_gray-400 text-center text-sm top-[22%]"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.three}
                </Text>
              ) : null}
            </div>
          </List>
          <List
            className="sm:flex-col flex-row gap-1 grid grid-cols-3 w-[37%]"
            orientation="horizontal"
          >
            <div className="h-9 md:h-[34px] pb-0.5 pl-0.5 relative rotate-[-90deg] shadow-bs5 w-full">
              {!!props?.ellipsetwo3 ? (
                <div className="absolute border border-blue_gray-50 border-solid h-[34px] right-[0] rounded-[50%] top-[0] w-[34px]"></div>
              ) : null}
              {!!props?.one3 ? (
                <Text
                  className="absolute h-max inset-y-[0] my-auto right-[33%] rotate-[90deg] text-blue_gray-400 text-center text-sm"
                  size="txtOpenSansRomanRegular14Bluegray400"
                >
                  {props?.one3}
                </Text>
              ) : null}
            </div>
            <div className="h-9 md:h-[34px] pb-0.5 pl-0.5 relative rotate-[-90deg] shadow-bs5 w-full">
              {!!props?.ellipsetwo3 ? (
                <div className="absolute border border-blue_gray-50 border-solid h-[34px] right-[0] rounded-[50%] top-[0] w-[34px]"></div>
              ) : null}
              {!!props?.one3 ? (
                <Text
                  className="absolute h-max inset-y-[0] my-auto right-[33%] rotate-[90deg] text-blue_gray-400 text-center text-sm"
                  size="txtOpenSansRomanRegular14Bluegray400"
                >
                  {props?.one3}
                </Text>
              ) : null}
            </div>
            <div className="h-9 md:h-[34px] pb-0.5 pl-0.5 relative rotate-[-90deg] shadow-bs5 w-full">
              {!!props?.ellipsetwo3 ? (
                <div className="absolute border border-blue_gray-50 border-solid h-[34px] right-[0] rounded-[50%] top-[0] w-[34px]"></div>
              ) : null}
              {!!props?.one3 ? (
                <Text
                  className="absolute h-max inset-y-[0] my-auto right-[33%] rotate-[90deg] text-blue_gray-400 text-center text-sm"
                  size="txtOpenSansRomanRegular14Bluegray400"
                >
                  {props?.one3}
                </Text>
              ) : null}
            </div>
          </List>
          <Img className="h-9 w-9" src="images/img_left.svg" alt="right" />
        </div>
      </div>
    </>
  );
};

TablesPagination.defaultProps = {
  paginationinfo: "Showing 1 to 10 of 57 entries",
  one: "1",
  two: "2",
};

export default TablesPagination;
