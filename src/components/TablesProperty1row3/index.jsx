import React from "react";

import { Button, Img, Text } from "components";

const TablesProperty1row3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[96%] md:w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img
                className="h-6 md:h-auto object-cover w-6"
                alt="checkbox_One"
                src={props?.checkboxOne}
              />
              <Img
                className="h-12 md:h-auto object-cover rounded-md w-12"
                alt="imgplaceholder_Four"
                src={props?.imgplaceholderFour}
              />
              <div className="flex flex-1 flex-col items-start justify-start px-3 w-full">
                <Text
                  className="text-base text-blue_gray-900 w-full"
                  size="txtHelveticaBold16Bluegray900"
                >
                  {props?.hoodie}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-40">
              <Text
                className="text-blue_gray-500 text-center text-sm w-auto"
                size="txtNotoSansRegular14Bluegray500"
              >
                {props?.editFive}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-20">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtNotoSansRegular14Bluegray500"
              >
                {props?.priceTwo}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-20">
              <Text
                className="text-blue_gray-500 text-center text-sm w-auto"
                size="txtNotoSansRegular14Bluegray500"
              >
                {props?.editSix}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-20">
              <Text
                className="text-blue_gray-500 text-center text-sm w-auto"
                size="txtNotoSansRegular14Bluegray500"
              >
                {props?.editSeven}
              </Text>
            </div>
            <div className="flex flex-col h-12 md:h-auto items-center justify-start w-[108px]">
              <Button
                className="cursor-pointer font-bold font-helvetica min-w-[62px] rounded text-center text-xs"
                shape="round"
                color="light_green_A100"
                size="xs"
                variant="fill"
              >
                {props?.inStock}
              </Button>
            </div>
            <Img
              className="h-[31px] w-[92px]"
              src="images/img_car_blue_gray_400.svg"
              alt="car"
            />
          </div>
          <Img
            className="h-px w-[1121px]"
            src="images/img_separator.svg"
            alt="separatorZero_Four"
          />
        </div>
      </div>
    </>
  );
};

TablesProperty1row3.defaultProps = {
  checkboxOne: "images/img_checkbox_24x24.png",
  imgplaceholderFour: "images/img_imgplaceholder_2.png",
  hoodie: "Hoodie",
  editFive: "Clothing",
  priceTwo: "$89.53",
  editSix: "243598234",
  editSeven: "0",
  inStock: "In stock",
};

export default TablesProperty1row3;
