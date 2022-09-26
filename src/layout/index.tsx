import { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className='h-[40px]'></header>
      <main className='flex-1 overflow-y-auto'>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
