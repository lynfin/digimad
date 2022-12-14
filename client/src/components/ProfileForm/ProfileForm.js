import React, { useState, useEffect } from 'react';
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
  FormTitleGrouped,
  FormSubTitle,
  FormSmallButton,
  FormImgWrapper,
  FormAvatar,
} from '../../formStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';

function ProfileForm({ user, onUpdate }) {
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [image, setImage] = useState(user.image);
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultError = validateForm({
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

    fetch(`/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        bio,
        image,
        email,
        password,
        password_confirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onUpdate(user);
          history.push('/');
        });
      } else {
        r.json().then((err) => console.log(err));
      }
    });
    // setSuccess('Profile updated!');
  };

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        onUpdate(null);
        history.push('/');
      } else {
        setError([`Logout failed`]);
      }
    });
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
      label: 'Email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: 'email',
    },
    {
      label: 'Bio',
      value: bio,
      onChange: (e) => setBio(e.target.value),
      type: 'text',
      placeholder: 'Tell us something about yourself',
    },
    {
      label: 'Image',
      value: image,
      onChange: (e) => setImage(e.target.value),
      type: 'text',
      placeholder: 'Link to image or avatar',
    },
    {
      label: 'New Password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: 'password',
    },
    {
      label: 'Confirm New Password',
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
            <FormSmallButton onClick={handleLogout}>Logout</FormSmallButton>
            <FormTitleGrouped>{user.username}</FormTitleGrouped>
            <FormImgWrapper>
              <FormAvatar src={user.image}></FormAvatar>
            </FormImgWrapper>
            <FormSubTitle>Profile</FormSubTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={
                      el.placeholder
                        ? el.placeholder
                        : `Enter your ${el.label.toLocaleLowerCase()}`
                    }
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
              <FormRow>
                <FormColumn>
                  <FormSmallButton type='submit'>
                    {isLoading ? 'Loading...' : 'Update'}
                  </FormSmallButton>
                </FormColumn>
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

export default ProfileForm;
