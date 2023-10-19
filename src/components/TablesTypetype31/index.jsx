import React from "react";

import { Img, Radio, Text } from "components";

const TablesTypetype31 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img
                className="h-9 md:h-auto object-cover rounded-[12px] w-9"
                src="images/img_imgplaceholder_48x48.png"
                alt="imgplaceholder_Two"
              />
              <div className="flex flex-1 flex-col items-start justify-start px-3 w-full">
                <Text
                  className="text-base text-blue_gray-900 w-full"
                  size="txtHelveticaBold16Bluegray900"
                >
                  {props?.username}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.userrole}
              </Text>
            </div>
            <Radio
              value="texthere"
              className="font-helvetica sm:px-5 text-blue_gray-400 text-left text-xs"
              inputClassName="mr-[5px]"
              checked={false}
              name="texthereOne"
              label="text here"
              id="texthere"
            ></Radio>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-full"
                size="txtHelvetica14Bluegray400"
              >
                {props?.useremail}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-full">
              <Text
                className="text-blue_gray-400 text-center text-xs w-auto"
                size="txtHelveticaBold12Bluegray400"
              >
                {props?.useremployeddate}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-20">
              <Text
                className="text-blue_gray-400 text-center text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.userzipcode}
              </Text>
            </div>
          </div>
          <Img
            className="h-px w-[1082px]"
            src="images/img_separator.svg"
            alt="separator_Three"
          />
        </div>
      </div>
    </>
  );
};

TablesTypetype31.defaultProps = {
  username: "John Michael",
  userrole: "Manager",
  useremail: "john@creative-tim.com",
  useremployeddate: "23/04/18",
  userzipcode: "43431",
};

export default TablesTypetype31;
