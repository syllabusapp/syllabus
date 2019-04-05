// @TODO create test
import {Link, navigate} from '@reach/router';
import {captureException} from '@sentry/browser';
import {Form, Formik, FormikActions} from 'formik';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {TextInput} from '..';
import {useLoginMutation} from '../../generated/graphql';
import {UserContext} from '../../stores';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

// @TODO translate
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email not valid')
    .required('Email required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password can be no longer than 64 characters')
    .required('Password required'),
});

interface LoginFormProps {
  forgotPasswordAction?: () => void;
}
export const LoginForm: React.SFC<LoginFormProps> = ({
  forgotPasswordAction,
}) => {
  const [t] = useTranslation();
  // const {notify} = useContext(NotificationContext);
  const {setToken} = useContext(UserContext);
  const sendLoginMutation = useLoginMutation();
  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={async (
        values: FormValues,
        {setSubmitting}: FormikActions<FormValues>,
      ) => {
        try {
          //@TODO show spinner
          const result = await sendLoginMutation({
            variables: {
              email: values.email,
              password: values.password,
            },
          });
          if (result && result.data && result.data.login)
            setToken(result.data.login.token);
          navigate(`/`);
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
          <Form data-testid='authentication-form'>
            <TextInput
              name='email'
              label={t('email')}
              data-testid='email-input'
            />
            <TextInput
              name='password'
              type='password'
              label={t('password')}
              data-testid='password-input'
            >
              {forgotPasswordAction ? (
                <button onClick={forgotPasswordAction}>
                  {t('forgot-password.question')}
                </button>
              ) : (
                <Link className='pull-right' to='/forgot-password'>
                  {t('forgot-password.question')}
                </Link>
              )}
            </TextInput>
            <button data-testid='login-button'>{t('log-in')}</button>
          </Form>
        </>
      )}
    />
  );
};
