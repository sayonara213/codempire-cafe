import { useFormik } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGES } from '../../../constants/images';
import { API_URL } from '../../../constants/url';
import { apiGet, apiPost, apiUpdate } from '../../../services/api.service';
import { madeCompressedBase64 } from '../../../services/images.service';
import { IAllergen } from '../../../types/types.allergens';
import { IProduct, productTypes } from '../../../types/types.products';
import { errorToast, successToast } from './../../../notifications/notifications';

export const useProductEditState = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [image, setImage] = useState<string>(IMAGES.placeholderDish);
  const [allergens, setAllergens] = useState<IAllergen[]>([]);
  const [selectedAllergens, setSelectedAllergens] = useState<IAllergen[]>([]);
  const { id } = useParams();

  const fetchIngredients = async () => {
    const response = await apiGet(API_URL.GET_ALL_INGREDIENTS);
    setProducts(response.data);
  };

  const fetchAllergens = async () => {
    const response = await apiGet(API_URL.GET_ALL_ALLERGENS);
    setAllergens(response.data);
  };

  const handleSubmit = (values: Omit<IProduct, 'id'>) => {
    const ingredientsId = values.ingredients.map((ingredient) => ingredient.id);
    const data = {
      name: values.name,
      price: values.price,
      weight: values.weight,
      description: values.description,
      image: values.image,
      type: values.type,
      ingredients: ingredientsId,
    };
    id ? handleEditSubmit(data) : handleCreateSubmit(data);
  };

  const handleCreateSubmit = async (values: any) => {
    try {
      await apiPost(API_URL.ADD_PRODUCT, values);
      successToast('Product was created successfully');
    } catch {
      errorToast("Product wasn't created");
    }
  };

  const handleEditSubmit = async (values: any) => {
    console.log(values);

    try {
      await apiUpdate(API_URL.UPDATE_PRODUCT, id!, values);
      successToast('Product was updated successfully');
    } catch {
      errorToast("Product wasn't updated");
    }
  };

  const formik = useFormik<Omit<IProduct, 'id'>>({
    initialValues: {
      name: '',
      price: 0,
      description: '',
      weight: 0,
      image: '',
      type: '',
      ingredients: [],
    },
    onSubmit: handleSubmit,
  });

  const fetchSelectedProduct = async () => {
    if (id) {
      const response = await apiGet(API_URL.GET_PRODUCT_BY_ID + id);
      const product = response.data;

      setImage(product.image);
      formik.setFieldValue('name', product.name);
      formik.setFieldValue('price', product.price);
      formik.setFieldValue('description', product.description);
      formik.setFieldValue('weight', product.weight);
      formik.setFieldValue('image', product.image);
      formik.setFieldValue('type', product.type);
      handleIngredient(product.ingredients);
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    setImage(URL.createObjectURL(file));
    if (file) {
      madeCompressedBase64(file, (dataUrl) => {
        formik.setFieldValue('image', dataUrl);
      });
    }
  };

  const handleIngredient = async (ingredients: any[]) => {
    const allergens = ingredients.map((ingredient) => ingredient.allergens);

    const uniqueAllergens = getUniqueAllergens(allergens);
    formik.setFieldValue('ingredients', ingredients);
    setSelectedAllergens(uniqueAllergens);
  };

  const getUniqueAllergens = (allergens: IAllergen[][]) => {
    return allergens
      .flat()
      .filter(
        (allergen, index, self) => self.findIndex((item) => item.id === allergen.id) === index,
      );
  };

  const handleAllergens = (allergens: string[]) => {
    formik.setFieldValue('allergens', allergens);
  };

  const handleType = (type: string) => {
    formik.setFieldValue('type', type);
  };

  const inputs = [
    {
      label: 'Name',
      type: 'field',
      formikValue: formik.values.name,
    },
    {
      label: 'Description',
      type: 'field',
      formikValue: formik.values.description,
    },
    {
      label: 'Ingredients',
      type: 'select',
      items: products,
      onchange: handleIngredient,
      selectedItems: formik.values.ingredients,
      formikValue: formik.values.ingredients,
      isMulti: true,
    },
    {
      label: 'Allergens',
      type: 'select',
      items: allergens,
      onchange: handleAllergens,
      selectedItems: selectedAllergens,
      formikValue: selectedAllergens,
      isMulti: true,
    },
    {
      label: 'Price',
      type: 'field',
      formikValue: formik.values.price,
    },
    {
      label: 'Weight',
      type: 'field',
      formikValue: formik.values.weight,
    },
    {
      label: 'Type',
      type: 'select',
      items: productTypes,
      onchange: handleType,
      formikValue: formik.values.type,
      isMulti: false,
    },
  ];

  return {
    fetchIngredients,
    products,
    image,
    allergens,
    setAllergens,
    formik,
    handleFile,
    handleIngredient,
    handleAllergens,
    inputs,
    fetchAllergens,
    selectedAllergens,
    fetchSelectedProduct,
  };
};
