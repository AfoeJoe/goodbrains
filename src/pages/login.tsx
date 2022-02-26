import LoginFom from '../components/LoginForm/LoginForm';
import React, { ReactElement } from 'react';
import { Block } from 'baseui/block';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { MainLayout } from '../components/MainLayout/MainLayout';

const login = () => {
  return (
    <Block>
      <LoginFom type="login"></LoginFom>
    </Block>
  );
};

export default login;

login.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};
