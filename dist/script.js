  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');
  const sliderImages = document.getElementById('sliderImages');
  const radioButtons = document.querySelectorAll('input[name="slide"]');
  let pictureIndex = 1;
  let time = 3000;
  let timeout;

  document.getElementById('radio'+pictureIndex).checked = true;

  arrowLeft.addEventListener('click', () => shiftLeft());
  arrowRight.addEventListener('click', () => shiftRight());
  radioButtons.forEach((button) =>button.addEventListener(("change"), () => radioSelector(button.value)))

  autoTransition();

  //Shifts image (and corresponding radio) left if the current slide is not the first
  function shiftLeft() {
    clearTimeout(timeout)
    if (pictureIndex === 1) {
      autoTransition();
      return;
    } else {
      pictureIndex +=-1;
      sliderImages.className = 'sliderPos' + pictureIndex;
      document.getElementById('radio'+pictureIndex).checked=true;
      autoTransition();
    }
  };

  //Shifts image (and corresponding radio) right if the current slide is not the first
  function shiftRight() {
    clearTimeout(timeout)
    if (pictureIndex === 4) {
      autoTransition();
      return;
    } else {
      pictureIndex +=1;
      sliderImages.className = 'sliderPos' + pictureIndex;
      document.getElementById('radio'+pictureIndex).checked=true;
      autoTransition();
    }
  };

  //Transitions to the appropriate picture when a radio is selected
  function radioSelector(radioId) {
    if(document.getElementById("radio"+radioId).checked) {
      clearTimeout(timeout)
      sliderImages.className="sliderPos"+radioId;
      pictureIndex=parseInt(radioId);
      autoTransition();
    }
  }

  //Automatically transitions after set time
  function autoTransition() {
    if (pictureIndex !== 4) {
      timeout = setTimeout(shiftRight,time);
    } else {
      timeout = setTimeout(resetShow,time);
    }
  }

  //Resets the slide show
  function resetShow() {
    pictureIndex = 1;
    sliderImages.className="sliderPos1";
    document.getElementById('radio'+pictureIndex).checked = true;
    autoTransition()
  }

  //Resets the transition timer
  function timeoutReset(timeout) {
    clearTimeout(timeout)
  }