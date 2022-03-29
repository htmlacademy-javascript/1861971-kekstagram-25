const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const effectsRadio = document.querySelectorAll('.effects__radio');
const effectLevelValue = document.querySelector('.effect-level');
const effectLevel = effectLevelValue.querySelector('.effect-level__value');
const effectLevelSlider = effectLevelValue.querySelector('.effect-level__slider');

const filters = ['none', 'chrome', 'sepia', 'marvin', 'phobos', 'heat'];

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
  changeEffect(effectsRadio[i], filters[i]);
}

effectLevel.value = 3;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
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

function doSomething (pictureEffects, styleFilter) {
  effectLevelSlider.noUiSlider.on('update', () => {
    effectLevel.value = effectLevelSlider.noUiSlider.get();
    const namber = Number(effectLevel.value);
    console.log(styleFilter);
    pictureEffects.style.filter = `${styleFilter}(${namber})`;
  });
}
/*
function doSomething(values, handle, unencoded) {
  effectLevel.value = unencoded;
  const namber = effectLevel.value;
}

effectLevelSlider.noUiSlider.on('update',doSomething);
*/
function changeEffect (buttonsEffect,filter){
  effectLevelValue.classList.add('hidden');

  buttonsEffect.addEventListener('click',()=>{
    const pictureEffect = `effects__preview--${buttonsEffect.value}`;

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

    if (pictureEffect === 'effects__preview--none'){
      effectLevelValue.classList.add('hidden');
    }else{
      effectLevelValue.classList.remove('hidden');
    }

    if (imgUploadPreview.classList.contains(pictureEffect)) {
      imgUploadPreview.classList.remove(pictureEffect);
    }else{
      imgUploadPreview.classList.add(pictureEffect );
    }
    doSomething(buttonsEffect, filter);
  });
}
