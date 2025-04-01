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

const SOUNDS = {
    click: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbUjEkLAAAA//tQxAAAAAAJIAAAAgAAA0gAAAABN4AJBAABAAAH8EBgYBAEAgD4P/E/gg//B8H/gg//B8EAQD4Ig//B/4P/+D4P//6wcBAEAQcEAQBAEAQAAQDgQDg//g+D4IAgCDggCAP//B8HwQBAMAgGAQDH/+D4Pg+D4Pg4EAQBAEAQBAH//B8HwfB8HwQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAAAAA'),
    success: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbV3YfWAAAA//tQxAAAAABGkAAAAgAAA0gAAABExYWFhYX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWFhYWFhfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19YWFhYWF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19Q=='),
    wrong: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbV3YfWAAAA//tQxAAAAABGkAAAAgAAA0gAAABExYWFhYX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWFhYWFhfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19YWFhYWF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19Q=='),
    hint: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbV3YfWAAAA//tQxAAAAABGkAAAAgAAA0gAAABExYWFhYX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWFhYWFhfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19YWFhYWF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19Q=='),
    gameOver: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAAYbV3YfWAAAA//tQxAAAAABGkAAAAgAAA0gAAABExYWFhYX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fWFhYWFhfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19YWFhYWF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19Q==')
};

function selectMode(mode) {
    currentMode = mode;
    document.body.className = `theme-${mode}`;
    showScreen('game-start');
    playSound('click');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    if (!currentMode) {
        alert('Please select a game mode first!');
        showModeSelect();
        return;
    }
    game = new Game(currentMode);
    showScreen('game-play');
    updateDisplay();
    playSound('click');
}

function restartGame() {
    if (confirm('Are you sure you want to start over?')) {
        game = new Game(currentMode);
        updateDisplay();
        showScreen('game-play');
        playSound('click');
    }
}

function showModeSelect() {
    currentMode = null;
    game = null;
    showScreen('mode-select');
    playSound('click');
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
    if (!game) return;
    
    document.getElementById('tries-left').textContent = game.triesLeft;
    document.getElementById('guess-number').textContent = game.currentGuessNumber;
    
    const guessesList = document.getElementById('guesses-list');
    guessesList.innerHTML = '';
    
    game.guessHistory.forEach((guess, index) => {
        const guessItem = document.createElement('div');
        guessItem.className = 'guess-item';
        
        const hint = game.getHint(index + 1);
        
        // Determine score category
        let scoreCategory;
        if (guess.score === 1) {
            scoreCategory = "1";
        } else if (guess.score < 20) {
            scoreCategory = "close";
        } else if (guess.score < 40) {
            scoreCategory = "warm";
        } else if (guess.score < 60) {
            scoreCategory = "cold";
        } else {
            scoreCategory = "far";
        }
        
        guessItem.innerHTML = `
            <div class="guess-item-content">
                <strong>${guess.player.name}</strong>
                <br>
                <small>${GAME_MODES[currentMode].playerDisplay(guess.player)}</small>
                ${hint ? `<br><div class="hint" role="button" tabindex="0">💡 Hint: ${hint}</div>` : ''}
            </div>
            <div class="feedback-number" data-score="${scoreCategory}" role="button" tabindex="0">${guess.score}</div>
        `;

        // Add touch feedback for hint expansion
        const hintElement = guessItem.querySelector('.hint');
        if (hintElement) {
            hintElement.addEventListener('click', function() {
                this.style.height = this.style.height === 'auto' ? null : 'auto';
            });
        }

        guessesList.appendChild(guessItem);
    });

    // Scroll to the latest guess
    const latestGuess = guessesList.lastElementChild;
    if (latestGuess) {
        latestGuess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function endGame(won) {
    if (!game) return;
    
    showScreen('game-over');
    const targetInfo = game.targetPlayer.attributes;
    
    if (won) {
        document.getElementById('result-message').textContent = "🎉 Congratulations! You guessed correctly! 🎊";
        playSound('success');
        createConfetti();
    } else {
        document.getElementById('result-message').textContent = "Game Over! Here's who you were looking for:";
        playSound('gameOver');
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
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        
        let position = -10;
        const fall = setInterval(() => {
            position += 2;
            confetti.style.top = position + 'px';
            if (position > window.innerHeight) {
                clearInterval(fall);
                confetti.remove();
            }
        }, 10);
        
        setTimeout(() => {
            clearInterval(fall);
            confetti.remove();
        }, 5000);
    }
}

function playSound(type) {
    const sound = SOUNDS[type];
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {}); // Ignore autoplay restrictions
    }
}

function submitGuess() {
    const guessInput = document.getElementById('player-guess');
    const playerName = guessInput.value.trim();
    
    if (!playerName) {
        alert('Please enter a name!');
        return;
    }
    
    if (!GAME_MODES[currentMode].players.some(p => p.name === playerName)) {
        alert('Please select a valid player from the list');
        return;
    }

    const similarity = game.makeGuess(playerName);
    updateGameStatus(similarity);
    
    if (similarity === 1) {
        playSound('success');
        createConfetti();
        endGame(true);
        return;
    } else if (similarity > 50) {
        playSound('hint');
    } else {
        playSound('wrong');
    }
    
    game.currentGuessNumber++;
    guessInput.value = '';
    updateDisplay();
    
    if (game.triesLeft === 0) {
        endGame(false);
    }
}

function goBack() {
    const activeScreen = document.querySelector('.screen.active');
    const screenId = activeScreen.id;
    
    switch(screenId) {
        case 'game-start':
            showModeSelect();
            break;
        case 'game-play':
            if (confirm('Are you sure you want to go back? Your progress will be lost.')) {
                showScreen('game-start');
            }
            break;
        case 'game-over':
            showScreen('game-play');
            break;
        default:
            break;
    }
    playSound('click');
}

function clearSearch() {
    const input = document.getElementById('player-guess');
    input.value = '';
    input.focus();
}

function shareScore() {
    const score = game.triesLeft;
    const mode = currentMode.charAt(0).toUpperCase() + currentMode.slice(1);
    const text = `🎮 Contextinho!\n${mode} Mode\n🎯 Found in ${10 - score} tries\n\nPlay now at [game-url]`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Contextinho Score',
            text: text
        }).catch(console.error);
    } else {
        // Fallback copy to clipboard
        navigator.clipboard.writeText(text)
            .then(() => alert('Score copied to clipboard!'))
            .catch(console.error);
    }
}

function updateGameStatus(similarity) {
    const feedback = document.createElement('div');
    feedback.className = 'game-feedback';
    feedback.setAttribute('role', 'alert');
    
    let message;
    if (similarity === 1) {
        message = '🎯 Perfect Match!';
    } else if (similarity < 20) {
        message = '🔥 Very Close! (< 20)';
    } else if (similarity < 40) {
        message = '👍 Getting Warmer (< 40)';
    } else if (similarity < 60) {
        message = '🤔 Try Different Players (< 60)';
    } else {
        message = '❄️ Not Close (> 60)';
    }
    
    feedback.innerHTML = message;
    document.body.appendChild(feedback);
    
    // Add touch feedback
    feedback.addEventListener('click', () => feedback.remove());
    
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => feedback.remove(), 200);
    }, 1800);
}

document.addEventListener('DOMContentLoaded', () => {
    // Add search functionality
    const playerGuessInput = document.getElementById('player-guess');
    if (playerGuessInput) {
        playerGuessInput.addEventListener('input', handleSearch);
    }

    // Add button hover sounds
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => playSound('hover'));
        button.addEventListener('click', () => playSound('click'));
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && document.getElementById('player-guess') === document.activeElement) {
            submitGuess();
        }
        if (e.key === 'Escape') {
            goBack();
        }
    });

    // Prevent double-tap zoom on buttons
    document.querySelectorAll('.btn, .mode-btn, .nav-btn').forEach(button => {
        button.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.target.click();
        });
    });

    // Add touch feedback for guess input
    const guessInput = document.getElementById('player-guess');
    if (guessInput) {
        guessInput.addEventListener('focus', () => {
            guessInput.style.borderColor = 'var(--primary-color)';
        });
        guessInput.addEventListener('blur', () => {
            guessInput.style.borderColor = 'var(--border-color)';
        });
    }

    // Improve scroll experience
    const historyBox = document.querySelector('.history-box');
    if (historyBox) {
        let touchStartY = 0;
        historyBox.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        historyBox.addEventListener('touchmove', (e) => {
            const touchY = e.touches[0].clientY;
            const scrollTop = historyBox.scrollTop;
            const scrollHeight = historyBox.scrollHeight;
            const clientHeight = historyBox.clientHeight;

            if (scrollTop <= 0 && touchY > touchStartY) {
                e.preventDefault();
            }
            if (scrollTop + clientHeight >= scrollHeight && touchY < touchStartY) {
                e.preventDefault();
            }
        });
    }
});