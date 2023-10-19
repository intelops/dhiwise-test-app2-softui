import React from "react";

import { Img, List, Text } from "components";

const TablesTypeheader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-[98%]"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-2 h-full items-center justify-start sm:ml-[0] w-full">
              <Text
                className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.userid}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_download_blue_gray_400.svg"
                alt="download"
              />
            </div>
            <div className="flex flex-row gap-2 h-full items-center justify-start sm:ml-[0] w-full">
              <Text
                className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.userdate}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_download_blue_gray_400.svg"
                alt="download"
              />
            </div>
            <div className="flex flex-row gap-2 h-full items-center justify-start sm:ml-[0] w-full">
              <Text
                className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.userstatus}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_download_blue_gray_400.svg"
                alt="download"
              />
            </div>
            <div className="flex flex-row gap-2 h-full items-center justify-start sm:ml-[0] w-full">
              <Text
                className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.usercustomer}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_download_blue_gray_400.svg"
                alt="download"
              />
            </div>
            <div className="flex flex-row gap-2 h-full items-center justify-start sm:ml-[0] w-full">
              <Text
                className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.userproduct}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_download_blue_gray_400.svg"
                alt="download"
              />
            </div>
            <div className="flex flex-row gap-2 h-full items-center justify-start sm:ml-[0] w-full">
              <Text
                className="flex-1 text-[10px] text-blue_gray-400 w-auto"
                size="txtHelveticaBold10Bluegray400"
              >
                {props?.userrevenue}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_download_blue_gray_400.svg"
                alt="download"
              />
            </div>
          </List>
          <Img
            className="h-px w-[1518px]"
            src="images/img_separator.svg"
            alt="separatorZero_Seven"
          />
        </div>
      </div>
    </>
  );
};

TablesTypeheader.defaultProps = {
  userid: "ID",
  userdate: "DATE",
  userstatus: "STATUS",
  usercustomer: "CUSTOMER",
  userproduct: "PRODUCT",
  userrevenue: "REVENUE",
};

export default TablesTypeheader;
