const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig([
  {
    label: 'unitTests',
    files: 'out/tests/**/*.test.js',
    version: 'insiders',
    workspaceFolder: './sampleWorkspace',
    mocha: {
      ui: 'bdd',
      timeout: 60000
    }
  }
]);