import Canvas from "../../components/use-components/Canvas";

interface DataItem {
    [key: string]: number;
}

interface Props {
    height?: number;
    width?: number;
    gap?: number;
    data?: DataItem[];
    axisX?: string;
    axisY?: string;
}

interface DataForHorizontalLine {
    ctx: CanvasRenderingContext2D,
    maxLength: number,
    height:number,
    maxValue: number,
    sortedData: DataItem[]
}

interface ItemBar {
    x: number;
    y: number;
    width: number;
    height: number;
    value: number;
}

const Bar = ({
    height = 200,
    width = 200,
    gap = 2,
    data = [],
    axisY = "",
    axisX = "",
}: Props) => {
    const sortedData = [...data].sort((a, b) => a[axisX] - b[axisX]);
    const maxValue = Math.max(...sortedData.map(item => item[axisY]));
    const numberOfBars = sortedData.length;
    const barColor = "#007bff";

    const drawHorizontalLines = ({
        ctx,
        maxLength,
        height,
        maxValue,
        sortedData
    }: DataForHorizontalLine) => {
        sortedData.forEach(({ [axisY]: value }) => {
            const y = height - (value / maxValue) * height;
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(maxLength - 5, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        });
    };

    const draw = (ctx: CanvasRenderingContext2D) => {
        const maxLength = Math.max(...sortedData.map(({ [axisY]: value }) => ctx.measureText(value?.toString()).width));
        const barWidth = (width - gap * (numberOfBars - 1)) / numberOfBars - Math.round(maxLength / numberOfBars);

        const squares: ItemBar[] = sortedData.map(({ [axisY]: value }, index) => {
            const x = (barWidth + gap) * index + maxLength;
            const y = height - (value / maxValue) * height;
            return { x, y, width: barWidth, height: (value / maxValue) * height, value };
        });

        squares.forEach(({ x, y, width, height, value }) => {
            ctx.fillStyle = barColor;
            ctx.fillRect(x, y, width, height);

            ctx.fillStyle = "#000000";
            ctx.textAlign = "start";
            ctx.fillText(value.toString(), 0, y + 10);
        });

        const dataLines = {
            ctx,
            maxLength,
            height,
            maxValue,
            sortedData
        }

        drawHorizontalLines(dataLines);

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(maxLength, height);
        ctx.lineTo(width + maxLength, height);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(maxLength, 0);
        ctx.lineTo(maxLength, height);
        ctx.stroke();
    };

    // const onBar = (event: any) => {
    //     const rect = event.target?.getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    //     const y = event.clientY - rect.top;

    //     squares.forEach((square: any, index: number) => {
    //         if (x >= square.x && x <= square.x + square.width && y >= square.y && y <= square.y + square.height) {
    //             console.log(`Курсор на квадрате ${index}`);
    //         }
    //     });
    // };

    return (
        <Canvas
            draw={draw}
            height={height}
            width={width}
            // onMouseOver={onBar}
        />
    )
};

export default Bar;