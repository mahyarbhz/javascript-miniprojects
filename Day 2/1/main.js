const captchaChars = "abcdefg1234567".split('')
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let captchaText = ""
for (var i = 0; i < 5; i++) {
    captchaText += captchaChars[getRandomIndex(captchaChars.length)]
}
alert(captchaText)
