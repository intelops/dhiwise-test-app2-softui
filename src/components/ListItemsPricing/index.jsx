import React from "react";

import { Button, CheckBox, Img, Text } from "components";

const ListItemsPricing = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
      >
        <div className="flex flex-col gap-[27px] items-center justify-start w-full">
          <div className="flex flex-col gap-1 items-center justify-center w-full">
            <Text
              className="text-base text-blue_gray-900 text-center tracking-[-0.80px] w-auto"
              size="txtHelveticaBold16Bluegray900"
            >
              {props?.premium}
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center tracking-[-0.80px] w-auto"
              size="txtHelveticaBold40Bluegray900"
            >
              {props?.priceNine}
            </Text>
          </div>
          <div className="flex flex-col gap-[18px] items-start justify-start w-full">
            <CheckBox
              className="!text-blue_gray-400 font-helvetica text-left text-sm"
              inputClassName="h-6 mr-[5px] w-6"
              name="10teammembers"
              id="10teammembers"
              label="10 team  members"
              shape="round"
              size="sm"
              variant="gradient"
              color="green_A700_lime_A700"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-400 font-helvetica text-left text-sm"
              inputClassName="h-6 mr-[5px] w-6"
              name="40gbcloudstorag_One"
              id="40gbcloudstorag_One"
              label="40GB Cloud storage"
              shape="round"
              size="sm"
              variant="gradient"
              color="green_A700_lime_A700"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-400 font-helvetica text-left text-sm"
              inputClassName="h-6 mr-[5px] w-6"
              name="integrationhelp_One"
              id="integrationhelp_One"
              label="Integration help"
              shape="round"
              size="sm"
              variant="gradient"
              color="green_A700_lime_A700"
            ></CheckBox>
            <CheckBox
              className="!text-blue_gray-400 font-helvetica text-left text-sm"
              inputClassName="h-6 mr-[5px] w-6"
              name="sketchfiles"
              id="sketchfiles"
              label="Sketch Files"
              shape="round"
              size="sm"
              variant="gradient"
              color="green_A700_lime_A700"
            ></CheckBox>
            <div className="flex flex-row gap-[15px] items-end justify-start w-full">
              <Button
                className="flex h-6 items-center justify-center rounded-[50%] w-6"
                shape="circle"
                size="sm"
                variant="gradient"
                color="blue_gray_500_01_indigo_200"
              >
                <Img src="images/img_minus.svg" alt="minus" />
              </Button>
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.apiaccess}
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-end justify-start w-full">
              <Button
                className="flex h-6 items-center justify-center rounded-[50%] w-6"
                shape="circle"
                size="sm"
                variant="gradient"
                color="blue_gray_500_01_indigo_200"
              >
                <Img src="images/img_minus.svg" alt="minus_One" />
              </Button>
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.completedocumenOne}
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer flex h-10 items-center justify-center"
            rightIcon={
              <Img
                className="h-3.5 ml-[7px] my-px"
                src="images/img_icons_solid_gray_50.svg"
                alt="Icons Solid"
              />
            }
            shape="round"
            size="lg"
            variant="gradient"
            color="blue_gray_700_01_gray_900_02"
          >
            <div className="font-bold font-helvetica leading-[normal] text-[13px] text-left uppercase">
              {props?.joinbutton}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

ListItemsPricing.defaultProps = {
  premium: "PREMIUM",
  priceNine: "$89",
  apiaccess: "API Access",
  completedocumenOne: "Complete documentation",
  joinbutton: "Join",
};

export default ListItemsPricing;
