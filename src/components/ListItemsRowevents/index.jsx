import React from "react";

import { Button, Img, Text } from "components";

const ListItemsRowevents = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-end justify-start w-[95%] md:w-full">
          <Button
            className="flex h-12 items-center justify-center rounded-lg w-12"
            shape="round"
            color="red_500_5d"
            size="xl"
            variant="fill"
          >
            <Img
              className="h-[18px]"
              src="images/img_iconssolid_red_a700.svg"
              alt="iconssolid_Five"
            />
          </Button>
          <div className="flex flex-col gap-1.5 items-start justify-start mt-[5px]">
            <Text
              className="text-base text-blue_gray-900 tracking-[-0.80px]"
              size="txtHelveticaBold16Bluegray900"
            >
              {props?.eventtitle}
            </Text>
            <Text
              className="text-blue_gray-400 text-sm"
              size="txtHelvetica14Bluegray400"
            >
              {props?.eventtime}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsRowevents.defaultProps = {
  eventtitle: "Cyber Week",
  eventtime: "27 March 2021, at 12:30 PM",
};

export default ListItemsRowevents;
