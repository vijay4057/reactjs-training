import React from 'react';
import Poll from '../Poll/Poll.react'


class ShowCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interested: 1,
            notNow: 0
        }
    }
    increment = (event) => {
        console.log(event);
        this.setState({ interested: this.state.interested + 1 })
    }

    notNow = () => {
        //calling multiple time same setstate will not work due to async
        //this.setState({ notNow: this.state.notNow + 1 });
        //this.setState({ notNow: this.state.notNow + 1 });

        //so use arrow function 
        this.setState(this.update);
        this.setState(this.update);

    }

    update = (state, props) => {
        return { notNow: state.notNow + 1 }
    }
    render() {
        return (
            <div >
                <p>Interested</p><span>{this.state.interested}</span>
                <p>NotNow</p><span>{this.state.notNow}</span>
                <Poll action={this.increment} text="Interested"></Poll>
                <Poll action={this.notNow} text="Not Now"></Poll>
            </div>
        );
    }
}

export default ShowCourse;