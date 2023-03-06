import React, { useEffect, useState } from 'react';
import { MenuListContainer } from './menu-list.styled';
import MenuListItem from './menu-list-item/menu-list-item';
import { IMAGES } from './../../../constants/images';
import { IMenu } from './../../menu-edit/menu-edit';
import axios from 'axios';

const MenuList: React.FC = () => {
  const [menuItems, setMenuItems] = useState<IMenu[]>([]);

  useEffect(() => {
    const getMenuItems = async () => {
      const response = await axios.get('http://localhost:5000/menu');
      console.log(response.data);
      setMenuItems(response.data);
    };
    getMenuItems();
  }, []);

  return (
    <MenuListContainer>
      {menuItems.map((item) => {
        return (
          <MenuListItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        );
      })}
      <MenuListItem
        name={'test'}
        description={'test description'}
        price={500}
        image={IMAGES.placeholderDish}
      />
      <MenuListItem
        name={'test'}
        description={'test description'}
        price={500}
        image={IMAGES.placeholderDish}
      />
      <MenuListItem
        name={'test'}
        description={'test description'}
        price={500}
        image={IMAGES.placeholderDish}
      />
      <MenuListItem
        name={'test'}
        description={'test description'}
        price={500}
        image={IMAGES.placeholderDish}
      />
      <MenuListItem
        name={'test'}
        description={'test description'}
        price={500}
        image={IMAGES.placeholderDish}
      />
      <MenuListItem
        name={'test'}
        description={'test description'}
        price={500}
        image={IMAGES.placeholderDish}
      />
      <MenuListItem
        name={'test'}
        description={'test description'}
        price={500}
        image={IMAGES.placeholderDish}
      />
    </MenuListContainer>
  );
};

export default MenuList;
