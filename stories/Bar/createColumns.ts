import { DataItem, ItemColumn } from "./types";

interface Options {
    height: number;
    columnWrapperWidth: number;
    maxValue: number;
    gap: number;
    axisY: string;
}

export const createColumns = (
    ctx: CanvasRenderingContext2D,
    data: DataItem[],
    options: Options,
    columnColor: string = "#007bff"
) => {
    const { height, columnWrapperWidth, maxValue, gap, axisY } = options;
    
    const dependentGap = columnWrapperWidth * gap / 2
    const columnWidth = columnWrapperWidth - dependentGap;
    
    const columns: ItemColumn[] = data.map(({ [axisY]: value }, index) => {
        const x = Math.round((columnWidth + dependentGap) * index + dependentGap / 2);
        const y = height - (value / maxValue) * height;
        
        if (ctx) {
            ctx.fillStyle = columnColor;

            ctx.beginPath()
            ctx.fillRect(x, y, columnWidth, (value / maxValue) * height);
            ctx.closePath()
        }

        const position = index + 1

        return { x, y, width: columnWidth, height: (value / maxValue) * height, position};
    });
    return columns
}