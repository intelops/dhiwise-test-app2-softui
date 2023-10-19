import React from "react";

import { Img, Text } from "components";

const ListItemsPropertyselect = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-12 md:h-auto object-cover rounded-[12px] w-12"
          src="images/img_imgplaceholder_48x48.png"
          alt="imgplaceholder"
        />
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-white-A700 tracking-[-0.80px] w-full"
              size="txtHelveticaBold16WhiteA700"
            >
              {props?.username}
            </Text>
            {!!props?.duration ? (
              <Text
                className="text-white-A700 text-xs w-full"
                size="txtHelvetica12WhiteA700"
              >
                {props?.duration}
              </Text>
            ) : null}
          </div>
          <Text
            className="text-sm text-white-A700 w-full"
            size="txtHelvetica14WhiteA700"
          >
            {props?.typing}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsPropertyselect.defaultProps = {
  username: "Sayo Kravits",
  typing: "Typing",
};

export default ListItemsPropertyselect;
