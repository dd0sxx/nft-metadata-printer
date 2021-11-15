const root = document.querySelector('#root')

const h1 = document.createElement('h1');
h1.innerText = 'NFT Metadata Generator';


const image = document.createElement('div')
const title = document.createElement('div')
const description = document.createElement('div')
const imageFormWrapper = document.createElement('div')
const imageForm = document.createElement('form')
const imageTextArea = document.createElement('textarea')
const titleFormWrapper = document.createElement('div')
const titleForm = document.createElement('form')
const titleTextArea = document.createElement('textarea')
const descriptionFormWrapper = document.createElement('div')
const descriptionForm = document.createElement('form')
const descriptionTextArea = document.createElement('textarea')

image.innerText = 'ipfs hash:'
title.innerText = 'title:'
description.innerText = 'description:'
imageFormWrapper.className = 'imageFormWrapper'
imageTextArea.className = 'imageTextArea'
titleFormWrapper.className = 'titleFormWrapper'
titleTextArea.className = 'titleTextArea'
descriptionFormWrapper.className = 'descriptionFormWrapper'
descriptionTextArea.className = 'descriptiontextArea'

document.body.appendChild(h1)
document.body.appendChild(description)
document.body.appendChild(descriptionFormWrapper)
descriptionFormWrapper.appendChild(descriptionForm)
descriptionForm.appendChild(descriptionTextArea)

descriptionTextArea.addEventListener("input", (e) => {
    console.log('description: ', descriptionTextArea.value)
})
