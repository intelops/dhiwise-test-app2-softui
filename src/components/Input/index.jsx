import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  gradient: {
    blue_800_deep_purple_A200: "bg-gradient13  text-white-A700",
    yellow_600_red_500_01: "bg-gradient9  text-white-A700",
  },
  fill: {
    white_A700: "bg-white-A700 text-gray-500",
    blue_gray_300_19: "bg-blue_gray-300_19",
    blue_gray_50_02: "bg-gray-200 text-gray-800",
    blue_gray_50: "bg-blue_gray-50 text-blue_gray-900",
  },
  outline: {
    blue_gray_50: "border border-blue_gray-50 border-solid text-blue_gray-400",
  },
};
const shapes = { round: "rounded-lg" };
const sizes = {
  xs: "pb-px pl-px pt-5",
  sm: "pb-[5px] pt-1 px-1",
  lg: "pb-[15px] pt-[11px] px-[11px]",
  "3xl": "pb-2.5 pl-2 pr-2.5 pt-3.5",
  "2xl": "pb-3 pt-[13px] px-3",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "lg", "3xl", "2xl"]),
  variant: PropTypes.oneOf(["gradient", "fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_800_deep_purple_A200",
    "yellow_600_red_500_01",
    "white_A700",
    "blue_gray_300_19",
    "blue_gray_50_02",
    "blue_gray_50",
    "blue_gray_50",
  ]),
};

export { Input };
