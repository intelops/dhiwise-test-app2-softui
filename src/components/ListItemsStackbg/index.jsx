import React from "react";

import { Button, Img, Text } from "components";

const ListItemsStackbg = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.bg ? (
          <Img
            className="absolute h-[123px] inset-[0] justify-center m-auto w-[289px]"
            alt="bg"
            src={props?.bg}
          />
        ) : null}
        <div className="flex flex-col gap-4 items-center justify-start m-auto relative w-[36%] md:w-full">
          <Text
            className="text-base text-blue_gray-400 text-center w-auto"
            size="txtHelvetica16Bluegray400"
          >
            {props?.subtitle}
          </Text>
          <Button
            className="cursor-pointer font-bold font-helvetica h-[35px] leading-[normal] min-w-[85px] text-[13px] text-center uppercase"
            shape="round"
            size="md"
            variant="gradient"
            color="deep_purple_500_pink_A400"
          >
            {props?.trymelabel}
          </Button>
        </div>
      </div>
    </>
  );
};

ListItemsStackbg.defaultProps = {
  subtitle: "Basic example",
  trymelabel: "Try me!",
};

export default ListItemsStackbg;
