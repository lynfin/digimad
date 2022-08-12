import React, { useState } from 'react';
import SignupForm from '../components/SignupForm/SignupForm';
import LoginForm from '../components/LoginForm/LoginForm';
import { Heading, Container, Button2 } from '../globalStyles';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />

          <Heading>Don't have an account? &nbsp;</Heading>
          <Button2 onClick={() => setShowLogin(false)}>Sign Up</Button2>
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} />
          <Heading>Already have an account? &nbsp;</Heading>
          <Button2 onClick={() => setShowLogin(true)}>Log In</Button2>
        </>
      )}
    </Container>
  );
}

export default Login;
