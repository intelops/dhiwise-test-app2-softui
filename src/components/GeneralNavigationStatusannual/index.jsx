import React from "react";

import { Button, Text } from "components";

const GeneralNavigationStatusannual = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-10 md:h-auto items-center justify-center px-2 rounded-lg shadow-bs7">
          <div className="flex flex-col items-center justify-center w-[118px]">
            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtNotoSansRegular14Bluegray900"
                >
                  {props?.textThree}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="!text-blue_gray-900 cursor-pointer font-notosans h-10 rounded-lg text-center text-sm"
          shape="round"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.annualone}
        </Button>
      </div>
    </>
  );
};

GeneralNavigationStatusannual.defaultProps = { textThree: "Monthly" };

export default GeneralNavigationStatusannual;
