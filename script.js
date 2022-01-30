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
			document.getElementById(i).addEventListener('click', winGame);
		} else {
			document.getElementById(i).addEventListener('click', loseGame);
		}
	}
	
}

function winGame() {
	for(let i = 1; i <= difficulty; ++i) {
		document.getElementById(i).disabled = true;
	}

	const winParagraph = document.createElement('p');
	winParagraph.textContent = 'Congrats you choose right!';
	winParagraph.setAttribute('class', 'win');
	document.body.appendChild(winParagraph);

	const restartButton = document.createElement('button');
	restartButton.textContent = 'PLAY AGAIN';
	restartButton.setAttribute('id', 'restartButton');
	restartButton.setAttribute('class', 'restartButton');
	document.getElementById('restart').appendChild(restartButton);
	restartButton.addEventListener('click', resetGame);
}

function loseGame() {
	for(let i = 1; i <= difficulty; ++i) {
		document.getElementById(i).disabled = true;
	}

	const loseParagraph = document.createElement('p');
	loseParagraph.textContent = 'Sorry, you just LOST the game!';
	loseParagraph.setAttribute('class', 'lose');
	document.body.appendChild(loseParagraph);

	const restartButton = document.createElement('button');
	restartButton.textContent = 'PLAY AGAIN';
	restartButton.setAttribute('id', 'restartButton');
	restartButton.setAttribute('class', 'restartButton');
	document.getElementById('restart').appendChild(restartButton);
	restartButton.addEventListener('click', resetGame);
}

function resetGame() {
	window.location.reload();
}