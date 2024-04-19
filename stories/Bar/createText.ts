import { ItemColumn } from "./types";

interface Options {
    height: number;
    columnWrapperWidth: number;
}

export function createText(
    ctx: CanvasRenderingContext2D,
    options: Options,
    columns: ItemColumn[]
) {
    const { height, columnWrapperWidth } = options

    columns.map(column => {
        ctx.font = '18px sans-serif';
        ctx.fillStyle = '#000000'
        ctx.textAlign = 'center'

        ctx.beginPath()
        ctx.fillText(`${column.position + 10}`, column.x + columnWrapperWidth / 2, height);
        ctx.closePath()
    })
}