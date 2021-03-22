const tracker = document.querySelector("#tracker");


document.onmousemove = handleMouseMove
// setInterval(, 1000)
function handleMouseMove(event="") {
    let newX = event.pageX
    let newY = event.pageY
    tracker.style.position = "absolute"
    tracker.style.left = newX + 'px';
    tracker.style.top = newY + 'px';
}
