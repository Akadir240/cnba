import { Howl } from "howler"

import soundEffectOneSrc from './assets/Green Gaint.mp3'



const soundEffectOne = new Howl({
    src: [soundEffectOneSrc],
    
})

const backgroundMusic = new Howl({
    src: ['.assets/CNBA musc.mp3'],
    loop: true,
    volume: 0.5,
})



// get our HTML into JavaScript
let clicker = document.getElementById("clicker")
let display = document.getElementById("display")

let score = 1000


function updateScore(amount) {
    score += amount
    display.innerText = score.toFixed(0) + 'rpm'
}


// When clicker button is pressed
clicker.addEventListener("click", function() {
   updateScore(1)
    soundEffectOne.play()

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



function gameloop(){
let clickAmt =(referee ** 1.05)
updateScore(clickAmt)
}

setInterval(gameloop, 1000)

