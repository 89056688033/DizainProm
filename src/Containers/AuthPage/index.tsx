import React, { useContext } from 'react';
import { AuthForm } from '../../Components/Auth/AuthForm';
import { AppContext } from '../../App';

export const AuthPage = () => {
  const contextData = useContext(AppContext);

  console.log(contextData);
  return (
    <div>
      <AuthForm />
    </div>
  );
};
