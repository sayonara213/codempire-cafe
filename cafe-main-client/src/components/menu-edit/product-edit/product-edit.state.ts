import { useFormik } from 'formik';
import { useState } from 'react';
import { IMAGES } from '../../../constants/images';
import { API_URL } from '../../../constants/url';
import { apiGet, apiPost } from '../../../services/api.service';
import { madeCompressedBase64 } from '../../../services/images.service';
import { IAllergen } from '../../../types/types.allergens';
import { IProduct } from '../../../types/types.products';

export const useProductEditState = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [image, setImage] = useState<string>(IMAGES.placeholderDish);
  const [allergens, setAllergens] = useState<IAllergen[]>([]);
  const [selectedAllergens, setSelectedAllergens] = useState<IAllergen[]>([]);

  const fetchIngredients = async () => {
    const response = await apiGet(API_URL.GET_ALL_INGREDIENTS);
    setProducts(response.data);
  };

  const fetchAllergens = async () => {
    const response = await apiGet(API_URL.GET_ALL_ALLERGENS);
    setAllergens(response.data);
  };

  const handleSubmit = async (values: Omit<IProduct, 'id'>) => {
    console.log(values);

    const ingredientsId = values.ingredients.map((ingredient) => ingredient.id);
    apiPost(API_URL.ADD_PRODUCT, {
      name: values.name,
      price: values.price,
      weight: values.weight,
      description: values.description,
      image: values.image,
      ingredients: ingredientsId,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik<Omit<IProduct, 'id'>>({
    initialValues: {
      name: '',
      price: 0,
      description: '',
      weight: 0,
      image: '',
      ingredients: [],
    },
    onSubmit: handleSubmit,
  });

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
      .filter((allergen, index, self) => self.findIndex((item) => item.id === allergen.id));
  };

  const handleAllergens = (allergens: string[]) => {
    formik.setFieldValue('allergens', allergens);
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
      formikValue: formik.values.ingredients,
    },
    {
      label: 'Allergens',
      type: 'select',
      items: allergens,
      formikValue: selectedAllergens,
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
  };
};
