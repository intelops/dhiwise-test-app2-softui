import React from "react";

import { Button, CheckBox, Img, Text } from "components";

const TablesTyperow1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[33%] md:w-full">
              <div className="md:h-5 h-9 py-2 relative w-full">
                <Text
                  className="text-blue_gray-700 text-center text-xs w-auto"
                  size="txtHelveticaBold12Bluegray700"
                >
                  {props?.usertext}
                </Text>
                <CheckBox
                  className="font-bold font-helvetica my-auto text-blue_gray-700 text-center text-xs"
                  inputClassName="absolute mr-[5px]"
                  name="edit_Nine"
                  id="edit_Nine"
                  label="243598234"
                  shape="square"
                  size="xs"
                ></CheckBox>
              </div>
              <div className="flex flex-col items-start justify-start py-2 w-full">
                <Text
                  className="text-blue_gray-700 text-center text-xs w-auto"
                  size="txtHelveticaBold12Bluegray700"
                >
                  {props?.timeOne}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-full">
              {!!props?.usericonbutton ? (
                <Button
                  className="flex h-7 items-center justify-center rounded-[50%] w-7"
                  shape="circle"
                  color="light_green_A700"
                  size="sm"
                  variant="outline"
                >
                  <Img alt="checkmark_Two" src={props?.usericonbutton} />
                </Button>
              ) : null}
              {!!props?.usertext1 ? (
                <Text
                  className="text-blue_gray-700 text-xs w-[25px]"
                  size="txtHelveticaBold12Bluegray700"
                >
                  {props?.usertext1}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-full">
              {!!props?.userimage ? (
                <Img
                  className="h-6 md:h-auto rounded-[50%] w-6"
                  alt="imgplaceholder_Six"
                  src={props?.userimage}
                />
              ) : null}
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                {!!props?.usertext2 ? (
                  <Text
                    className="text-blue_gray-700 text-xs w-full"
                    size="txtHelveticaBold12Bluegray700"
                  >
                    {props?.usertext2}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-full">
              <Text
                className="text-blue_gray-700 text-center text-xs w-auto"
                size="txtHelveticaBold12Bluegray700"
              >
                {props?.usertext3}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-blue_gray-700 text-xs w-auto"
                size="txtHelveticaBold12Bluegray700"
              >
                {props?.usertext4}
              </Text>
            </div>
          </div>
          <Img
            className="h-px w-[1518px]"
            src="images/img_separator.svg"
            alt="separatorZero_Eight"
          />
        </div>
      </div>
    </>
  );
};

TablesTyperow1.defaultProps = {
  usertext: "#",
  timeOne: "1 Nov, 10:20 AM",
  usertext3: "Sofa Yellow",
  usertext4: "$89.53",
};

export default TablesTyperow1;
