var root = document.querySelector('#root');
var jsonObject = {
    name: "",
    description: "",
    image: "",
    attributes: []
};
var h1 = document.createElement('h1');
h1.innerText = 'NFT Metadata Generator';
var container = document.createElement('div');
container.className = 'container';
var subContainer1 = document.createElement('div');
subContainer1.className = 'subContainer1';
var subContainer2 = document.createElement('div');
subContainer2.className = 'subContainer2';
var image = document.createElement('div');
var nameDiv = document.createElement('div');
var description = document.createElement('div');
var attributes = document.createElement('div');
var imageFormWrapper = document.createElement('div');
var imageForm = document.createElement('form');
var imageTextArea = document.createElement('textarea');
var nameFormWrapper = document.createElement('div');
var nameForm = document.createElement('form');
var nameTextArea = document.createElement('textarea');
var descriptionFormWrapper = document.createElement('div');
var descriptionForm = document.createElement('form');
var descriptionTextArea = document.createElement('textarea');
var attributesFormWrapper = document.createElement('div');
var attributesForm = document.createElement('form');
var attributesTextArea = document.createElement('textarea');
var jsonDisplay = document.createElement('div');
image.innerText = 'link to image: (i.e. ipfs.io/ipfs/<hash>/<x>.png)';
nameDiv.innerText = 'name:';
description.innerText = 'description:';
attributes.innerText = 'attributes: (i.e. <color: red, size: large>)';
attributes.className = 'attributes';
imageFormWrapper.className = 'imageFormWrapper';
imageTextArea.className = 'imageTextArea';
nameFormWrapper.className = 'nameFormWrapper';
nameTextArea.className = 'nameTextArea';
descriptionFormWrapper.className = 'descriptionFormWrapper';
descriptionTextArea.className = 'descriptionTextArea';
attributesFormWrapper.className = 'attributesFormWrapper';
attributesTextArea.className = 'attributesTextArea';
jsonDisplay.className = 'jsonDisplay';
jsonDisplay.innerText = JSON.stringify(jsonObject);
document.body.appendChild(h1);
document.body.appendChild(container);
container.appendChild(subContainer1);
container.appendChild(subContainer2);
subContainer1.appendChild(nameDiv);
subContainer1.appendChild(nameFormWrapper);
nameFormWrapper.appendChild(nameForm);
nameForm.appendChild(nameTextArea);
subContainer1.appendChild(image);
subContainer1.appendChild(imageFormWrapper);
imageFormWrapper.appendChild(imageForm);
imageForm.appendChild(imageTextArea);
subContainer1.appendChild(description);
subContainer1.appendChild(descriptionFormWrapper);
descriptionFormWrapper.appendChild(descriptionForm);
descriptionForm.appendChild(descriptionTextArea);
subContainer1.appendChild(attributes);
subContainer1.appendChild(attributesFormWrapper);
attributesFormWrapper.appendChild(attributesForm);
attributesForm.appendChild(attributesTextArea);
subContainer2.appendChild(jsonDisplay);
descriptionTextArea.addEventListener("input", function (e) {
    console.log(descriptionTextArea.value);
    jsonObject.description = descriptionTextArea.value;
    jsonDisplay.innerText = JSON.stringify(jsonObject);
});
imageTextArea.addEventListener("input", function (e) {
    jsonObject.image = imageTextArea.value;
    jsonDisplay.innerText = JSON.stringify(jsonObject);
});
nameTextArea.addEventListener("input", function (e) {
    jsonObject.name = nameTextArea.value;
    jsonDisplay.innerText = JSON.stringify(jsonObject);
});
attributesTextArea.addEventListener("input", function (e) {
    var string = attributesTextArea.value;
    var length = attributesTextArea.value.length;
    var res = [];
    var tempObj = {};
    var key = '';
    var value = '';
    var kOrV = true;
    if (length > 0) {
        for (var i = 0; i < length; i++) {
            console.log(key);
            if (string[i] == ',') {
                tempObj[key] = value;
                kOrV = !kOrV;
                res.push(tempObj);
                key = '';
                value = '';
                tempObj = {};
                i++;
            }
            else if (string[i] == ':') {
                tempObj[key] = null;
                kOrV = !kOrV;
                i++;
            }
            else {
                kOrV ? key += string[i] : value += string[i];
            }
        }
        jsonObject.attributes = res;
        jsonDisplay.innerText = JSON.stringify(jsonObject);
    }
});
