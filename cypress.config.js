const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, cypress-qase-reporter",
    overwrite: true,
    html: false,
    json: true,
    charts: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: "cypress/TestReport",
    saveAllAttempts: true,
    cypressMochawesomeReporterReporterOptions: {
      reportDir: "cypress/TestReport",
      charts: true,
      overwrite: true,
      html: false,
      json: true,
      reportPageTitle: "My Test Suite",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: true,
    },
  },
  screenshotsFolder: "cypress/TestReport/screenshots",
  videosFolder: "cypress/TestReport/videos",
  video: false,
});
