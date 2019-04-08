import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-client-preset';
import {ApolloLink} from 'apollo-link';
import React, {Suspense} from 'react';
import {ApolloProvider} from 'react-apollo-hooks';
import {Helmet} from 'react-helmet-async';
import {ErrorBoundary, Loading} from './components';
import {AUTH_TOKEN} from './constants';
import Routes from './Routes';
import {TokenType, UserProvider} from './stores';

const apiUrl = process.env.REACT_APP_API_URL;
const httpLink = new HttpLink({
  uri: apiUrl,
});
const middlewareLink = new ApolloLink((operation, forward) => {
  const token: TokenType = window.localStorage.getItem(AUTH_TOKEN);
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${JSON.parse(token)}` : '',
    },
  });
  if (forward) {
    return forward(operation);
  }
  return null;
});
const httpLinkAuth = middlewareLink.concat(httpLink);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: ApolloLink.from([httpLinkAuth]),
});

export const App: React.SFC = () => {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Helmet titleTemplate='%s :: Syllabus' />
        <Suspense fallback={<Loading />}>
          <UserProvider>
            <Routes />
          </UserProvider>
        </Suspense>
      </ApolloProvider>
    </ErrorBoundary>
  );
};
