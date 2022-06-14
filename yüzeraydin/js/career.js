"use strict";

let defaultConfig = {
	// class of the parent element where the error/success class is added
	classTo: 'form__item',
	errorClass: '-invalid',
	successClass: '-valid',
	// class of the parent element where error text element is appended
	errorTextParent: 'form__item',
	// type of element to create for the error text
	errorTextTag: 'div',
	// class of the error text element
	errorTextClass: 'form__item__requirement'
};
var pristine;

window.onload = function () {
	// var form = document.getElementById("form1");
	let formContent = document.querySelector('[data-form-career]');
	pristine = new Pristine(formContent, defaultConfig);
	formContent.addEventListener('submit', function (e) {
		var valid = pristine.validate();
		if (valid == false) e.preventDefault();
	});
}; // data-pristine-min-message="En 2 karakter olmalıdır."


let headerItem = document.querySelector('[header]');
let success = document.querySelector('[success]');
let successCross = document.querySelector('[success-cross]');

const successHide = () => {
	success.classList.add('-hide');
	headerItem.classList.remove('-index');
};

if (successCross) successCross.addEventListener('click', successHide);
const params = new URLSearchParams(window.location.search);
let isSuccess = params.get('form');

if (isSuccess == 'success') {
	headerItem.classList.add('-index');
	success.classList.remove('-hide');
}

let fileInput = document.querySelector('[name="files[]"]');
let uploadedFiles = document.querySelector("[uploaded-files]");
let uploadedFilesList = document.querySelector("[uploaded-files] .files");
let inputReset = document.querySelector("[input-reset]");
let txtErrorElement = document.querySelector("[error-elem]");
fileInput.addEventListener("change", event => {
	txtErrorElement.classList.add('-hide'); // clear the uploaded files list

	uploadedFilesList.innerHTML = "";
	let fileInputPath = fileInput.files[0].name.split(".").pop().toLowerCase();

	if (fileInputPath == "pdf" || fileInputPath == "doc" || fileInputPath == "docx" || fileInputPath == "jpg" || fileInputPath == "jpeg") {
		/* If file selected, show uploaded files */
		fileInput.files.length ? uploadedFiles.classList.remove("-hide") : uploadedFiles.classList.add("-hide");
	} else {
		fileInput.value = "";
		uploadedFilesList.innerHTML = "";
		uploadedFiles.classList.add("-hide");
		txtErrorElement.classList.remove('-hide');
	}

	let files = Array.from(event.target.files);
	files.forEach(file => {
		let filePath = file.name.split(".").pop().toLowerCase();

		if (filePath == "pdf" || filePath == "doc" || filePath == "docx" || filePath == "jpg" || filePath == "jpeg") {
			let template = "\n\t\t\t<div class=\"form__uploaded\">\n\t\t\t\t<div class=\"form__uploaded__name\" form-uploaded-name>".concat(file.name, "</div>\n\t\t\t\t<div class=\"form__uploaded__icon\">\n\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M5.99993 10.8001L3.19993 8.00006L2.2666 8.9334L5.99993 12.6667L13.9999 4.66673L13.0666 3.7334L5.99993 10.8001Z\"\n\t\t\t\t\t\t\tfill=\"#17C37B\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t");
			uploadedFilesList.insertAdjacentHTML("beforeend", template);
		} else {
			fileInput.value = "";
			uploadedFilesList.innerHTML = "";
			uploadedFiles.classList.add("-hide");
			txtErrorElement.classList.remove('-hide');
		}
	});
});
inputReset.addEventListener("click", () => {
	fileInput.value = "";
	uploadedFilesList.innerHTML = "";
	uploadedFiles.classList.add("-hide");
});