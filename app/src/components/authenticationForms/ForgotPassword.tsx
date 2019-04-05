// @TODO create test
import {captureException} from '@sentry/browser';
import {Form, Formik, FormikActions} from 'formik';
import React from 'react';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {TextInput} from '..';
import {useTriggerPasswordResetMutation} from '../../generated/graphql';

interface FormValues {
  email: string;
}

const initialValues: FormValues = {
  email: '',
};

// @TODO translate
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email not valid')
    .required('Email required'),
});

export const ForgotPasswordForm: React.SFC = () => {
  const [t] = useTranslation();
  // const {notify} = useContext(NotificationContext);
  const triggerPasswordResetMutation = useTriggerPasswordResetMutation();
  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={async (
        values: FormValues,
        {resetForm, setSubmitting}: FormikActions<FormValues>,
      ) => {
        try {
          //@TODO show spinner
          const result = await triggerPasswordResetMutation({
            variables: {
              email: values.email,
            },
          });
          if (
            result &&
            result.data &&
            result.data.triggerPasswordReset.ok === true
          ) {
            // @TODO notify user to check email
            // notify('notification.check-email', 'info');
            resetForm();
          }
          captureException(result);
        } catch (err) {
          err.graphQLErrors.map(
            // @TODO notify user of errors
            ({message}: {message: string}) =>
              // @TODO translate
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
          <Form data-testid='forgot-password-form'>
            <TextInput
              name='email'
              label={t('email')}
              data-testid='email-input'
            />
            <button data-testid='forgot-password-button'>
              {t('forgot-password.button-text')}
            </button>
          </Form>
        </>
      )}
    />
  );
};
