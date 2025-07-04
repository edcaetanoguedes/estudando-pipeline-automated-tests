const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { defineConfig } = require("cypress");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4000",
    specPattern: "cypress/e2e/**/**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      return config;
    },
  },
  env: {
    grepFilterSpecs: true,
    BACKEND_ENDPOINT: "http://localhost:4000/api/v1",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
