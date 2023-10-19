import React from "react";

import { Img, Text } from "components";

const SectionsProperty1input = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-100_03 h-12 rounded-[50%] w-12"></div>
        <div className="relative w-[87%] sm:w-full">
          <div className="bg-white-A700 border border-indigo-A200 border-solid flex flex-col h-14 md:h-auto items-center justify-start m-auto px-3 py-2 rounded-lg w-full">
            <Text
              className="text-blue_gray-200 text-sm w-auto"
              size="txtOpenSans14Bluegray200"
            >
              {props?.commenttext}
            </Text>
          </div>
          <Img
            className="absolute bottom-[0] h-5 right-[0] w-5"
            src="images/img_edit_blue_gray_200.svg"
            alt="edit_One"
          />
        </div>
      </div>
    </>
  );
};

SectionsProperty1input.defaultProps = { commenttext: "Write your comment..." };

export default SectionsProperty1input;
