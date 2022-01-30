import React, { FormEvent, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/store';
import {
  changeTextMessage,
  getText,
  ITextMessage,
} from '~/store/textMessageSlice';

import * as S from './styles';

function Home(): ReactElement {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const textSend = useSelector<RootState, ITextMessage>(getText);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== '') {
      alert('Text message send!!!');
      dispatch(changeTextMessage({ text: text }));
    } else {
      alert('Invalid message');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <h1>Home</h1>
      </S.Header>
      <S.Content>
        <p style={{ marginBottom: '2rem' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          fuga dolores, ratione unde necessitatibus mollitia ab reprehenderit
          aperiam consectetur sit labore illo, deserunt neque molestiae, et
          tempore. Perferendis, et beatae.
        </p>

        <h3>Text Message</h3>
        <S.Form
          onSubmit={e => {
            onSubmit(e);
          }}
        >
          <S.TextArea
            onChange={e => setText(e.currentTarget.value)}
          ></S.TextArea>
          <S.Button type="submit">Send</S.Button>
        </S.Form>

        <p style={{ margin: '1.5rem 0' }}>Text message send:{textSend.text}</p>
      </S.Content>
    </S.Container>
  );
}

export { Home };
