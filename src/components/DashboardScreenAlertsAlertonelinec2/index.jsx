import React from "react";

import { Img, Text } from "components";

const DashboardScreenAlertsAlertonelinec2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-light_blue-50 flex flex-col items-start justify-start px-3 py-2 rounded-lg w-auto md:w-full">
          <div className="bg-light_blue-50 flex flex-row sm:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[226px] w-full">
            <div className="bg-light_blue-50 flex flex-col items-start justify-start p-2 w-auto">
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_ioniconiinformationcircle_blue_800_01.svg"
                    alt="ioniconiinforma"
                  />
                </div>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtHelveticaBold16Black900"
                >
                  {props?.titlehereTwo}
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtHelvetica16Black900"
                >
                  {props?.descriptionhereFive}
                </Text>
              </div>
            </div>
            <Img
              className="h-6 w-6"
              src="images/img_close_black_900.svg"
              alt="close_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenAlertsAlertonelinec2.defaultProps = {
  titlehereTwo: "Title Here",
  descriptionhereFive: "Description Here",
};

export default DashboardScreenAlertsAlertonelinec2;
