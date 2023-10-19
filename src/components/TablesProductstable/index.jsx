import React from "react";

import { Button, Img, Text } from "components";

const TablesProductstable = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
            <div className="flex flex-1 md:flex-col flex-row gap-3 h-full items-center justify-start w-full">
              <Img
                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                alt="imgplaceholder"
                src={props?.imgplaceholder}
              />
              <div className="flex flex-1 flex-col items-start justify-start px-3 w-full">
                <Text
                  className="text-base text-blue_gray-900 w-full"
                  size="txtHelveticaBold16Bluegray900"
                >
                  {props?.chair}
                </Text>
                <div className="flex flex-row gap-0.5 items-start justify-start w-full">
                  <Text
                    className="text-light_green-A700 text-sm w-auto"
                    size="txtHelveticaBold14LightgreenA700"
                  >
                    {props?.p8232}
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelveticaBold14Bluegray400"
                  >
                    {props?.orders}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[200px]">
              <Text
                className="text-blue_gray-400 text-sm w-full"
                size="txtHelveticaBold14Bluegray400"
              >
                {props?.price}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[200px]">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtHelveticaBold14Bluegray400"
              >
                {props?.priceOne}
              </Text>
            </div>
            <div className="flex flex-row gap-[7px] items-center justify-start w-[200px]">
              {!!props?.edit ? (
                <Text
                  className="text-blue_gray-400_02 text-sm w-auto"
                  size="txtNotoSansBold14Bluegray40002"
                >
                  {props?.edit}
                </Text>
              ) : null}
              {!!props?.arrowup ? (
                <Img className="h-4 w-4" alt="arrowup" src={props?.arrowup} />
              ) : null}
              {!!props?.info ? (
                <Button
                  className="flex h-6 items-center justify-center rounded-[50%] w-6"
                  shape="circle"
                  color="blue_gray_500"
                  size="sm"
                  variant="outline"
                >
                  <Img alt="info" src={props?.info} />
                </Button>
              ) : null}
            </div>
          </div>
          <Img
            className="h-px w-[1522px]"
            src="images/img_separator.svg"
            alt="separatorZero"
          />
        </div>
      </div>
    </>
  );
};

TablesProductstable.defaultProps = {
  imgplaceholder: "images/img_imgplaceholder_9.png",
  chair: "Mountain Trip Kit (Camera + Backpack)",
  p8232: "921",
  orders: "orders",
  price: "$140.925",
  priceOne: "$20.531",
};

export default TablesProductstable;
