import type { DataItem, MousePosition, StylesBar } from "./types";
import { between } from "../../utils/between";

interface Options {
    columnWrapperWidth: number;
    fieldY: string;
    height: number;
    maxValue: number;
    gap: number | undefined;
    styles: StylesBar;
}

export const createColumns = (
    ctx: CanvasRenderingContext2D,
    data: DataItem[],
    options: Options,
    mousePosition: MousePosition,
) => {
    const {
        columnWrapperWidth,
        gap,
        fieldY,
        height,
        maxValue,
        styles
    } = options;

    const { over, xmove, ymove } = mousePosition
    const { columnColor } = styles
    
    const dependentGap = columnWrapperWidth * (gap as number) / 2
    const columnWidth = columnWrapperWidth - dependentGap;
    
    data.map(({ [fieldY]: value }, index) => {
        const x = Math.round((columnWidth + dependentGap) * index + dependentGap / 2);
        const y = height - (value / maxValue) * height;

        const isWhether = between(xmove, x, x + columnWidth)
            && between(ymove, y, y + height)

        if (ctx) {
            ctx.fillStyle = isWhether && over ? 'rgba(0, 123, 255, .9)' : columnColor as string;

            ctx.beginPath()
            ctx.fillRect(x, y, columnWidth, (value / maxValue) * height);
            ctx.closePath()
        }
    });
}