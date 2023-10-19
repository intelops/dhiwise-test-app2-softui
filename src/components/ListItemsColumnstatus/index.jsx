import React from "react";

import { Img, Switch, Text } from "components";

const ListItemsColumnstatus = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtHelvetica16Bluegray400"
          >
            {props?.status}
          </Text>
          <Switch
            onColor="#252f40"
            offColor="#e2e8f0"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            value={false}
            className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
          />
        </div>
        <div className="flex flex-col items-start justify-start pr-1.5 py-1.5 w-full">
          <Img
            className="h-[60px]"
            alt="smarthomeassets"
            src={props?.humidityicon}
          />
        </div>
        <Text
          className="text-base text-blue_gray-400 tracking-[-0.80px] w-full"
          size="txtHelveticaBold16Bluegray400"
        >
          {props?.title}
        </Text>
        <Text
          className="text-blue_gray-400 text-xs w-full"
          size="txtHelvetica12Bluegray400"
        >
          {props?.duration}
        </Text>
      </div>
    </>
  );
};

ListItemsColumnstatus.defaultProps = {
  status: "Off",
  humidityicon: "images/img_property1humidity.svg",
  title: "Humidity",
  duration: "Inactive since: 2 days",
};

export default ListItemsColumnstatus;
