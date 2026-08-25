let HomeCount = document.getElementById("Home")
let GuestCount = document.getElementById("Guest")
let count = 0
function HomeAdd1() {
    count += 1
    HomeCount.innerText = count
}
function HomeAdd2() {
    count += 2
    HomeCount.innerText = count
}
function HomeAdd3() {
    count += 3
    HomeCount.innerText = count
}
function Hreset() {
    HomeCount.textContent = 0
    count = 0
}
function GuestAdd1() {
    count += 1
    GuestCount.innerText = count
}
function GuestAdd2() {
    count += 2
    GuestCount.innerText = count
}
function GuestAdd3() {
    count += 3
    GuestCount.innerText = count
}
function Greset() {
    count = 0
    GuestCount.textContent = 0
}
