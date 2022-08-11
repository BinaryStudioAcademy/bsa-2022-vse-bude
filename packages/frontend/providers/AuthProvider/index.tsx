import type { ReactNode } from 'react';
import { useEffect } from 'react';
import React from 'react';

interface AuthProviderProps {
  children: ReactNode;
  isPrivate: boolean;
}

const AuthProvider = ({ children, isPrivate }: AuthProviderProps) => {
  useEffect(() => {
    console.log(isPrivate);
  }, [isPrivate]);

  return <React.Fragment>{children}</React.Fragment>;
};

export { AuthProvider };
