import {
  globalHistory,
  Location,
  RouteComponentProps,
  Router,
} from '@reach/router';
import {useMachine} from '@xstate/react';
import React, {lazy} from 'react';
import posed, {PoseGroup} from 'react-pose';
import {QueryParamProvider} from 'use-query-params';
import {Machine} from 'xstate';
import {AdminRoute, Footer, Header, PrivateRoute} from './components';
import ConfirmAccount from './pages/ConfirmAccount';
import {ForgotPassword as ForgotPasswordLayout} from './pages/ForgotPassword';
import {LogIn as LogInLayout} from './pages/LogIn';
import ResetPassword from './pages/ResetPassword';
import {SignUp as SignUpLayout} from './pages/SignUp';
import {actions, machine, states} from './statecharts/Authentication';

const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const LogIn: React.SFC<RouteComponentProps> = () => {
  const [current, send] = useMachine(machine);
  if (current.matches('logIn')) {
    return <LogInLayout handleClick={() => send('SIGN_UP')} />;
  } else {
    return null;
  }
};
const signUpMachine = Machine(
  {
    id: 'authentication',
    initial: 'signUp',
    states: {...states},
  },
  {
    actions: {...actions},
  },
);
const SignUp: React.SFC<RouteComponentProps> = () => {
  const [current, send] = useMachine(signUpMachine);
  if (current.matches('signUp')) {
    return <SignUpLayout handleClick={() => send('LOG_IN')} />;
  } else {
    return null;
  }
};
const forgotPasswordMachine = Machine(
  {
    id: 'authentication',
    initial: 'forgotPassword',
    states: {...states},
  },
  {actions: {...actions}},
);
const ForgotPassword: React.SFC<RouteComponentProps> = () => {
  const [current, send] = useMachine(forgotPasswordMachine);
  if (current.matches('forgotPassword')) {
    return (
      <ForgotPasswordLayout>
        <button onClick={() => send('LOG_IN')}>Go Back</button>
      </ForgotPasswordLayout>
    );
  } else {
    return null;
  }
};

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 500,
    },
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
    },
    y: 10,
  },
});

const PosedRouter: React.SFC = ({children}) => (
  <Location>
    {({location}) => (
      <PoseGroup>
        <RoutesContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RoutesContainer>
      </PoseGroup>
    )}
  </Location>
);

const Routes: React.SFC = () => {
  return (
    <QueryParamProvider reachHistory={globalHistory}>
      <Header />
      <PosedRouter>
        <PrivateRoute as={Dashboard} path='/' />
        <LogIn path='/log-in' />
        <TermsOfService path='/terms-of-service' />
        <ForgotPassword path='/forgot-password' />
        <PrivacyPolicy path='/privacy-policy' />
        <ResetPassword path='/reset-password' />
        <ConfirmAccount path='/confirm-account' />
        <AdminRoute as={AdminDashboard} path='/admin' />
        <SignUp path='/sign-up' />
        <NotFound default={true} />
      </PosedRouter>
      <Footer />
    </QueryParamProvider>
  );
};

export default Routes;
