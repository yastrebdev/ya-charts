import { DataItem, ItemColumn } from "./types";

interface Options {
    width: number;
    height: number;
    gap: number;
    axisY: string;
}

export const createArrayColumns = (
    data: DataItem[],
    options: Options,
    ctx?: CanvasRenderingContext2D,
    columnColor: string = "#007bff"
) => {
    const { width, height, gap, axisY } = options;
    
    const maxValue = Math.max(...data.map(item => item[axisY]));
    const numberOfColumn = data.length;
    const columnWidth = (width - gap * (numberOfColumn - 1)) / numberOfColumn;
    
    const column: ItemColumn[] = data.map(({ [axisY]: value }, index) => {
        const x = (columnWidth + gap) * index;
        const y = height - (value / maxValue) * height;
        
        if (ctx) {
            ctx.fillStyle = columnColor;
            ctx.fillRect(x, y, columnWidth, (value / maxValue) * height);
        }

        return { x, y, width: columnWidth, height: (value / maxValue) * height };
    });

    return column;
}