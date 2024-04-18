import React, { useRef, useState } from "react";
import Canvas from "../../components/use-components/Canvas";
import useResizeElement from "../../hooks/useResizeElement";
import { createColumnWrapper } from "./createColumnWrapper";
import { ColumnWrapperOptions, DataItem } from "./types";
import { createColumns } from "./createColumns";
import { createGuides } from "./createGuides";
import { createText } from "./createText";

interface FieldBarProps {
    data: DataItem[];
    width?: number | string;
    height?: number | string;
    gap?: number;
    axisY: string;
    guides: boolean
}

export const Field: React.FC<FieldBarProps> = ({
    data,
    width = 400,
    height = 400,
    gap = 0.1,
    axisY,
    guides
}) => {
    const [over, setOver] = useState(false)
    const [xmove, setXmove] = useState(0)
    const [ymove, setYmove] = useState(0)

    const div = useRef<HTMLDivElement>(null);
    const {width: widthWrapper, height: heightWrapper} = useResizeElement(div)

    const numberOfColumn = data.length;
    const columnWrapperWidth = widthWrapper / numberOfColumn;
    const maxValue = Math.max(...data.map(item => item[axisY]));

    const columnWrapperOptions: ColumnWrapperOptions = {
        columnWrapperWidth,
        numberOfColumn,
        xmove,
        over
    }

    const guidesOptions = {
        width: widthWrapper,
        height: heightWrapper,
        maxValue,
    }

    const columnOptions = {
        height: heightWrapper,
        columnWrapperWidth,
        maxValue,
        gap,
        axisY
    }

    const textOptions = {
        height: heightWrapper,
        columnWrapperWidth
    }

    const draw = (ctx: CanvasRenderingContext2D) => {
        createColumnWrapper(ctx, columnWrapperOptions)
        guides && createGuides(ctx, guidesOptions)
        const columns = createColumns(ctx, data, columnOptions)
        createText(ctx, textOptions, columns)
    }

    function onMouseEnter() {
        setOver(true)
    }

    function onMouseMove(event: MouseEvent) {
        const target = event.target as HTMLElement
        const rect = target?.getBoundingClientRect()

        setXmove(event.clientX - rect.left)
        setYmove(event.clientY - rect.top)
    }

    function onMouseLeave() {
        setOver(false)
    }

    return (
        <div ref={div} style={{ width, height }}>
            <Canvas
                draw={draw}
                width={widthWrapper}
                height={heightWrapper}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
            />
        </div>
    )
}