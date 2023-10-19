import React from "react";

import { Img, Text } from "components";

const DashboardsAutomotiveSearch = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-10 md:h-auto items-center justify-center p-2 w-10">
          <Img
            className="h-4 w-4"
            src="images/img_search_blue_gray_50.svg"
            alt="search_One"
          />
        </div>
        <div className="flex flex-col h-full items-start justify-start px-1 py-2 w-full">
          <Text
            className="text-blue_gray-50 text-sm w-auto"
            size="txtNotoSansRegular14Bluegray50"
          >
            {props?.searchTwo}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardsAutomotiveSearch.defaultProps = { searchTwo: "Search anything" };

export default DashboardsAutomotiveSearch;
