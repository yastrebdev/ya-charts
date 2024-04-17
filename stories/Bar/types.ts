export interface DataItem {
    [key: string]: number;
}

export interface ItemColumn {
    x: number;
    y: number;
    width: number;
    height: number;
}

// props & arguments

export interface BarChart {
    data: DataItem[];
    width: number | string;
    height: number | string;
    gap?: number;
    axisX: string
    axisY: string
}

export interface ColumnWrapperOptions {
    columnWrapperWidth: number,
    numberOfColumn: number;
    xmove: number,
    over: boolean,
}