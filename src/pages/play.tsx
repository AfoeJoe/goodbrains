import React, { ReactElement } from 'react';
import { Layout } from '../components/MainLayout/MainLayout';

const play = () => {
  return <div>play</div>;
};

export default play;

play.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};
