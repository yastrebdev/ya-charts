import type { BarChart } from "./types"
import { Field } from "./Field"

const Bar: React.FC<BarChart> = ({
    data,
    width = 400,
    height = 400,
    gap = 0.1,
    fieldX = '',
    fieldY = '',
    guides = true,
    styles
}) => {
    const sortedData = [...data].sort((a, b) => a[fieldX] - b[fieldX]);
    const {
        columnColor = '#007bff'
    } = styles

    return (
        <Field
            width={width}
            height={height}
            gap={gap}
            data={sortedData}
            fieldY={fieldY}
            fieldX={fieldX}
            guides={guides}
            columnColor={columnColor}
        />
    )
}

export default Bar