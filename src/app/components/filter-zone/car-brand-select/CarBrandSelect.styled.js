import { theme } from "../../../styles/theme";

export const CarBrandSelectStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    width: "224px",
    marginTop: "8px",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,

    width: "224px",
    backgroundColor: theme.colors.background.select,

    boxShadow: "none",
    border: "none",
    borderRadius: "14px",

    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    padding: "14px",
    rotate: state.isFocused ? "180deg" : "0",
    color: theme.colors.text.select,

    ":hover": {
      color: theme.colors.text.select,
    },
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,

    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "111%",
    color: theme.colors.text.select,
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,

    padding: "14px 0 14px 18px",
  }),

  input: (baseStyles) => ({
    ...baseStyles,
    margin: 0,
    padding: 0,
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "111%",
    color: theme.colors.text.select,
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,

    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "111%",
    color: theme.colors.text.select,
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    marginTop: "4px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: "14px",
    width: "224px",
    height: "272px",
    boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
    background: "#fff",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    height: "100%",
  }),
  option: (baseStyles, { isSelected }) => ({
    ...baseStyles,
    color: isSelected
      ? theme.colors.text.select
      : theme.colors.text.inactiveSelect,

    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "125%",
    padding: "4px 18px",

    backgroundColor: "#fff",

    transitionDuration: theme.transition.duration,
    transitionTimingFunction: theme.transition.timingFunction,
    transitionProperty: "color",

    ":hover": {
      color: theme.colors.text.select,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  }),
};
