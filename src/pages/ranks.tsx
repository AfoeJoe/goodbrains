import React, { ReactElement } from 'react';
import { Layout } from '../components/MainLayout/MainLayout';

// eslint-disable-next-line react/jsx-filename-extension
const ranks = () => <div>ranks</div>;

export default ranks;

ranks.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
