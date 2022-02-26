import React, { Dispatch, FC, SetStateAction } from 'react';
import Router, { useRouter } from 'next/router';
import SideNavListItem from './SideNavListItem/SideNavListItem';
import { initialMenuData, items } from '../../../assets/constant';
import { Navigation } from 'baseui/side-navigation';
import { styled, useStyletron } from 'baseui';
import { useSidebar } from '../../../hooks/useSidebar';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<IProps> = ({ open, setOpen }) => {
  const [css] = useStyletron();

  const {
    menuData,
    actions: { handleNavigation },
  } = useSidebar({ setOpen });

  /*   const [activeItemId, setActiveItemId] = React.useState('#primary');
   */
  return (
    <SidebarWrapper
      className={css({
        '@media (max-width: 768px)': {
          display: open ? 'block' : 'none',
        },
      })}
    >
      <div
        className={css({
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          background: 'rgba(0, 0, 0, 0.5)',
          height: '100vh',
          zIndex: '-1',
          display: 'none',

          '@media (max-width: 768px)': {
            display: open ? 'block' : 'none',
          },
        })}
        onClick={() => setOpen(false)}
      />
      <Logo>
        Okunola Joshua <br />
        198 points
      </Logo>

      {menuData.map(({ icon, title, active }, index) => (
        <SideNavListItem
          key={index}
          active={active}
          title={title}
          handleNavigation={event => handleNavigation(event, index)}
        >
          {icon}
        </SideNavListItem>
      ))}
      {/*  <Navigation items={items} activeItemId={activeItemId} onChange={({ item }) => setActiveItemId(item.itemId)} /> */}
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled('section', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  maxWidth: '255px',
  height: '100vh',
  background: '#363740',
  zIndex: '1',
  overflowX: 'hidden',
});

const Logo = styled('div', {
  padding: '2.5rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.25rem',
  color: '#f2f2f2',
  fontWeight: 'bold',
  boxSizing: 'border-box',
  background: 'none',
});
