import Bar from "./Bar";
import { FieldBar } from "./FieldBar";

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
    { index: 2014, value: 54 },
    { index: 2015, value: 21 },
    { index: 2016, value: 67 },
    { index: 2017, value: 11 },
];

export const Default = () => (
    // <Bar width={500} height={300} data={data} axisY="value" axisX="index" colorColumn="#13c2c2"/>
    <FieldBar width={500} height={300}/>
    // <FieldBar width={'100%'} height={'100%'}/>
);
