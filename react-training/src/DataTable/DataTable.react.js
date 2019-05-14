import React from 'react';

let dataName = "Vijay";
var changeVal = () => {
    dataName = ""
    

}

const DataTable = (props) => {

    // const [firstdata] = props.data;
    // console.log(firstdata.name);
    return (
        <div >
            {dataName}
            <table onClick={changeVal} className="table">
                <thead>
                    <tr>
                        <td>ID </td>
                        <td>NAME</td>
                        <td>DURATION</td>
                        <td>START DATE</td>
                    </tr>
                </thead><tbody>
                    {
                        props.data.map((values, index) => {
                            return <tr>
                                <td>{values.id} - {index}</td>
                                <td>{values.name}</td>
                                <td>{values.duration}</td>
                                <td>{values.startDate}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

export default DataTable;