import React from "react";

import { Text } from "components";

const GeneralInput = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.nameTen ? (
          <Text
            className="text-[13px] text-blue_gray-900 w-auto"
            size="txtNotoSansSemiBold13"
          >
            {props?.nameTen}
          </Text>
        ) : null}
        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3 py-[11px] rounded-md w-full">
          <div className="flex flex-col h-full items-center justify-start w-full">
            {!!props?.nameexamplero ? (
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.nameexamplero}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

GeneralInput.defaultProps = {};

export default GeneralInput;
