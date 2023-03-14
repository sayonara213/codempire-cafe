import { useEffect } from 'react';
import Button from '../../global/Button/button';
import Input from '../../global/Input/input';
import GlobalSelect from '../../global/Select/select';
import { MainContainer } from '../../main/main.styled';
import * as Styled from '../menu-edit.styled';
import { useProductEditState } from './product-edit.state';

const ProductEdit: React.FC = () => {
  const {
    fetchIngredients,
    products,
    image,
    allergens,
    formik,
    handleFile,
    handleIngredient,
    handleAllergens,
    inputs,
    fetchAllergens,
    selectedAllergens,
  } = useProductEditState();

  useEffect(() => {
    fetchIngredients();
    fetchAllergens();
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
                    items={input.items!}
                    onchange={input.onchange!}
                    selectedItems={input.selectedItems!}
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

export default ProductEdit;
