import React, { useEffect } from 'react';
import { MenuListContainer } from './menu-list.styled';
import MenuListItem from './menu-list-item/menu-list-item';
import { RoleProps } from './../../../types/types.role';
import { useAppDispatch, useAppSelector } from './../../../hooks/hooks';
import { fetchMenuList } from '../../../redux/menuList.slice';
import MenuListItemsPlaceholder from './menu-list-item/placeholder/menu-list-items-placeholder';

const MenuList: React.FC<RoleProps> = ({ isAdmin }) => {
  const { menuList, menuListLoading, isProduct } = useAppSelector((store) => store.menuList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMenuList(isProduct));
  }, [isProduct]);

  if (menuListLoading) {
    return (
      <MenuListContainer>
        <MenuListItemsPlaceholder />
      </MenuListContainer>
    );
  }

  return (
    <MenuListContainer>
      {menuList.map((item) => {
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
          />
        );
      })}
    </MenuListContainer>
  );
};

export default MenuList;
