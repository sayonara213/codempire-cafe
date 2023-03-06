import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { madeCompressedBase64 } from '../../services/images.service';

export interface IMenu {
  name: string;
  price: number;
  weight: number;
  description: string;
  image: any;
}

const MenuEdit = () => {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    if (file) {
      madeCompressedBase64(file, (dataUrl) => {
        formik.setFieldValue('image', dataUrl);
      });
    }
  };

  const handleSubmit = async (values: IMenu) => {
    console.log(values);
    axios.post('http://localhost:5000/menu/add', {
      name: values.name,
      price: values.price,
      weight: values.weight,
      description: values.description,
      image: values.image,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      description: '',
      weight: 0,
      image: '',
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default MenuEdit;
