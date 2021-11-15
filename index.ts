const root = document.querySelector('#root')

const h1 = document.createElement('h1');
h1.innerText = 'NFT Metadata Generator';

const formWrapper = document.createElement('div')
const form = document.createElement('form')
formWrapper.className = 'form'
const inputText = document.createElement('input')
inputText.className = 'inputText'

document.body.appendChild(h1)
document.body.appendChild(formWrapper)
formWrapper.appendChild(form)
form.appendChild(inputText)

