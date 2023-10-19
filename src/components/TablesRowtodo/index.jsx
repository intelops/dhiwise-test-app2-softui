import React from "react";

import { Img, Text } from "components";

const TablesRowtodo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[18px] w-[18px]"
          src="images/img_checkbox.svg"
          alt="checkbox"
        />
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-full">
            <Text
              className="flex-1 text-blue_gray-900_01 text-sm w-auto"
              size="txtRobotoRomanBold14"
            >
              {props?.checkstatus}
            </Text>
            <Img
              className="h-4 w-4"
              src="images/img_user_blue_gray_900.svg"
              alt="user"
            />
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-xs w-auto"
                size="txtHelvetica12Bluegray900"
              >
                {props?.labeldate}
              </Text>
              <Text
                className="text-blue_gray-400 text-xs w-auto"
                size="txtHelvetica12Bluegray400"
              >
                {props?.date}
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-xs w-auto"
                size="txtHelvetica12Bluegray900"
              >
                {props?.labelproject}
              </Text>
              <Text
                className="text-blue_gray-400 text-xs w-auto"
                size="txtHelvetica12Bluegray400"
              >
                {props?.project}
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-xs w-auto"
                size="txtHelvetica12Bluegray900"
              >
                {props?.labelcompany}
              </Text>
              <Text
                className="text-blue_gray-400 text-xs w-auto"
                size="txtHelvetica12Bluegray400"
              >
                {props?.company}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TablesRowtodo.defaultProps = {
  checkstatus: "Check status",
  labeldate: "Date",
  date: "24 March 2019",
  labelproject: "Project",
  project: "2414_VR4sf3#",
  labelcompany: "Company",
  company: "Creative Tim",
};

export default TablesRowtodo;
