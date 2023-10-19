import React from "react";

import { Img, Text } from "components";

const ListItemsPropertyrest = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-12 md:h-auto object-cover rounded-[12px] w-12"
          alt="imgplaceholder"
          src={props?.userimage}
        />
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-900_01 tracking-[-0.80px] w-full"
              size="txtHelveticaBold16Bluegray90001"
            >
              {props?.username}
            </Text>
            <Text
              className="text-blue_gray-500 text-xs w-full"
              size="txtHelvetica12Bluegray500"
            >
              {props?.duration}
            </Text>
          </div>
          <Text
            className="text-blue_gray-400 text-sm w-auto"
            size="txtHelvetica14Bluegray400"
          >
            {props?.typingstatus}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsPropertyrest.defaultProps = {
  userimage: "images/img_imgplaceholder.png",
  username: "Sayo Kravits",
  duration: "1 hour ago",
  typingstatus: "Typing",
};

export default ListItemsPropertyrest;
