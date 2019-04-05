import {navigate, RouteComponentProps} from '@reach/router';
import {captureException} from '@sentry/core';
import React, {useContext, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {StringParam, useQueryParams} from 'use-query-params';
import {useConfirmAccountMutation} from '../generated/graphql';
import {UserContext} from '../stores';

const ConfirmAccount: React.SFC<RouteComponentProps> = () => {
  const confirmAccountMutation = useConfirmAccountMutation();
  const [query, setQuery] = useQueryParams({
    email: StringParam,
    token: StringParam,
  });
  const {setToken} = useContext(UserContext);
  // const {notify} = useContext(BertContext);
  const emailParam = query.email as string;
  const tokenParam = query.token as string;
  useEffect(() => {
    setQuery({
      email: undefined,
      token: undefined,
    });
    confirmAccount(emailParam, tokenParam);
  }, []);

  const confirmAccount = async (emailParam: string, tokenParam: string) => {
    try {
      const result = await confirmAccountMutation({
        variables: {email: emailParam, emailConfirmToken: tokenParam},
      });
      if (
        result &&
        result.data &&
        result.data.confirmAccount.token &&
        result.data.confirmAccount.user
      ) {
        // @TODO notify user of success
        // notify('Success confirming account', undefined, 'success');
        setToken(result.data.confirmAccount.token);
        navigate(`/`);
      } else {
        // @TODO notify user of error
        // notify(
        //   'Error while confirming account. Please try again',
        //   undefined,
        //   'danger',
        // );
        captureException(result);
      }
    } catch (error) {
      // @TODO notify user of error
      // notify(
      //   'Error while confirming account. Please try again',
      //   undefined,
      //   'danger',
      // );
      captureException(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Confirm Account</title>
      </Helmet>
      <div className='VerifyEmail'>
        <div>Verifying...</div>
      </div>
    </>
  );
};

export default ConfirmAccount;
