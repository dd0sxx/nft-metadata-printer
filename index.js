var root = document.querySelector('#root');
var h1 = document.createElement('h1');
h1.innerText = 'NFT Metadata Generator';
var formWrapper = document.createElement('div');
var form = document.createElement('form');
formWrapper.className = 'form';
var inputText = document.createElement('input');
inputText.className = 'inputText';
document.body.appendChild(h1);
document.body.appendChild(formWrapper);
formWrapper.appendChild(form);
form.appendChild(inputText);
