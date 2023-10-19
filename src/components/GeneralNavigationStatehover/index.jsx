import React from "react";

import { Button } from "components";

const GeneralNavigationStatehover = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="!text-blue-800 cursor-pointer font-medium font-notosans h-10 min-w-[96px] rounded-bl-md rounded-tl-md text-center text-sm"
          color="blue_gray_100"
          size="md"
          variant="outline"
        >
          {props?.twelvemonths}
        </Button>
        <Button
          className="!text-blue_gray-500 cursor-pointer font-notosans h-10 min-w-[74px] text-center text-sm"
          shape="square"
          color="gray_600"
          size="md"
          variant="outline"
        >
          {props?.thirtydays}
        </Button>
        <Button
          className="!text-blue_gray-500 cursor-pointer font-notosans h-10 min-w-[66px] rounded-br-md rounded-tr-md text-center text-sm"
          color="blue_gray_100"
          size="md"
          variant="outline"
        >
          {props?.sevendays}
        </Button>
      </div>
    </>
  );
};

GeneralNavigationStatehover.defaultProps = {
  twelvemonths: "12 months",
  thirtydays: "30 days",
  sevendays: "7 days",
};

export default GeneralNavigationStatehover;
