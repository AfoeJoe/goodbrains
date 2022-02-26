import LoginFom from '../components/LoginForm/LoginForm';
import React, { ReactElement } from 'react';
import { Block } from 'baseui/block';
import { MainLayout } from '../components/MainLayout/MainLayout';

const register = () => {
  return (
    <Block>
      <LoginFom type="register"></LoginFom>
    </Block>
  );
};

export default register;

register.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};
