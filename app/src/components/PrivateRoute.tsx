// @TODO create test
import {RouteComponentProps} from '@reach/router';
import React, {useContext} from 'react';
import {UserContext} from '../stores';
import {AuthenticationMachine} from './machines/AuthenticationMachine';

interface PrivateRouteProps extends RouteComponentProps {
  as: any;
}

export const PrivateRoute: React.SFC<PrivateRouteProps> = ({
  as: Comp,
  ...rest
}) => {
  const {token} = useContext(UserContext);
  return token ? <Comp {...rest} /> : <AuthenticationMachine />;
};
