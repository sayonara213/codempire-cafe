import { useEffect } from 'react';
import { MainContainer } from '../main/main.styled';
import * as Styled from './menu-edit.styled';
import Input from './../global/Input/input';
import GlobalSelect from '../global/Select/select';
import Button from '../global/Button/button';
import { useMenuEditState } from './menu-edit.state';

const MenuEdit: React.FC = () => {
  const {
    fetchProducts,
    products,
    image,
    allergens,
    formik,
    handleFile,
    handleProduct,
    handleAllergens,
    inputs,
    fetchAllergens,
    fetchMenuById,
  } = useMenuEditState();

  useEffect(() => {
    fetchProducts();
    fetchAllergens();
    fetchMenuById();
  }, []);

  return (
    <MainContainer>
      <Styled.MenuEditForm onSubmit={formik.handleSubmit}>
        <Styled.BackButton type='button'>Back</Styled.BackButton>
        <Styled.InputsWrap>
          <Styled.MenuEditFormLeft>
            <Styled.MenuEditImage src={image} />
            <Styled.ImageInputLabel htmlFor='img-input'>
              <Styled.ImageInput type={'file'} onChange={handleFile} id='img-input' />
              UPLOAD
            </Styled.ImageInputLabel>
          </Styled.MenuEditFormLeft>
          <Styled.MenuEditFormRight>
            {inputs.map((input, index) => (
              <Styled.InputWrap key={index}>
                <Styled.InputLabel>{input.label}</Styled.InputLabel>
                {input.type === 'select' ? (
                  <GlobalSelect
                    items={input.label === 'Allergens' ? allergens : products}
                    onchange={input.label === 'Allergens' ? handleAllergens : handleProduct}
                    selectedItems={
                      input.label === 'Allergens' ? formik.values.allergens : formik.values.products
                    }
                    isMulti={input.isMulti!}
                  />
                ) : (
                  <Input
                    value={input.formikValue}
                    onchange={formik.handleChange}
                    placeholder={input.label}
                    isLight={true}
                  />
                )}
              </Styled.InputWrap>
            ))}
          </Styled.MenuEditFormRight>
        </Styled.InputsWrap>
        <Styled.ButtonsWrap>
          <Button type={'submit'} isActive={true}>
            CREATE
          </Button>
          <Button type={'button'} isActive={true} isCancel={true}>
            SKIP
          </Button>
        </Styled.ButtonsWrap>
      </Styled.MenuEditForm>
    </MainContainer>
  );
};

export default MenuEdit;
