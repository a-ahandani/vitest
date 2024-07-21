export const styles = () => ({
  "@global": {
    ":host": {

    },
  },
  menuButton: {
    background: "none",
    position: "relative",
    display: "flex",
    zIndex: "var(--layer-2)",
    border: "none",
  },
  menuList: {
    position: "fixed",
    left: "0",
    top: "0",
    width: "120%",
    height: "100%",
    minWidth: "calc(var(--scale-fluid-10) * 3.5)",
    "& $menuBg": {
      transition: "transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)",
      transform: "translate(-2px, 2px) scale(1) rotate(1deg)",
      cursor: "pointer",
      transformOrigin: "100% 0",
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: "var(--layer-1)",
      pointerEvents: "none",
      overflow: "hidden",
      "&::before, &::after": {
        transition: "transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: "translate(130px, 0) rotate(15deg) scale(1.3, 0)",
        transformOrigin: "100% 0",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        background: "var(--color-purple-700)",
        content: '""',
        pointerEvents: "none",
      },
      "&::after": {
        background: "var(--color-purple-500)",
      },
      "&::before": {
        transitionDelay: "0.05s",
      },
    },
  },
  menuBg: {},
  menuActive: {
    "& $menuBg": {
      "--translate": "calc(var(--container-padding) / 2)",
      transform:
        "translate(var(--translate), calc(var(--translate) * -1)) scale(1.1)",

      "&::before, &::after": {
        transform: "translate(0, 0) rotate(0deg) scale(1.3, 1)",
      },
      "&::after": {
        transitionDelay: "0.05s",
      },
      "&::before": {
        transitionDelay: "0s",
      },
    },
  },
});
