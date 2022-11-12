let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0
let awayScoreBtnOne = document.getElementById("away-score-btn-1")
let awayScoreBtnTwo = document.getElementById("away-score-btn-2")
let awayScoreBtnThree = document.getElementById("away-score-btn-3")
let awayStoreEl = document.getElementById("away-score")
let awayScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseAwayScoreOne() {
    awayScore += 1
    awayStoreEl.textContent = awayScore
}

function increaseAwayScoreTwo() {
    awayScore += 2
    awayStoreEl.textContent = awayScore
}

function increaseAwayScoreThree() {
    awayScore += 3
    awayStoreEl.textContent = awayScore
}