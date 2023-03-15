import React, { useEffect, useState } from 'react';
import { MenuListContainer } from './menu-list.styled';
import MenuListItem from './menu-list-item/menu-list-item';
import { RoleProps } from './../../../types/types.role';
import { useAppDispatch, useAppSelector } from './../../../hooks/hooks';
import { fetchMenuList } from '../../../redux/menuList.slice';
import MenuListItemsPlaceholder from './menu-list-item/placeholder/menu-list-items-placeholder';
import { IProduct } from './../../../types/types.products';
import { IMenu } from '../../../types/types.menu';

const MenuList: React.FC<RoleProps> = ({ isAdmin }) => {
  const { menuList, menuListLoading, isProduct, orderBy, types, search } = useAppSelector(
    (store) => store.menuList,
  );
  const dispatch = useAppDispatch();
  const [searchedMenuList, setSearchedMenuList] = useState(menuList);

  useEffect(() => {
    dispatch(fetchMenuList({ isProduct, orderBy, types }));
  }, [isProduct, orderBy, types]);

  useEffect(() => {
    if (search !== '') {
      const filteredMenuList = (menuList as IMenu[]).filter((item: IMenu | IProduct) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setSearchedMenuList(filteredMenuList);
    } else {
      setSearchedMenuList(menuList);
    }
  }, [search]);

  useEffect(() => {
    setSearchedMenuList(menuList);
  }, [menuListLoading]);

  if (menuListLoading) {
    return (
      <MenuListContainer>
        <MenuListItemsPlaceholder />
      </MenuListContainer>
    );
  }

  return (
    <MenuListContainer>
      {searchedMenuList.map((item) => {
        return (
          <MenuListItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            weight={item.weight}
            isAdmin={isAdmin}
            isProduct={isProduct}
          />
        );
      })}
    </MenuListContainer>
  );
};

export default MenuList;
