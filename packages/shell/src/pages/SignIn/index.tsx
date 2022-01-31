import React, { FormEvent, ReactElement, useState } from 'react';

import { useAuth } from '~/hooks/auth';

import * as S from './styles';

function SignIn(): ReactElement {
  const { signIn } = useAuth();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Preencha os campos!');
      return 0;
    }

    signIn({ username, password });
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={handleSignIn}>
        <S.Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={e => {
            setUsername(e.currentTarget.value);
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
