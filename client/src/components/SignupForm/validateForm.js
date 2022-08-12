export default function validateForm({
  username,
  firstname,
  lastname,
  email,
  password,
  password_confirmation,
}) {
  let errors = [];
  if (!username.trim()) {
    errors.push('Username required');
  }
  if (!firstname.trim()) {
    errors.push('First name required');
  }
  if (!lastname.trim()) {
    errors.push('Last name required');
  }

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    errors.push('Email required');
  } else if (regex.test(email.toLocalLowerCase)) {
    errors.push('Email address is invalid');
  }
  if (!password) {
    errors.push('Password is required');
  } else if (password.length < 6) {
    errors.push('Password needs to be 6 characters or more');
  }

  if (!password_confirmation) {
    errors.push('Entering password confirmation is required');
  } else if (password_confirmation !== password) {
    errors.push('Passwords do not match');
  }
  return errors;
}
