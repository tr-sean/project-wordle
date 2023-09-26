import React from 'react';

function WordInput({ handleAddWord, gameStatus, pressedKeys }) {
	const [input, setInput] = React.useState('');

	console.log(pressedKeys);

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(e) => {
				e.preventDefault();
				handleAddWord(input);
				setInput('');
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				name="guess-input"
				value={input}
				disabled={gameStatus !== 'running'}
				onChange={(e) => {
					setInput(e.target.value.toUpperCase());
				}}
				minLength={5}
				maxLength={5}
				pattern="[a-zA-Z]{5}"
				title="5 letter word"
				required
			/>
		</form>
	);
}

export default WordInput;
