let HomeCount = document.getElementById("Home")
function HomeAdd1() {
    count = HomeCount.textContent + 1
    HomeCount.innerText = count
}
function Hreset() {
    HomeCount.textContent = 0
}
