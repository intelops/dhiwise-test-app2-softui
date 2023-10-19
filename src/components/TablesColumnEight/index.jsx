import React from "react";

import { Img, Text } from "components";

const TablesColumnEight = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-[97%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
              <Img
                className="h-12 md:h-auto object-cover rounded-md w-12"
                alt="imgplaceholder_Five"
                src={props?.userimage}
              />
              <div className="flex flex-1 flex-col items-start justify-start px-3 w-full">
                <Text
                  className="text-base text-blue_gray-900 tracking-[-0.80px] w-full"
                  size="txtHelveticaBold16Bluegray900"
                >
                  {props?.productname}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-40">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.price}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center w-40">
              <div className="flex flex-row items-center justify-start w-auto">
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_iconssolid_blue_gray_900.svg"
                  alt="iconssolid"
                />
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_iconssolid_blue_gray_900.svg"
                  alt="iconssolid_One"
                />
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_iconssolid_blue_gray_900.svg"
                  alt="iconssolid_Two"
                />
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_iconssolid_blue_gray_900.svg"
                  alt="iconssolid_Three"
                />
                <Img className="h-3 w-3" src="images/img_star.svg" alt="star" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pr-4 py-2 w-40">
              <Img
                className="h-[3px] md:h-auto object-cover w-full"
                alt="progressbar"
                src={props?.progressbar}
              />
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-40">
              <Text
                className="text-blue_gray-400 text-center text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.zipcode}
              </Text>
            </div>
          </div>
          {!!props?.separatorzeroSix ? (
            <Img
              className="h-px w-[1119px]"
              alt="separatorZero_Six"
              src={props?.separatorzeroSix}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

TablesColumnEight.defaultProps = {
  userimage: "images/img_imgplaceholder_2.png",
  productname: "Hoodie",
  price: "$89.53",
  progressbar: "images/img_progressbar.png",
  zipcode: "43431",
};

export default TablesColumnEight;
