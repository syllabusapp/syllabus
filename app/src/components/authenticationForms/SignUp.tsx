// @TODO create test
import {navigate} from '@reach/router';
import {captureException} from '@sentry/browser';
import {Form, Formik, FormikActions} from 'formik';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {TextInput} from '..';
import {useSignUpMutation} from '../../generated/graphql';
import {UserContext} from '../../stores';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

// @TODO translate
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter your first name, please'),
  lastName: Yup.string().required('Enter your last name, please'),
  email: Yup.string().required('Enter your email address, please'),
  password: Yup.string().required('Enter a password, please'),
});

export const SignUpForm: React.SFC = () => {
  const [t] = useTranslation('translation');
  // const {notify} = useContext(NotificationContext);
  // const {notify: bertNotify} = useContext(BertContext);
  const {setToken} = useContext(UserContext);
  const signUpMutation = useSignUpMutation();
  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={async (
        values: FormValues,
        {setSubmitting}: FormikActions<FormValues>,
      ) => {
        try {
          //@TODO show spinner
          const result = await signUpMutation({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            },
          });
          if (
            result &&
            result.data &&
            result.data.signup &&
            result.data.signup.token
          ) {
            // @TODO notify user of success
            // bertNotify('notification.sign-up-success', '', 'success');
            setToken(result.data.signup.token);
            navigate(`/`);
          }
          captureException(result);
        } catch (err) {
          // @TODO translate
          // @TODO notify user of errors
          err.graphQLErrors.map(
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
          <Form data-testid='sign-up-form'>
            <TextInput
              name='firstName'
              label='First Name'
              data-testid='first-name-input'
            />
            <TextInput
              name='lastName'
              label='Last Name'
              data-testid='last-name-input'
            />
            <TextInput
              name='email'
              type='email'
              label={t('email')}
              data-testid='email-input'
            />
            <TextInput
              name='password'
              type='password'
              label='Password'
              data-testid='password-input'
            />
            <button data-testid='sign-up-button'>{t('sign-up')}</button>
          </Form>
        </>
      )}
    />
  );
};
