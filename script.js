function createButtons() {
	window.difficulty = document.getElementById('difficultyField').value;
	window.randomNumber = Math.floor(Math.random() * difficulty) + 1;
	for(let i = 1; i <= difficulty; ++i) {
		const gameButton = document.createElement('button');
		gameButton.textContent = 'Pick me!';
		gameButton.setAttribute('id', i);
		gameButton.setAttribute('class', 'gameButtons');
		document.getElementById('gameTable').appendChild(gameButton);
	}
	buttonsUtility();
}

function buttonsUtility() {
	document.getElementById('startButton').disabled = true;
	for (let i = 1; i <= difficulty; ++i) {
		let zero = 0;
		if (i === randomNumber) {
			document.getElementById(i).addEventListener('click', function() {winLoseGame(true);});
		} else {
			document.getElementById(i).addEventListener('click', function() {winLoseGame(false);});
		}
	}
}

function winLoseGame(winLose) {
	const winLoseParagraph = document.createElement('p');
	if (winLose === true) {
		winLoseParagraph.textContent = 'Congrats you choose right!';
		winLoseParagraph.setAttribute('class', 'win');
	} else {
		winLoseParagraph.textContent = 'Sorry, you just LOST the game!';
		winLoseParagraph.setAttribute('class', 'lose');
	}
	document.body.appendChild(winLoseParagraph);

	const restartButton = document.createElement('button');
	restartButton.textContent = 'PLAY AGAIN';
	restartButton.setAttribute('id', 'restartButton');
	restartButton.setAttribute('class', 'restartButton');
	document.getElementById('restart').appendChild(restartButton);
	restartButton.addEventListener('click', resetGame);
	for(let i = 1; i <= difficulty; ++i) {
		document.getElementById(i).disabled = true;
	}
}

function resetGame() {
	window.location.reload();
}
