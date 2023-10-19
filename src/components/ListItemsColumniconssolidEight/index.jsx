import React from "react";

import { Button, Img, Text } from "components";

const ListItemsColumniconssolidEight = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-12 items-center justify-center w-12"
          shape="round"
          color="blue_gray_900"
          size="lg"
          variant="fill"
        >
          <Img
            className="h-6"
            src="images/img_iconssolid_white_a700_48x48.svg"
            alt="iconssolid_Eight"
          />
        </Button>
        <Text
          className="leading-[150.00%] max-w-[248px] md:max-w-full text-blue_gray-400 text-center text-sm"
          size="txtHelveticaBold14Bluegray400"
        >
          {props?.languagetext}
        </Text>
        <div className="flex flex-row gap-1 items-end justify-start w-auto">
          {!!props?.currencytext ? (
            <Text
              className="text-blue_gray-900 text-sm w-full"
              size="txtHelvetica14"
            >
              {props?.currencytext}
            </Text>
          ) : null}
          <Text
            className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
            size="txtHelveticaBold20Bluegray900"
          >
            {props?.amounttext}
          </Text>
        </div>
      </div>
    </>
  );
};

ListItemsColumniconssolidEight.defaultProps = {
  languagetext: "1. Create & validate your referral link and get ",
  amounttext: "100",
};

export default ListItemsColumniconssolidEight;
