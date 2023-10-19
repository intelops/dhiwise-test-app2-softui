import React from "react";

import { Img, Text } from "components";

const ListItemsRowbillinginfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtHelveticaBold14Bluegray900"
          >
            {props?.username}
          </Text>
          <div className="flex flex-row gap-10 items-start justify-start w-auto">
            <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
              {!!props?.delete ? (
                <Img
                  className="h-4 w-[11px]"
                  alt="delete"
                  src={props?.delete}
                />
              ) : null}
              {!!props?.textOne ? (
                <Text
                  className="text-red-A700 text-xs w-auto"
                  size="txtHelveticaBold12RedA700"
                >
                  {props?.textOne}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
              {!!props?.arrowrightSix ? (
                <Img
                  className="h-4 w-3"
                  alt="arrowright_Six"
                  src={props?.arrowrightSix}
                />
              ) : null}
              {!!props?.textTwo ? (
                <Text
                  className="text-blue_gray-900 text-xs w-auto"
                  size="txtHelveticaBold12Bluegray900"
                >
                  {props?.textTwo}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtNotoSansRegular12Bluegray400"
            >
              {props?.labelcompany}
            </Text>
            <Text
              className="text-blue_gray-900 text-xs w-auto"
              size="txtNotoSansBold12"
            >
              {props?.companyname}
            </Text>
          </div>
          <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtNotoSansRegular12Bluegray400"
            >
              {props?.labelemailaddre}
            </Text>
            <Text
              className="text-blue_gray-900 text-xs w-auto"
              size="txtNotoSansBold12"
            >
              {props?.emailaddress}
            </Text>
          </div>
          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtNotoSansRegular12Bluegray400"
            >
              {props?.labelvatnumber}
            </Text>
            <Text
              className="text-blue_gray-900 text-xs w-auto"
              size="txtNotoSansBold12"
            >
              {props?.vatnumber}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ListItemsRowbillinginfo.defaultProps = {
  username: "Oliver Liam",
  labelcompany: "Company Name:",
  companyname: "Viking Burrito",
  labelemailaddre: "Email Address:",
  emailaddress: "oliver@burrito.com",
  labelvatnumber: "VAT Number:",
  vatnumber: "FRB1235476",
};

export default ListItemsRowbillinginfo;
