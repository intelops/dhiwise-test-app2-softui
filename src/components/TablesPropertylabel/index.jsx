import React from "react";

import { Img, Text } from "components";

const TablesPropertylabel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-start w-full">
              <Text
                className="text-[10px] text-blue_gray-400 text-center w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.pages}
              </Text>
            </div>
            <div className="flex flex-col h-[15px] md:h-auto items-center justify-start w-[70px]">
              <Text
                className="text-[10px] text-blue_gray-400 text-center w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.pageviews}
              </Text>
            </div>
            <div className="flex flex-col h-[15px] md:h-auto items-center justify-start w-[70px]">
              <Text
                className="text-[10px] text-blue_gray-400 text-center w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.avgtime}
              </Text>
            </div>
            <div className="flex flex-col h-[15px] md:h-auto items-center justify-start w-[73px]">
              <Text
                className="text-[10px] text-blue_gray-400 text-center w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.bouncerate}
              </Text>
            </div>
          </div>
          <Img
            className="h-px w-[519px]"
            src="images/img_separator.svg"
            alt="separatorZero"
          />
        </div>
      </div>
    </>
  );
};

TablesPropertylabel.defaultProps = {
  pages: "PAGES",
  pageviews: "PAGE VIEWS",
  avgtime: "AVG. TIME",
  bouncerate: "BOUNCE RATE",
};

export default TablesPropertylabel;
