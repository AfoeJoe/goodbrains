import {
    Dispatch,
    SetStateAction,
    useCallback,
    useState
    } from 'react';
import { initialMenuData } from '../assets/constant';
import { useRouter } from 'next/router';

type UseSidebar = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const useSidebar = ({ setOpen }: UseSidebar) => {
  const [menuData, setMenuData] = useState(initialMenuData);
  const router = useRouter();

  const handleNavigation = useCallback(
    (event: React.MouseEvent, index: number) => {
      console.log(event);
      router.push(menuData[index].title.toLocaleLowerCase());

      setMenuData(prev => {
        const newMenu = prev.map(({ active, ...item }) => ({ ...item, active: false }));
        newMenu[index].active = true;
        return newMenu;
      });
      setOpen(false);
    },
    [menuData, router, setOpen],
  );

  return {
    menuData,
    actions: { handleNavigation },
  };
};
