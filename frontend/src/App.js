import React from "react";
import axios from "axios";
import Config from "./config";
import User from "./User/User";
import ToDoApp from "./ToDo/ToDoApp";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_list : []
        }
    }

    componentDidMount() {
        axios.get(Config.domain + "/task")
            .then(res => {
                const newList = res.data;
                this.setState({
                    task_list: newList
                });
            })
            .catch(err => console.error(err));
    }

    render() {
        console.log("App: " + this.state.task_list);
        return (
            // <h2>App.js</h2>
            // <User />
            <ToDoApp taskList={this.state.task_list}/>
        );
    }
}