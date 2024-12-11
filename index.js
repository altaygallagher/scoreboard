let homeScore = 0;
let guestScore = 0;

function incrementScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').textContent = homeScore;
    } else {
        guestScore += points;
        document.getElementById('guest-score').textContent = guestScore;
    }
    highlightLeader();
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
    document.getElementById('period').textContent = 1;
    document.getElementById('fouls').textContent = 0;
    highlightLeader();
}

function highlightLeader() {
    const homeTeam = document.getElementById('home-team');
    const guestTeam = document.getElementById('guest-team');
    
    if (homeScore > guestScore) {
        homeTeam.classList.add('leader');
        guestTeam.classList.remove('leader');
    } else if (guestScore > homeScore) {
        guestTeam.classList.add('leader');
        homeTeam.classList.remove('leader');
    } else {
        homeTeam.classList.remove('leader');
        guestTeam.classList.remove('leader');
    }
}

function changePeriod(change) {
    const periodElement = document.getElementById('period');
    let period = parseInt(periodElement.textContent);
    period = Math.max(1, period + change);
    periodElement.textContent = period;
}

function changeFouls(change) {
    const foulsElement = document.getElementById('fouls');
    let fouls = parseInt(foulsElement.textContent);
    fouls = Math.max(0, fouls + change);
    foulsElement.textContent = fouls;
}
