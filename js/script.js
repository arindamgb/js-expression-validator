// global variables
let currentMenu = '';


// Get UI Elements
let btnEmail = document.querySelector('#email');
let btnMobile = document.querySelector('#mobile-number');
let btnPostcode = document.querySelector('#post-code');
let btnSubmit = document.querySelector('#submit-btn');

let form = document.querySelector('#form');
let resultArea = document.querySelector('.alert');

let textBox = document.querySelector('.form-control');


// regular expressions
let regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
let regexMobile = /^(\+)?(88)?01[0-9]{9}$/;
let regexPostcode = /^\d{4}$/;


// Event Listeners
btnEmail.addEventListener('click', setEmail);
btnMobile.addEventListener('click', setMobile);
btnPostcode.addEventListener('click', setPostcode);
btnSubmit.addEventListener('click', checkExpression);



// functions
function setEmail(e) {
    enableForm();
    currentMenu = 'email';
    //console.log(currentMenu);
    textBox.value = '';

    e.preventDefault();  
}

function setMobile(e) {
    enableForm();
    currentMenu = 'mobile';
    //console.log(currentMenu);
    textBox.value = '';

    e.preventDefault();  
}

function setPostcode(e) {
    enableForm();
    currentMenu = 'postcode';
    //console.log(currentMenu);
    textBox.value = '';

    e.preventDefault();  
}

function enableForm() {
    form.style.display = 'block';
    resultArea.style.display = 'none';
}


function checkExpression(e) {
    // console.log(currentMenu);

    if(textBox.value == '') {
        alert('You did not give any input to check');
    } else {
        switch (currentMenu) {
            case 'email':
              // console.log('email selected');
              showResult(regexEmail.test(textBox.value));
              break;
            case 'mobile':
              // console.log('mobile selected');
              showResult(regexMobile.test(textBox.value));
              break;
            case 'postcode':
              // console.log('postcode selected');
              showResult(regexPostcode.test(textBox.value));
              break;
            default:
              console.error('Error happened');
          }
    }

    e.preventDefault(); 
}


function showResult(result) {

    resultArea.style.display = 'block';

    if(result == true) {
        resultArea.classList.add('alert-success');
        resultArea.classList.remove('alert-danger');
        resultArea.firstElementChild.innerText = ' Validation Success!'
        // console.log('green')
        // console.log(resultArea.firstElementChild);
    } else {
        resultArea.classList.add('alert-danger');
        resultArea.classList.remove('alert-success');
        resultArea.firstElementChild.innerText = 'Validation Failed!'
        // console.log('red');
    }
}