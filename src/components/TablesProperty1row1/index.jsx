import React from "react";

import { Button, CheckBox, Img, List, Text } from "components";

const TablesProperty1row1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <CheckBox
          className="font-medium font-notosans text-blue_gray-900_01 text-left text-sm"
          inputClassName="mr-[5px]"
          name="sketch_One"
          id="sketch_One"
          label="Jan 2022"
          shape="square"
          size="sm"
        ></CheckBox>
        <div className="flex flex-col items-start justify-start py-2 w-[120px]">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[55px] rounded"
            leftIcon={
              <Img
                className="h-[9px] mr-1 my-0.5"
                src="images/img_checkmark_light_green_a700_01.svg"
                alt="checkmark"
              />
            }
            shape="round"
            color="light_green_A100"
            size="xs"
            variant="fill"
          >
            <div className="font-bold font-helvetica text-center text-xs">
              {props?.planbutton}
            </div>
          </Button>
        </div>
        <List
          className="sm:flex-col flex-row gap-2 grid grid-cols-3 w-[38%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-start justify-start py-2 w-[120px]">
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtNotoSansRegular14Bluegray500"
            >
              {props?.planprice}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start py-2 w-[120px]">
            <Text
              className="text-blue_gray-500 text-sm w-auto"
              size="txtNotoSansRegular14Bluegray500"
            >
              {props?.planname}
            </Text>
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-start sm:px-5 px-6 rounded-md w-[120px]">
            <Text
              className="text-blue_gray-900_01 text-sm w-auto"
              size="txtNotoSansMedium14"
            >
              {props?.plandownload}
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

TablesProperty1row1.defaultProps = {
  planbutton: "Paid",
  planprice: "USD $30",
  planname: "Basic Plan",
  plandownload: "Download",
};

export default TablesProperty1row1;
