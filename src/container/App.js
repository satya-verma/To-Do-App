import React from 'react';
import Header from '../components/Header';
import Submit from '../components/Submit';
import List from '../components/List';
import { Scrollbars } from 'react-custom-scrollbars';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: ['task1', 'task2', 'task3'],
            textfield: ''
        }
    }

    onclick = (event) => {
        const { tasks, textfield } = this.state;
        const newArr = [...tasks];
        newArr.push(textfield);
        this.setState({ tasks: newArr })
    }

    onchange = (event) => {
        this.setState({ textfield: event.target.value })
    }

    ondelete = (index) => {
        const { tasks } = this.state;
        const newArr = [...tasks];
        newArr.splice(index, 1);
        this.setState({ tasks: newArr })
    }

    render() {
        return (
            <div className="tc" >
                <Header />
                <Submit onchange={this.onchange} onclick={this.onclick} />
                <Scrollbars style={{ height: '70vh' }}>
                    <List list={this.state.tasks} onDelete={this.ondelete} />
                </Scrollbars>
            </div>
        )
    }
}

export default App;