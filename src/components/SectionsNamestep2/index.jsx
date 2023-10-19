import React from "react";

import { Line, Text } from "components";

const SectionsNamestep2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute sm:h-[116px] h-[42px] inset-y-[0] my-auto right-[0] w-[94%] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 h-full items-start justify-between m-auto w-full">
            <Line className="bg-gray-300 h-0.5 mb-8 sm:mt-0 mt-2 w-[31%]" />
            <div className="h-[42px] relative w-[35%] sm:w-full">
              <Line className="absolute bg-gray-300 h-0.5 left-[0] top-[19%] w-[87%]" />
              <div className="absolute flex flex-col gap-[9px] h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[21%]">
                <div className="bg-white-A700 border border-gray-300 border-solid h-4 rounded-[50%] w-4"></div>
                <Text
                  className="text-center text-gray-300 text-sm"
                  size="txtHelvetica14Gray300"
                >
                  {props?.pricingcounter}
                </Text>
              </div>
            </div>
          </div>
          <Line className="absolute bg-gray-300 h-0.5 inset-x-[0] mx-auto top-[19%] w-[31%]" />
        </div>
        <div className="absolute flex flex-col gap-[7px] items-center justify-start left-[33%] top-[0] w-[7%]">
          <div className="bg-white-A700 border border-gray-300 border-solid h-4 rounded-[50%] w-4"></div>
          <Text
            className="text-center text-gray-300 text-sm"
            size="txtHelvetica14Gray300"
          >
            {props?.mediacounter}
          </Text>
        </div>
        <div className="absolute flex flex-col gap-[7px] items-center justify-start right-[30%] top-[0] w-[7%]">
          <div className="bg-white-A700 border border-gray-300 border-solid h-4 rounded-[50%] w-4"></div>
          <Text
            className="text-center text-gray-300 text-sm"
            size="txtHelvetica14Gray300"
          >
            {props?.socialscounter}
          </Text>
        </div>
        <div className="absolute flex flex-col gap-[7px] items-center justify-start left-[19%] top-[0] w-[11%]">
          <div className="bg-blue_gray-900 h-4 rounded-[50%] w-4"></div>
          <Text
            className="text-blue_gray-900 text-center text-sm"
            size="txtHelvetica14"
          >
            {props?.productinfo}
          </Text>
        </div>
      </div>
    </>
  );
};

SectionsNamestep2.defaultProps = {
  pricingcounter: "4. Pricing",
  mediacounter: "2. Media",
  socialscounter: "3. Socials",
  productinfo: "Product Info",
};

export default SectionsNamestep2;
