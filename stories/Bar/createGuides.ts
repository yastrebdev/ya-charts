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

    const { percentage, numGuides, step } = parametrsGuides(maxValue)
    
    const percentageOfHeight = height * (percentage / 100)
    const guidesHeight = height - percentageOfHeight

    function parametrsGuides(value: number) {
        const step = stepCalculation(value)
        console.log('step:', step)

        const rounding = roundCalculation(value)
        console.log('rounding:', rounding)

        const flawedIn = value - rounding
        const procentageFlawedMaxValue = flawedIn / value * 100

        const percentage = procentageFlawedMaxValue
        const numGuides = rounding

        return {
            percentage,
            numGuides,
            step
        }
    }

    function roundCalculation(value: number) {
        if (value <= 10) return Math.floor(value / 10) * 10
        return value
        // const result = value <= 10 ? Math.floor(value / 10) * 10 : value
        // return result
    }

    function stepCalculation(value: number) {
        if (value <= 10) return 1
        if (value > 10 && value < 20) return 2
        if (value > 20 && value < 40) return 5
        return 10
    }

    for (let i = 0; i < numGuides / step; i++) {
        const y = height - guidesHeight / (numGuides / step - 1) * i

        ctx.strokeStyle = '#bfbfbf'
        ctx.beginPath()
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke()
        ctx.closePath()
    }
}