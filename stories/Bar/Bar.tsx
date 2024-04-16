import { useState } from "react";
import Canvas from "../../components/use-components/Canvas";
import { createArrayColumns } from "./createArrayColumns";
import { DataItem, ItemColumn } from "./types";

interface BarProps {
    width: number;
    height: number;
    gap?: number;
    data?: DataItem[];
    axisX?: string;
    axisY?: string;
    colorColumn?: string;
}

const Bar: React.FC<BarProps> = ({
    height = 200,
    width = 200,
    gap = 2,
    data = [],
    axisX = '',
    axisY = '',
    colorColumn = ''
}) => {
    const [columns, setColumns] = useState<ItemColumn[] | null>(null)

    const sortedData = [...data].sort((a, b) => a[axisX] - b[axisX]);

    const options = {
        width,
        height,
        gap,
        axisY
    }

    const draw = (ctx: CanvasRenderingContext2D) => {
        const createColumns = createArrayColumns(sortedData, options, ctx, colorColumn)
        console.log(createColumns)
        if (!columns) {
            setColumns(createColumns)
        }
    }

    const onColumn = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        const rect = target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        columns?.forEach((column: ItemColumn, index: number) => {
            const { x: cx, y: cy, width, height } = column

            if (x >= cx && x <= cx + width && y >= cy && y <= cy + height) {
                console.log(`Курсор на квадрате ${index}`);
            }
        });
    };

    return (
        <Canvas
            draw={draw}
            height={height}
            width={width}
            onMouseOver={onColumn}
    />
    )
}

export default Bar