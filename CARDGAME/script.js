const cards = document.querySelectorAll(".card") // pega qualquer elemento que tenha essa propriedade
const timeTag = document.querySelector(".time b")
const flipsTag = document.querySelector(".flips b")
const pointsTag = document.querySelector(".points b")
const refreshBtn = document.querySelector(".details button")

let maxTime = 20
let timeLeft = maxTime
let flips = 0
let matchedCard = 0
let disableDeck = false
let isPlaying = false
let cardOne, cardTwo, timer

function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer)
    }
    timeLeft--
    timeTag.innerText = timeLeft
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true
        timer = setInterval(initTimer, 1000)
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++
        flipsTag.innerText = flips
        clickedCard.classList.add("flip")
        if(!cardOne) {
            return cardOne = clickedCard
        }
        cardTwo = clickedCard
        disableDeck = true
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src
        matchCards(cardOneImg, cardTwoImg)
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++
        pointsTag.innerText = matchedCard
        if(matchedCard == 6 && timeLeft > 0) {
            return clearInterval(timer)
        }
        cardOne.removeEventListener("click", flipCard)
        cardTwo.removeEventListener("click", flipCard)
        cardOne = cardTwo = ""
        return disableDeck = false
    }
    setTimeout(() => {
        cardOne.classList.add("shake")
        cardTwo.classList.add("shake")
    },400)

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip")
        cardTwo.classList.remove("shake", "flip")
        cardOne = cardTwo = ""
        disableDeck = false
    },1200)
}

function shuffleCard(){
    timeLeft = maxTime
    flips = matchedCard = 0
    cardOne = cardTwo = ""
    clearInterval(timer)
    timeTag.innerText = timeLeft
    flipsTag.innerText = flips
    pointsTag.innerText = matchedCard
    disableDeck = isPlaying = false

    let array = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    array.sort(() => Math.random() > 0.5 ? 1 : -1)
    cards.forEach((card, i) => {
        card.classList.remove("flip")
        let imgTag = card.querySelector(".back-view img")
        setTimeout(() => {
            imgTag.src = `img-${array[i]}.png`
        },500)
        card.addEventListener("click",flipCard)
    })
}
shuffleCard()

refreshBtn.addEventListener("click", shuffleCard)

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})