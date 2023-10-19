import React from "react";

import { Text } from "components";

const DashboardScreenReportsRowellipseone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-center justify-start px-[8.5px] py-[4.5px] w-6">
          <div className="bg-teal-400 h-[7px] rounded-[3px] w-[7px]"></div>
        </div>
        <Text
          className="text-gray-600 text-sm w-auto"
          size="txtHelvetica14Bluegray40001"
        >
          {props?.usertext}
        </Text>
      </div>
    </>
  );
};

DashboardScreenReportsRowellipseone.defaultProps = { usertext: "Positive" };

export default DashboardScreenReportsRowellipseone;
