import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState
  } from 'react';
import { Router, useRouter } from 'next/router';
import { StatefulMenu } from 'baseui/menu';
import { styled, useStyletron } from 'baseui';

// import logo from './../../assets/images/logo.svg';

interface IProps {
  handleClose(): void;
}

const AuthMenu: FC<IProps> = ({ handleClose }) => {
  const [css] = useStyletron();

  const router = useRouter();
  return (
    <StatefulMenu
      onItemSelect={({ item }) => {
        console.log('hello');
        console.log({ item });

        router.push(`${item.link}`);
        handleClose();
      }}
      items={[
        {
          label: 'login/register',
          link: 'login',
        },
        {
          label: 'sign out ',
          link: 'signout',
        },
      ]}
    />
  );
};

export default AuthMenu;
