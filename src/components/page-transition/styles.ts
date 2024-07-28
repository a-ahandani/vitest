export const styles = () => ({
  "@global": {
    ":host": {

    },
  },

  container: {
    width: "100%",
    position: "absolute",
    height: "100vh",
    top: 0,
    zIndex: 1000,
    background: "red",
    transform: "translateY(-100%)",
    transition: 'transform 0.3s ease-in-out',
    '&.active': {
      transform: "translateY(0)",
    },
  }


});
