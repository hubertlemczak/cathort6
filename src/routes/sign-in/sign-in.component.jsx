import { Fragment } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <Fragment>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </Fragment>
  );
};

export default SignIn;
