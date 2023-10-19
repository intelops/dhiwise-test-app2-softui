import React from "react";

import { Button, Img, Text } from "components";

const ListItemsCardkanban = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[468px] inset-[0] justify-center m-auto w-[450px]"
          src="images/img_colorwhite.svg"
          alt="bg"
        />
        <div className="flex flex-col gap-2 items-start justify-start m-auto relative w-[90%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            {!!props?.coverimage ? (
              <Img
                className="h-[284px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                alt="coverpuritychak"
                src={props?.coverimage}
              />
            ) : null}
          </div>
          <Button
            className="cursor-pointer font-bold font-helvetica min-w-[64px] text-center text-xs"
            shape="round"
            size="xs"
            variant="gradient"
            color="deep_purple_500_pink_A400"
          >
            {props?.pending}
          </Button>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="leading-[150.00%] max-w-[402px] md:max-w-full text-base text-blue_gray-400"
              size="txtHelvetica16Bluegray400"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between pt-4 w-full">
            <div className="flex flex-row gap-[5px] items-center justify-evenly w-[7%]">
              {!!props?.attachmenticon ? (
                <Img
                  className="h-[17px]"
                  alt="attach"
                  src={props?.attachmenticon}
                />
              ) : null}
              {!!props?.eleven ? (
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.eleven}
                </Text>
              ) : null}
            </div>
            <div className="flex p-0.5 relative w-[19%]">
              <div className="flex m-auto w-1/2">
                <div className="flex flex-col h-5 items-center justify-start ml-[undefinedpx] my-auto w-5 z-[1]">
                  <div className="h-5 relative w-5">
                    {!!props?.creditsimage ? (
                      <Img
                        className="absolute h-5 inset-[0] justify-center m-auto object-cover rounded-[50%] w-5"
                        alt="creditstounspla_Two"
                        src={props?.creditsimage}
                      />
                    ) : null}
                    {!!props?.ellipseimage ? (
                      <Img
                        className="absolute h-5 inset-[0] justify-center m-auto object-cover rounded-[50%] w-5"
                        alt="ellipseFive_Two"
                        src={props?.ellipseimage}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col h-5 items-start justify-start ml-[-4px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-5 z-[1]">
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    {!!props?.pexelsimage ? (
                      <Img
                        className="h-5 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        alt="creditstopexels_One"
                        src={props?.pexelsimage}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-5 items-center justify-start ml-[-4px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] w-5 z-[1]">
                <Img
                  className="h-[19px] md:h-auto rounded-[50%] w-5"
                  src="images/img_elipse5_3.png"
                  alt="elipseFive_One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsCardkanban.defaultProps = {
  pending: "Pending",
  descriptiontext:
    "Website Design: New cards for blog section and profile details",
};

export default ListItemsCardkanban;
