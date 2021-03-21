const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#jobInput");
const empButton = document.querySelector("#empButton");
const empUl = document.querySelector("#empUl");
empButton.disabled = true

nameInput.onkeyup = () => {
    let nameInputData = nameInput.value;
    if (nameInputData.trim() != 0) {
        empButton.disabled = false
    } else {
        empButton.disabled = true
    }
};

empButton.onclick = () => {
    let jobValue = jobInput.value;
    if (!isNaN(jobValue)) {
        jobValue = "Nothing!"
    }
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(nameInput.value + " for " + jobValue));
    empUl.appendChild(li);
    nameInput.value = ''
    jobInput.value = ''
    empButton.disabled = true
};
