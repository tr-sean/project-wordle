import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import WordInput from './WordInput';
import GuessResults from './GuessResults';
import WonBanner from './WonBanner';
import LostBanner from './LostBanner';
import Keyboard from './Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
	const [gameStatus, setGameStatus] = React.useState('running');
	const [words, setWords] = React.useState([]);
	const [pressedKeys, setPressedKeys] = React.useState([]);

	function handleAddWord(label) {
		const newWords = [...words, label];
		setWords(newWords);

		if (label === answer) {
			setGameStatus('won');
		} else if (newWords.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	}

	return (
		<>
			<GuessResults words={words} answer={answer} />
			<WordInput
				handleAddWord={handleAddWord}
				gameStatus={gameStatus}
				pressedKeys={pressedKeys}
			/>
			<Keyboard
				pressedKeys={pressedKeys}
				setPressedKeys={setPressedKeys}
				words={words}
				answer={answer}
			/>

			{gameStatus === 'won' && <WonBanner guesses={words.length} />}
			{gameStatus === 'lost' && <LostBanner answer={answer} />}
		</>
	);
}

export default Game;
