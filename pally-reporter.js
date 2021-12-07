const fs = require('fs');

module.exports = function (options) {
  // initialize an empty report data
  const customReport = {
    results: {},
    errors: [],
    violations: 0
  };

  const fileName = options.fileName;

  return {
    // add test results to the report
    results(results) {
      customReport.results[results.pageUrl] = results;
      customReport.violations += results.issues.length;
    },

    // also store errors
    error(error, url) {
      customReport.errors.push({ error, url });
    },

    // write to a file
    afterAll() {
      const data = JSON.stringify(customReport, null, 2);
      return fs.promises.writeFile(fileName, data, 'utf8');
    }
  };
};
