import type { DataItem } from "./types";

export function dataAboutData(
    data: DataItem[],
    widthWrapper: number,
    field: string | undefined
) {
    const numberOfColumn = data.length;
    const columnWrapperWidth = widthWrapper / numberOfColumn;
    const maxValue = Math.max(...data.map(item => item[field as string]));

    return {
        numberOfColumn,
        columnWrapperWidth,
        maxValue
    }
}