import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google pop up</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
