import React from "react";

import { Button, Img, Text } from "components";

const TablesTyperow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-start w-full">
          <div className="flex flex-col h-8 items-center justify-start w-8">
            <div className="flex flex-col h-8 items-center justify-start w-8">
              <Img
                className="h-8 md:h-auto rounded-[50%] w-8"
                src="images/img_1_32x32.png"
                alt="One_Two"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start px-3 w-full">
            <Text
              className="text-base text-blue_gray-900_01 tracking-[-0.80px] w-full"
              size="txtNotoSansSemiBold16Bluegray90001_1"
            >
              {props?.username}
            </Text>
            <Text
              className="text-blue_gray-500 text-sm w-full"
              size="txtNotoSansRegular14Bluegray500"
            >
              {props?.useremail}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-base text-blue_gray-900_01 tracking-[-0.80px] w-auto"
            size="txtNotoSansSemiBold16Bluegray90001_1"
          >
            {props?.userrole}
          </Text>
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtNotoSansRegular14Bluegray500"
          >
            {props?.userorganization}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start py-2 w-[200px]">
          <Button
            className="border border-light_green-600_72 border-solid cursor-pointer font-bold font-helvetica min-w-[54px] text-center text-xs"
            shape="round"
            color="light_green_600_19"
            size="xs"
            variant="fill"
          >
            {props?.userstatus}
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start py-2 w-[200px]">
          <Text
            className="text-blue_gray-500 text-center text-sm w-auto"
            size="txtNotoSansRegular14Bluegray500"
          >
            {props?.useremployeddate}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center p-2 w-10">
          <div className="flex flex-col h-[30px] md:h-auto items-center justify-center p-2 w-[30px]">
            <Img
              className="h-full w-full"
              src="images/img_edit_blue_gray_500.svg"
              alt="edit_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TablesTyperow.defaultProps = {
  username: "John Michael",
  useremail: "john@creative-tim.com",
  userrole: "Manager",
  userorganization: "Organization",
  userstatus: "Online",
  useremployeddate: "23/04/18",
};

export default TablesTyperow;
