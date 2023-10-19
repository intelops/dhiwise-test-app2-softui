import React from "react";

import { Img, Text } from "components";

const GraphsTypepolarchart = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[521px] h-[531px] relative w-full">
          <div className="md:h-[521px] h-[531px] m-auto w-full">
            <Img
              className="absolute h-[521px] inset-[0] justify-center m-auto w-[521px]"
              src="images/img_group_gray_300_01.svg"
              alt="group_Three"
            />
            <Text
              className="absolute inset-x-[0] mx-auto text-blue_gray-400 text-xs top-[0] w-max"
              size="txtOpenSans12"
            >
              {props?.usernumber}
            </Text>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-start justify-start my-auto p-[23px] sm:px-5 right-[0]"
              style={{ backgroundImage: "url('images/img_group178.svg')" }}
            >
              <Text
                className="mb-[373px] md:ml-[0] ml-[186px] text-blue_gray-400 text-xs"
                size="txtOpenSans12"
              >
                {props?.usernumber1}
              </Text>
            </div>
          </div>
          <Text
            className="absolute inset-x-[0] mx-auto text-blue_gray-400 text-xs top-[6%] w-max"
            size="txtOpenSans12"
          >
            {props?.usernumber2}
          </Text>
        </div>
      </div>
    </>
  );
};

GraphsTypepolarchart.defaultProps = {
  usernumber: "16",
  usernumber1: "12",
  usernumber2: "14",
};

export default GraphsTypepolarchart;
