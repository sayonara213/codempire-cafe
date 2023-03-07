import React, { useEffect, useState } from 'react';
import { MenuListContainer } from './menu-list.styled';
import MenuListItem from './menu-list-item/menu-list-item';
import { RoleProps } from './../../../types/types.role';
import { IMenu } from '../../../types/types.menu';
import { apiGet } from './../../../services/api.service';
import { API_URL } from './../../../constants/url';

const MenuList: React.FC<RoleProps> = ({ isAdmin }) => {
  const [menuItems, setMenuItems] = useState<IMenu[]>([]);

  const getMenuItems = async () => {
    const response = await apiGet(API_URL.GET_ALL);
    console.log(response.data);

    setMenuItems(response.data);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <MenuListContainer>
      {menuItems.map((item) => {
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
