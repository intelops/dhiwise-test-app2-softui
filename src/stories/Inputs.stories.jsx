import React from "react";

import { Input } from "components";

export default {
  title: "chandu_s_application2/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder8",
  variant: "OutlineIndigo50",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
