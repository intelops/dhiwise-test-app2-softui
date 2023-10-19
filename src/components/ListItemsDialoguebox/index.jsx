import React from "react";

import { Img, Text } from "components";

const ListItemsDialoguebox = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-900 text-sm w-auto"
          size="txtHelvetica14"
        >
          {props?.dailydesignlinktext}
        </Text>
        <div className="flex flex-row gap-1 items-start justify-start w-auto">
          {!!props?.checkmarkimage ? (
            <Img
              className="h-4 w-4"
              alt="checkmark_One"
              src={props?.checkmarkimage}
            />
          ) : null}
          {!!props?.timetext ? (
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtHelvetica12Bluegray400"
            >
              {props?.timetext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

ListItemsDialoguebox.defaultProps = {
  dailydesignlinktext:
    "Can it generate daily design links that include essays and data visualizations ?",
};

export default ListItemsDialoguebox;
