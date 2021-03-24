function powerer(pram1, pram2) {
    if (Number.isInteger(parseInt(pram1, 10)) && Number.isInteger(parseInt(pram2, 10))) {
        let inductor = pram1
        for (var i = 0; i < pram2-1; i++) {
            pram1 *= inductor
        }
        return pram1
    } else {
        return "Failure"
    }
}

prompt1 = prompt("Gimme a number...")
prompt2 = prompt("Gimme another number...")

alert(powerer(prompt1, prompt2))
