import { useFormik } from 'formik';
import { useState } from 'react';
import { IMAGES } from '../../constants/images';
import { API_URL } from '../../constants/url';
import { apiGet, apiPost } from '../../services/api.service';
import { madeCompressedBase64 } from '../../services/images.service';
import { IMenu } from '../../types/types.menu';
import { IProduct } from '../../types/types.products';

export const useMenuEditState = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [image, setImage] = useState<string>(IMAGES.placeholderDish);
  const [allergens, setAllergens] = useState<string[]>([]);

  const fetchProducts = async () => {
    const response = await apiGet(API_URL.GET_ALL_PRODUCTS);
    setProducts(response.data);
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

  const handleProduct = (products: string[]) => {
    formik.setFieldValue('products', products);
  };

  const handleAllergens = (allergens: string[]) => {
    console.log(allergens);
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
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik<Omit<IMenu, 'id'>>({
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
      label: 'Products',
      type: 'select',
      formikValue: formik.values.products,
    },
    {
      label: 'Allergens',
      type: 'select',
      formikValue: formik.values.products,
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
    fetchProducts,
    products,
    image,
    allergens,
    setAllergens,
    formik,
    handleFile,
    handleProduct,
    handleAllergens,
    inputs,
  };
};