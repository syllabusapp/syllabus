// @TODO create test
import {navigate} from '@reach/router';
import {captureException} from '@sentry/browser';
import {Form, Formik, FormikActions} from 'formik';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {StringParam, useQueryParams} from 'use-query-params';
import * as Yup from 'yup';
import {TextInput} from '..';
import {useResetPasswordMutation} from '../../generated/graphql';

interface FormValues {
  email: string;
  newPassword: string;
  repeatNewPassword: string;
  resetToken: string;
}

// @TODO translate
const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required('Enter a new password, please'),
  repeatNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Repeat your new password, please'),
});

export const ResetPasswordForm: React.SFC = ({children}) => {
  const [t] = useTranslation('translation');
  // const {notify} = useContext(NotificationContext);
  const resetPasswordMutation = useResetPasswordMutation();
  const [query, setQuery] = useQueryParams({
    email: StringParam,
    token: StringParam,
  });
  const initialValues: FormValues = {
    email: query.email as string,
    newPassword: '',
    repeatNewPassword: '',
    resetToken: query.token as string,
  };
  useEffect(() => {
    setQuery({email: undefined, token: undefined});
  }, []);
  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={async (
        values: FormValues,
        {setSubmitting}: FormikActions<FormValues>,
      ) => {
        try {
          //@TODO show spinner
          if (!values.email || !values.resetToken) {
            // @TODO notify user of error
            // notify('notification.retry-reset-password', 'error');
          }
          const result = await resetPasswordMutation({
            variables: {
              email: values.email,
              newPassword: values.newPassword,
              resetToken: values.resetToken,
            },
          });
          if (result && result.data && result.data.resetPassword.id !== '') {
            // @TODO notify user of success
            // notify('notification.reset-password-success', 'info');
            navigate(`/`);
          }
          captureException(result);
        } catch (err) {
          // @TODO translate
          err.graphQLErrors.map(
            // @TODO notify user of error
            ({message}: {message: string}) =>
              // notify(`${message}. Please try again.`, 'error'),
              console.error(`${message}. Please try again.`),
            captureException(err),
          );
        }
        setSubmitting(false);
        return;
      }}
      validationSchema={validationSchema}
      render={() => (
        <>
          <Form data-testid='reset-password-form'>
            <TextInput
              name='email'
              type='email'
              disabled
              label={t('email')}
              data-testid='email-input'
            />
            <TextInput
              name='newPassword'
              type='password'
              label={t('new-password')}
              data-testid='new-password-input'
            />
            <TextInput
              name='repeatNewPassword'
              type='password'
              label={t('repeat-new-password')}
              data-testid='repeat-new-password-input'
            />
            <button data-testid='reset-password-button'>
              {t('reset-password')}
            </button>
            <div>{children}</div>
          </Form>
        </>
      )}
    />
  );
};
