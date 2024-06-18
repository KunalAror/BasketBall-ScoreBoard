let homeScore = 0
let awayScore = 0

function plusone(buttonId){
    if(buttonId === "home")
    {
        homeScore += 1
        document.getElementById("HomeScore").textContent = homeScore
    }
    else if(buttonId === "away")
    {
        awayScore += 1
        document.getElementById("AwayScore").textContent = awayScore
    }
}
function plustwo(buttonId){
    if(buttonId === "home")
    {
        homeScore += 2
        document.getElementById("HomeScore").textContent = homeScore
    }
    else if(buttonId === "away")
    {
        awayScore += 2
        document.getElementById("AwayScore").textContent = awayScore
    }
}
function plusthree(buttonId){
    if(buttonId === "home")
    {
        homeScore += 3
        document.getElementById("HomeScore").textContent = homeScore
    }
    else if(buttonId === "away")
    {
        awayScore += 3
        document.getElementById("AwayScore").textContent = awayScore
    }
}

function reset(){
    homeScore = 0
    awayScore = 0
    document.getElementById("HomeScore").textContent = homeScore
    document.getElementById("AwayScore").textContent = awayScore
}
