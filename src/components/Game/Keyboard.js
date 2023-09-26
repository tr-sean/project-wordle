import React from 'react';
import { KEYS } from '../../keys';
import { checkGuess } from '../../game-helpers';

function Keyboard({ pressedKeys, setPressedKeys, words, answer }) {
	// const checking = checkGuess(words, answer);

	const test = 'woo';

	return (
		<div className="keyboard">
			{KEYS.map((key, index) => (
				<span
					key={index}
					className={key === 'break' ? 'key-break' : 'key'}
					onClick={() => {
						setPressedKeys({ key });
					}}
				>
					{key !== 'break' && key}
				</span>
			))}
		</div>
	);
}

export default Keyboard;
