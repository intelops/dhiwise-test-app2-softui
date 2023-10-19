import React from "react";

import { Img, Text } from "components";

const SectionsRowimgplaceholder = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-100_03 h-12 rounded-[50%] w-12"></div>
        <div className="flex flex-col gap-4 items-start justify-center w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-900_02 tracking-[-0.80px] w-full"
              size="txtOpenSansSemiBold16"
            >
              {props?.username}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[476px] md:max-w-full text-blue_gray-400 text-sm"
              size="txtOpenSans14"
            >
              {props?.userdescription}
            </Text>
          </div>
          <div className="flex flex-row gap-1 items-center justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_argiconssolid.svg"
                alt="argiconssolid_One"
              />
              <div className="flex flex-row gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-400 text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.noTwo}
                </Text>
                <Text
                  className="text-blue_gray-400 text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.textOne}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_argiconssolid_blue_gray_400_16x16.svg"
                alt="argiconssolid_Two"
              />
              <div className="flex flex-row gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-400 text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.noTwo}
                </Text>
                <Text
                  className="text-blue_gray-400 text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.textOne}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SectionsRowimgplaceholder.defaultProps = {
  username: "Michael Lewis",
  userdescription:
    "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
  noOne: "4",
  text: "shares",
  noTwo: "4",
  textOne: "shares",
};

export default SectionsRowimgplaceholder;
