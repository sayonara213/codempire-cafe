import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainContainer } from '../main/main.styled';
import { BackButton } from '../menu-edit/menu-edit.styled';
import * as Styled from './menu-info.styled';
import Button from './../global/Button/button';
import { IMenu } from '../../types/types.menu';
import { apiGet } from './../../services/api.service';
import { API_URL } from '../../constants/url';
import { IAllergen } from '../../types/types.allergens';
import MenuListItem from './../main/menu-list/menu-list-item/menu-list-item';

interface MenuInfoProps {
  isProduct: boolean;
}

const MenuInfo: React.FC<MenuInfoProps> = ({ isProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState<IMenu | null>(null);
  const [allergens, setAllergens] = useState<string[]>([]);
  const [products, setProducts] = useState<string[]>([]);
  const [menuList, setMenuList] = useState<IMenu[]>([]);

  const getBack = () => {
    navigate(-1);
  };

  const getMenu = async () => {
    const response = await apiGet(API_URL.GET_MENU + id);
    setItem(response.data);
    setAllergens(response.data.allergens.map((allergen: any) => allergen.name));
    setProducts(response.data.products.map((product: any) => product.name));
  };

  const getProduct = async () => {
    const response = await apiGet(API_URL.GET_PRODUCT_BY_ID + id);
    const ingredients = response.data.ingredients.map((ingredient: any) => ingredient.name);
    const allergens = response.data.ingredients.map((ingredient: any) => ingredient.allergens);
    setItem(response.data);
    setAllergens(getUniqueAllergens(allergens).map((allergen: any) => allergen.name));
    setProducts(ingredients);
  };

  const getUniqueAllergens = (allergens: IAllergen[][]) => {
    return allergens
      .flat()
      .filter(
        (allergen, index, self) => self.findIndex((item) => item.id === allergen.id) === index,
      );
  };

  const fetchLimitMenu = async () => {
    const response = await apiGet(API_URL.GET_ALL_MENUS + '?limit=4');
    setMenuList(response.data);
  };

  useEffect(() => {
    isProduct ? getProduct() : getMenu();
    fetchLimitMenu();
  }, [id]);

  return (
    <MainContainer>
      <Styled.MenuInfoContainer>
        <Styled.BackButtonWrap>
          <BackButton onClick={getBack}>Back</BackButton>
        </Styled.BackButtonWrap>
        <Styled.ItemWrap>
          <Styled.ItemSectionWrap>
            <Styled.ItemImageWrap>
              <Styled.ItemImage src={item?.image} />
            </Styled.ItemImageWrap>
          </Styled.ItemSectionWrap>
          <Styled.ItemSectionWrap>
            <Styled.ItemTitle>{item?.name}</Styled.ItemTitle>
            <Styled.ItemDescription>{item?.description}</Styled.ItemDescription>
            <Styled.ItemParamTitle>Ingredients:</Styled.ItemParamTitle>
            <Styled.ItemParamValue>{products.join(', ')}</Styled.ItemParamValue>
            <Styled.ItemParamTitle>Allergenes:</Styled.ItemParamTitle>
            <Styled.ItemParamValue>{allergens.join(', ')}</Styled.ItemParamValue>
          </Styled.ItemSectionWrap>
          <Styled.ItemSectionWrap>
            <Styled.ItemPriceWrap>
              <Styled.ItemPrice>{item?.price}uah</Styled.ItemPrice>
              <Styled.ItemPrice>{item?.weight}g</Styled.ItemPrice>
            </Styled.ItemPriceWrap>
            <Styled.ItemButtonsWrap>
              <Button isActive={true} type={'button'}>
                ORDER
              </Button>
              <Button isActive={true} type={'button'} isCancel={true}>
                SKIP
              </Button>
            </Styled.ItemButtonsWrap>
          </Styled.ItemSectionWrap>
        </Styled.ItemWrap>
        <Styled.OtherSectionWrap>
          <Styled.ItemParamTitle>Tastes Best With</Styled.ItemParamTitle>
          <Styled.OtherSectionItemsWrap>
            {menuList.map((item) => (
              <MenuListItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                weight={item.weight}
                description={item.description}
                isAdmin={false}
                isProduct={false}
              />
            ))}
          </Styled.OtherSectionItemsWrap>
        </Styled.OtherSectionWrap>
      </Styled.MenuInfoContainer>
    </MainContainer>
  );
};

export default MenuInfo;
