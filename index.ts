const root = document.querySelector('#root')

let titleState, imageState, descriptionState

const h1 = document.createElement('h1');
h1.innerText = 'NFT Metadata Generator';

const container = document.createElement('div')
container.className = 'container'
const subContainer1 = document.createElement('div')
subContainer1.className = 'subContainer1'
const subContainer2 = document.createElement('div')
subContainer2.className = 'subContainer2'

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
descriptionTextArea.className = 'descriptionTextArea'

document.body.appendChild(h1)
document.body.appendChild(container)
container.appendChild(subContainer1)
container.appendChild(subContainer2)
subContainer1.appendChild(title)
subContainer1.appendChild(titleFormWrapper)
titleFormWrapper.appendChild(titleForm)
titleForm.appendChild(titleTextArea)
subContainer1.appendChild(image)
subContainer1.appendChild(imageFormWrapper)
imageFormWrapper.appendChild(imageForm)
imageForm.appendChild(imageTextArea)
subContainer1.appendChild(description)
subContainer1.appendChild(descriptionFormWrapper)
descriptionFormWrapper.appendChild(descriptionForm)
descriptionForm.appendChild(descriptionTextArea)

descriptionTextArea.addEventListener("input", (e) => {
    // descriptionTextArea.value
})

imageTextArea.addEventListener("input", (e) => {
    // imageTextArea.value
})

titleTextArea.addEventListener("input", (e) => {
    // titleTextArea.value
})