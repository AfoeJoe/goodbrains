import * as React from 'react';
import { Button } from 'baseui/button';
import { Layout } from '../components/MainLayout/MainLayout';
import { NextPage } from 'next';
import { useStyletron } from 'baseui';
import type { ReactElement } from 'react';

export const sum = (a: number, b: number) => a + b;

const Index = () => {
  const [css, theme] = useStyletron();
  return (
    <div>
      <Button onClick={() => console.log('hey')}>Hello</Button>
      <p className={css({ color: theme.colors.accent600 })}>Styled by hook</p>
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};
