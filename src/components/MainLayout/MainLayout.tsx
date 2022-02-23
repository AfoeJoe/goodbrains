import Navbar from '../Navbar2/Navbar';
import { FC } from 'react';

interface IProps {
  children: JSX.Element;
}
export const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/*       <Footer />
       */}{' '}
    </>
  );
};
