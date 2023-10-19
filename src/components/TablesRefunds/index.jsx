import React from "react";

import { Button, Img, Text } from "components";

const TablesRefunds = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-400_02 text-sm w-auto"
          size="txtNotoSansBold14Bluegray40002"
        >
          {props?.usertext}
        </Text>
        <Img
          className="h-4 w-4"
          src="images/img_arrowup_light_green_a700.svg"
          alt="arrowup"
        />
        {!!props?.userinfo ? (
          <Button
            className="flex h-6 items-center justify-center rounded-[50%] w-6"
            shape="circle"
            color="blue_gray_500"
            size="sm"
            variant="outline"
          >
            <Img alt="info" src={props?.userinfo} />
          </Button>
        ) : null}
      </div>
    </>
  );
};

TablesRefunds.defaultProps = { usertext: "121" };

export default TablesRefunds;
