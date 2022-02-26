import React, { ReactElement } from 'react';
import { MainLayout } from '../components/MainLayout/MainLayout';

const signout = () => {
  return <div>signout</div>;
};

export default signout;

signout.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};
