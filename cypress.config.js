const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "grepFilterSpecs": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
    },
    specPattern: 'src/**/*.{js,ts}',
  },
});
