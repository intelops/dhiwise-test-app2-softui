import React from "react";

import { Text } from "components";

const GeneralNavigationTabbuttons = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="text-blue_gray-900 text-center text-xs w-[31px]"
                size="txtHelvetica12Bluegray900"
              >
                {props?.officetext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GeneralNavigationTabbuttons.defaultProps = { officetext: "Office" };

export default GeneralNavigationTabbuttons;
