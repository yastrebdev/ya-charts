import Bar from "./Bar";

export default {
    title: "Bar",
    component: Bar,
};

const data = [
    // { index: 1972, value: 100 },
    // { index: 2001, value: 160 },
    // { index: 1829, value: 210 },
    // { index: 1941, value: 40 },
    // { index: 2013, value: 110 },
    // { index: 1999, value: 80 },
    // { index: 1274, value: 50 },
    // { index: 2012, value: 170 },
    // { index: 2014, value: 270 },
    // { index: 2015, value: 210 },
    // { index: 2016, value: 140 },
    // { index: 2017, value: 110 },
    
    { index: 1972, value: 10 },
    { index: 2001, value: 11 },
    { index: 1829, value: 4 },
    { index: 1941, value: 4 },
    { index: 2013, value: 13 },
    { index: 1999, value: 8 },
    { index: 1274, value: 5 },
    { index: 2012, value: 7 },
    { index: 2014, value: 3 },
    { index: 2015, value: 1 },
    { index: 2016, value: 4 },
    { index: 2017, value: 6 },

    // { index: 1972, value: 78 },
    // { index: 2001, value: 19 },
    // { index: 1829, value: 31 },
    // { index: 1941, value: 56 },
    // { index: 2013, value: 39 },
    // { index: 1999, value: 45 },
    // { index: 1274, value: 25 },
    // { index: 2012, value: 15 },
    // { index: 2014, value: 54 },
    // { index: 2015, value: 21 },
    // { index: 2016, value: 67 },
    // { index: 2017, value: 11 },
];

const config = {
    width: 1000,
    height: 500,
    gap: 0.2,
    fieldX: 'index',
    fieldY: 'value',
    // guides: false,
    styles: {
        // columnColor: '#007bff'
    }

}

export const Default = () => (
    <Bar
        data={data}
        {...config}
    />
);
