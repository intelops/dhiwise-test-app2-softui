import React from "react";

import { Button, Img, Input, List, Text } from "components";

const SectionsColumnrectanglefiftyseven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 h-12 md:h-auto items-center justify-between w-full">
          <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
            <Img
              className="h-12 md:h-auto object-cover rounded-[12px] w-12"
              src="images/img_rectangle57.png"
              alt="rectangleFiftySeven"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-blue_gray-900 text-sm"
                size="txtHelvetica14"
              >
                {props?.estherajackson}
              </Text>
              <Text
                className="mt-1 text-blue_gray-400 text-sm"
                size="txtHelvetica14Bluegray400"
              >
                {props?.duration}
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[126px]"
            leftIcon={
              <Img
                className="h-3.5 mr-[7px] my-px"
                src="images/img_icons_solid_gray_50_14x14.svg"
                alt="Icons Solid"
              />
            }
            shape="round"
            size="lg"
            variant="gradient"
            color="blue_gray_700_01_gray_900_02"
          >
            <div className="font-bold font-helvetica leading-[normal] text-[13px] text-left uppercase">
              {props?.follow}
            </div>
          </Button>
        </div>
        <Img
          className="h-px w-[609px]"
          src="images/img_separator.svg"
          alt="separator"
        />
        <div className="flex flex-col gap-4 h-[649px] md:h-auto items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start p-2 w-full">
            <Text
              className="leading-[150.00%] max-w-[616px] md:max-w-full text-base text-blue_gray-400"
              size="txtHelvetica16Bluegray400"
            >
              {props?.descriptionOne}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start rounded-bl-[12px] rounded-br-[12px] shadow-bs6 w-full">
              <Img
                className="h-[500px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                src="images/img_activityfeed1.png"
                alt="activityfeedOne"
              />
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between px-2 w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
                <Img
                  className="h-4 w-4"
                  src="images/img_argiconssolid_16x16.svg"
                  alt="argiconssolid_Three"
                />
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.noSeven}
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-[61%]"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_argiconssolid_blue_gray_400.svg"
                    alt="iconssolid"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtHelvetica14Bluegray400"
                    >
                      {props?.noSeven}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_argiconssolid_blue_gray_400_16x16.svg"
                    alt="iconssolid"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtHelvetica14Bluegray400"
                    >
                      {props?.noSeven}
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <div className="flex flex-row items-start justify-start w-auto">
                <Img
                  className="h-6 md:h-auto rounded-[50%] w-6"
                  src="images/img_imgplaceholder_24x24.png"
                  alt="imgplaceholder_Three"
                />
                <Img
                  className="h-6 md:h-auto rounded-[50%] w-6"
                  src="images/img_imgplaceholder_48x48.png"
                  alt="imgplaceholder_Four"
                />
                <Img
                  className="h-6 md:h-auto rounded-[50%] w-6"
                  src="images/img_imgplaceholder.png"
                  alt="imgplaceholder_Five"
                />
              </div>
              <Text
                className="text-blue_gray-400 text-xs w-auto"
                size="txtHelveticaBold12Bluegray400"
              >
                {props?.and30moreone}
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="sm:h-auto h-px object-cover w-full"
          src="images/img_separator_1x632.png"
          alt="separator_One"
        />
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
          <Img
            className="h-12 md:h-auto rounded-[50%] w-12"
            src="images/img_imgplaceholder_4.png"
            alt="imgplaceholder_Seven"
          />
          <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-900 w-full"
                size="txtHelveticaBold16Bluegray900"
              >
                {props?.michaellewisTwo}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[560px] md:max-w-full text-blue_gray-400 text-sm"
                size="txtHelvetica14Bluegray400"
              >
                {props?.descriptionThree}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
                <Img
                  className="h-4 w-4"
                  src="images/img_argiconssolid_16x16.svg"
                  alt="argiconssolid_Four"
                />
                <div className="flex flex-row gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.noSeven}
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.textFive}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
                <Img
                  className="h-4 w-4"
                  src="images/img_argiconssolid_blue_gray_400_16x16.svg"
                  alt="iconssolid"
                />
                <div className="flex flex-row gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.noSeven}
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.textFive}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
          <Img
            className="h-12 md:h-auto rounded-[50%] w-12"
            src="images/img_imgplaceholder_4.png"
            alt="imgplaceholder_Seven"
          />
          <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
            <div className="flex flex-col items-start justify-center w-full">
              <Text
                className="text-base text-blue_gray-900 w-full"
                size="txtHelveticaBold16Bluegray900"
              >
                {props?.michaellewisTwo}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[560px] md:max-w-full text-blue_gray-400 text-sm"
                size="txtHelvetica14Bluegray400"
              >
                {props?.descriptionThree}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
                <Img
                  className="h-4 w-4"
                  src="images/img_argiconssolid_16x16.svg"
                  alt="argiconssolid_Five"
                />
                <div className="flex flex-row gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.noSeven}
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.textFive}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start p-1 w-auto">
                <Img
                  className="h-4 w-4"
                  src="images/img_argiconssolid_blue_gray_400_16x16.svg"
                  alt="iconssolid_One"
                />
                <div className="flex flex-row gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.noSeven}
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtHelvetica14Bluegray400"
                  >
                    {props?.textFive}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
          <Img
            className="h-12 md:h-auto rounded-[50%] w-12"
            src="images/img_imgplaceholder_5.png"
            alt="imgplaceholder_Eight"
          />
          <Input
            name="inputwithaddons_One"
            placeholder="Write your comment..."
            className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-helvetica p-0 text-left text-sm w-full"
            wrapClassName="border border-gray-300 border-solid flex flex-1 md:h-auto w-full"
            suffix={
              <div className="h-5 mt-3.5 ml-[35px] w-5 outline-blue_gray-200 outline-[0.5px] outline">
                <Img
                  className="h-5 my-auto"
                  src="images/img_edit_blue_gray_200.svg"
                  alt="edit"
                />
              </div>
            }
            shape="round"
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
        </div>
      </div>
    </>
  );
};

SectionsColumnrectanglefiftyseven.defaultProps = {
  estherajackson: "Esthera Jackson",
  duration: "3 days ago",
  follow: "Follow",
  descriptionOne:
    "Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you’re telling them from the off exactly why they hire you.",
  noThree: "4",
  no: "4",
  no1: "4",
  and30moreone: "and 30+ more",
  michaellewisOne: "Jessica Stones",
  descriptionTwo:
    "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a boy.",
  noFour: "4",
  textTwo: "shares",
  noFive: "4",
  textThree: "shares",
  michaellewisTwo: "Jessica Stones",
  descriptionThree:
    "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a boy.",
  noSix: "4",
  textFour: "shares",
  noSeven: "4",
  textFive: "shares",
};

export default SectionsColumnrectanglefiftyseven;
