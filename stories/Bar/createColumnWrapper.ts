import type { MousePosition } from "./types"
import { between } from "../../utils/between"

interface Options {
    columnWrapperWidth: number,
    numberOfColumn: number,
}

export function createColumnWrapper(
    ctx: CanvasRenderingContext2D,
    options: Options,
    mousePosition: MousePosition
) {
    const {
        numberOfColumn,
        columnWrapperWidth,
    } = options

    const {
        over,
        xmove,
    } = mousePosition

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