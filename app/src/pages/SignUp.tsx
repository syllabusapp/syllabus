import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import {SignUpForm} from '../components';
// import {NotificationProvider} from '../stores';

interface SignUpProps {
  handleClick(): void;
}
export const SignUp: React.SFC<SignUpProps> = ({handleClick}) => {
  const [t] = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('sign-up')}</title>
      </Helmet>
      <h4 className='page-header'>Sign Up</h4>
      {/* <NotificationProvider> */}
      <SignUpForm />
      <div>
        <p>
          Already have an account? <button onClick={handleClick}>Log In</button>
          .
        </p>
      </div>
      {/* </NotificationProvider> */}
    </>
  );
};
