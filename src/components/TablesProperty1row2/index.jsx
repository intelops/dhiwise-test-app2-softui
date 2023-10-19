import React from "react";

import { Img, List, Text } from "components";

const TablesProperty1row2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-[99%] md:w-full">
            <div className="flex flex-col items-start justify-start py-2 w-full">
              <Text
                className="text-blue_gray-400 text-center text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.username}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-[200px]">
              <Text
                className="text-blue_gray-400 text-center text-sm w-auto"
                size="txtHelvetica14Bluegray400"
              >
                {props?.userrole}
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[49%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start sm:ml-[0] py-2 w-40">
                <Text
                  className="text-blue_gray-400 text-center text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.userlocation}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:ml-[0] py-2 w-40">
                <Text
                  className="text-blue_gray-400 text-center text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.userage}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:ml-[0] py-2 w-40">
                <Text
                  className="text-blue_gray-400 text-center text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.userjoindate}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 my-2 w-40">
                <Text
                  className="text-blue_gray-400 text-sm w-auto"
                  size="txtHelvetica14Bluegray400"
                >
                  {props?.usersalary}
                </Text>
              </div>
            </List>
          </div>
          <Img
            className="sm:h-auto h-px object-cover w-[1500px] md:w-full"
            src="images/img_separator_gray_300.png"
            alt="separator_One"
          />
        </div>
      </div>
    </>
  );
};

TablesProperty1row2.defaultProps = {
  username: "Tiger Nixon",
  userrole: "System Architect",
  userlocation: "Edinburgh",
  userage: "	61",
  userjoindate: "2011/04/25",
  usersalary: "$320,800",
};

export default TablesProperty1row2;
