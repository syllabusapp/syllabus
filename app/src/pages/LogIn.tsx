import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import {LoginForm} from '../components';
// import {NotificationProvider} from '../stores';

interface LogInProps {
  handleClick(): void;
  forgotPasswordAction?: () => void;
}
export const LogIn: React.SFC<LogInProps> = ({
  forgotPasswordAction,
  handleClick,
}) => {
  const [t] = useTranslation('translation');
  return (
    <>
      <Helmet>
        <title>{t('log-in')}</title>
      </Helmet>
      <h4 className='page-header'>{t('welcome')}</h4>
      {/* <NotificationProvider> */}
      <LoginForm forgotPasswordAction={forgotPasswordAction} />
      <div>
        <p>
          {t('dont-have-an-account')}
          <button onClick={handleClick}>{t('sign-up')}</button>
        </p>
      </div>
      {/* </NotificationProvider> */}
    </>
  );
};
