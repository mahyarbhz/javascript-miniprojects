var prompt = prompt("Give me a number...")
    if (Number.isInteger(parseInt(prompt, 10))) {
        var intArr = String(prompt).split("").map((prompt)=>{
            return Number(prompt)
        })
        total = 0;
        totalStr = intArr.join([separator = ' + '])
        intArr.forEach(element => total += element)
        alert(totalStr + " = " + total)
    } else {
        alert("Value is incorrect!")
    }
