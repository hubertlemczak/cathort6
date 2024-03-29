import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../utils/firebase/firebase.utils';

import FormInput from './FormInput';
import Button from './Button';

import {
  StyledAuthenticaionForm,
  StyledAuthenticaionFormButtons,
} from './styles/AuthenticationForm.styled';

const defaultSignInFormFields = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultSignInFormFields);
  const { email, password } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          alert('incorrect email or password');
          break;
        case 'auth/wrong-password':
          alert('incorrect email or password');
          break;
        default:
          console.log('error', err);
          console.log('error', err.code);
      }
    }
  };

  const resetFormFields = () => setFormFields(defaultSignInFormFields);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <StyledAuthenticaionForm>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <StyledAuthenticaionFormButtons>
          <Button buttonType="base" type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </StyledAuthenticaionFormButtons>
      </form>
    </StyledAuthenticaionForm>
  );
};
