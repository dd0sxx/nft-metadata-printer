const root = document.querySelector('#root')

const h1 = document.createElement('h1');
h1.innerText = 'NFT Metadata Generator';


const image = document.createElement('div')
const title = document.createElement('div')
const description = document.createElement('div')
const descriptionFormWrapper = document.createElement('div')
const descriptionForm = document.createElement('form')
const descriptiontextArea = document.createElement('textarea')

image.innerText = 'ipfs hash:'
title.innerText = 'title:'
description.innerText = 'description:'
descriptionFormWrapper.className = 'descriptionFormWrapper'
descriptiontextArea.className = 'inputText'

document.body.appendChild(h1)
document.body.appendChild(description)
document.body.appendChild(formWrapper)
formWrapper.appendChild(form)
form.appendChild(textarea1)

textarea1.addEventListener("input", (e) => {
    console.log('brr: ', textarea1.value)
})
