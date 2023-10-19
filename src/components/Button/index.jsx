import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-md",
};
const variants = {
  fill: {
    white_A700_a5: "bg-white-A700_a5 shadow-bs2 text-black-900",
    blue_gray_50: "bg-blue_gray-50 text-blue_gray-400",
    white_A700_33: "bg-white-A700_33 text-white-A700",
    white_A700: "bg-white-A700 shadow-bs1",
    blue_gray_500_19: "bg-blue_gray-500_19 text-blue_gray-400",
    light_green_50: "bg-light_green-50 text-light_green-A700",
    orange_A200_19: "bg-orange-A200_19 text-orange-A200",
    red_200: "bg-red-200 text-red-A700_02",
    gray_900_10: "bg-gray-900_10",
    red_500_5d: "bg-red-500_5d",
    gray_900_08: "bg-gray-900_08",
    light_green_600_19: "bg-light_green-600_19 text-light_green-A700",
    gray_50: "bg-gray-50",
    blue_gray_50_02: "bg-gray-200 text-gray-800",
    pink_500: "bg-pink-500",
    gray_50_26: "bg-gray-50_26",
    white_A700_26: "bg-white-A700_26",
    gray_900_05: "bg-gray-900_05 text-white-A700",
    blue_gray_900: "bg-blue_gray-900",
    blue_gray_700_01: "bg-blue_gray-700_01 text-white-A700",
    gray_50_02: "bg-gray-50_02 text-gray-800",
    light_green_A100: "bg-light_green-A100 text-light_green-A700_01",
  },
  outline: {
    red_A700: "border border-red-A700 border-solid",
    gray_300: "border border-gray-300 border-solid text-blue_gray-400",
    blue_gray_900:
      "border border-blue_gray-900 border-solid text-blue_gray-900",
    blue_gray_200_01: "border border-gray-500 border-solid",
    blue_gray_100_blue_gray_50_01:
      "blue_gray_100_blue_gray_50_01_border2 border border-solid text-blue_gray-400",
    red_500: "border border-red-500 border-solid",
    blue_gray_100: "border-blue_gray-100 border-l border-solid border-y",
    gray_600: "border border-gray-600 border-solid",
    purple_500: "border border-purple-500 border-solid text-purple-500",
    light_green_A700: "border border-light_green-A700 border-solid",
    red_600: "border border-red-600 border-solid",
    blue_gray_500: "border border-blue_gray-500 border-solid",
    green_400: "border border-green-500 border-solid",
    blue_gray_50:
      "border-blue_gray-50 border-r border-solid text-blue_gray-900",
    blue_gray_400:
      "border border-blue_gray-400 border-solid text-blue_gray-400",
  },
  gradient: {
    green_A700_lime_A700: "bg-gradient  shadow-bs",
    light_blue_400_indigo_A700_01: "bg-gradient1  text-white-A700",
    yellow_600_red_500_03: "bg-gradient3  text-white-A700",
    pink_300_red_A700: "bg-gradient2  text-white-A700",
    light_blue_400_indigo_A700: "bg-gradient11  text-white-A700",
    blue_gray_700_ab_gray_900_ab: "bg-gradient10  text-white-A700",
    blue_gray_100_a2_blue_gray_50_a2: "bg-gradient6  text-blue_gray-900",
    blue_gray_700_01_gray_900_06: "bg-gradient4 ",
    blue_gray_500_01_indigo_200: "bg-gradient12  shadow-bs",
    yellow_600_red_500_01: "bg-gradient9  text-white-A700",
    pink_A400_deep_purple_500_01: "bg-gradient5  shadow-bs1",
    blue_gray_100_blue_gray_50_01: "bg-gradient15  text-blue_gray-900",
    blue_gray_800_01_gray_900_07: "bg-gradient8  text-white-A700",
    deep_purple_500_pink_A400: "bg-gradient7  text-white-A700",
    blue_gray_700_01_gray_900_02: "bg-gradient14  text-white-A700",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "px-2 py-[11px]",
  lg: "p-3",
  xl: "p-[15px]",
  "2xl": "p-5",
  "3xl": "p-[25px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "white_A700_a5",
    "blue_gray_50",
    "white_A700_33",
    "white_A700",
    "blue_gray_500_19",
    "light_green_50",
    "orange_A200_19",
    "red_200",
    "gray_900_10",
    "red_500_5d",
    "gray_900_08",
    "light_green_600_19",
    "gray_50",
    "blue_gray_50_02",
    "pink_500",
    "gray_50_26",
    "white_A700_26",
    "gray_900_05",
    "blue_gray_900",
    "blue_gray_700_01",
    "gray_50_02",
    "light_green_A100",
    "red_A700",
    "gray_300",
    "blue_gray_200_01",
    "blue_gray_100_blue_gray_50_01",
    "red_500",
    "blue_gray_100",
    "gray_600",
    "purple_500",
    "light_green_A700",
    "red_600",
    "blue_gray_500",
    "green_400",
    "blue_gray_400",
    "green_A700_lime_A700",
    "light_blue_400_indigo_A700_01",
    "yellow_600_red_500_03",
    "pink_300_red_A700",
    "light_blue_400_indigo_A700",
    "blue_gray_700_ab_gray_900_ab",
    "blue_gray_100_a2_blue_gray_50_a2",
    "blue_gray_700_01_gray_900_06",
    "blue_gray_500_01_indigo_200",
    "yellow_600_red_500_01",
    "pink_A400_deep_purple_500_01",
    "blue_gray_800_01_gray_900_07",
    "deep_purple_500_pink_A400",
    "blue_gray_700_01_gray_900_02",
  ]),
};

export { Button };
