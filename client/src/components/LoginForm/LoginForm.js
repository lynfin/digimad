import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
  FormSubTitle,
  FormSmallButton,
} from '../../formStyles';
import { Divider, Container } from '../../globalStyles';
import validateForm from './validateForm';

function LoginForm({ onLogin, onShowLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ username, password });

    if (resultError.length) {
      setError(resultError);
      return;
    }

    setIsLoading(true);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          history.push('/');
        });
      } else {
        setError([`Error ${r.status}: ${r.statusText}`]);
        setUsername('');
        setPassword('');
        return;
      }
    });

    //setError(null);
    //setSuccess('Logged in!');
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: 'Username',
      value: username,
      onChange: (e) => setUsername(e.target.value),
      type: 'text',
    },
    {
      label: 'Password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: 'password',
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Log In</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type='submit'>
                {' '}
                {isLoading ? 'Loading...' : 'Login'}
              </FormButton>
              <Divider />
              <FormRow>
                <FormSubTitle>
                  Don't have an account?&nbsp;&nbsp;&nbsp;
                </FormSubTitle>
                <FormSmallButton onClick={() => onShowLogin(false)}>
                  Sign Up
                </FormSmallButton>
              </FormRow>
            </FormWrapper>
            {errors &&
              errors.map((err) => (
                <FormMessage
                  key={err}
                  variants={messageVariants}
                  initial='hidden'
                  animate='animate'
                >
                  {err}
                </FormMessage>
              ))}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial='hidden'
                animate='animate'
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
}

export default LoginForm;
