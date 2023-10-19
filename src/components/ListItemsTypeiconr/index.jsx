import React from "react";

import { Button, Img, Text } from "components";

const ListItemsTypeiconr = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
      >
        <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start w-[298px]">
            <Text
              className="text-blue_gray-900_99 text-sm w-auto"
              size="txtHelveticaBold14Bluegray90099"
            >
              {props?.titleTwo}
            </Text>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                size="txtHelveticaBold20Bluegray900"
              >
                {props?.priceTwo}
              </Text>
              <Text
                className="text-light_green-A700 text-sm w-auto"
                size="txtHelveticaBold14LightgreenA700"
              >
                {props?.threehundredfortyeightTwo}
              </Text>
            </div>
          </div>
          <Button
            className="flex h-10 items-center justify-center w-10"
            shape="round"
            size="md"
            variant="gradient"
            color="blue_gray_700_01_gray_900_02"
          >
            <Img className="h-5" src="images/img_icon.svg" alt="icon_One" />
          </Button>
        </div>
      </div>
    </>
  );
};

ListItemsTypeiconr.defaultProps = {
  titleTwo: <>Today&#39;s Money</>,
  priceTwo: "$53,000",
  threehundredfortyeightTwo: "+55%",
};

export default ListItemsTypeiconr;
