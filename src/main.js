// get our HTML into JavaScript
let clicker = document.getElementById("clicker")
let display = document.getElementById("display")

let score = 1000


function updateScore(amount) {
    score += amount
    display.innerText = score + 'rpm'
}


// When clicker button is pressed
clicker.addEventListener("click", function() {
   updateScore(1)
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let referee = 0

  upgradeOne.addEventListener("click", function() {
    if(score >= 100) {
        updateScore(-100)
        referee++
        upgradeOneCount.innerText = referee + ' Referees'
    } else {
      alert("you broke")
    }
})