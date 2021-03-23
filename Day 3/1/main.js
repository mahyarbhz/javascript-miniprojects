var promptt = prompt("Gimme a number...")
while (!promptt) {
    promptt = null
    promptt = prompt("Gimme a number please...")
}
var promNum = String(promptt).split("").map((promptt)=>{
  return Number(promptt)
})
var counter = 0
for (let num of promNum) {
    counter += 1
}

alert(counter)
