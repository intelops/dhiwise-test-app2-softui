import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Switch,
  Text,
} from "components";
import GeneralInput from "components/GeneralInput";
import GeneralNavigationTabbuttons from "components/GeneralNavigationTabbuttons";
import Sidebar2 from "components/Sidebar2";

import { CloseSVG } from "../../assets/images";

const inputfieldOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardScreenAccountSecurityPage = () => {
  const sideBarMenu = [
    {
      label: "Kanban",
      href: "/applicationskanban",
      active: window.location.pathname === "/applicationskanban",
    },
    { label: "Wizard" },
    {
      label: "DataTables",
      href: "/tables",
      active: window.location.pathname === "/tables",
    },
    {
      label: "Calendar",
      href: "/applicationscalendar",
      active: window.location.pathname === "/applicationscalendar",
    },
    {
      label: "Analytics",
      href: "/applicationsanalytics",
      active: window.location.pathname === "/applicationsanalytics",
    },
  ];
  const [inputwithaddonsvalue, setInputwithaddonsvalue] = React.useState("");
  const generalNavigationTabbuttonsPropList = [
    { officetext: "Socials" },
    { officetext: "Notifications" },
    { officetext: "Backup" },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-helvetica items-center justify-end mx-auto p-6 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between mt-[18px] mx-auto md:px-5 w-full">
          <Sidebar2 className="!sticky !w-[233px] flex h-screen md:hidden justify-start md:mt-0 mt-[3px] overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[46px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[10%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[142px]">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtHelvetica24"
                  >
                    <span className="text-gray-500 font-helvetica text-left font-normal">
                      Pages
                    </span>
                    <span className="text-gray-800 font-helvetica text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-black-900 font-helvetica text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-gray-800 font-helvetica text-left text-xs font-normal">
                      / Account / Invoice
                    </span>
                  </Text>
                </div>
                <Text
                  className="text-gray-800 text-sm"
                  size="txtHelveticaBold14Bluegray90003"
                >
                  Invoice
                </Text>
              </div>
              <Img
                className="h-6 mb-1.5 md:ml-[0] ml-[54px] md:mt-0 mt-[15px] w-6"
                src="images/img_ioniconmmenudefault.svg"
                alt="ioniconmmenudef"
              />
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[993px] md:mt-0 mt-1.5 w-[22%] md:w-full">
                <Input
                  name="inputwithaddons"
                  placeholder="Type here..."
                  value={inputwithaddonsvalue}
                  onChange={(e) => setInputwithaddonsvalue(e)}
                  className="p-0 placeholder:text-gray-500 sm:pr-5 text-left text-xs w-full"
                  wrapClassName="border border-gray-300 border-solid flex pr-[35px] rounded-[15px]"
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
                          inputwithaddonsvalue?.length <= 0
                            ? "hidden"
                            : "visible",
                      }}
                      height={39}
                      width={37}
                      viewBox="0 0 37 39"
                    />
                  }
                  color="white_A700"
                  variant="fill"
                ></Input>
                <div className="flex flex-row gap-1 h-4 md:h-auto items-center justify-start w-[58px]">
                  <Img
                    className="h-3 w-3"
                    src="images/img_ioniconppersondefault.svg"
                    alt="ioniconppersond"
                  />
                  <a href="javascript:" className="text-gray-600 text-xs w-10">
                    <Text size="txtHelveticaBold12Bluegray40001">Sign In</Text>
                  </a>
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[105px] items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                  <div className="bg-white-A700_8c border border-solid border-white-A700 flex sm:flex-col flex-row gap-px items-start justify-start p-1 rounded-[12px] shadow-bs2 w-auto sm:w-full">
                    <Button
                      className="!text-blue_gray-900 cursor-pointer h-[35px] rounded-lg text-center text-xs w-[134px]"
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      Messages
                    </Button>
                    <List
                      className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-3/4 sm:w-full"
                      orientation="horizontal"
                    >
                      {generalNavigationTabbuttonsPropList.map(
                        (props, index) => (
                          <React.Fragment
                            key={`GeneralNavigationTabbuttons${index}`}
                          >
                            <GeneralNavigationTabbuttons
                              className="flex flex-col h-[35px] md:h-auto items-center justify-center px-2 rounded-lg shadow-bs7 w-[134px]"
                              {...props}
                            />
                          </React.Fragment>
                        ),
                      )}
                    </List>
                  </div>
                  <div className="flex md:flex-col flex-row font-notosans gap-[29px] items-center justify-between mt-[35px] w-full">
                    <GeneralInput className="flex flex-1 flex-col gap-1 items-start justify-center max-w-[759px] w-full" />
                    <GeneralInput className="flex flex-1 flex-col gap-1 items-start justify-center max-w-[759px] w-full" />
                  </div>
                  <div className="flex md:flex-col flex-row font-notosans gap-[29px] items-start justify-between mt-[27px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[397px] items-start justify-start max-w-[759px] p-6 sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_colorwhite.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                            size="txtNotoSansSemiBold20"
                          >
                            Security Settings
                          </Text>
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtNotoSansRegular14Bluegray400"
                          >
                            Notify me via email when logging in
                          </Text>
                          <Switch
                            onColor="#141727"
                            offColor="#e2e8f0"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtNotoSansRegular14Bluegray400"
                          >
                            Send SMS confirmation for all online payments
                          </Text>
                          <Switch
                            onColor="#141727"
                            offColor="#e2e8f0"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={false}
                            className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtNotoSansRegular14Bluegray400"
                          >
                            <>Check which devices accessed your account</>
                          </Text>
                          <Switch
                            onColor="#141727"
                            offColor="#e2e8f0"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[46px] items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtNotoSansRegular14Bluegray400"
                          >
                            <>
                              Find My Device, make sure your device can be found
                              if it gets lost
                            </>
                          </Text>
                          <Switch
                            onColor="#141727"
                            offColor="#e2e8f0"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={false}
                            className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                          />
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtNotoSansRegular14Bluegray400"
                          >
                            <>
                              Lock your device with a PIN, pattern, or password
                            </>
                          </Text>
                          <Switch
                            onColor="#141727"
                            offColor="#e2e8f0"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={false}
                            className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[49px] items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtNotoSansRegular14Bluegray400"
                          >
                            Manage what apps have access to app-usage data on
                            your device
                          </Text>
                          <Switch
                            onColor="#141727"
                            offColor="#e2e8f0"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className="border border-blue_gray-50 border-solid gap-[9.34px] h-5 pl-[1.44px] pr-[2.5px] py-[1.44px] rotate-[180deg] w-10"
                          />
                        </div>
                        <div className="flex flex-row font-helvetica gap-2 items-center justify-end w-full">
                          <Button
                            className="!text-blue_gray-900 bg-gradient15  cursor-pointer font-bold h-[35px] min-w-[83px] text-center text-xs uppercase"
                            shape="round"
                            size="md"
                            variant="outline"
                            color="blue_gray_100_blue_gray_50_01"
                          >
                            Cancel
                          </Button>
                          <Button
                            className="cursor-pointer font-bold h-[35px] leading-[normal] min-w-[136px] text-[13px] text-center uppercase"
                            shape="round"
                            size="md"
                            variant="gradient"
                            color="deep_purple_500_pink_A400"
                          >
                            Save changes
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[332px] md:h-auto items-start justify-between max-w-[759px] p-6 sm:px-5 rounded-[15px] shadow-bs3 w-full"
                      style={{
                        backgroundImage: "url('images/img_colorwhite.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-900_01 text-xl tracking-[-0.80px] w-auto"
                            size="txtNotoSansSemiBold20Bluegray90001"
                          >
                            Two-factor Authentication
                          </Text>
                          <Button
                            className="cursor-pointer font-bold font-helvetica h-10 leading-[normal] min-w-[118px] text-[13px] text-center uppercase"
                            shape="round"
                            size="lg"
                            variant="gradient"
                            color="blue_gray_700_01_gray_900_02"
                          >
                            Enable
                          </Button>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="leading-[150.00%] max-w-[711px] md:max-w-full text-blue_gray-500 text-sm"
                            size="txtNotoSansRegular14Bluegray500"
                          >
                            Two-factor authentication adds an additional layer
                            of security to your account by requiring more than
                            just a password to log in.{" "}
                          </Text>
                          <div className="bg-gradient14  flex flex-col gap-2 items-start justify-start p-4 rounded-[15px] w-full">
                            <Text
                              className="text-base text-white-A700 tracking-[-0.80px] w-auto"
                              size="txtNotoSansSemiBold16WhiteA700"
                            >
                              Questions about security?{" "}
                            </Text>
                            <Text
                              className="leading-[150.00%] max-w-[679px] md:max-w-full text-sm text-white-A700"
                              size="txtNotoSansRegular14WhiteA700"
                            >
                              Two-factor authentication adds an additional layer
                              of security to your account by requiring more than
                              just a password to log in.{" "}
                            </Text>
                            <Button
                              className="cursor-pointer font-bold font-helvetica h-10 min-w-[126px] text-center text-xs uppercase"
                              shape="round"
                              size="lg"
                              variant="gradient"
                              color="blue_gray_100_blue_gray_50_01"
                            >
                              Contact us
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-notosans gap-[29px] items-start justify-between mt-[30px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-[432px] items-start justify-start max-w-[759px] p-6 sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_colorwhite.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <div className="flex flex-col font-notosans gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-900_01 text-xl tracking-[-0.80px] w-auto"
                            size="txtNotoSansSemiBold20Bluegray90001"
                          >
                            Change Password
                          </Text>
                          <Text
                            className="text-blue_gray-500 text-sm w-auto"
                            size="txtNotoSansRegular14Bluegray500"
                          >
                            We will send you an email with the verification
                            code.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col font-notosans gap-6 items-start justify-start w-full">
                          <GeneralInput
                            className="flex flex-col gap-1 items-start justify-center w-full"
                            nameTen="Current Password"
                          />
                          <GeneralInput
                            className="flex flex-col gap-1 items-start justify-center w-full"
                            nameTen="New Password"
                          />
                          <GeneralInput
                            className="flex flex-col gap-1 items-start justify-center w-full"
                            nameTen="Confirm New Password"
                          />
                        </div>
                        <Button
                          className="cursor-pointer font-bold font-helvetica h-10 leading-[normal] text-[13px] text-center uppercase w-full"
                          shape="round"
                          size="lg"
                          variant="gradient"
                          color="blue_gray_700_01_gray_900_02"
                        >
                          Update Password
                        </Button>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 flex-col h-48 items-start justify-start max-w-[759px] p-6 sm:px-5 rounded-[15px] shadow-bs3 w-full"
                      style={{
                        backgroundImage: "url('images/img_colorwhite.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-2 items-start justify-start w-1/2 md:w-full">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-900 text-xl tracking-[-0.80px] w-auto"
                            size="txtNotoSansSemiBold20"
                          >
                            Password requirements
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtNotoSansRegular14Bluegray400"
                          >
                            Please follow this guide for a strong password:
                          </Text>
                        </div>
                        <Text
                          className="leading-[150.00%] text-blue_gray-400 text-sm"
                          size="txtNotoSansRegular14Bluegray400"
                        >
                          <>
                            One special characters
                            <br />
                            Min 6 characters
                            <br />
                            One number (2 are recommended)
                            <br />
                            Change it often
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtHelvetica12Bluegray20001"
                    >
                      <span className="text-gray-500 font-helvetica text-left font-normal">
                        @ 2021, Made with ❤️ by{" "}
                      </span>
                      <span className="text-blue_gray-800 font-helvetica text-left font-bold">
                        Creative Tim
                      </span>
                      <span className="text-gray-500 font-helvetica text-left font-normal">
                        {" "}
                        for a better web.
                      </span>
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-row items-start justify-between w-[15%] sm:w-full">
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtHelvetica12Bluegray20001"
                    >
                      Creative Tim
                    </Text>
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtHelvetica12Bluegray20001"
                    >
                      Blog
                    </Text>
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtHelvetica12Bluegray20001"
                    >
                      License
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreenAccountSecurityPage;
