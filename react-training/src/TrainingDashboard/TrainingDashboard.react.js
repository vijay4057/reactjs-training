import React, { Fragment } from 'react';
import DataTable from '../DataTable/DataTable.react';
import AddToCalendar from '../AddToCalendar/AddToCalendar.react'
import Header from '../Header/Header.react';


class TrainingDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "trainingList": []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/calendar").then(response => response.json()).then(data => {
            this.setState({ trainingList: data })
        });
    }
    update = (data) => {
        const newdata = [...this.state.trainingList, data];
        this.setState({ trainingList: newdata })
    }

    render() {
        return (
            <React.Fragment>

                <AddToCalendar action={this.update}></AddToCalendar>

                <div >
                    <DataTable data={this.state.trainingList}></DataTable>
                </div>
            </React.Fragment>
        );
    }
}

export default TrainingDashboard;