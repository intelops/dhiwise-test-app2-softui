import React from "react";

import { Text } from "components";

const ListItemsStatisticscard = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
      >
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row gap-1 items-start justify-start w-[257px]">
            <Text
              className="flex-1 text-blue_gray-400 text-sm w-auto"
              size="txtHelveticaBold14Bluegray400"
            >
              {props?.titleEight}
            </Text>
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtHelvetica12Bluegray400"
            >
              {props?.timeTwo}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start py-2 w-auto">
            <Text
              className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
              size="txtHelveticaBold20Bluegray900"
            >
              {props?.priceTen}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Text
              className="text-light_green-A700 text-sm w-auto"
              size="txtHelveticaBold14LightgreenA700"
            >
              {props?.threehundredfortyeightThree}
            </Text>
            <Text
              className="text-base text-blue_gray-400 w-auto"
              size="txtHelvetica16Bluegray400"
            >
              {props?.timeThree}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsStatisticscard.defaultProps = {
  titleEight: "Today’s Money",
  timeTwo: "6 May - 7 May",
  priceTen: "$53,000",
  threehundredfortyeightThree: "+55%",
  timeThree: "since yesterday",
};

export default ListItemsStatisticscard;
