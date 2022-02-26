import React, { FC } from 'react';
import { styled, Theme } from 'baseui';

interface IProps {
  title: string;
  children: JSX.Element;
  active?: boolean;
  handleNavigation: React.MouseEventHandler<HTMLAnchorElement>;
}

const SideNavListItem: FC<IProps> = ({ title, children, active = false, handleNavigation }) => {
  return (
    <StyledMenuItem key={title} $active={active} title={title} onClick={handleNavigation}>
      {children}
      {title}
    </StyledMenuItem>
  );
};

export default SideNavListItem;

type CustomTheme = Theme & { extraProp: string };

const StyledMenuItem = styled<{ $active: boolean }, 'a', CustomTheme>('a', ({ $active, $theme }) => ({
  padding: '1.25rem 2rem',
  background: $active ? '#9FA2B4' : 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: '1rem',
  color: $active ? '#DDE2FF' : '#A4A6B3',
  cursor: 'pointer',
  width: '100%',
  borderLeft: $active ? '4px solid #DDE2FF' : 'none',

  ':hover': {
    background: '#9FA2B4',
    color: '#DDE2FF',
    borderLeft: '4px solid #DDE2FF',
  },
}));
