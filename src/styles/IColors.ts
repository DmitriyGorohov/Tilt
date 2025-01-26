interface IBaseColors {
    [key: string]: string | IBaseColors;
}

export interface IColors extends IBaseColors {
    transparent: string;
    black: string;
    gray: string;
    white: string;
    redButton: string;
    redButtonBlack: string;
    pink: string;
}
