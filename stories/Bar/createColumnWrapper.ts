import { between } from "../../utils/between"
import { ColumnWrapperOptions } from "./types"

export function createColumnWrapper(
    ctx: CanvasRenderingContext2D,
    {
        columnWrapperWidth,
        numberOfColumn,
        xmove,
        over
    }: ColumnWrapperOptions
) {
    for (let i = 0; i < numberOfColumn; i++) {
        const x = columnWrapperWidth * i
        const y = 0

        const isWhether = between(xmove, x, x + columnWrapperWidth)
        const height = ctx.canvas.height

        ctx.fillStyle = isWhether && over ? '#fafafa' : '#ffffff';
        
        ctx.beginPath()
        ctx.fillRect(x, y, columnWrapperWidth, height);
        ctx.closePath()
    }
}