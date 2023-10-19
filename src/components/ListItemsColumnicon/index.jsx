import React from "react";

import { Button, Img, Text } from "components";

const ListItemsColumnicon = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
      >
        <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
          <Button
            className="flex h-10 items-center justify-center sm:mt-0 my-1 w-10"
            shape="round"
            color="blue_gray_900"
            size="md"
            variant="fill"
          >
            <Img className="h-5" src="images/img_icon.svg" alt="icon" />
          </Button>
          <div className="flex flex-col items-start justify-start w-[298px]">
            <Text
              className="text-blue_gray-900_99 text-sm w-auto"
              size="txtHelveticaBold14Bluegray90099"
            >
              {props?.titleOne}
            </Text>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                size="txtHelveticaBold20Bluegray900"
              >
                {props?.priceOne}
              </Text>
              <Text
                className="text-light_green-A700 text-sm w-auto"
                size="txtHelveticaBold14LightgreenA700"
              >
                {props?.threehundredfortyeightOne}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsColumnicon.defaultProps = {
  titleOne: <>Today&#39;s Money</>,
  priceOne: "$53,000",
  threehundredfortyeightOne: "+55%",
};

export default ListItemsColumnicon;
