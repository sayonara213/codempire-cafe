import { toast, ToastOptions } from 'react-toastify';

const toastifyOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const successToast = (message: string) => {
  toast.success(message, toastifyOptions);
};

export const errorToast = (message: string) => {
  toast.error(message, toastifyOptions);
};

export const warningToast = (message: string) => {
  toast.warning(message, toastifyOptions);
};

export const promiseToast = async (
  promise: Promise<any>,
  messagePending: string,
  messageSuccess: string,
  messageError: string,
) => {
  return toast.promise(
    promise,
    {
      pending: messagePending,
      success: messageSuccess,
      error: messageError,
    },
    toastifyOptions,
  );
};
