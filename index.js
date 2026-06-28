// Grab the Home and Guest Counter elements
let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")

// Grab Add Points elements
let scoreHome1El = document.getElementById("add-points-home-1")
let scoreHome2El = document.getElementById("add-points-home-2")
let scoreHome3El = document.getElementById("add-points-home-3")

let scoreGuest1El = document.getElementById("add-points-guest-1")
let scoreGuest2El = document.getElementById("add-points-guest-2")
let scoreGuest3El = document.getElementById("add-points-guest-3")

// Create the numerical value of Home and Guest score
let scoreHome = 0
let scoreGuest = 0

// Home points
function addPointsHome1() {
    scoreHome += 1
    // Update score to the element
    scoreHomeEl.textContent = scoreHome
}

function addPointsHome2() {
    scoreHome += 2
    // Update score to the element
    scoreHomeEl.textContent = scoreHome
}

function addPointsHome3() {
    scoreHome += 3
    // Update score to the element
    scoreHomeEl.textContent = scoreHome
}

// Guest points
function addPointsGuest1() {
    scoreGuest += 1
    // Update score to the element
    scoreGuestEl.textContent = scoreGuest
}

function addPointsGuest2() {
    scoreGuest += 2
    // Update score to the element
    scoreGuestEl.textContent = scoreGuest
}

function addPointsGuest3() {
    scoreGuest += 3
    // Update score to the element
    scoreGuestEl.textContent = scoreGuest
}

// Reset scores to zero
function resetScores() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = 0
    scoreGuestEl.textContent = 0
}