import React from "react";

import { Button, Img, Text } from "components";

const ListItemsTypeautomotive = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorgradient.png')" }}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start w-[142px]">
            <Text
              className="text-blue_gray-900_99 text-sm w-auto"
              size="txtHelveticaBold14Bluegray90099"
            >
              {props?.title}
            </Text>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                size="txtHelveticaBold20Bluegray900"
              >
                {props?.price}
              </Text>
              {!!props?.threehundredfortyeight ? (
                <Text
                  className="text-light_green-A700 text-sm w-auto"
                  size="txtHelveticaBold14LightgreenA700"
                >
                  {props?.threehundredfortyeight}
                </Text>
              ) : null}
            </div>
          </div>
          <Button
            className="flex h-10 items-center justify-center my-1 w-10"
            shape="round"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img
              className="h-5"
              src="images/img_car_blue_gray_900.svg"
              alt="car"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

ListItemsTypeautomotive.defaultProps = {
  title: <>Today&#39;s Money</>,
  price: "$53,000",
};

export default ListItemsTypeautomotive;
