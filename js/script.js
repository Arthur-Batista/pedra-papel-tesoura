let options = ["pedra", "papel", "tesoura"]
let gameSection = document.querySelector("section#game")
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
let playButton = document.querySelector("#play")
let playAgainButton = document.querySelector("#playAgain")
let result = document.querySelector("#result")
let resultImage = document.querySelector(".resultImage")
let playerPointsText = document.querySelector("#playerPoints")
let machinePointsText = document.querySelector("#machinePoints")
let playerPoints = 0
let machinePoints = 0
let machineNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);

function play() {
    if(rock.checked) {
        if(machineNumber == 0){
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina também escolheu ${options[machineNumber]} </p> <p class="draw"> Empate! </p>`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/pedra-empate.png" alt="">`
        } else if (machineNumber == 1) {
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina escolheu ${options[machineNumber]} </p> <p class="lose"> Você perdeu! </p>`
            machinePoints += 1
            machinePointsText.textContent = `Máquina: ${machinePoints}`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/papel-vence-pedra.png" alt="">`
        } else {
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina escolheu ${options[machineNumber]} </p> <p class="win"> Você Venceu! </p>`
            playerPoints += 1
            playerPointsText.textContent = `Jogador: ${playerPoints}`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/pedra-vence-tesoura.png" alt="">`
        }
    } else if (paper.checked) {
        if(machineNumber == 1){
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina também escolheu ${options[machineNumber]} </p> <p class="draw"> Empate! </p>`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/papel-empate.png" alt="">`
        } else if (machineNumber == 2) {
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina escolheu ${options[machineNumber]} </p> <p class="lose"> Você perdeu! </p>`
            machinePoints += 1
            machinePointsText.textContent = `Máquina: ${machinePoints}`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/tesoura-vence-papel.png" alt="">`
        } else {
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina escolheu ${options[machineNumber]} </p> <p class="win"> Você Venceu! </p>`
            playerPoints += 1
            playerPointsText.textContent = `Jogador: ${playerPoints}`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/papel-vence-pedra.png" alt="">`
        }
    } else if (scissor.checked) {
        if(machineNumber == 2){
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina também escolheu ${options[machineNumber]} </p> <p class="draw"> Empate! </p>`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/tesoura-empate.png" alt="">`
        } else if (machineNumber == 0) {
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina escolheu ${options[machineNumber]} </p> <p class="lose"> Você perdeu! </p>`
            machinePoints += 1
            machinePointsText.textContent = `Máquina: ${machinePoints}`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/pedra-vence-tesoura.png" alt="">`
        } else {
            resultImage.innerHTML = ''
            result.innerHTML = `<p>A máquina escolheu ${options[machineNumber]} </p> <p class="win"> Você Venceu! </p>`
            playerPoints += 1
            playerPointsText.textContent = `Jogador: ${playerPoints}`
            resultImage.innerHTML = `<img  class="resultImage" src="images/results/tesoura-vence-papel.png" alt="">`
        }
    } else {
        result.innerHTML = `<p>Marque uma opção!</p>`
    }
    machineNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    gameSection.classList.add("hidden")
    playButton.classList.add("hidden")
    playAgainButton.classList.remove("hidden")
}

function playAgain(){
    playAgainButton.classList.add("hidden")
    playButton.classList.remove("hidden")
    gameSection.classList.remove("hidden")
    result.innerHTML = ''
    resultImage.innerHTML = ''
}


