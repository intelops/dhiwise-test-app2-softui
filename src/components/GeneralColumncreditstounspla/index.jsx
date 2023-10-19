import React from "react";

import { Img, Text } from "components";

const GeneralColumncreditstounspla = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-purple-500 border-solid flex flex-col h-14 items-center justify-start p-1 rounded-[50%] w-14">
          <Img
            className="h-[47px] md:h-auto rounded-[50%] w-[47px]"
            src="images/img_creditstounsplashcom_47x47.png"
            alt="creditstounspla"
          />
        </div>
        <Text
          className="mt-0.5 text-blue_gray-500 text-center text-sm"
          size="txtNotoSansRegular14Bluegray500"
        >
          {props?.johnm}
        </Text>
      </div>
    </>
  );
};

GeneralColumncreditstounspla.defaultProps = { johnm: "John M" };

export default GeneralColumncreditstounspla;
