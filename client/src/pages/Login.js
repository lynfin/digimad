import React, { useState } from 'react';
import LoginMgr from '../components/LoginMgr/LoginMgr';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import { Container } from '../globalStyles';

function Login({ onLogin, user }) {
  console.log('In Login - user is ');
  console.log(user);
  return (
    <Container>
      {user ? (
        <ProfileForm user={user} onLogout={onLogin} />
      ) : (
        <LoginMgr onLogin={onLogin} />
      )}
    </Container>
  );
}

export default Login;
