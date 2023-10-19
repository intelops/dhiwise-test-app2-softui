import React from "react";

import { Img, List, Text } from "components";

const GeneralNavigationSubmenu = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_colorwhite.svg')" }}
      >
        <List
          className="flex flex-col gap-1 items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-row gap-1 items-center justify-start px-4 py-1 w-full">
            <Img
              className="h-4 md:h-auto object-cover w-4"
              src="images/img_iconssolid_16x16.png"
              alt="iconssolid"
            />
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900_01 text-xs w-auto"
                size="txtNotoSansRegular12Bluegray90001"
              >
                {props?.menuitemtext}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-1 items-center justify-start px-4 py-1 w-full">
            <Img
              className="h-4 md:h-auto object-cover w-4"
              src="images/img_iconssolid_16x16.png"
              alt="iconssolid"
            />
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900_01 text-xs w-auto"
                size="txtNotoSansRegular12Bluegray90001"
              >
                {props?.menuitemtext1}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-row gap-1 items-center justify-start px-4 py-1 w-full">
            <Img
              className="h-4 md:h-auto object-cover w-4"
              src="images/img_iconssolid_16x16.png"
              alt="iconssolid"
            />
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900_01 text-xs w-auto"
                size="txtNotoSansRegular12Bluegray90001"
              >
                {props?.menuitemtext2}
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

GeneralNavigationSubmenu.defaultProps = {
  menuitemtext: "Menu item",
  menuitemtext1: "Menu item",
  menuitemtext2: "Menu item",
};

export default GeneralNavigationSubmenu;
