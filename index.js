let HomeCount = document.getElementsById("Home")
function HomeAdd1() {
    count = HomeCount.innerText
    HomeCount.innerText = count + 1
}
function reset() {
    HomeCount.textContent = 0
}