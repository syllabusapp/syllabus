import {RouteComponentProps} from '@reach/router';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';

const PrivacyPolicy: React.SFC<RouteComponentProps> = () => {
  const [t] = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('privacy-policy')}</title>
      </Helmet>
      <h1 data-testid='privacy-policy-heading'>{t('privacy-policy')}</h1>
    </>
  );
};

export default PrivacyPolicy;
