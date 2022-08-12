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
} from '../../formStyles';
import { Divider, Container } from '../../globalStyles';
import validateForm from './validateForm';

function SignupForm({ onLogin, onShowLogin }) {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({
      username,
      firstname,
      lastname,
      email,
      password,
      password_confirmation,
    });

    if (resultError.length) {
      setError(resultError);
      return;
    }

    setIsLoading(true);
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        firstname,
        lastname,
        password,
        password_confirmation,
        email,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => {
          setError([`Error ${err.status}: ${err.error}`]);
        });
      }
    });

    setUsername('');
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    // setError(null);
    // setSuccess('Registration was submitted!');
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: 'First Name',
      value: firstname,
      onChange: (e) => setFirstname(e.target.value),
      type: 'text',
    },
    {
      label: 'Last Name',
      value: lastname,
      onChange: (e) => setLastname(e.target.value),
      type: 'text',
    },
    {
      label: 'Username',
      value: username,
      onChange: (e) => setUsername(e.target.value),
      type: 'text',
    },
    {
      label: 'Email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: 'email',
    },
    {
      label: 'Password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: 'password',
    },
    {
      label: 'Confirm Password',
      value: password_confirmation,
      onChange: (e) => setPasswordConfirmation(e.target.value),
      type: 'password',
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Sign up</FormTitle>
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

              <FormButton type='submit'>Signup</FormButton>
              <Divider />
              <FormRow>
                <FormSubTitle>
                  Already have an account?&nbsp;&nbsp;&nbsp;
                </FormSubTitle>
                <FormSmallButton onClick={() => onShowLogin(true)}>
                  Log In
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

export default SignupForm;
