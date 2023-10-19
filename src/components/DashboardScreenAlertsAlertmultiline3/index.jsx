import React from "react";

import { Img, Text } from "components";

const DashboardScreenAlertsAlertmultiline3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient19  flex flex-row gap-[236px] items-start justify-start p-2 rounded-lg w-auto md:w-full">
          <div className="flex flex-col gap-0.5 items-start justify-start p-2">
            <div className="flex flex-row gap-3 items-center justify-start">
              <div className="flex flex-col h-6 items-center justify-start w-6">
                <Img
                  className="h-6 w-6"
                  src="images/img_alerticonssuccess.svg"
                  alt="alerticonssucce"
                />
              </div>
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtHelveticaBold16WhiteA700"
              >
                {props?.title}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-base text-white-A700"
                size="txtHelvetica16WhiteA700"
              >
                {props?.description}
              </Text>
            </div>
          </div>
          <Img
            className="h-full w-6"
            src="images/img_close_white_a700_24x24.svg"
            alt="close_Three"
          />
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertmultiline3.defaultProps = {
  title: "Title Here",
  description: "Description Here",
};

export default DashboardScreenAlertsAlertmultiline3;
