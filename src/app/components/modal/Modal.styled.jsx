import { theme } from "../../styles/theme";

export const ModalStyles = {
  overlay: {
    zIndex: 100,
    backgroundColor: theme.colors.background.overlay,

    transitionProperty: "opacity",
    transitionDuration: theme.transition.duration,
    transitionTimingFunction: theme.transition.timingFunction,
  },
  content: {
    maxWidth: "541px",
    margin: "0 auto",

    padding: "0",

    borderRadius: "24px",
  },
};
