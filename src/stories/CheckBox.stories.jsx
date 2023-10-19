import React from "react";
import { CheckBox } from "components";

export default {
  title: "chandu_s_application2/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "RoundedBorder0",
  variant: "OutlineBlack9000c",
  label: "Checkbox",
  inputClassName: "mr-1",
};
