import React, { useState } from 'react';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import { Container } from '../../globalStyles';

function LoginMgr({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} onShowLogin={setShowLogin} />
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} onShowLogin={setShowLogin} />
        </>
      )}
    </Container>
  );
}

export default LoginMgr;
