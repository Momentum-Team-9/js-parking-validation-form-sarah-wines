const form = document.querySelector('#parking-form');
const button = document.querySelector('#submit-button');
const nameInput = document.getElementById('name');

let formIsValid;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const valid = document.createElement('div');
  valid.id = 'message';
  let total = (document.querySelector('#total').appendChild(valid).innerText =
    '$5.Pay up bitch');
});
