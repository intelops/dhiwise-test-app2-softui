import React from "react";

import { Img, Text } from "components";

const DashboardScreenAlertsAlertmultiline4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-red-200 flex flex-row gap-[236px] items-start justify-start p-2 rounded-lg w-auto md:w-full">
          <div className="bg-red-200 flex flex-col gap-0.5 items-start justify-start p-2">
            <div className="flex flex-row gap-3 items-center justify-start">
              <div className="flex flex-col h-6 items-center justify-start w-6">
                <Img
                  className="h-6 w-6"
                  src="images/img_alerticonserror_red_800.svg"
                  alt="alerticonserror"
                />
              </div>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtHelveticaBold16Black900"
              >
                {props?.titlehere}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-base text-black-900"
                size="txtHelvetica16Black900"
              >
                {props?.descriptionhereOne}
              </Text>
            </div>
          </div>
          <Img
            className="h-full w-6"
            src="images/img_close_black_900.svg"
            alt="close"
          />
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertmultiline4.defaultProps = {
  titlehere: "Title Here",
  descriptionhereOne: "Description Here",
};

export default DashboardScreenAlertsAlertmultiline4;
