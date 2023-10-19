import React from "react";

import { Button as ButtonComponent, Img } from "components";

export default {
  title: "chandu_s_application2/Buttons",
  component: ButtonComponent,
  argTypes: {
    children: { control: "text" },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  shape: "RoundedBorder6",
  variant: "OutlineBlack90005_4",
  children: "Button",
  className: "flex items-center justify-center",
};

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  shape: "RoundedBorder6",
  variant: "OutlineBlack90005_4",
  children: "Button",
  className: "flex items-center justify-center",
  leftIcon: (
    <Img
      src="images/img_checkmark_light_green_a700_01.svg"
      alt="img"
      className="w-[25px] float-left mr-[10px]"
    />
  ),
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  shape: "RoundedBorder6",
  variant: "OutlineBlack90005_4",
  children: "Button",
  className: "flex items-center justify-center",
  rightIcon: (
    <Img
      src="images/img_checkmark_light_green_a700_01.svg"
      alt="img"
      className="w-[25px] float-right ml-[10px]"
    />
  ),
};
