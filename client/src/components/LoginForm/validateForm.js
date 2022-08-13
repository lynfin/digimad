export default function validateForm({ username, password }) {
  let errors = [];
  if (!username.trim()) {
    errors.push('Username required');
  }

  if (!password) {
    errors.push('Password is required');
  } else if (password.length < 6) {
    errors.push('Password needs to be 6 characters or more');
  }
  return errors;
}
