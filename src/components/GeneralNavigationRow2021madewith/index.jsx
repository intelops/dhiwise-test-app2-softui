import React from "react";

import { Text } from "components";

const GeneralNavigationRow2021madewith = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start">
          {props?.p2021madewith}
        </div>
        <div className="flex flex-row gap-[45px] items-start justify-start w-auto">
          <Text
            className="text-gray-500 text-xs w-auto"
            size="txtHelvetica12Bluegray20001"
          >
            {props?.companyname}
          </Text>
          <Text
            className="text-gray-500 text-xs w-auto"
            size="txtHelvetica12Bluegray20001"
          >
            {props?.bloglink}
          </Text>
          <Text
            className="text-gray-500 text-xs w-auto"
            size="txtHelvetica12Bluegray20001"
          >
            {props?.licenselink}
          </Text>
        </div>
      </div>
    </>
  );
};

GeneralNavigationRow2021madewith.defaultProps = {
  p2021madewith: (
    <Text className="text-gray-500 text-xs" size="txtHelvetica12Bluegray20001">
      <span className="text-gray-500 font-helvetica text-left font-normal">
        @ 2021, Made with ❤️ by{" "}
      </span>
      <span className="text-blue_gray-800 font-helvetica text-left font-bold">
        Creative Tim
      </span>
      <span className="text-gray-500 font-helvetica text-left font-normal">
        {" "}
        for a better web.
      </span>
    </Text>
  ),
  companyname: "Creative Tim",
  bloglink: "Blog",
  licenselink: "License",
};

export default GeneralNavigationRow2021madewith;
