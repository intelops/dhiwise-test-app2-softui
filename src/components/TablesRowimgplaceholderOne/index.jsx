import React from "react";

import { Img, Text } from "components";

const TablesRowimgplaceholderOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 md:h-auto rounded-[50%] w-6"
          src="images/img_imgplaceholder_48x48.png"
          alt="imgplaceholder_One"
        />
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-blue_gray-700 text-xs w-full"
            size="txtHelveticaBold12Bluegray700"
          >
            {props?.username}
          </Text>
        </div>
      </div>
    </>
  );
};

TablesRowimgplaceholderOne.defaultProps = { username: "Orlando Imieto" };

export default TablesRowimgplaceholderOne;
