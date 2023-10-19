import React from "react";

import { Button, Img, List, Text } from "components";

const Header2 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="text-blue_gray-900_01 text-sm w-auto"
          size="txtNotoSansBold14Bluegray90001"
        >
          Soft UI Dashboard Pro
        </Text>
        <List
          className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 grid-cols-5 justify-start w-auto sm:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-center justify-start rounded w-auto">
            <div className="flex flex-row items-center justify-start rounded w-auto">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtNotoSansRegular14Bluegray400"
              >
                Pages
              </Text>
              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center p-2 w-[30px]">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_arrowdown_blue_gray_400_16x16.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded w-auto">
            <div className="flex flex-row items-center justify-start rounded w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtHelveticaBold14Bluegray900"
              >
                Authentication
              </Text>
              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center p-2 w-[30px]">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_arrowdown_blue_gray_900.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded w-auto">
            <div className="flex flex-row items-center justify-start rounded w-auto">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtNotoSansRegular14Bluegray400"
              >
                Applications
              </Text>
              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center p-2 w-[30px]">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_arrowdown_blue_gray_400_16x16.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded w-auto">
            <div className="flex flex-row items-center justify-start rounded w-auto">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtNotoSansRegular14Bluegray400"
              >
                E-commerce
              </Text>
              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center p-2 w-[30px]">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_arrowdown_blue_gray_400_16x16.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded w-auto">
            <div className="flex flex-row items-center justify-start rounded w-auto">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtNotoSansRegular14Bluegray400"
              >
                Docs
              </Text>
              <div className="flex flex-col h-[30px] md:h-auto items-center justify-center p-2 w-[30px]">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_arrowdown_blue_gray_400_16x16.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
        </List>
        <Button
          className="cursor-pointer font-notosans font-semibold h-10 leading-[normal] min-w-[111px] rounded-[20px] text-[13px] text-center"
          size="lg"
          variant="gradient"
          color="deep_purple_500_pink_A400"
        >
          BUY NOW
        </Button>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
