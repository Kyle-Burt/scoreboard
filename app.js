
let home = 0

let away = 0


console.log(`Home`, home)
console.log(`Away`, away)

let totalHomeScore = home
let totalAwayScore = away


let awayScore = document.getElementById(`awayScore`)
console.log(away)

let homeScore = document.getElementById(`homeScore`)
console.log(home)

function homeButton1() {
    console.log(`Home`, home += 1)
    let homeScore = document.getElementById(`homeScore`)
    console.log(home)
    homeScore.innerText = home
    console.log(home)
}

function homeButton3() {
    console.log(`Home`, home += 3)
    let homeScore = document.getElementById(`homeScore`)
    console.log(home)
    homeScore.innerText = home
    console.log(home)
}

function awayButton1() {
    console.log(`Away`, away += 1)
    let awayScore = document.getElementById(`awayScore`)
    awayScore.innerText = away
    console.log(awayScore)

}

function awayButton3() {
    console.log(`Away`, away += 3)
    let awayScore = document.getElementById(`awayScore`)
    awayScore.innerText = away
    console.log(awayScore)
}
