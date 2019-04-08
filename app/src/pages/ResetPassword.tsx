import {Link, RouteComponentProps} from '@reach/router';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import {ResetPasswordForm} from '../components';
// import {NotificationProvider} from '../stores';

const ResetPassword: React.SFC<RouteComponentProps> = () => {
  const [t] = useTranslation('translation');
  return (
    <>
      <Helmet>
        <title>{t('reset-password')}</title>
      </Helmet>
      <h4 className='page-header'>{t('reset-password')}</h4>
      <p>
        To reset your password, enter a new one below. You will be logged in
        with your new password.
      </p>
      {/* <NotificationProvider> */}
      <ResetPasswordForm>
        <p>
          Not sure why you{"'"}re here? <Link to='/log-in'>Log In</Link>.
        </p>
      </ResetPasswordForm>
      {/* </NotificationProvider> */}
    </>
  );
};

export default ResetPassword;
