import React, { useState } from 'react';
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
} from './FormStyles';
import { Divider, Container } from '../../globalStyles';
import validateForm from './validateForm';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ username, password });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setUsername('');
    setPassword('');
    setError(null);
    setSuccess('Logged in!');
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

              <FormButton type='submit'>Submit</FormButton>
              <Divider />
              <FormRow>
                <FormSubTitle>
                  Don't have an account?&nbsp;&nbsp;&nbsp;
                </FormSubTitle>
                <FormSmallButton>Sign Up</FormSmallButton>
              </FormRow>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial='hidden'
                animate='animate'
                error
              >
                {error}
              </FormMessage>
            )}
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
};

export default LoginForm;
