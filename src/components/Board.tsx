import { FC, useState, useEffect } from 'react';
import initPieces from './utils/pieces';

const Squares: Array<Array<sq>> = new Array<Array<sq>>(8);

var newLit: Array<Array<boolean>> = new Array<Array<boolean>>(8);
var newPieces: IPieces;

for(var i=0;i<8;i++)
newLit[i] = [false,false,false,false,false,false,false,false];

const Board: FC<IProps> = ({little}) => {

    
    
    const [pieces, setPieces] = useState<IPieces>(initPieces);
    const [lit, setLit] = useState<Array<Array<boolean>>>(newLit);
    const [selected, setSelected] = useState<IPiece>(pieces.light.pe);
    const [change, setChange] = useState<boolean>(false);

    useEffect(() => {
        if (change === true)
        setChange(false)
    },[change])

    const pieceArray: Array<IPiece> = 
    [
            pieces.light.ra,
            pieces.light.nb,
            pieces.light.bc,
            pieces.light.k,
            pieces.light.q,
            pieces.light.bf,
            pieces.light.ng,
            pieces.light.rh,
            pieces.dark.ra,
            pieces.dark.nb,
            pieces.dark.bc,
            pieces.dark.k,
            pieces.dark.q,
            pieces.dark.bf,
            pieces.dark.ng,
            pieces.dark.rh,
            pieces.light.pa,
            pieces.light.pb,
            pieces.light.pc,
            pieces.light.pd,
            pieces.light.pe,
            pieces.light.pf,
            pieces.light.pg,
            pieces.light.ph,
            pieces.dark.pa,
            pieces.dark.pb,
            pieces.dark.pc,
            pieces.dark.pd,
            pieces.dark.pe,
            pieces.dark.pf,
            pieces.dark.pg,
            pieces.dark.ph
    ];

    for(var i=0;i<8;i++){
        Squares[i] = new Array<sq>(8)
        for(var j=0;j<8;j++) {
            Squares[i][j] = {color: (j%2==0 && i%2==0) || (j%2!=0 && i%2!=0) ? 'light' : 'dark', i: i, j: j};
        }
    }

    const movePiece = (piece: IPiece, row: number, col: number) => {
        newPieces = pieces;
        newPieces[piece.light ? 'light' : 'dark'][piece.short].row = row;
        newPieces[piece.light ? 'light' : 'dark'][piece.short].col = col;
        refreshBoard();
        setPieces(newPieces);
        setChange(true);
    }
    const refreshBoard = () => {
        for(var i=0;i<8;i++)
            for(var j=0;j<8;j++)
                newLit[i][j] = false;
    }
    const killPiece = (piece: IPiece) => {
        newPieces = pieces;
        newPieces[piece.light ? 'light' : 'dark'][piece.short].onboard = false;
        setPieces(newPieces);
        setChange(true);
    }
    const showMoves = (piece: IPiece) => {
        setSelected(piece);
        for(var i=0;i<8;i++)
            for(var j=0;j<8;j++)
                newLit[i][j] = false;
        piece.moves.map((move) => {
            newLit[piece.row+move[0]][piece.col+move[1]] = true;
        });
        setLit(newLit);
        setChange(true);
    }

    const placePiece = (piece: IPiece) => {
        return (
            <div className='piece' onClick={() => showMoves(piece)} key={piece.name}
                style={{top: (12.5*(7-piece.row)).toString() + '%', left: (12.5*piece.col).toString()+'%'}}>
            <img src={piece.src} height='100%' width='100%'/>
            </div>
        );
    }
    return (
    <div>
        {
            Squares.map((row) => {
                return row.map((square) => {
                return <div className={`square-${square.color}`} key={square.i+"square"+square.j}
                onClick={() => lit[7 - square.i][square.j] ? movePiece(selected, 7 - square.i, square.j) : null}
                style={{top: (12.5*square.i).toString() + '%', left: (12.5*square.j).toString()+'%'}}>
                    {lit[7 - square.i][square.j] ?
                    <div className='dot'>
                    <img src='pieces/green.png' height='100%' width='100%'/>
                    </div>
                    : null}
                </div>
                })
            })
        }
        {
            pieceArray.map((piece) => {
                return piece.onboard ? placePiece(piece) : null;
            })
        }
    </div>
    );
}


export interface IPieces {
    light: ISide;
    dark: ISide;
}
interface ISide {
    [key: string]: IPiece;
}
interface IPiece {
    src: string;
    row: number;
    col: number;
    name: string;
    onboard: boolean;
    light: boolean;
    short: string;
    moves: Array<Array<number>>
}

interface IProps {
    little: boolean;
}
interface sq {
    color: string
    i: number;
    j: number;
}

export default Board;