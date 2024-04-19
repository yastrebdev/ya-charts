export interface DataItem {
    [key: string]: number;
}

export interface MousePosition {
    over: boolean;
    xmove: number;
    ymove: number;
}

// props & arguments

export interface StylesBar {
    columnColor?: string
}

export interface generalChartBar {
    width: number | string;
    height: number | string;
    gap?: number;
    fieldX?: string;
    fieldY?: string;
    styles: StylesBar
}

export interface BarChart extends generalChartBar {
    data: DataItem[];
    guides?: boolean;
}

export interface BarField extends Omit<BarChart, 'styles'> {
    columnColor?: string
}

// options

export interface Options extends generalChartBar {
    numberOfColumn: number;
    columnWrapperWidth: number;
    maxValue: number;
}