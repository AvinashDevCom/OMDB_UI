// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import type { ThemeDefinition } from "vuetify";
import * as labsComponents from "vuetify/labs/components";
// Theme
// import colors from 'vuetify/es5/colors'

const light_theme: ThemeDefinition = {
  dark: false,
  colors: {
    primaryColor: "#5570F1",
    darkAccent: "#22283F",
    backgroundColor: "#01A699",
    tertiaryColor: "#4F1B86",
    tableHeader: "#DCEDFC",
    titleFontColor: "#ffffff",
    descFontColor: "#ffffff",

    // Media Site Colors
    msStaticColor: "#FC946A",
    msDigitalColor: "#602CE0",
  },
};

const dark_theme: ThemeDefinition = {
  dark: true,
  colors: {
    primaryColor: "#5570F1",
    darkAccent: "#22283F",
    backgroundColor: "#01A699",
    tertiaryColor: "#4F1B86",
    tableHeader: "#DCEDFC",
    titleFontColor: "#ffffff",
    descFontColor: "#ffffff",

    // Media Site Colors
    msStaticColor: "#FC946A",
    msDigitalColor: "#602CE0",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    components: {
      ...components,
      ...labsComponents,
    },
    directives,
    theme: {
      defaultTheme: "light",
      themes: {
        light: light_theme,
        dark: dark_theme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
