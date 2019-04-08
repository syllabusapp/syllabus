// @TODO create test
import {Redirect, RouteComponentProps} from '@reach/router';
import React, {useContext, useEffect} from 'react';
import {UserContext} from '../stores';
import {AuthenticationMachine} from './machines/AuthenticationMachine';

interface AdminRouteProps extends RouteComponentProps {
  as: any;
}

export const AdminRoute: React.SFC<AdminRouteProps> = ({
  as: Comp,
  path,
  ...rest
}) => {
  const {token, user} = useContext(UserContext);
  useEffect(() => {
    if (token && user && !user.isAdmin) {
      //@TODO notify user they are accessing protected area
    }
  }, []);
  if (!token) {
    return <AuthenticationMachine />;
  } else if (token && user && !user.isAdmin) {
    return <Redirect from={path} to='/' noThrow />;
  } else if (token && user && user.isAdmin) {
    return <Comp {...rest} />;
  } else {
    return null;
  }
};
