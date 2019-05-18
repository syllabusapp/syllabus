// @TODO create test
import {captureException, withScope} from '@sentry/browser';
import React, {useContext} from 'react';
import {Trans} from 'react-i18next';
import {useTriggerAccountConfirmationEmailMutation} from '../generated/graphql';
import {UserContext} from '../stores';

export const ConfirmAccountAlert: React.SFC = () => {
  const {user} = useContext(UserContext);
  const triggerAccountConfirmationEmailMutation = useTriggerAccountConfirmationEmailMutation();
  // const {notify} = useContext(BertContext);

  const sendEmail = async () => {
    try {
      const result = await triggerAccountConfirmationEmailMutation({
        variables: {email: user!.email!},
      });
      if (
        result &&
        result.data &&
        result.data.triggerAccountConfirmationEmail.ok === true
      ) {
        // @TODO alert user of success
        // notify('notification.check-email', '', 'info', 'growl-bottom-right');
      } else {
        // @TODO alert user of error
        // notify('notification.error', '', 'danger');
        withScope(scope => {
          user && scope.setUser(user);
          captureException(result);
        });
      }
    } catch (error) {
      // @TODO alert user of error
      // notify('notification.error', '', 'danger');
      withScope(scope => {
        user && scope.setUser(user);
        captureException(error);
      });
    }
  };
  return (
    <div className='verify-email text-center'>
      <p>
        <Trans i18nKey='verify-account'>
          Hey! Can you <strong>verify your email address</strong> (
          {user && user.email}) for us?
          <button onClick={sendEmail}>Re-send confirmation email</button>
        </Trans>
      </p>
    </div>
  );
};
