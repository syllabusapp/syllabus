// @TODO create test
import {Link} from '@reach/router';
import React, {useContext} from 'react';
import {ConfirmAccountAlert} from '../components';
import {UserContext} from '../stores';

export const Header = () => {
  const {user, setToken} = useContext(UserContext);
  return (
    <>
      {user && user.emailConfirmed === false && <ConfirmAccountAlert />}
      <Link to='/'>Syllabus</Link>
      {user ? (
        <>
          {/* // @TODO translate */}
          <p>Welcome, {user.firstName}</p>
          <button onClick={() => setToken(null)}>Log Out</button>
        </>
      ) : (
        <Link to='/'>Log In</Link>
      )}
    </>
  );
};
