import React, { ReactElement } from 'react';
import { Layout } from '../components/MainLayout/MainLayout';

const browse = () => {
  return <div>browse</div>;
};

export default browse;

browse.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};
