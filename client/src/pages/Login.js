import React, { useState } from 'react';
import SignupForm from '../components/SignupForm/SignupForm';
import LoginForm from '../components/LoginForm/LoginForm';
import { Container } from '../globalStyles';

function Login({ onLogin }) {
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

export default Login;
