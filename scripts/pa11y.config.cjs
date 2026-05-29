'use strict';

/**
 * Shared pa11y config for local runs and CI.
 * Note: pa11y v9 CLI no longer supports passing chrome args via `-- --no-sandbox`,
 * so we set Puppeteer launch args here.
 */
module.exports = {
  timeout: 120000,
  wait: 1000,
  waitUntil: 'domcontentloaded',
  chromeLaunchConfig: {
    args: ['--no-sandbox'],
  },
};

