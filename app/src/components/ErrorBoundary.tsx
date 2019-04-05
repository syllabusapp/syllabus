// @TODO create test
import {captureException, showReportDialog, withScope} from '@sentry/browser';
import React from 'react';
import {Trans} from 'react-i18next';

export class ErrorBoundary extends React.Component {
  public state = {error: null};

  public componentDidCatch(error: any, errorInfo: any) {
    this.setState({error});
    withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      captureException(error);
    });
  }

  public render() {
    if (this.state.error) {
      return (
        <div>
          <p>('error-boundary.were-sorry')</p>
          <Trans i18nKey='error-boundary.team-notified'>
            <p>
              Our team has been notified, but click{' '}
              <button
                onClick={() =>
                  showReportDialog({
                    dsn: process.env.REACT_APP_ERROR_REPORTING_KEY,
                  })
                }
              >
                here
              </button>{' '}
              to fill out a report.
            </p>
          </Trans>
        </div>
      );
    }
    return this.props.children;
  }
}
