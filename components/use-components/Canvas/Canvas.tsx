import { useEffect, useRef, useState } from "react";

interface CanvasProps {
    draw: (context: CanvasRenderingContext2D) => void;
    height?: number | string;
    width?: number | string;
    onMouseEnter?: any;
    onMouseLeave?: any;
    onMouseMove?: any;
}

const Canvas: React.FC<CanvasProps> = ({
    draw,
    height = 400,
    width = 400,
    onMouseEnter,
    onMouseLeave,
    onMouseMove
}) => {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) return;
        const context = canvas.current.getContext('2d');
        if (context) {
            draw(context);
        }
    }, [draw]);

    return (
        <canvas
            ref={canvas}
            height={height}
            width={width}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseMove={(event) => onMouseMove(event)}
        />
    );
};

export default Canvas;