const root = document.querySelector('#root')

let jsonObject = {
    name: "",
    description: "",
    image: "",
    attributes: []
}

const h1 = document.createElement('h1');
h1.innerText = 'NFT Metadata Generator';

const container = document.createElement('div')
container.className = 'container'
const subContainer1 = document.createElement('div')
subContainer1.className = 'subContainer1'
const subContainer2 = document.createElement('div')
subContainer2.className = 'subContainer2'

const image = document.createElement('div')
const nameDiv = document.createElement('div')
const description = document.createElement('div')
const attributes = document.createElement('div')
const imageFormWrapper = document.createElement('div')
const imageForm = document.createElement('form')
const imageTextArea = document.createElement('textarea')
const nameFormWrapper = document.createElement('div')
const nameForm = document.createElement('form')
const nameTextArea = document.createElement('textarea')
const descriptionFormWrapper = document.createElement('div')
const descriptionForm = document.createElement('form')
const descriptionTextArea = document.createElement('textarea')
const attributesFormWrapper = document.createElement('div')
const attributesForm = document.createElement('form')
const attributesTextArea = document.createElement('textarea')
const jsonDisplay = document.createElement('div')

image.innerText = 'link to image: (i.e. ipfs.io/ipfs/<hash>/<x>.png)'
nameDiv.innerText = 'name:'
description.innerText = 'description:'
attributes.innerText = 'attributes: (i.e. <color: red, size: large>)'
attributes.className = 'attributes'
imageFormWrapper.className = 'imageFormWrapper'
imageTextArea.className = 'imageTextArea'
nameFormWrapper.className = 'nameFormWrapper'
nameTextArea.className = 'nameTextArea'
descriptionFormWrapper.className = 'descriptionFormWrapper'
descriptionTextArea.className = 'descriptionTextArea'
attributesFormWrapper.className = 'attributesFormWrapper'
attributesTextArea.className = 'attributesTextArea'
jsonDisplay.className = 'jsonDisplay'
jsonDisplay.innerText = JSON.stringify(jsonObject)

document.body.appendChild(h1)
document.body.appendChild(container)
container.appendChild(subContainer1)
container.appendChild(subContainer2)
subContainer1.appendChild(nameDiv)
subContainer1.appendChild(nameFormWrapper)
nameFormWrapper.appendChild(nameForm)
nameForm.appendChild(nameTextArea)
subContainer1.appendChild(image)
subContainer1.appendChild(imageFormWrapper)
imageFormWrapper.appendChild(imageForm)
imageForm.appendChild(imageTextArea)
subContainer1.appendChild(description)
subContainer1.appendChild(descriptionFormWrapper)
descriptionFormWrapper.appendChild(descriptionForm)
descriptionForm.appendChild(descriptionTextArea)
subContainer1.appendChild(attributes)
subContainer1.appendChild(attributesFormWrapper)
attributesFormWrapper.appendChild(attributesForm)
attributesForm.appendChild(attributesTextArea)
subContainer2.appendChild(jsonDisplay)

descriptionTextArea.addEventListener("input", (e) => {
    console.log(descriptionTextArea.value)
    jsonObject.description = descriptionTextArea.value
    jsonDisplay.innerText = JSON.stringify(jsonObject)
})

imageTextArea.addEventListener("input", (e) => {
    jsonObject.image = imageTextArea.value
    jsonDisplay.innerText = JSON.stringify(jsonObject)
})

nameTextArea.addEventListener("input", (e) => {
    jsonObject.name = nameTextArea.value
    jsonDisplay.innerText = JSON.stringify(jsonObject)
})

attributesTextArea.addEventListener("input", (e) => {
    let string = attributesTextArea.value
    let length = attributesTextArea.value.length
    let res = []
    let tempObj = {}
    let key = ''
    let value = ''
    let kOrV = true
    if (length > 0) {
        for (let i = 0; i < length; i++) {
            console.log(key)
            if (string[i] == ',') {
                tempObj[key] = value
                kOrV = !kOrV
                res.push(tempObj)
                key = ''
                value = ''
                tempObj = {}
                i++
            } else if (string[i] == ':') {
                tempObj[key] = null
                kOrV = !kOrV
                i++
            } else {
                kOrV ? key += string[i] : value += string[i]
            }
        }
        jsonObject.attributes = res
        jsonDisplay.innerText = JSON.stringify(jsonObject)
    }
})