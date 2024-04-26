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

    const { percentage, raundedMaxValue, step } = parametrsGuides(maxValue)
    
    const percentageOfHeight = height * (percentage / 100)
    const guidesHeight = height - percentageOfHeight

    function parametrsGuides(value: number) {
        const step = stepCalculation(value)

        const rounding = roundCalculation(value)

        const flawedIn = value - rounding
        const procentageFlawedMaxValue = flawedIn / value * 100

        const percentage = procentageFlawedMaxValue
        const raundedMaxValue = rounding

        return {
            percentage,
            raundedMaxValue,
            step
        }
    }

    function roundCalculation(value: number) {
        const afterTheDot = isFraction(value)
        if (afterTheDot) {
            value = value * 10 ** (afterTheDot as number)
        }
        const valueToString = value.toString();
        const firstNumber = Number(valueToString.slice(0, 1))
        console.log(firstNumber)

        if (value <= 10) return Math.floor(value / 10) * 10

        return value
    }

    function stepCalculation(value: number) {
        if (value <= 10) return 1
        if (value > 10 && value < 20) return 2
        if (value > 20 && value < 40) return 5
        return 10
    }

    function isFraction(num: number) {
        if (!Number.isInteger(num)) {
            const numberString = num.toString();
            const dotIndex = numberString.indexOf('.')
            return numberString.length - dotIndex - 1
        }
        return !Number.isInteger(num);
    }

    for (let i = 0; i < raundedMaxValue / step; i++) {
        const y = height - guidesHeight / (raundedMaxValue / step - 1) * i

        ctx.strokeStyle = '#bfbfbf'
        ctx.beginPath()
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke()
        ctx.closePath()
    }
}