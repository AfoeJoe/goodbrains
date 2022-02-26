import React, { ReactElement } from 'react';
import { MainLayout } from '../components/MainLayout/MainLayout';

// eslint-disable-next-line react/jsx-filename-extension
const leaderboard = () => <div>leaderboard</div>;

export default leaderboard;

leaderboard.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
