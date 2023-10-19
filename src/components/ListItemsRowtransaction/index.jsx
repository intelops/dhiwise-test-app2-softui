import React from "react";

import { Button, Img, Text } from "components";

const ListItemsRowtransaction = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
          <Button
            className="flex h-[34px] items-center justify-center w-[34px]"
            shape="circle"
            color="red_500"
            size="lg"
            variant="outline"
          >
            <Img
              className="h-2"
              src="images/img_arrowdown_red_500.svg"
              alt="arrowdown_One"
            />
          </Button>
          <div className="flex flex-col gap-1.5 items-start justify-start ml-4 sm:ml-[0]">
            <Text
              className="text-blue_gray-900 text-sm"
              size="txtHelveticaBold14Bluegray900"
            >
              {props?.username}
            </Text>
            <Text
              className="text-blue_gray-400 text-xs"
              size="txtHelvetica12Bluegray400"
            >
              {props?.transactiondate}
            </Text>
          </div>
          <Text
            className="sm:ml-[0] ml-[213px] text-red-A700 text-right text-sm"
            size="txtHelveticaBold14RedA700"
          >
            {props?.transactionamount}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsRowtransaction.defaultProps = {
  username: "Netflix",
  transactiondate: "27 March 2020, at 12:30 PM",
  transactionamount: "- $ 2,500",
};

export default ListItemsRowtransaction;
