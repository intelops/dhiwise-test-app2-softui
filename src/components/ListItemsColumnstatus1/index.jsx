import React from "react";

import { Img, Switch, Text } from "components";

const ListItemsColumnstatus1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-base text-white-A700 w-auto"
            size="txtHelvetica16WhiteA700"
          >
            {props?.status}
          </Text>
          <Switch
            onColor="#252f40"
            offColor="#e2e8f0"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            value={true}
            className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
          />
        </div>
        <div className="flex flex-col items-start justify-start pr-1.5 py-1.5 w-full">
          <Img className="h-[60px]" alt="settings" src={props?.settings} />
        </div>
        <Text
          className="text-base text-white-A700 tracking-[-0.80px] w-full"
          size="txtHelveticaBold16WhiteA700"
        >
          {props?.title}
        </Text>
        <Text
          className="text-white-A700 text-xs w-full"
          size="txtHelvetica12WhiteA700"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

ListItemsColumnstatus1.defaultProps = {
  status: "On",
  settings: "images/img_settings_blue_gray_100.svg",
  title: "Humidity",
  description: "Active",
};

export default ListItemsColumnstatus1;
