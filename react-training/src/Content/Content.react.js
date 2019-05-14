import React from 'react';
import Chart from 'react-google-charts'
const col = [{
    type: 'string', label: 'Subject'
}, {
    type: 'number', label: '2017-18'
}, {
    type: 'number', label: '2018-19'
}];

const rows = [["java", 100, 1000], ["c++", 200, 2000], [".Net", 300, 4000]];
const data = [col, ...rows];
const Content = () => {

    return (
        <div >
            <h1>Content</h1>
            <Chart chartType='LineChart' data={data}></Chart>
        </div>
    );

}

export default Content;