import { Field } from "./Field"
import { BarChart } from "./types"

const Bar: React.FC<BarChart> = ({
    data,
    width,
    height,
    gap,
    axisX = '',
    axisY = '',
}) => {
    const sortedData = [...data].sort((a, b) => a[axisX] - b[axisX]);

    return (
        <Field
            width={width}
            height={height}
            gap={gap}
            data={sortedData}
            axisY={axisY}
        />
    )
}

export default Bar