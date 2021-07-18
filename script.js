const form = document.querySelector('#parking-form');
const button = document.querySelector('#submit-button');
const nameInput = document.getElementById('name');
const days = document.querySelector('#days');
const expDate = document.querySelector('#expiration');
const expParent = document.querySelector('#expiration-field');
let total = document.querySelector('#total');
let formIsValid;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const valid = document.createElement('div');
  valid.id = 'message';
  total.appendChild(valid).innerText =
    'Your expected total will be $' + eval(days.value * 5);
  ValidExpDate(expDate.value);
});

// //credit card regex

// function validateCardNumber(number) {
//   var regex = new RegExp('^[0-9]{16}$');
//   if (!regex.test(number)) return false;

//   return luhnCheck(number);
// }

// function luhnCheck(val) {
//   var sum = 0;
//   for (var i = 0; i < val.length; i++) {
//     var intVal = parseInt(val.substr(i, 1));
//     if (i % 2 == 0) {
//       intVal *= 2;
//       if (intVal > 9) {
//         intVal = 1 + (intVal % 10);
//       }
//     }
//     sum += intVal;
//   }
//   return sum % 10 == 0;
// }

function ValidExpDate(dValue) {
  let result = false;
  dValue = dValue.split('/');
  const pattern = /^\d{2}$/;

  if (dValue[0] < 1 || dValue[0] > 12) result = true;

  if (dValue[1] < 21) result = true;

  if (!pattern.test(dValue[0]) || !pattern.test(dValue[1])) result = true;

  if (dValue[2]) result = true;

  if (result) {
    const valid = document.createElement('div');
    valid.id = 'message';
    expParent.appendChild(valid).innerText =
      'Expiration date must be a valid month and year and in the correct format.';
  }
}
