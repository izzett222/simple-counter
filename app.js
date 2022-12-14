let count = 0;
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const container = document.getElementById("container");
const value = document.getElementById("value")

container.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
        if (event.target.id === "decrease") {
            count =  count === 0 ? 0 : count - 1
        } else if (event.target.id === "reset") {
            count = 0;
        }  else if (event.target.id === "increase") {
            count++
        }
        value.textContent = count

    }
})