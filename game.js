const GAME_MODES = {
    football: {
        players: fifaPlayers,
        scoringCriteria: `
            <ul>
                <li>Position (25%)</li>
                <li>Nationality (20%)</li>
                <li>Stats (35%)</li>
                <li>Physical traits (10%)</li>
                <li>Age (10%)</li>
            </ul>
        `,
        statBars: ['pace', 'shooting', 'passing', 'dribbling', 'defending', 'physical'],
        playerDisplay: (player) => `${player.attributes.positions.join(', ')} | ${player.attributes.nationality} | ${player.attributes.age} yrs`,
        hints: player => [
            `This player plays as ${player.attributes.positions[0]}`,
            `They're from ${player.attributes.nationality}`,
            `Their strongest attribute is ${getHighestStat(player.attributes.stats)}`,
            `Born in ${new Date().getFullYear() - player.attributes.age}`,
            `Standing at ${player.attributes.height}cm`,
            `Overall rating: ${player.attributes.overall}`,
            `They prefer their ${player.attributes.preferred_foot} foot`,
            `They excel at ${getTopTwoStats(player.attributes.stats).join(' and ')}`,
            `Their nationality starts with '${player.attributes.nationality[0]}'`,
            `Final hint: They play as ${player.attributes.positions.join(' or ')}`
        ]
    },
    cricket: {
        players: cricketPlayers,
        scoringCriteria: `
            <ul>
                <li>Role (25%)</li>
                <li>Nationality (20%)</li>
                <li>Stats (35%)</li>
                <li>Playing Style (10%)</li>
                <li>Age (10%)</li>
            </ul>
        `,
        statBars: ['batting', 'bowling', 'fielding', 'experience', 'match_impact', 'consistency'],
        playerDisplay: (player) => `${player.attributes.role} | ${player.attributes.nationality} | ${player.attributes.age} yrs`,
        hints: player => [
            `This player is a ${player.attributes.role}`,
            `They're from ${player.attributes.nationality}`,
            `Their strongest attribute is ${getHighestStat(player.attributes.stats)}`,
            `They bat ${player.attributes.batting_style}`,
            player.attributes.bowling_style !== 'None' ? `They bowl ${player.attributes.bowling_style}` : 'They don\'t bowl much',
            `They're ${player.attributes.age} years old`,
            player.attributes.teams.length ? `They've played for ${player.attributes.teams.join(' and ')}` : 'They\'re relatively new to international cricket',
            `They excel at ${getTopTwoStats(player.attributes.stats).join(' and ')}`,
            `Their nationality starts with '${player.attributes.nationality[0]}'`,
            player.attributes.achievements[0]
        ]
    },
    bollywood: {
        players: bollywoodActors,
        scoringCriteria: `
            <ul>
                <li>Experience (25%)</li>
                <li>Performance (25%)</li>
                <li>Popularity (25%)</li>
                <li>Box Office (25%)</li>
            </ul>
        `,
        statBars: ['popularity', 'performance', 'versatility', 'experience', 'box_office', 'star_power'],
        playerDisplay: (player) => `${player.attributes.movie_count} Movies | ${Math.round(player.attributes.stats.star_power)}% Star Power`,
        hints: player => [
            `This actor has appeared in ${player.attributes.movie_count} movies`,
            `Their strongest attribute is ${getHighestStat(player.attributes.stats)}`,
            `They have ${player.attributes.rating_sum} total rating points`,
            `They have ${player.attributes.google_hits} Google hits`,
            `Their performance rating is ${Math.round(player.attributes.stats.performance)}%`,
            `Their versatility score is ${Math.round(player.attributes.stats.versatility)}%`,
            `Their box office impact is ${Math.round(player.attributes.stats.box_office)}%`,
            `Their star power rating is ${Math.round(player.attributes.stats.star_power)}%`,
            `Their name starts with '${player.name[0]}'`,
            player.attributes.achievements[0]
        ]
    }
};

let currentMode = null;
let game = null;

const MASCOTS = {
    football: {
        image: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#fff"/>
            <path d="M30,50 C30,30 70,30 70,50 C70,70 30,70 30,50" fill="#000"/>
            <circle cx="40" cy="40" r="5" fill="#000"/>
            <circle cx="60" cy="40" r="5" fill="#000"/>
        </svg>`,
        messages: [
            "Can you guess who I am?",
            "Nice try! Keep going!",
            "You're getting closer!",
            "That's the spirit!"
        ]
    },
    cricket: {
        image: `<svg viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" rx="10" fill="#fff"/>
            <circle cx="40" cy="45" r="5" fill="#000"/>
            <circle cx="60" cy="45" r="5" fill="#000"/>
            <path d="M35,65 Q50,75 65,65" fill="none" stroke="#000" stroke-width="3"/>
        </svg>`,
        messages: [
            "Howzat! Try again!",
            "Good shot!",
            "Keep your eye on the ball!",
            "What a player!"
        ]
    },
    bollywood: {
        image: `<svg viewBox="0 0 100 100">
            <path d="M50,20 L61,44 L87,44 L65,59 L74,83 L50,67 L26,83 L35,59 L13,44 L39,44 Z" fill="#fff"/>
            <circle cx="40" cy="40" r="5" fill="#000"/>
            <circle cx="60" cy="40" r="5" fill="#000"/>
            <path d="M35,60 Q50,70 65,60" fill="none" stroke="#000" stroke-width="3"/>
        </svg>`,
        messages: [
            "Lights, Camera, Guess!",
            "What a performance!",
            "You're a rising star!",
            "Action!"
        ]
    }
};

const SOUNDS = {
    click: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbUjEkLAAAA//tQxAAAAAAJIAAAAgAAA0gAAAABN4AJBAABAAAH8EBgYBAEAgD4P/E/gg//B8H/gg//B8EAQD4Ig//B/4P/+D4P//6wcBAEAQcEAQBAEAQAAQDgQDg//g+D4IAgCDggCAP//B8HwQBAMAgGAQDH/+D4Pg+D4Pg4EAQBAEAQBAH//B8HwfB8HwQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAAAAA'),
    success: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbV3YfWAAAA//tQxAAAAABGkAAAAgAAA0gAAABExYWFhYX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWFhYWFhfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19YWFhYWF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19Q=='),
    wrong: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbV3YfWAAAA//tQxAAAAABGkAAAAgAAA0gAAABExYWFhYX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWFhYWFhfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19YWFhYWF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19Q=='),
    hint: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbV3YfWAAAA//tQxAAAAABGkAAAAgAAA0gAAABExYWFhYX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWFhYWFhfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19YWFhYWF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19Q=='),
    gameOver: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbV3YfWAAAA//tQxAAAAABGkAAAAgAAA0gAAABExYWFhYX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWFhYWFhfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19YWFhYWF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19Q==')
};

function selectMode(mode) {
    currentMode = mode;
    document.body.className = `theme-${mode}`;
    document.getElementById('scoring-criteria').innerHTML = GAME_MODES[mode].scoringCriteria;
    
    const loader = document.createElement('div');
    loader.className = 'loading active';
    document.body.appendChild(loader);
    
    setTimeout(() => {
        showScreen('game-start');
        loader.remove();
        updateMascot("Let's play!");
        playSound('click');
    }, 1000);
}

function showModeSelect() {
    showScreen('mode-select');
}

function getHighestStat(stats) {
    return Object.entries(stats)
        .sort(([,a], [,b]) => b - a)[0][0];
}

function getTopTwoStats(stats) {
    return Object.entries(stats)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 2)
        .map(([stat]) => stat);
}

class Game {
    constructor(mode) {
        this.mode = mode;
        this.config = GAME_MODES[mode];
        this.targetPlayer = this.selectRandomPlayer();
        this.triesLeft = 10;
        this.currentGuessNumber = 1;
        this.guessHistory = [];
    }

    selectRandomPlayer() {
        const players = this.config.players;
        return players[Math.floor(Math.random() * players.length)];
    }

    calculateSimilarity(guessedPlayer, targetPlayer) {
        if (guessedPlayer.name === targetPlayer.name) return 1;

        const g = guessedPlayer.attributes;
        const t = targetPlayer.attributes;
        let score = 0;
        let maxScore = 0;

        if (this.mode === 'bollywood') {
            // Experience (25 points)
            const movieDiff = Math.abs(g.movie_count - t.movie_count);
            score += Math.max(0, 25 - (movieDiff / 2));
            maxScore += 25;

            // Performance (25 points)
            const perfDiff = Math.abs(g.stats.performance - t.stats.performance);
            score += Math.max(0, 25 - (perfDiff / 4));
            maxScore += 25;

            // Popularity (25 points)
            const popDiff = Math.abs(g.stats.popularity - t.stats.popularity);
            score += Math.max(0, 25 - (popDiff / 4));
            maxScore += 25;

            // Box Office (25 points)
            const boxDiff = Math.abs(g.stats.box_office - t.stats.box_office);
            score += Math.max(0, 25 - (boxDiff / 4));
            maxScore += 25;
        } else if (this.mode === 'football') {
            // Role/Position match (25 points)
            if (this.mode === 'football') {
                score += (g.positions.some(p => t.positions.includes(p)) ? 25 : 0);
            } else {
                score += (g.role === t.role ? 25 : 
                         g.role.includes(t.role) || t.role.includes(g.role) ? 15 : 0);
            }
            maxScore += 25;

            // Nationality (20 points)
            score += (g.nationality === t.nationality ? 20 : 0);
            maxScore += 20;

            // Stats comparison (35 points)
            const statScore = Object.keys(g.stats).reduce((total, stat) => {
                return total + Math.max(0, 100 - Math.abs(g.stats[stat] - t.stats[stat])) / 100;
            }, 0) / Object.keys(g.stats).length * 35;
            score += statScore;
            maxScore += 35;

            // Style (10 points)
            if (this.mode === 'football') {
                score += (g.preferred_foot === t.preferred_foot ? 10 : 0);
            } else {
                score += (g.batting_style === t.batting_style ? 5 : 0);
                score += (g.bowling_style === t.bowling_style ? 5 : 0);
            }
            maxScore += 10;

            // Age (10 points)
            const ageDiff = Math.abs(g.age - t.age);
            score += Math.max(0, 10 - ageDiff);
            maxScore += 10;
        } else {
            // Role/Position match (25 points)
            if (this.mode === 'football') {
                score += (g.positions.some(p => t.positions.includes(p)) ? 25 : 0);
            } else {
                score += (g.role === t.role ? 25 : 
                         g.role.includes(t.role) || t.role.includes(g.role) ? 15 : 0);
            }
            maxScore += 25;

            // Nationality (20 points)
            score += (g.nationality === t.nationality ? 20 : 0);
            maxScore += 20;

            // Stats comparison (35 points)
            const statScore = Object.keys(g.stats).reduce((total, stat) => {
                return total + Math.max(0, 100 - Math.abs(g.stats[stat] - t.stats[stat])) / 100;
            }, 0) / Object.keys(g.stats).length * 35;
            score += statScore;
            maxScore += 35;

            // Style (10 points)
            if (this.mode === 'football') {
                score += (g.preferred_foot === t.preferred_foot ? 10 : 0);
            } else {
                score += (g.batting_style === t.batting_style ? 5 : 0);
                score += (g.bowling_style === t.bowling_style ? 5 : 0);
            }
            maxScore += 10;

            // Age (10 points)
            const ageDiff = Math.abs(g.age - t.age);
            score += Math.max(0, 10 - ageDiff);
            maxScore += 10;
        }

        // Convert to distance score (1-100)
        return Math.max(2, Math.round(100 - (score / maxScore * 100)));
    }

    makeGuess(playerName) {
        const guessedPlayer = this.config.players.find(p => p.name === playerName);
        if (!guessedPlayer) return null;

        const similarity = this.calculateSimilarity(guessedPlayer, this.targetPlayer);
        this.guessHistory.push({ 
            player: guessedPlayer, 
            score: similarity 
        });
        this.triesLeft--;
        return similarity;
    }

    getHint(guessNumber) {
        return this.config.hints(this.targetPlayer)[guessNumber - 1];
    }
}

function startGame() {
    game = new Game(currentMode);
    showScreen('game-play');
    updateDisplay();
}

function handleSearch(event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const datalist = document.getElementById('players-list');
    datalist.innerHTML = '';

    if (searchTerm.length >= 3) {
        const players = GAME_MODES[currentMode].players;
        const matches = players
            .map(player => {
                const name = player.name.toLowerCase();
                let relevance = 0;
                
                if (name.startsWith(searchTerm)) {
                    relevance = 100;
                } else if (name.split(' ').some(word => word.startsWith(searchTerm))) {
                    relevance = 75;
                } else if (name.includes(searchTerm)) {
                    relevance = 50;
                } else if (name.split(' ').some(word => word.includes(searchTerm))) {
                    relevance = 25;
                }
                
                return {
                    player,
                    relevance
                };
            })
            .filter(match => match.relevance > 0)
            .sort((a, b) => b.relevance - a.relevance)
            .slice(0, 10);

        matches.forEach(match => {
            const option = document.createElement('option');
            const player = match.player;
            option.value = player.name;
            option.label = `${player.name} (${GAME_MODES[currentMode].playerDisplay(player)})`;
            datalist.appendChild(option);
        });
    }
}

function updateDisplay() {
    document.getElementById('tries-left').textContent = game.triesLeft;
    document.getElementById('guess-number').textContent = game.currentGuessNumber;
    
    const guessesList = document.getElementById('guesses-list');
    guessesList.innerHTML = '';
    
    game.guessHistory.forEach((guess, index) => {
        const guessItem = document.createElement('div');
        guessItem.className = 'guess-item';
        const playerInfo = guess.player.attributes;
        
        const hint = game.getHint(index + 1);
        
        guessItem.innerHTML = `
            <div>
                <strong>${guess.player.name}</strong>
                <br>
                <small>${GAME_MODES[currentMode].playerDisplay(guess.player)}</small>
                ${hint ? `<br><small class="hint">💡 Hint: ${hint}</small>` : ''}
            </div>
            <div class="feedback-number">${guess.score}</div>
        `;
        guessesList.appendChild(guessItem);
    });
}

function endGame(won) {
    showScreen('game-over');
    const targetInfo = game.targetPlayer.attributes;
    
    if (won) {
        playSound('success');
        updateMascot("Congratulations! You did it!");
    } else {
        playSound('gameOver');
        updateMascot("Better luck next time!");
    }
    
    const statBars = GAME_MODES[currentMode].statBars;
    const statBarsHtml = statBars.map(stat => `
        <div class="stat-bar">
            <label>${stat.charAt(0).toUpperCase() + stat.slice(1)}</label>
            <div class="bar" style="width: ${targetInfo.stats[stat]}%">${targetInfo.stats[stat]}</div>
        </div>
    `).join('');

    document.getElementById('correct-answer').innerHTML = `
        <div class="player-reveal">
            <h3>${game.targetPlayer.name}</h3>
            <div class="player-stats">
                <p><strong>Role:</strong> ${currentMode === 'football' ? targetInfo.positions.join(', ') : targetInfo.role}</p>
                <p><strong>Nationality:</strong> ${targetInfo.nationality}</p>
                <p><strong>Age:</strong> ${targetInfo.age}</p>
                ${currentMode === 'cricket' ? `
                    <p><strong>Batting Style:</strong> ${targetInfo.batting_style}</p>
                    <p><strong>Bowling Style:</strong> ${targetInfo.bowling_style}</p>
                ` : ''}
                <div class="stat-bars">
                    ${statBarsHtml}
                </div>
            </div>
        </div>
    `;
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

function playSound(type) {
    const sound = SOUNDS[type];
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {}); // Ignore autoplay restrictions
    }
}

function updateMascot(message) {
    const mascot = document.querySelector('.mascot');
    if (!mascot) {
        const newMascot = document.createElement('div');
        newMascot.className = 'mascot';
        newMascot.innerHTML = MASCOTS[currentMode].image;
        document.body.appendChild(newMascot);
    } else {
        mascot.innerHTML = MASCOTS[currentMode].image;
    }
    
    // Show mascot message
    const messageBox = document.createElement('div');
    messageBox.className = 'mascot-message';
    messageBox.textContent = message || MASCOTS[currentMode].messages[Math.floor(Math.random() * MASCOTS[currentMode].messages.length)];
    document.body.appendChild(messageBox);
    
    setTimeout(() => messageBox.remove(), 3000);
}

function submitGuess() {
    const guessInput = document.getElementById('player-guess');
    const playerName = guessInput.value.trim();
    
    if (!GAME_MODES[currentMode].players.some(p => p.name === playerName)) {
        alert('Please select a valid player from the list');
        return;
    }

    const similarity = game.makeGuess(playerName);
    if (similarity === 1) {
        playSound('success');
        endGame(true);
        return;
    } else if (similarity > 50) {
        playSound('hint');
        updateMascot("Getting closer!");
    } else {
        playSound('wrong');
        updateMascot("Try again!");
    }
    
    game.currentGuessNumber++;
    guessInput.value = '';
    updateDisplay();
    
    if (game.triesLeft === 0) {
        endGame(false);
    }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

document.getElementById('player-guess').addEventListener('input', handleSearch);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => playSound('hover'));
        button.addEventListener('click', () => playSound('click'));
    });
});