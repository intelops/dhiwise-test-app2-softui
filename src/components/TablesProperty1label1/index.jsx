import React from "react";

import { Img, List, Text } from "components";

const TablesProperty1label1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[96%] md:w-full">
            <div className="flex flex-row gap-2 h-full items-center justify-start w-full">
              <Text
                className="flex-1 text-[10px] text-blue_gray-500 w-auto"
                size="txtNotoSansBold10Bluegray500"
              >
                {props?.product}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_arrowdown_blue_gray_100_02.svg"
                alt="arrowdown_One"
              />
            </div>
            <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start w-40">
              <Text
                className="flex-1 text-[10px] text-blue_gray-500 w-auto"
                size="txtNotoSansBold10Bluegray500"
              >
                {props?.category}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_arrowdown_blue_gray_100_02.svg"
                alt="arrowdown_Two"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[18%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start sm:ml-[0] w-20">
                <Text
                  className="flex-1 text-[10px] text-blue_gray-500 w-auto"
                  size="txtNotoSansBold10Bluegray500"
                >
                  {props?.price}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown_blue_gray_100_02.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start sm:ml-[0] w-20">
                <Text
                  className="flex-1 text-[10px] text-blue_gray-500 w-auto"
                  size="txtNotoSansBold10Bluegray500"
                >
                  {props?.sku}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown_blue_gray_100_02.svg"
                  alt="arrowdown"
                />
              </div>
            </List>
            <div className="flex flex-row gap-6 items-center justify-center w-1/5 md:w-full">
              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start w-20">
                <Text
                  className="flex-1 text-[10px] text-blue_gray-500 w-auto"
                  size="txtNotoSansBold10Bluegray500"
                >
                  {props?.quantity}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown_blue_gray_100_02.svg"
                  alt="arrowdown_Three"
                />
              </div>
              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start w-[108px]">
                <Text
                  className="flex-1 text-[10px] text-blue_gray-500 w-auto"
                  size="txtNotoSansBold10Bluegray500"
                >
                  {props?.status}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown_blue_gray_100_02.svg"
                  alt="arrowdown_Four"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start w-[92px]">
              <Text
                className="flex-1 text-[10px] text-blue_gray-500 w-auto"
                size="txtNotoSansBold10Bluegray500"
              >
                {props?.action}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_arrowdown_blue_gray_100_02.svg"
                alt="arrowdown_Five"
              />
            </div>
          </div>
          <Img
            className="h-px w-[1121px]"
            src="images/img_separator.svg"
            alt="separatorZero_Three"
          />
        </div>
      </div>
    </>
  );
};

TablesProperty1label1.defaultProps = {
  product: "PRODUCT",
  category: "CATEGORY",
  price: "PRICE",
  sku: "SKU",
  quantity: "QUANTITY",
  status: "STATUS",
  action: "ACTION",
};

export default TablesProperty1label1;
