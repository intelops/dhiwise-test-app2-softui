import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const GeneralNavigation2ndarymenutop = (props) => {
  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start sm:mt-0 mt-1 w-[6%] sm:w-full">
          <div className="flex flex-col items-start justify-start w-[89px]">
            {props?.language}
          </div>
          <Text
            className="text-gray-800 text-sm"
            size="txtHelveticaBold14Bluegray90003"
          >
            {props?.default}
          </Text>
        </div>
        <div className="flex flex-row items-center justify-between w-[22%] sm:w-full">
          <Input
            name="inputwithaddons"
            placeholder="Type here..."
            value={inputwithaddonsvalue}
            onChange={(e) => setInputwithaddonsvalue(e)}
            className="font-helvetica p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
            wrapClassName="border border-gray-300 border-solid flex pr-[35px]"
            prefix={
              <Img
                className="cursor-pointer my-auto"
                src="images/img_search_blue_gray_900_03.svg"
                alt="search"
              />
            }
            suffix={
              <CloseSVG
                fillColor="#a0aec0"
                className="cursor-pointer my-auto"
                onClick={() => setInputwithaddonsvalue("")}
                style={{
                  visibility:
                    inputwithaddonsvalue?.length <= 0 ? "hidden" : "visible",
                }}
                height={39}
                width={37}
                viewBox="0 0 37 39"
              />
            }
            shape="round"
            color="white_A700"
            variant="fill"
          ></Input>
          <div className="flex flex-row gap-1 h-4 md:h-auto items-center justify-start w-[58px]">
            <Img
              className="h-3 w-3"
              src="images/img_ioniconppersondefault.svg"
              alt="ioniconppersond"
            />
            <Text
              className="text-gray-600 text-xs w-10"
              size="txtHelveticaBold12Bluegray40001"
            >
              {props?.signintext}
            </Text>
          </div>
          <Img
            className="h-3 w-3"
            src="images/img_ioniconssettingssharp.svg"
            alt="ioniconssetting"
          />
          <Img
            className="h-3 w-3"
            src="images/img_ioniconnnotif.svg"
            alt="ioniconnnotif"
          />
        </div>
      </div>
    </>
  );
};

GeneralNavigation2ndarymenutop.defaultProps = {
  language: (
    <Text
      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
      size="txtHelvetica24"
    >
      <span className="text-gray-500 font-helvetica text-left font-normal">
        Pages{" "}
      </span>
      <span className="text-black-900 font-helvetica text-left font-normal">
        {" "}
      </span>
      <span className="text-gray-800 font-helvetica text-left text-xs font-normal">
        / Default
      </span>
    </Text>
  ),
  default: "Default",
  signintext: "Sign In",
};

export default GeneralNavigation2ndarymenutop;
