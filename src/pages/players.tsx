import React, { ReactElement } from 'react';
import { MainLayout } from '../components/MainLayout/MainLayout';

const play = () => {
  return <div>players</div>;
};

export default play;

play.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};
