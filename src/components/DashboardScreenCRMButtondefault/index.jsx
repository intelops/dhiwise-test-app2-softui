import React from "react";

import { Text } from "components";

const DashboardScreenCRMButtondefault = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-6 md:h-auto items-center justify-start px-3 rounded-sm w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtHelveticaBold20WhiteA700"
                >
                  {props?.text}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardScreenCRMButtondefault.defaultProps = { text: "Read more" };

export default DashboardScreenCRMButtondefault;
