import { IPieces } from '../Board';

const initPieces: IPieces = {
    light: {
        pa: {
                src: 'pieces/pl.png',
                row: 1,
                col: 0,
                name: 'light-pawn-a',
                onboard: true,
                light: true,
                short: 'pa',
                moves: [[1,0],[2,0]]
            },
        pb: {
                src: 'pieces/pl.png',
                row: 1,
                col: 1,
                name: 'light-pawn-b',
                onboard: true,
                light: true,
                short: 'pb',
                moves: [[1,0],[2,0]]
            },
        pc: {
                src: 'pieces/pl.png',
                row: 1,
                col: 2,
                name: 'light-pawn-c',
                onboard: true,
                light: true,
                short: 'pc',
                moves: [[1,0],[2,0]]
            },
        pd: {
                src: 'pieces/pl.png',
                row: 1,
                col: 3,
                name: 'light-pawn-d',
                onboard: true,
                light: true,
                short: 'pd',
                moves: [[1,0],[2,0]]
            },
        pe: {
                src: 'pieces/pl.png',
                row: 1,
                col: 4,
                name: 'light-pawn-e',
                onboard: true,
                light: true,
                short: 'pe',
                moves: [[1,0],[2,0]]
            },
        pf: {
                src: 'pieces/pl.png',
                row: 1,
                col: 5,
                name: 'light-pawn-f',
                onboard: true,
                light: true,
                short: 'pf',
                moves: [[1,0],[2,0]]
            },
        pg: {
                src: 'pieces/pl.png',
                row: 1,
                col: 6,
                name: 'light-pawn-g',
                onboard: true,
                light: true,
                short: 'pg',
                moves: [[1,0],[2,0]]
            },
        ph: {
                src: 'pieces/pl.png',
                row: 1,
                col: 7,
                name: 'light-pawn-h',
                onboard: true,
                light: true,
                short: 'ph',
                moves: [[1,0],[2,0]]
            },
        bc: {
                src: 'pieces/bl.png',
                row: 0,
                col: 2,
                name: 'light-bishop-c',
                onboard: true,
                light: true,
                short: 'bc',
                moves: [[0,0]]
            },
        bf: {
                src: 'pieces/bl.png',
                row: 0,
                col: 5,
                name: 'light-bishop-f',
                onboard: true,
                light: true,
                short: 'bf',
                moves: [[0,0]]
            },
        nb: {
                src: 'pieces/nl.png',
                row: 0,
                col: 1,
                name: 'light-night-b',
                onboard: true,
                light: true,
                short: 'nb',
                moves: [[2,-1],[2,1]]
            },
        ng: {
                src: 'pieces/nl.png',
                row: 0,
                col: 6,
                name: 'light-night-g',
                onboard: true,
                light: true,
                short: 'ng',
                moves: [[2,-1],[2,1]]
            },
        ra: {
                src: 'pieces/rl.png',
                row: 0,
                col: 0,
                name: 'light-rook-a',
                onboard: true,
                light: true,
                short: 'ra',
                moves: [[0,0]]
            },
        rh: {
                src: 'pieces/rl.png',
                row: 0,
                col: 7,
                name: 'light-rook-h',
                onboard: true,
                light: true,
                short: 'rh',
                moves: [[0,0]]
            },
        q: {
            src: 'pieces/ql.png',
            row: 0,
            col: 3,
            name: 'light-queen',
            onboard: true,
            light: true,
            short: 'q',
            moves: [[0,0]]
        },
        k: {
            src: 'pieces/kl.png',
            row: 0,
            col: 4,
            name: 'light-king',
            onboard: true,
            light: true,
            short: 'k',
            moves: [[0,0]]
        }
    },
    dark: {
        pa: {
                src: 'pieces/pd.png',
                row: 6,
                col: 0,
                name: 'dark-pawn-a',
                onboard: true,
                light: false,
                short: 'pa',
                moves: [[0,0]]
            },
        pb: {
                src: 'pieces/pd.png',
                row: 6,
                col: 1,
                name: 'dark-pawn-b',
                onboard: true,
                light: false,
                short: 'pb',
                moves: [[0,0]]
            },
        pc: {
                src: 'pieces/pd.png',
                row: 6,
                col: 2,
                name: 'dark-pawn-c',
                onboard: true,
                light: false,
                short: 'pc',
                moves: [[0,0]]
            },
        pd: {
                src: 'pieces/pd.png',
                row: 6,
                col: 3,
                name: 'dark-pawn-d',
                onboard: true,
                light: false,
                short: 'pd',
                moves: [[0,0]]
            },
        pe: {
                src: 'pieces/pd.png',
                row: 6,
                col: 4,
                name: 'dark-pawn-e',
                onboard: true,
                light: false,
                short: 'pe',
                moves: [[0,0]]
            },
        pf: {
                src: 'pieces/pd.png',
                row: 6,
                col: 5,
                name: 'dark-pawn-f',
                onboard: true,
                light: false,
                short: 'pf',
                moves: [[0,0]]
            },
        pg: {
                src: 'pieces/pd.png',
                row: 6,
                col: 6,
                name: 'dark-pawn-g',
                onboard: true,
                light: false,
                short: 'pg',
                moves: [[0,0]]
            },
        ph: {
                src: 'pieces/pd.png',
                row: 6,
                col: 7,
                name: 'dark-pawn-h',
                onboard: true,
                light: false,
                short: 'ph',
                moves: [[0,0]]
            },
        bc: {
                src: 'pieces/bd.png',
                row: 7,
                col: 2,
                name: 'dark-bishop-c',
                onboard: true,
                light: false,
                short: 'bc',
                moves: [[0,0]]
            },
        bf: {
                src: 'pieces/bd.png',
                row: 7,
                col: 5,
                name: 'dark-bishop-f',
                onboard: true,
                light: false,
                short: 'bf',
                moves: [[0,0]]
            },
        nb: {
                src: 'pieces/nd.png',
                row: 7,
                col: 1,
                name: 'dark-night-b',
                onboard: true,
                light: false,
                short: 'nb',
                moves: [[0,0]]
            },
        ng: {
                src: 'pieces/nd.png',
                row: 7,
                col: 6,
                name: 'dark-night-g',
                onboard: true,
                light: false,
                short: 'ng',
                moves: [[0,0]]
            },
        ra: {
                src: 'pieces/rd.png',
                row: 7,
                col: 0,
                name: 'dark-rook-a',
                onboard: true,
                light: false,
                short: 'ra',
                moves: [[0,0]]
            },
        rh: {
                src: 'pieces/rd.png',
                row: 7,
                col: 7,
                name: 'dark-rook-h',
                onboard: true,
                light: false,
                short: 'rh',
                moves: [[0,0]]
            },
        q: {
            src: 'pieces/qd.png',
            row: 7,
            col: 3,
            name: 'dark-queen',
            onboard: true,
            light: false,
            short: 'q',
            moves: [[0,0]]
        },
        k: {
            src: 'pieces/kd.png',
            row: 7,
            col: 4,
            name: 'dark-king',
            onboard: true,
            light: false,
            short: 'k',
            moves: [[0,0]]
        }
    }
};
export default initPieces;