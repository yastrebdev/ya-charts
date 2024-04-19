import { createColumnWrapper } from "./createColumnWrapper"
import { createColumns } from "./createColumns"
import { createGuides } from "./createGuides"
import { DataItem, MousePosition, Options } from "./types"

export function draw (
    ctx: CanvasRenderingContext2D,
    data: DataItem[],
    options: Options,
    mousePosition: MousePosition
) {
    const { width, height, guides } = options

    ctx.clearRect(0, 0, width, height)
    createColumnWrapper(ctx, options, mousePosition)
    guides && createGuides(ctx, options)
    createColumns(ctx, data, options, mousePosition)
}