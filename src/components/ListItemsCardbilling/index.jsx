import React from "react";

import { Img, Text } from "components";

const ListItemsCardbilling = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
      >
        <div className="flex flex-col items-center justify-start my-1.5 w-full">
          <div className="flex flex-col gap-[23px] items-center justify-start w-[38%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-16 md:h-auto items-center justify-center w-16"
              style={{
                backgroundImage: "url('images/img_icon_blue_gray_900.svg')",
              }}
            >
              <Img
                className="h-[23px] w-5"
                src="images/img_landmark.svg"
                alt="landmark"
              />
            </div>
            <Text
              className="text-base text-blue_gray-900 text-center tracking-[-0.80px]"
              size="txtHelveticaBold16Bluegray900"
            >
              {props?.salarytext}
            </Text>
          </div>
          <Text
            className="mt-1.5 text-blue_gray-400 text-center text-xs"
            size="txtHelvetica12Bluegray400"
          >
            {props?.belongtext}
          </Text>
          <Img
            className="h-px mt-5"
            src="images/img_separator.svg"
            alt="separatorZero"
          />
          <Text
            className="mt-4 text-blue_gray-900 text-center text-xl tracking-[-0.80px]"
            size="txtHelveticaBold20Bluegray900"
          >
            {props?.salaryprice}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsCardbilling.defaultProps = {
  salarytext: "Salary",
  belongtext: "Belong Interactive",
  salaryprice: "+$2000",
};

export default ListItemsCardbilling;
