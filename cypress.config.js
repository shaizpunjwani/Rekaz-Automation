const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    url: "https://rekaz.io/"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/Testing/*.js',
    chromeWebSecurity: false,
    viewportWidth:1200,
  },
  defaultCommandTimeout: 10000
});
