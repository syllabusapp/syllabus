import {Link, RouteComponentProps} from '@reach/router';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';

const NotFound: React.SFC<RouteComponentProps> = () => {
  const [t] = useTranslation('translation');
  return (
    <>
      <Helmet>
        <title>{t('not-found')}</title>
      </Helmet>
      <h1 data-testid='not-found-heading'>{t('not-found')}</h1>
      <Link to='/' data-testid='not-found-return-home-link'>
        {t('return-home')}
      </Link>
    </>
  );
};

export default NotFound;
