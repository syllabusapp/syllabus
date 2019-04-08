import {RouteComponentProps} from '@reach/router';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';

const Dashboard: React.SFC<RouteComponentProps> = () => {
  const [t] = useTranslation('translation');
  return (
    <>
      <Helmet>
        <title>{t('dashboard')}</title>
      </Helmet>
      <h1 data-testid='dashboard'>{t('dashboard')}</h1>
    </>
  );
};

export default Dashboard;
