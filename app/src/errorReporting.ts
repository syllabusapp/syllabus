import {init} from '@sentry/browser';

export default () => {
  return init({
    dsn: process.env.REACT_APP_ERROR_REPORTING_KEY,
    environment: process.env.NODE_ENV,
    release: process.env.REACT_APP_GIT_SHA,
  });
};
