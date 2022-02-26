import AuthMenu from '../../AuthMenu/AuthMenu';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { HeadingLarge, ParagraphSmall } from 'baseui/typography';
import { Menu } from 'baseui/icon';
import { StatefulPopover } from 'baseui/popover';
import { useStyletron } from 'baseui';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Header: FC<IProps> = ({ open, setOpen }) => {
  const [css, theme] = useStyletron();

  const contentCx = css({
    padding: theme.sizing.scale500,
    maxWidth: '300px',
  });

  return (
    <Block
      /* height={['20px', '40px', '80px', '160px']}
      backgroundColor="primary200" */
      className={css({
        width: '100%',
        borderBottom: 'none !important',
        marginBottom: '1.5rem',

        '@media (max-width: 768px)': {
          paddingLeft: '0',
        },
      })}
    >
      <HeaderNavigation
        overrides={{
          Root: {
            style: () => ({
              borderBottom: 'none',
            }),
          },
        }}
      >
        <NavigationList $align={ALIGN.left}>
          <NavigationItem
            className={css({
              fontSize: '1.5rem',
            })}
          >
            <div
              className={css({
                display: 'none',
                paddingLeft: 0,

                '@media (max-width: 768px)': {
                  display: 'block',
                },
              })}
            >
              <Button onClick={() => setOpen(!open)} type="button" kind="tertiary">
                <Menu size="1.5rem" />
              </Button>
            </div>
            {/*   <span
            className={css({
              display: 'block',
              '@media (max-width: 768px)': {
                display: 'none',
              },
            })}
          >
            Tickets
          </span> */}
          </NavigationItem>
          <NavigationItem
            className={css({
              '@media (min-width:768px)': {
                paddingLeft: 0,
              },
            })}
          >
            {' '}
            <span
              className={css({
                display: 'block',
                '@media (max-width: 768px)': {
                  display: 'block',
                  paddingLeft: 0,
                },
              })}
            >
              <HeadingLarge>Good brains</HeadingLarge>
            </span>
          </NavigationItem>
        </NavigationList>
        <NavigationList $align={ALIGN.center}></NavigationList>{' '}
        <NavigationList $align={ALIGN.right}>
          <NavigationItem>
            <StatefulPopover
              overrides={{
                Inner: {
                  style: ({ $theme }) => ({
                    outline: `${$theme.colors.white} solid`,
                    backgroundColor: $theme.colors.white,
                  }),
                },
              }}
              dismissOnEsc={false}
              dismissOnClickOutside={true}
              accessibilityType={'tooltip'}
              content={({ close }) => (
                <div className={contentCx}>
                  <AuthMenu handleClose={close} />
                </div>
              )}
            >
              <Button shape="circle" type="button" kind="tertiary">
                {' '}
                <Avatar
                  name="Jane Doe"
                  size="2.5rem"
                  src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy"
                />
              </Button>
            </StatefulPopover>
          </NavigationItem>
        </NavigationList>
      </HeaderNavigation>
    </Block>
  );
};

export default Header;
