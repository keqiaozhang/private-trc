(function() {
  'use-strict';

  var env = {
    LOG_DEBUG: 'false' === 'true',

    WS_URL: 'ws://sof-tcr.sh.intel.com/live',
    WS_ENABLED: 'true' === 'true',

    REST_API_URL: 'http://sof-tcr.sh.intel.com/1',

    CRASHTOOL_WEB_URL: 'https://crashtool.iind.intel.com',
    CRASHTOOL_JIRA_URL: 'https://jira01.devtools.intel.com',
    WEB_URI: 'http://sof-tcr.sh.intel.com',

    AUTH_TYPE: 'oauth',

    WARN_TITLE: '',
    WARN_MESSAGE: '',

    OAUTH_CLIENT_ID: '85b8ee26-13a8-4afd-a059-b486d532c4aa',
    OAUTH_AUTHZ_SERVER_URI: 'https://auth.intel.com/auth/protocol/oauth2/',

    ACCESS_MANAGEMENT_REQUEST_URL: 'https://eam.intel.com/eamweb/RequestAccess/Paging.aspx?Administration=FALSE&Others=FALSE'
  };

  window.__env = env;

})();
