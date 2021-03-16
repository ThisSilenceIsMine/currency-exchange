/**
 *
 * Converter
 *
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

interface Props {}

export function Converter(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  return (
    <Div>
      <Input type="text" name="from" width="66%" />
      <Input type="text" name="result" width="33%" />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin: 0 auto;
  margin-top: 10em;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 0.3em;
  padding: 0.5em;
  width: ${props => props.width};
`;
