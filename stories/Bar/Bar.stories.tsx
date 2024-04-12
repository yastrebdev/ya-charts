import Bar from "./Bar";

export default {
    title: "Bar",
    component: Bar,
};

const data = [
    { index: 1972, value: 82 },
    { index: 2001, value: 19 },
    { index: 1829, value: 31 },
    { index: 1941, value: 56 },
    { index: 2013, value: 39 },
    { index: 1999, value: 45 },
    { index: 1274, value: 25 },
    { index: 2012, value: 15 },
];

export const Default = () => (
    <Bar
        data={data}
        width={500}
        height={400}
        gap={3}
        axisY="value"
        axisX="index"
    />
);
