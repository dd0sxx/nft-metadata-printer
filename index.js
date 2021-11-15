var root = document.querySelector('#root');
var titleState, imageState, descriptionState;
var h1 = document.createElement('h1');
h1.innerText = 'NFT Metadata Generator';
var container = document.createElement('div');
container.className = 'container';
var subContainer1 = document.createElement('div');
subContainer1.className = 'subContainer1';
var subContainer2 = document.createElement('div');
subContainer2.className = 'subContainer2';
var image = document.createElement('div');
var title = document.createElement('div');
var description = document.createElement('div');
var imageFormWrapper = document.createElement('div');
var imageForm = document.createElement('form');
var imageTextArea = document.createElement('textarea');
var titleFormWrapper = document.createElement('div');
var titleForm = document.createElement('form');
var titleTextArea = document.createElement('textarea');
var descriptionFormWrapper = document.createElement('div');
var descriptionForm = document.createElement('form');
var descriptionTextArea = document.createElement('textarea');
image.innerText = 'ipfs hash:';
title.innerText = 'title:';
description.innerText = 'description:';
imageFormWrapper.className = 'imageFormWrapper';
imageTextArea.className = 'imageTextArea';
titleFormWrapper.className = 'titleFormWrapper';
titleTextArea.className = 'titleTextArea';
descriptionFormWrapper.className = 'descriptionFormWrapper';
descriptionTextArea.className = 'descriptionTextArea';
document.body.appendChild(h1);
document.body.appendChild(container);
container.appendChild(subContainer1);
container.appendChild(subContainer2);
subContainer1.appendChild(title);
subContainer1.appendChild(titleFormWrapper);
titleFormWrapper.appendChild(titleForm);
titleForm.appendChild(titleTextArea);
subContainer1.appendChild(image);
subContainer1.appendChild(imageFormWrapper);
imageFormWrapper.appendChild(imageForm);
imageForm.appendChild(imageTextArea);
subContainer1.appendChild(description);
subContainer1.appendChild(descriptionFormWrapper);
descriptionFormWrapper.appendChild(descriptionForm);
descriptionForm.appendChild(descriptionTextArea);
descriptionTextArea.addEventListener("input", function (e) {
    // descriptionTextArea.value
});
imageTextArea.addEventListener("input", function (e) {
    // imageTextArea.value
});
titleTextArea.addEventListener("input", function (e) {
    // titleTextArea.value
});
