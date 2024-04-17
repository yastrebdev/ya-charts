import { DataItem, ItemColumn } from "./types";

interface Options {
    height: number;
    columnWrapperWidth: number;
    gap: number;
    axisY: string;
}

export const createColumns = (
    ctx: CanvasRenderingContext2D,
    data: DataItem[],
    options: Options,
    columnColor: string = "#007bff"
) => {
    const { height, columnWrapperWidth, gap, axisY } = options;
    
    const maxValue = Math.max(...data.map(item => item[axisY]));
    const dependentGap = columnWrapperWidth * gap / 2
    const columnWidth = columnWrapperWidth - dependentGap;
    
    const column: ItemColumn[] = data.map(({ [axisY]: value }, index) => {
        const x = (columnWidth + dependentGap) * index + dependentGap / 2;
        const y = height - (value / maxValue) * height;
        
        if (ctx) {
            ctx.fillStyle = columnColor;
            ctx.fillRect(x, y, columnWidth, (value / maxValue) * height);
        }

        return { x, y, width: columnWidth, height: (value / maxValue) * height };
    });

    return column;
}