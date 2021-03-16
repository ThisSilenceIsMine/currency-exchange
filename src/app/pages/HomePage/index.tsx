import { Converter } from 'app/components/Converter';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Converter />
    </>
  );
}
