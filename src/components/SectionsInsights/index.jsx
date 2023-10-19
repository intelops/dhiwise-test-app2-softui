import React from "react";

import { Img, List, Text } from "components";

const SectionsInsights = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-start w-auto">
          <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
            <Img
              className="h-4 w-4"
              alt="argiconssolid_Three"
              src={props?.argiconssolidThree}
            />
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-blue_gray-400 text-sm"
                size="txtHelvetica14Bluegray400"
              >
                {props?.no1}
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-[61%]"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
              <Img
                className="h-4 w-4"
                alt="iconssolid"
                src={props?.iconssolid}
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.no1}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
              <Img
                className="h-4 w-4"
                alt="iconssolid"
                src={props?.iconssolid1}
              />
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.no1}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-row gap-1 items-center justify-start w-auto">
          <div className="flex flex-row items-start justify-start w-auto">
            {!!props?.imgplaceholderThree ? (
              <Img
                className="h-6 md:h-auto rounded-[50%] w-6"
                alt="imgplaceholder_Three"
                src={props?.imgplaceholderThree}
              />
            ) : null}
            {!!props?.imgplaceholderFour ? (
              <Img
                className="h-6 md:h-auto rounded-[50%] w-6"
                alt="imgplaceholder_Four"
                src={props?.imgplaceholderFour}
              />
            ) : null}
            {!!props?.imgplaceholderFive ? (
              <Img
                className="h-6 md:h-auto rounded-[50%] w-6"
                alt="imgplaceholder_Five"
                src={props?.imgplaceholderFive}
              />
            ) : null}
          </div>
          <Text
            className="text-blue_gray-400 text-xs w-auto"
            size="txtHelveticaBold12Bluegray400"
          >
            {props?.and30moreone}
          </Text>
        </div>
      </div>
    </>
  );
};

SectionsInsights.defaultProps = {
  noThree: "12",
  no: "12",
  no1: "12",
  and30moreone: "and 30+ more",
};

export default SectionsInsights;
