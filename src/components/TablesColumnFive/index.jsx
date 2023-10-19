import React from "react";

import { Img, List, Text } from "components";

const TablesColumnFive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[99%] md:w-full">
            <div className="flex flex-row gap-2 h-full items-center justify-start w-full">
              <Text
                className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.name}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                alt="icon18pxunfol"
                src={props?.icon18pxunfol}
              />
            </div>
            <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start w-[200px]">
              <Text
                className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.priceOne}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                alt="icon18pxunfol_One"
                src={props?.icon18pxunfolone}
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[49%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start sm:ml-[0] w-40">
                <Text
                  className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.office}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  alt="icon18pxunfol"
                  src={props?.icon18pxunfol1}
                />
              </div>
              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start sm:ml-[0] w-40">
                <Text
                  className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.age}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  alt="icon18pxunfol"
                  src={props?.icon18pxunfol2}
                />
              </div>
              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start sm:ml-[0] w-40">
                <Text
                  className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.startdate}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  alt="icon18pxunfol"
                  src={props?.icon18pxunfol3}
                />
              </div>
              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start sm:ml-[0] w-40">
                <Text
                  className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.salary}
                </Text>
                <Img
                  className="h-[18px] w-[18px]"
                  alt="icon18pxunfol"
                  src={props?.icon18pxunfol4}
                />
              </div>
            </List>
          </div>
          <Img
            className="sm:h-auto h-px object-cover w-[1500px] md:w-full"
            src="images/img_separator_gray_300.png"
            alt="separator"
          />
        </div>
      </div>
    </>
  );
};

TablesColumnFive.defaultProps = {
  name: "NAME",
  icon18pxunfol: "images/img_icon18pxunfol.svg",
  priceOne: "POSITION",
  icon18pxunfolone: "images/img_icon18pxunfol.svg",
  office: "OFFICE",
  icon18pxunfol1: "images/img_icon18pxunfol.svg",
  age: "AGE",
  icon18pxunfol2: "images/img_icon18pxunfol.svg",
  startdate: "START DATE",
  icon18pxunfol3: "images/img_icon18pxunfol.svg",
  salary: "SALARY",
  icon18pxunfol4: "images/img_icon18pxunfol.svg",
};

export default TablesColumnFive;
