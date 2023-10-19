import React from "react";

import { Button, Img, Text } from "components";

const ListItemsSlackbot = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
          <Button
            className="flex h-[70px] items-center justify-center rounded-lg w-[70px]"
            shape="round"
            color="blue_gray_900"
            size="lg"
            variant="fill"
          >
            <Img className="h-12" src="images/img_logos1.svg" alt="logosOne" />
          </Button>
          <div className="flex flex-1 flex-col gap-px items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-blue_gray-900"
                size="txtHelveticaBold16Bluegray900"
              >
                {props?.slackbot}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
              <div className="flex relative w-full">
                <div className="flex my-auto w-[84%]">
                  <div className="flex my-auto w-[83%]">
                    <div className="flex my-auto w-[77%]">
                      <div className="flex my-auto w-[72%]">
                        <div className="flex flex-col items-center justify-start my-auto w-5">
                          <div className="flex flex-col items-center justify-start w-5 md:w-full">
                            <Img
                              className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-5 sm:w-full"
                              src="images/img_creditstounsplashcom.png"
                              alt="creditstounspla"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col h-[21px] items-center justify-start ml-[-6.46px] my-auto w-[21px] z-[1]">
                          <div className="h-[21px] relative w-[21px]">
                            <Img
                              className="absolute h-[21px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[21px]"
                              src="images/img_creditstounsplashcom_21x21.png"
                              alt="creditstounspla_One"
                            />
                            <Img
                              className="absolute h-[21px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[21px]"
                              src="images/img_ellipse5.png"
                              alt="ellipseFive"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-[21px] ml-[-6.92px] my-auto w-[21px] z-[1]">
                        <div className="flex flex-col h-full items-center justify-start my-auto w-[91%]">
                          <Img
                            className="h-[21px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                            src="images/img_creditstopexelscom.png"
                            alt="creditstopexels"
                          />
                        </div>
                        <Img
                          className="absolute h-[21px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[21px]"
                          src="images/img_ellipse5_21x21.png"
                          alt="ellipseFive_One"
                        />
                      </div>
                    </div>
                    <div className="h-[21px] ml-[-6.92px] my-auto w-[21px] z-[1]">
                      <Img
                        className="h-[21px] m-auto object-cover rounded-[10px] w-[21px]"
                        src="images/img_elipse5.png"
                        alt="elipseFive"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[2px] outline-white-A700 rounded-[10px] w-[21px]">
                        <div className="h-[21px] relative w-[21px]">
                          <Img
                            className="h-[21px] m-auto object-cover rounded-[10px] w-[21px]"
                            src="images/img_elipse5_21x21.png"
                            alt="elipseFive_One"
                          />
                          <Img
                            className="absolute h-[21px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[21px]"
                            src="images/img_ellipse5_1.png"
                            alt="ellipseFive_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[21px] ml-[-7.12px] my-auto w-[21px] z-[1]">
                    <Img
                      className="h-[21px] m-auto object-cover rounded-[10px] w-[21px]"
                      src="images/img_elipse5_1.png"
                      alt="elipseFive_Two"
                    />
                    <Img
                      className="absolute h-[21px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[21px]"
                      src="images/img_ellipse5_2.png"
                      alt="ellipseFive_Three"
                    />
                  </div>
                </div>
                <div className="h-[21px] ml-[-7.12px] my-auto w-[21px] z-[1]">
                  <Img
                    className="h-[21px] m-auto object-cover rounded-[10px] w-[21px]"
                    src="images/img_elipse5_2.png"
                    alt="elipseFive_Three"
                  />
                  <Img
                    className="absolute h-[21px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[21px]"
                    src="images/img_ellipse5_3.png"
                    alt="ellipseFive_Four"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-5 items-center justify-start w-5">
            <Img
              className="h-5 w-5"
              src="images/img_overflowmenu.svg"
              alt="overflowmenu"
            />
          </div>
        </div>
        <Text
          className="text-blue_gray-400 text-sm w-full"
          size="txtHelvetica14Bluegray400"
        >
          {props?.ifeverythingi}
        </Text>
        <Img
          className="h-px w-full"
          src="images/img_separator.svg"
          alt="separatorZero_One"
        />
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtHelveticaBold16Bluegray900"
            >
              {props?.five}
            </Text>
            <Text
              className="text-blue_gray-400 text-sm w-auto"
              size="txtHelvetica14Bluegray400"
            >
              {props?.participants}
            </Text>
          </div>
          <div className="flex flex-col items-end justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 text-right w-auto"
              size="txtHelveticaBold16Bluegray900"
            >
              {props?.p020322}
            </Text>
            <Text
              className="text-blue_gray-400 text-right text-sm w-auto"
              size="txtHelvetica14Bluegray400"
            >
              {props?.duedate}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsSlackbot.defaultProps = {
  slackbot: "Slack Bot",
  ifeverythingi: (
    <>
      If everything I did failed - which it doesn&#39;t, I think that it
      actually succeeds.
    </>
  ),
  five: "5",
  participants: "Participants",
  p020322: "02.03.22",
  duedate: "Due Date",
};

export default ListItemsSlackbot;
