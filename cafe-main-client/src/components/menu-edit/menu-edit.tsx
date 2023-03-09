import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { apiGet, apiPost } from '../../services/api.service';
import { madeCompressedBase64 } from '../../services/images.service';
import { IMenu } from '../../types/types.menu';
import { MainContainer } from '../main/main.styled';
import { API_URL } from './../../constants/url';
import * as Styled from './menu-edit.styled';
import { IMAGES } from './../../constants/images';
import Input from './../global/Input/input';
import GlobalSelect from '../global/Select/select';
import { IProduct } from '../../types/types.products';
import Button from '../global/Button/button';

const MenuEdit: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const response = await apiGet(API_URL.GET_ALL_PRODUCTS);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    if (file) {
      madeCompressedBase64(file, (dataUrl) => {
        formik.setFieldValue('image', dataUrl);
      });
    }
  };

  const handleProduct = (products: string[]) => {
    formik.setFieldValue('products', products);
  };

  const handleSubmit = async (values: Omit<IMenu, 'id'>) => {
    console.log(values);
    apiPost(API_URL.ADD, {
      name: values.name,
      price: values.price,
      weight: values.weight,
      description: values.description,
      image: values.image,
      products: values.products,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      description: '',
      weight: 0,
      image: '',
      products: [],
    },
    onSubmit: handleSubmit,
  });

  return (
    <MainContainer>
      <Styled.MenuEditForm>
        <Styled.BackButton type='button'>Back</Styled.BackButton>
        <Styled.InputsWrap>
          <Styled.MenuEditFormLeft>
            <Styled.MenuEditImage src={IMAGES.placeholderDish} />
            <Styled.MenuEditButton>UPLOAD</Styled.MenuEditButton>
          </Styled.MenuEditFormLeft>
          <Styled.MenuEditFormRight>
            <Styled.FlexContainer>
              <Styled.InputWrap>
                <Styled.InputLabel>Description</Styled.InputLabel>
                <Input
                  placeholder='Description'
                  value={''}
                  onchange={() => console.log('hello')}
                  isLight={true}></Input>
              </Styled.InputWrap>
            </Styled.FlexContainer>
            <Styled.FlexContainer>
              <Styled.InputWrap>
                <Styled.InputLabel>Product</Styled.InputLabel>
                <GlobalSelect items={products} onchange={handleProduct} />
              </Styled.InputWrap>
              <Styled.InputWrap>
                <Styled.InputLabel>Product</Styled.InputLabel>
                <GlobalSelect items={products} onchange={handleProduct} />
              </Styled.InputWrap>
            </Styled.FlexContainer>
            <Styled.FlexContainer>
              <Styled.InputWrap>
                <Styled.InputLabel>Description</Styled.InputLabel>
                <Input
                  placeholder='Description'
                  value={''}
                  onchange={() => console.log('hello')}
                  isLight={true}></Input>
              </Styled.InputWrap>
              <Styled.InputWrap>
                <Styled.InputLabel>Description</Styled.InputLabel>
                <Input
                  placeholder='Description'
                  value={''}
                  onchange={() => console.log('hello')}
                  isLight={true}></Input>
              </Styled.InputWrap>
            </Styled.FlexContainer>
          </Styled.MenuEditFormRight>
        </Styled.InputsWrap>
        <Styled.ButtonsWrap>
          <Button type={'button'} isActive={true}>
            CREATE
          </Button>
          <Button type={'button'} isActive={true}>
            SKIP
          </Button>
        </Styled.ButtonsWrap>
      </Styled.MenuEditForm>
    </MainContainer>
  );
};

export default MenuEdit;
