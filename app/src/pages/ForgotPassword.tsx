import {RouteComponentProps} from '@reach/router';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Trans, useTranslation} from 'react-i18next';
import {ForgotPasswordForm} from '../components';
// import {NotificationProvider} from '../stores';

export const ForgotPassword: React.SFC<RouteComponentProps> = ({children}) => {
  const [t] = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('forgot-password.button-text')}</title>
      </Helmet>
      <Trans i18nKey='forgot-password.heading'>
        <h4 className='page-header'>
          Forgot your Password?
          <br />
          Not a problem.
        </h4>
      </Trans>
      <p>{t('forgot-password.body')}</p>
      {/* <NotificationProvider> */}
      <ForgotPasswordForm />
      <div>{children}</div>
      {/* </NotificationProvider> */}
    </>
  );
};
