const form = document.querySelector('#parking-form');
const button = document.querySelector('#submit-button');
const nameInput = document.getElementById('name');
const days = document.querySelector('#days');
let formIsValid;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const valid = document.createElement('div');
  valid.id = 'message';
  let total = (document.querySelector('#total').appendChild(valid).innerText =
    'Your expected total will be $' + eval(days.value * 5));
  console.log(days.textContent);
});
