import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { apiGet, apiPost } from '../../services/api.service';
import { madeCompressedBase64 } from '../../services/images.service';
import { IMenu } from '../../types/types.menu';
import { API_URL } from './../../constants/url';

const MenuEdit: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  const fetchProducts = async () => {
    const response = await apiGet(API_URL.GET_ALL_PRODUCTS);
    console.log(response.data);

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

  const handleProduct = (id: string) => {
    formik.setFieldValue('products', [...formik.values.products, id]);
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
    <div>
      <h1>Menu Edit</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={formik.values.name}
          name={'name'}
          onChange={formik.handleChange}
        />
        <input
          type='number'
          placeholder='Price'
          value={formik.values.price}
          name={'price'}
          onChange={formik.handleChange}
        />
        <input
          type='number'
          placeholder='Weight'
          value={formik.values.weight}
          name={'weight'}
          onChange={formik.handleChange}
        />
        <input
          type='text'
          placeholder='Description'
          value={formik.values.description}
          name={'description'}
          onChange={formik.handleChange}
        />
        <input type='file' name={'image'} onChange={(e) => handleFile(e)} />
        <div>
          {products.length > 0 &&
            products.map((item: any) => {
              return (
                <div key={item.id}>
                  <button type='button' onClick={() => handleProduct(item.id)}>
                    {item.name}
                  </button>
                </div>
              );
            })}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default MenuEdit;
