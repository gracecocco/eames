/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'eames',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    typekit: {
      kitId: 'fqj1hjt'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    contentSecurityPolicy: {
      'connect-src': "'self' api.mixpanel.com hn.inspectlet.com *.intercom.io wss://*.intercom.io",
      'img-src': "*",
      'script-src': "'self' use.typekit.net",
      'style-src': "'self' 'unsafe-inline' use.typekit.net"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
