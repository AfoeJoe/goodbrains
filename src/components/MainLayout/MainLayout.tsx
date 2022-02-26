import Header from './Header/Header';
import Navbar from '../Navbar2/Navbar';
import Sidebar from './Sidebar/Sidebar';
import { FC, useState } from 'react';
import { styled } from 'baseui';

interface IProps {
  children: JSX.Element;
}
export const MainLayout: FC<IProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Navbar />
      <main>{children}</main> */}
      <LayoutWrapper>
        <Sidebar open={open} setOpen={setOpen} />
        <Header open={open} setOpen={setOpen} />
        {/* <LayoutContent /> */}
        {children}
      </LayoutWrapper>
    </>
  );
};

const LayoutWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: '#F7F8FC',
  position: 'relative',
  paddingLeft: '285px',
  paddingRight: '2rem',
  width: '100%',
  minHeight: '100vh',
  maxWidth: '100vw',
  boxSizing: 'border-box',

  '@media (max-width: 768px)': {
    paddingLeft: '0',
  },
});
