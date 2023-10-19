import React from "react";

import { Img, List, Text } from "components";

const TablesTypetype3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-[97%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[90%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col h-full items-center justify-start sm:ml-[0] w-full">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.userauthor}
                </Text>
              </div>
              <div className="flex flex-col h-full items-center justify-start sm:ml-[0] w-full">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.userfunction}
                </Text>
              </div>
              <div className="flex flex-col h-full items-center justify-start sm:ml-[0] w-full">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.userreview}
                </Text>
              </div>
              <div className="flex flex-col h-full items-center justify-start sm:ml-[0] w-full">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.useremail}
                </Text>
              </div>
              <div className="flex flex-col h-full items-center justify-start sm:ml-[0] w-full">
                <Text
                  className="text-[10px] text-blue_gray-400 text-center w-auto"
                  size="txtHelveticaBold10Bluegray400"
                >
                  {props?.useremployed}
                </Text>
              </div>
            </List>
            <div className="flex flex-col h-[15px] md:h-auto items-center justify-start w-20">
              <Text
                className="text-[10px] text-blue_gray-400 text-center"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.userid}
              </Text>
            </div>
          </div>
          <Img
            className="h-px w-[913px]"
            src="images/img_separator.svg"
            alt="separator_Two"
          />
        </div>
      </div>
    </>
  );
};

TablesTypetype3.defaultProps = {
  userauthor: "AUTHOR",
  userfunction: "FUNCTION",
  userreview: "REVIEW",
  useremail: "EMAIL",
  useremployed: "EMPLOYED",
  userid: "ID",
};

export default TablesTypetype3;
