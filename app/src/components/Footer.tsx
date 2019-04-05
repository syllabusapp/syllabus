// @TODO create test
import {Link} from '@reach/router';
import React from 'react';
import {Trans} from 'react-i18next';
import {COPYRIGHT_START_YEAR, PRODUCT_NAME} from '../constants';
import {year} from '../utils';

export const Footer = () => {
  const copyrightYear = () =>
    year() === COPYRIGHT_START_YEAR
      ? COPYRIGHT_START_YEAR
      : `${COPYRIGHT_START_YEAR}-${year()}`;
  return (
    <>
      <p className='pull-left'>
        {/* // @TODO translate */}
        &copy; {copyrightYear()} {PRODUCT_NAME}
      </p>
      <ul className='pull-right'>
        <li>
          <Link
            to='/terms-of-service'
            data-testid='terms-of-service-footer-link'
          >
            <Trans i18nKey='terms-of-service-footer'>
              Terms <span className='hidden-xs'>of Service</span>
            </Trans>
          </Link>
        </li>
        <li>
          <Link to='/privacy-policy' data-testid='privacy-policy-footer-link'>
            <Trans i18nKey='privacy-policy-footer'>
              Privacy <span className='hidden-xs'>Policy</span>
            </Trans>
          </Link>
        </li>
      </ul>
    </>
  );
};
