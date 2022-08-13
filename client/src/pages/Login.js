import React, { useState } from 'react';
import LoginMgr from '../components/LoginMgr/LoginMgr';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import { Container } from '../globalStyles';

function Login({ onLogin, user }) {
  return (
    <Container>
      {user ? (
        <ProfileForm user={user} onUpdate={onLogin} />
      ) : (
        <LoginMgr onLogin={onLogin} />
      )}
    </Container>
  );
}

export default Login;
