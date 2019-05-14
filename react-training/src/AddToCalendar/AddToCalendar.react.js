import React from 'react';



class AddToCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCalendar: {
                id: 0,
                name: "",
                duration: "",
                startDate: ""
            }
        }
    }


    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState(state => {
            var obj = { "newCalendar": { ...state.newCalendar, [name]: value } }
            return obj;
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:4000/calendar", { method: "POST", body: JSON.stringify(this.state.newCalendar), headers: { 'Content-Type': 'application/json' } }).then();
    }

    // saveState = (state, name, value) => {
    //     return {
    //         "newCalendar": { ...state.newCalendar, [name]: value }
    //     }
    // }

    render() {
        return (
            <form>
                <div className="form-group"><label htmlFor="">Id</label><input type="text" name="id" value={this.state.newCalendar.id} onChange={this.handleChange} className="form-control" /></div>
                <div className="form-group"><label htmlFor="">Name</label><input type="text" name="name" value={this.state.newCalendar.name} onChange={this.handleChange} className="form-control" /></div>
                <div className="form-group"><label htmlFor="">Duration</label><input type="text" name="duration" value={this.state.newCalendar.duration} onChange={this.handleChange} className="form-control" /></div>
                <div className="form-group"><label htmlFor="">start date</label><input type="text" name="startDate" value={this.state.newCalendar.startDate} onChange={this.handleChange} className="form-control" /></div>
                <div className="form-group"><input type="Submit" onClick={this.handleSubmit} value="Add" /></div>
            </form>
        );
    }
}

export default AddToCalendar;