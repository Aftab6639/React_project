import React from 'react';

export default class State extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Aftab Hussain',
            email: 'aftabhussain16639@gmail.com',
            count: 0
        };
    }

    updateState() {
        this.setState({
            Name: 'Ahmad',
            count: this.state.count + 1
        });
    }

    handleInputChange = (event) => {
        this.setState({
        name: event.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <h1>Email: {this.state.email}</h1>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
                <h1>name: {this.state.name}</h1>
               
                <button onClick={() => this.updateState()}>Update Count</button>
            </div>
        );
    }
}
