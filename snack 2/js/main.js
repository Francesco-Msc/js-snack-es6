const teams = [
    {
        teamName: 'Porto',
        scores: 0,
        recivedFouls: 0
    },
    {
        teamName: 'Juventus',
        scores: 0,
        recivedFouls: 0
    },
    {
        teamName: 'Liverpool',
        scores: 0,
        recivedFouls: 0
    },
    {
        teamName: 'Bayern Monaco',
        scores: 0,
        recivedFouls: 0
    },
    {
        teamName: 'Real Madrid',
        scores: 0,
        recivedFouls: 0
    },
];

const newTeams = [];

/*******
FUNZIONI
*******/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// ciclo per cui ogni team ottiene un numero random nei campi del punteggio e falli ricevuti
teams.forEach(team => {
    team.scores = getRndInteger(1, 10);
    team.recivedFouls = getRndInteger(1, 10);
});

// ciclo che aggiunge oggetti al nuovo array con solo i dati richiesti 
teams.forEach(team => {
    newTeams.push({ teamName: team.teamName, recivedFouls: team.recivedFouls });
});

console.log(teams);

console.log(newTeams);