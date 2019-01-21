// Make text input appear when 'Other' checkbox is clicked
const otherCheckbox = document.querySelector('input[value="other"]');
const otherText = document.querySelector('input[id="otherValue"]');

otherText.style.visibility = 'hidden';

otherCheckbox.onchange = function() {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.placeholder = 'Please specify'
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
};