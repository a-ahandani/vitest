export const styles = () => ({
  "@global": {
    ":host": {
      display: "flex",
      alignItems: "center",
    },
  },

  menuButton: {
    display: "flex",
  },
  navigation: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    transform: "translate(0px,-2%)",
    transition: "transform 1s var(--ease-in-out-sine)",
    transitionDelay: '0s',
    opacity: "0",
    zIndex: "var(--layer-2)",
  },
  menuList: {
    position: "fixed",
    zIndex: "var(--layer-1)",
    left: "0",
    top: "0",
    width: "100vw",
    height: "100vh",
    minWidth: "calc(var(--scale-fluid-10) * 3.5)",
  },

  menuActive: {
    "& $navigation": {
      transitionDelay: '1s',
      opacity: "1",
      transform: "translate(0px,0)",
      transition: "transform 1s var(--ease-in-out-sine), opacity 1s",
    },
  },
});
