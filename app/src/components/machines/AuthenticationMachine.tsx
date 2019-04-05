// @TODO create test
import {useMachine} from '@xstate/react';
import React from 'react';
import posed, {PoseGroup} from 'react-pose';
import {ForgotPassword} from '../../pages/ForgotPassword';
import {LogIn} from '../../pages/LogIn';
import {SignUp} from '../../pages/SignUp';
import {machine} from '../../statecharts/Authentication';

const PosedItem = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 500,
    },
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
    },
    y: 10,
  },
});

export const AuthenticationMachine: React.SFC = () => {
  const [current, send] = useMachine(
    machine.withConfig({
      actions: {
        pushUrl: () => {
          return;
        },
      },
    }),
  );

  return (
    <PoseGroup>
      {(current.matches('logIn') && (
        <PosedItem key='login'>
          <LogIn
            handleClick={() => send('SIGN_UP')}
            forgotPasswordAction={() => send('FORGOT_PASSWORD')}
          />
        </PosedItem>
      )) ||
        (current.matches('signUp') && (
          <PosedItem key='signUp'>
            <SignUp handleClick={() => send('LOG_IN')} />
          </PosedItem>
        )) ||
        (current.matches('forgotPassword') && (
          <PosedItem key='forgotPassword'>
            <ForgotPassword>
              <button onClick={() => send('LOG_IN')}>Go Back</button>
            </ForgotPassword>
          </PosedItem>
        ))}
    </PoseGroup>
  );
};
