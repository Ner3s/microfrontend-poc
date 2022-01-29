import React, { FormEvent, ReactElement, useState } from 'react';

import { useAuth } from '~/hooks/auth';

import * as S from './styles';

function SignIn(): ReactElement {
  const { signIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Preencha os campos!');
      return 0;
    }

    signIn({ email, password });
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={handleSignIn}>
        <S.Input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={e => {
            setEmail(e.currentTarget.value);
          }}
          required
        />
        <S.Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => {
            setPassword(e.currentTarget.value);
          }}
          required
        />
        <S.Button type="submit">Login</S.Button>
      </S.Form>
    </S.Container>
  );
}

export { SignIn };
