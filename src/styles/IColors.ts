interface IBaseColors {
    [key: string]: string | IBaseColors;
}

export interface IColors extends IBaseColors {
    background: string;
    transparent: string;
    black: string;
    gray: string;
    white: string;
    yellowButton: string;
    redButtonBlack: string;
    pink: string;
}
