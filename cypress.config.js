const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    resolve: {
      modules: [
          'node_modules',
          '/home/sandro/Documentos/mudar-senha/cypress/e2e' // Add your directory path here
      ]
    } // remove the comma here
  },
});
