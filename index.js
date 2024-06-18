let homeScore = 0
let awayScore = 0

function plusone(buttonId){
    if(buttonId === "homebtn")
    {
        homeScore += 1
        document.getElementById("HomeScore").textContent = homeScore
        document.getElementById("home").textContent = "HOME + 1!"
    }
    else if(buttonId === "awaybtn")
    {
        awayScore += 1
        document.getElementById("AwayScore").textContent = awayScore
        document.getElementById("away").textContent = "AWAY + 1!"
    }
}
function plustwo(buttonId){
    if(buttonId === "homebtn")
    {
        homeScore += 2
        document.getElementById("HomeScore").textContent = homeScore
        document.getElementById("home").textContent = "HOME + 2!"
    }
    else if(buttonId === "awaybtn")
    {
        awayScore += 2
        document.getElementById("AwayScore").textContent = awayScore
        document.getElementById("away").textContent = "AWAY + 2!"
    }
}
function plusthree(buttonId){
    if(buttonId === "homebtn")
    {
        homeScore += 3
        document.getElementById("HomeScore").textContent = homeScore
        document.getElementById("home").textContent = "HOME + 3!"
    }
    else if(buttonId === "awaybtn")
    {
        awayScore += 3
        document.getElementById("AwayScore").textContent = awayScore
        document.getElementById("away").textContent = "AWAY + 3!"
    }
}

function reset(){
    homeScore = 0
    awayScore = 0
    document.getElementById("HomeScore").textContent = homeScore
    document.getElementById("AwayScore").textContent = awayScore
    document.getElementById("home").textContent = "HOME"
    document.getElementById("away").textContent = "AWAY"
}
