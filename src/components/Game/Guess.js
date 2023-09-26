import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ word, answer }) {

    const checking = checkGuess(word, answer);

    return (
        <p className="guess">
            {range(5).map(( col ) => (
                <span key={col} className={`${checking ? checking[col].status : ''} cell`}>
                    {checking ? checking[col].letter : undefined}
                </span>
            ))}
        </p>
    );
}

export default Guess;
