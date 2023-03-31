import { useFormik } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGES } from '../../constants/images';
import { API_URL } from '../../constants/url';
import { apiGet, apiPost, apiUpdate } from '../../services/api.service';
import { madeCompressedBase64 } from '../../services/images.service';
import { IAllergen } from '../../types/types.allergens';
import { IMenu } from '../../types/types.menu';
import { IProduct } from '../../types/types.products';
import { errorToast, successToast } from './../../notifications/notifications';

export const useMenuEditState = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [image, setImage] = useState<string>(IMAGES.placeholderDish);
  const [allergens, setAllergens] = useState<IAllergen[]>([]);
  const { id } = useParams();

  const fetchProducts = async () => {
    const response = await apiGet(API_URL.GET_ALL_PRODUCTS);
    setProducts(response.data);
  };

  const fetchAllergens = async () => {
    const response = await apiGet(API_URL.GET_ALL_ALLERGENS);
    setAllergens(response.data);
  };

  const fetchProductAllergens = async (id: string) => {
    if (id !== undefined) {
      const response = await apiGet(`${API_URL.GET_ALL_PRODUCTS}/${id}/allergens`);
      return response.data;
    }
  };

  const handleSubmit = async (values: Omit<IMenu, 'id'>) => {
    const productIds = values.products.map((product) => product.id);
    const allergensIds = values.allergens.map((allergen) => allergen.id);

    const data = {
      name: values.name,
      price: values.price,
      weight: values.weight,
      description: values.description,
      image: values.image,
      products: productIds,
      allergens: allergensIds,
    };
    id ? handleEditSubmit(data) : handleCreateSubmit(data);
  };

  const handleCreateSubmit = async (values: any) => {
    try {
      await apiPost(API_URL.ADD, values);
      successToast('Menu created successfully');
    } catch {
      errorToast('Menu creation failed');
    }
  };

  const handleEditSubmit = async (values: any) => {
    console.log(values);

    try {
      apiUpdate(API_URL.UPDATE_MENU, id!, values);
      successToast('Menu updated successfully');
    } catch {
      errorToast('Menu update failed');
    }
  };

  const formik = useFormik<Omit<IMenu, 'id'>>({
    initialValues: {
      name: '',
      price: 0,
      description: '',
      weight: 0,
      image: '',
      products: [],
      allergens: [],
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

  const handleProduct = async (products: any[]) => {
    const productIds = products.map((product) => product.id);
    const allergensArr = await Promise.all(
      productIds.map(async (id) => {
        return await fetchProductAllergens(id);
      }),
    );
    const uniqueAllergens = getUniqueAllergens(allergensArr);
    const totalPrice = getTotalPrice(products);
    const totalWeight = getTotalWeight(products);

    formik.setFieldValue('products', products);
    formik.setFieldValue('allergens', uniqueAllergens);
    formik.setFieldValue('price', totalPrice);
    formik.setFieldValue('weight', totalWeight);
  };

  const getTotalPrice = (products: IProduct[]) => {
    const total = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    return total;
  };

  const getTotalWeight = (products: IProduct[]) => {
    const total = products.reduce((acc, product) => {
      return acc + product.weight;
    }, 0);
    return total;
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

  const fetchMenuById = async () => {
    if (id) {
      const response = await apiGet(API_URL.GET_MENU + id);
      const menu = response.data;
      handleProduct(menu.products);
      setImage(menu.image);
      formik.setFieldValue('image', menu.image);
      formik.setFieldValue('name', menu.name);
      formik.setFieldValue('description', menu.description);
    }
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
      label: 'Products',
      type: 'select',
      items: products,
      formikValue: formik.values.products,
      isMulti: true,
    },
    {
      label: 'Allergens',
      type: 'select',
      items: allergens,
      formikValue: formik.values.allergens,
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
    fetchAllergens,
    fetchMenuById,
  };
};
