import {captureException} from '@sentry/browser';
import {decode} from 'jsonwebtoken';
import React, {useEffect, useState} from 'react';
import createPersistedState from 'use-persisted-state';
import {AUTH_TOKEN} from '../constants';
import {isTokenExpired} from '../utils/jwt';
const useAuthTokenState = createPersistedState(AUTH_TOKEN);
const UserContext = React.createContext<UserContextInterface>(
  {} as UserContextInterface,
);
const {Provider, Consumer} = UserContext;

interface User {
  email?: string;
  firstName?: string;
  lastName?: string;
  emailConfirmed: boolean;
  isAdmin: boolean;
}

interface Token {
  email: string;
  firstName: string;
  lastName: string;
  emailConfirmed: boolean;
  isAdmin: boolean;
}

export type TokenType = string | null;
export type UserType = User | undefined;

export interface UserContextInterface {
  token?: TokenType;
  user?: User;
  setUser(user: UserType): void;
  setToken(token: TokenType): void;
}

const UserProvider: React.SFC = ({children}) => {
  const [token, setToken] = useAuthTokenState<TokenType>(null);
  const [user, setUser] = useState<UserType>(undefined);

  useEffect(() => {
    bootstrapData();
  }, [token]);

  const bootstrapData = async () => {
    try {
      if (token) {
        const expired = isTokenExpired(token);
        if (expired) {
          setUser(undefined);
          return setToken(null);
        }
        const decodedToken = decode(token) as Token;
        const decodedUser: User = {
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email,
          emailConfirmed: decodedToken.emailConfirmed,
          isAdmin: decodedToken.isAdmin,
        };
        return setUser(decodedUser);
      } else {
        setUser(undefined);
        return setToken(null);
      }
    } catch (err) {
      captureException(err);
    }
  };
  return (
    <Provider value={{token, user, setToken, setUser}}>{children}</Provider>
  );
};

export {UserContext, UserProvider, Consumer as UserConsumer};
