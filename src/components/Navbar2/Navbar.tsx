import * as React from 'react';
import Link from 'next/link';
import { AppNavBar, NavItemT, setItemActive } from 'baseui/app-nav-bar';
import {
  ChevronDown,
  Delete,
  Overflow,
  Upload
  } from 'baseui/icon';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  const [mainItems, setMainItems] = React.useState<NavItemT[]>([
    { label: 'play', info: { id: 1 } },
    { label: 'browse', info: { id: 2 } },
    { label: 'ranks', info: { id: 3 } },
  ]);

  function getUniqueIdentifier(item: NavItemT) {
    if (item.info) {
      return item.info.id;
    }
    return item.label;
  }
  function handleMainItemSelect(item: NavItemT) {
    setMainItems(prev => setItemActive(prev, item, getUniqueIdentifier));
    router.push(item.label);
  }
  const { pathname } = router;

  React.useEffect(() => {
    console.log(
      router.pathname,
      mainItems,
      mainItems.find(({ label }) => {
        return pathname.includes(label);
      }),
    );
    if (!mainItems.length || router.pathname === '/') return;
    setMainItems(prev => setItemActive(mainItems, mainItems.find(({ label }) => pathname.includes(label)) as NavItemT));

    return () => {};
  }, []);

  return (
    <AppNavBar
      title={<Link href={'./'}>GooodBrains</Link>}
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
      /*  username="Umka Marshmallow"
      usernameSubtitle="5 Stars"
      userItems={[
        { icon: Overflow, label: 'User A' },
        { icon: Overflow, label: 'User B' },
      ]}
      onUserItemSelect={item => console.log(item)} */
    />
  );
};
