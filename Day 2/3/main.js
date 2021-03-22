const nameInput = document.querySelector("#nameInput");
const phoneInput = document.querySelector("#phoneInput");
const contactButton = document.querySelector("#contactButton");
const contactUl = document.querySelector("#contactUl");
contactButton.disabled = true

nameInput.onkeyup = () => {
    if (nameInput.value.trim() != 0 && phoneInput.value.trim() != 0) {
        contactButton.disabled = false
    } else {
        contactButton.disabled = true
    }
};

phoneInput.onkeyup = () => {
    if (nameInput.value.trim() != 0 && phoneInput.value.trim() != 0) {
        contactButton.disabled = false
    } else {
        contactButton.disabled = true
    }
};

// Functions
showPhoneNumbers()

function pushItems(array, item) {
    localStorage.setItem(item, JSON.stringify(array));
}

function addPhoneNumber() {
    let nameInputValue = nameInput.value
    let phoneInputValue = phoneInput.value
    let getPhoneNumber = localStorage.getItem("Numbers")
    let getNameNumber = localStorage.getItem("Names")
    if (getPhoneNumber == null) {
        NumberArr = [];
    } else {
        NumberArr = JSON.parse(getPhoneNumber)
    }

    if (getNameNumber == null) {
        NameArr = []
    } else {
        NameArr = JSON.parse(getNameNumber)
    }
    NumberArr.push(phoneInputValue)
    NameArr.push(nameInputValue)
    pushItems(NumberArr, "Numbers")
    pushItems(NameArr, "Names")
    showPhoneNumbers()
    nameInput.value = ""
    phoneInput.value = ""
}

function showPhoneNumbers() {
    let getNameNumber = localStorage.getItem("Names")
    let getPhoneNumber = localStorage.getItem("Numbers")

    let contactLi= '';
    if (getPhoneNumber == null) {
        listPhoneNumber = [];
    } else {
        listPhoneNumber = JSON.parse(getPhoneNumber)
    }
    if (getNameNumber == null) {
        listNameNumber = [];
    } else {
        listNameNumber = JSON.parse(getNameNumber)
    }
    listNameNumber.forEach((element, index) => {
        contactLi += `<li id="${index}">${element}: ${listPhoneNumber[index]}</li>`
    })
    contactUl.innerHTML = contactLi
    nameInput.value = phoneInput.value = ""
}
