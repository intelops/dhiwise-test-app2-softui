import React from "react";

import { Img, Text } from "components";

const ListItemsColumncardvisaone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[200px] relative w-full">
          <Img
            className="h-[200px] m-auto object-cover rounded-[12px] w-full"
            src="images/img_cardvisa1.png"
            alt="cardvisaOne"
          />
          <div className="absolute bg-gradient16  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[11px] rounded-[12px] shadow-bs4 w-full">
            <div className="flex flex-col gap-[33px] justify-start mb-[3px] mt-3 w-full">
              <Img
                className="h-[18px] md:ml-[0] ml-[5px] w-[18px]"
                src="images/img_iconssolid_white_a700_18x18.svg"
                alt="iconssolid_Four"
              />
              <div className="flex flex-col gap-7 items-start justify-start w-full">
                <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold20WhiteA700"
                  >
                    {props?.zipcodeone}
                  </Text>
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold20WhiteA700"
                  >
                    {props?.zipcodetwo}
                  </Text>
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold20WhiteA700"
                  >
                    {props?.zipcodeTwo}
                  </Text>
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.80px] w-auto"
                    size="txtHelveticaBold20WhiteA700"
                  >
                    {props?.zipcodethree}
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex mb-[7px] relative w-[59%]">
                    <div className="flex flex-col gap-0.5 items-start justify-start my-auto w-[139px]">
                      <Text
                        className="text-blue_gray-50_87 text-sm w-auto"
                        size="txtHelvetica14Bluegray5087"
                      >
                        {props?.cardholder}
                      </Text>
                      <Text
                        className="text-base text-white-A700 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16WhiteA700"
                      >
                        {props?.username}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-0.5 items-start justify-start ml-[-10px] my-auto w-12 z-[1]">
                      <Text
                        className="text-blue_gray-50_87 text-sm w-auto"
                        size="txtHelvetica14Bluegray5087"
                      >
                        {props?.expires}
                      </Text>
                      <Text
                        className="text-base text-white-A700 tracking-[-0.80px] w-auto"
                        size="txtHelveticaBold16WhiteA700"
                      >
                        {props?.expirydate}
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[42px] mt-3.5 w-[42px]"
                    src="images/img_volume_yellow_800_02.svg"
                    alt="volume"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsColumncardvisaone.defaultProps = {
  zipcodeone: "4562",
  zipcodetwo: "1122",
  zipcodeTwo: "4594",
  zipcodethree: "7852",
  cardholder: "Card Holder",
  username: "Jack Peterson",
  expires: "Expires",
  expirydate: "11/22",
};

export default ListItemsColumncardvisaone;
