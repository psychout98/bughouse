import { FC, useState, useEffect } from 'react';
import Board from './Board';


const Game: FC = () => {
    return (
        <div>
           <div className='center'>
            <div className='game'>
                <div className='board-big'>
                    {<Board little={true}/>}
                </div>
            </div>
            </div>
            <div className='right'>
        <div className='board-little'>
            {<Board little={true}/>}
            </div>
        </div>
    </div>
    );
}

export default Game;