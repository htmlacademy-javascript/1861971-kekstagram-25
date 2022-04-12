const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const uploadFile = document.querySelector('#upload-file');
const fileRendering = document.querySelector('.img-upload__preview').querySelector('img');

uploadFile.addEventListener('change',() => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((value) => fileName.endsWith(value));

  if (matches) {
    fileRendering.src = URL.createObjectURL(file);
  }
});
