import {RouteComponentProps} from '@reach/router';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';

const TermsOfService: React.SFC<RouteComponentProps> = () => {
  const [t] = useTranslation('translation');
  return (
    <>
      <Helmet>
        <title>{t('terms-of-service')}</title>
      </Helmet>
      <h1 data-testid='terms-of-service-heading'>{t('terms-of-service')}</h1>
    </>
  );
};

export default TermsOfService;
