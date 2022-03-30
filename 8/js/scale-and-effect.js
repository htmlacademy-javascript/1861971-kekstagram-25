const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const effectsRadio = document.querySelectorAll('.effects__radio');
const effectLevelValue = document.querySelector('.effect-level');
const effectLevel = effectLevelValue.querySelector('.effect-level__value');
const effectLevelSlider = effectLevelValue.querySelector('.effect-level__slider');


scaleControlSmaller.addEventListener('click',()=>{
  if(scaleControlValue.value>25){
    scaleControlValue.value = Number(scaleControlValue.value) - 25;
    const dataToReduce = Number(scaleControlValue.value) / 100;
    imgUploadPreview.style.transform = `scale(${dataToReduce})`;
  }
});

scaleControlBigger.addEventListener('click',()=>{
  if(scaleControlValue.value<100){
    scaleControlValue.value = Number(scaleControlValue.value) + 25;
    const dataToIncrease = Number(scaleControlValue.value) / 100;
    imgUploadPreview.style.transform = `scale(${dataToIncrease})`;
  }
});

for (let i=0; i<effectsRadio.length; i++){
  changeEffect(effectsRadio[i]);
}

effectLevel.value = 100;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',

  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});


function doSomething (baton) {
  if (baton === 'effects__preview--chrome'){
    return 'grayscale';
  }else if (baton === 'effects__preview--sepia'){
    return 'sepia';
  }else if (baton === 'effects__preview--marvin'){
    return 'invert';
  }else if (baton === 'effects__preview--phobos'){
    return 'blur';
  }else if (baton === 'effects__preview--heat'){
    return 'brightness';
  }
}

let batons = 'effects__preview--none';

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevel.value = effectLevelSlider.noUiSlider.get();
  const namber = Number(effectLevel.value);
  const classProperies = doSomething(batons);
  if (classProperies === 'invert'){
    imgUploadPreview.style.filter = `${classProperies}(${namber}%)`;
  }else if (classProperies === 'blur'){
    imgUploadPreview.style.filter = `${classProperies}(${namber}px)`;
  }else{
    imgUploadPreview.style.filter = `${classProperies}(${namber})`;
  }
});


function changeEffect (buttonsEffect){
  effectLevelValue.classList.add('hidden');

  buttonsEffect.addEventListener('click',()=>{
    imgUploadPreview.classList.remove(batons);
    const pictureEffect = `effects__preview--${buttonsEffect.value}`;
    batons = pictureEffect;

    if (pictureEffect === 'effects__preview--chrome' || pictureEffect === 'effects__preview--sepia') {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    }

    if (pictureEffect === 'effects__preview--marvin') {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
    }

    if (pictureEffect === 'effects__preview--phobos') {
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }

    if (pictureEffect === 'effects__preview--heat'){
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }
    imgUploadPreview.classList.add(pictureEffect );

    if (pictureEffect === 'effects__preview--none'){
      effectLevelValue.classList.add('hidden');
      imgUploadPreview.style.filter = 'none';
    }else{
      effectLevelValue.classList.remove('hidden');
    }

  });

}
