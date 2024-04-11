import Canvas from "../../components/use-components/Canvas"

const Bar = ({height = 200, width = 300, gap = 1}) => {
    const data = [20, 50, 30, 80, 40, 20, 35, 20, 50, 30, 80, 40, 20, 35];

    const barMargin = Math.ceil(width / data.length) / (gap * 10);
    const barWidth = Math.ceil(width / data.length) - barMargin;
    const barColor = '#007bff';

    const draw = (context: CanvasRenderingContext2D) => {
        data.forEach((value, index) => {
            const x = index * (barWidth + barMargin);
            const y = 100 - value;
            context.fillStyle = barColor;
            context.fillRect(x, y, barWidth, value);
        });
    };

    return <Canvas draw={draw} height={height} width={width} />
}

export default Bar