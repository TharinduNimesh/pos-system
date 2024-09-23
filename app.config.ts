export default defineAppConfig({
  ui: {
    primary: "blue",
    gray: "zinc",
    icons: {
      dynamic: true, // use icones directly from icones.js.org
    },
    input: {
      default: {
        size: "lg",
        color: "gray",
      },
    },
    button: {
      default: {
        size: "lg",
      },
    },
    selectMenu: {
      default: {
        size: "lg",
        color: "gray",
      },
    }
  },
});
