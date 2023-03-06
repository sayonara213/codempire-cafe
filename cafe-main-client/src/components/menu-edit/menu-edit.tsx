import { useFormik } from 'formik';

const MenuEdit = () => {
  interface IMenu {
    name: string;
    price: number;
    description: string;
    image: any;
  }

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('image', e.currentTarget.files![0]);
    console.log(e.currentTarget.files![0]);
  };

  const handleSubmit = (values: IMenu) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      description: '',
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
