import { DataItem } from "./types";

interface Options {
    width: number;
    height: number;
    maxValue: number;
}

export function createGuides(
    ctx: CanvasRenderingContext2D,
    options: Options
) {
    const { width, height, maxValue } = options

    const { roundingMaxValue, percentage, numberLength } = round(maxValue)
    const percentageOfHeight = height * (percentage / 100)
    const guidesHeight = height - percentageOfHeight

    function round(val: number) {
        const numberLength = Number(val.toString().length)
        let numberZeros = ''
        for (let i = 1; i < numberLength; i++) {
            if (numberLength === 1) break
            numberZeros = numberZeros + '0'
        }

        const rounding = Math.floor(val / Number(`1${numberZeros}`)) * Number(`1${numberZeros}`);

        const flawedIn = maxValue - rounding
        const procentageFlawedMaxValue = flawedIn / maxValue * 100

        return {
            roundingMaxValue: rounding,
            percentage: procentageFlawedMaxValue,
            numberLength: numberLength,
        }
    }

    for (let i = 0; i < 5; i++) {
        const y = height - guidesHeight / (5 - 1) * i

        ctx.strokeStyle = '#bfbfbf'
        ctx.beginPath()
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke()
        ctx.closePath()
    }
}