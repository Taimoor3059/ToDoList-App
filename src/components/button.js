import React, { Component } from 'react';
import './button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                        {
                            this.props.toDoList.map( (item) => <li key={item}>
                                {item}...
                                <button onClick={() => this.props.handleDelete(item)}>Done!</button>
                            </li>)
                            
                        }
                </ul>
                <p>The amount of tasks you have left to do: {this.props.toDoList.length}</p>
            </div>

        );
      }
};


export default Button;

