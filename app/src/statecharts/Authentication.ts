import {navigate} from '@reach/router';
import {Machine} from 'xstate';

export const states = {
  forgotPassword: {
    on: {
      LOG_IN: 'logIn',
    },
    onEntry: [{type: 'pushUrl', url: 'forgot-password'}],
  },
  logIn: {
    on: {
      FORGOT_PASSWORD: 'forgotPassword',
      SIGN_UP: 'signUp',
    },
    onEntry: [{type: 'pushUrl', url: 'log-in'}],
  },
  signUp: {
    on: {
      LOG_IN: 'logIn',
    },
    onEntry: [{type: 'pushUrl', url: 'sign-up'}],
  },
};

export const actions = {
  pushUrl: (_arg1: any, _arg2: any, {action}: {action: any}) => {
    if (window.location.pathname === `/${action.url}`) return;
    navigate(`/${action.url}`);
  },
};

export const machine = Machine(
  {
    id: 'authentication',
    initial: 'logIn',
    states: {...states},
  },
  {
    actions: {...actions},
  },
);
