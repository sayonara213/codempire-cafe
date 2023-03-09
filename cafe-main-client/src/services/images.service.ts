import imageCompression from 'browser-image-compression';

export const madeCompressedBase64 = async (
  file: File,
  callback: (dataUrl: string | ArrayBuffer | null) => void,
) => {
  const imageFile = file;

  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 360,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, options);
    const url = URL.createObjectURL(compressedFile);

    getBase64Image(url, (dataUrl) => callback(dataUrl));
  } catch (error) {
    console.log(error);
  }
};

export const getBase64Image = (
  url: string,
  callback: (dataUrl: string | ArrayBuffer | null) => void,
) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr?.send();
};
