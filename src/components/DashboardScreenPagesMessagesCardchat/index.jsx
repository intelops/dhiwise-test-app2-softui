import React from "react";

import { Img, Text } from "components";

const DashboardScreenPagesMessagesCardchat = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-12 md:h-auto object-cover rounded-[12px] w-12"
          src="images/img_imgplaceholder_48x48.png"
          alt="imgplaceholder_One"
        />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-900_01 tracking-[-0.80px] w-full"
              size="txtNotoSansSemiBold16Bluegray90001"
            >
              {props?.sayokravitsOne}
            </Text>
            <Text
              className="text-blue_gray-500 text-xs w-full"
              size="txtNotoSansRegular12"
            >
              {props?.time}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenPagesMessagesCardchat.defaultProps = {
  sayokravitsOne: "Charlie Watson",
  time: "last seen today at 1:53am",
};

export default DashboardScreenPagesMessagesCardchat;
