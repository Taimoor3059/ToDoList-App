import React from 'react';
import './App.css';
import Button from './components/button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: [],
      number: 0,
      itemsDeleted:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
    
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: this.state.toDoList.concat(itemsArray),
      userInput: ''
    });
  }


  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  delete(itemToDelete) {
    this.setState(state => ({
        toDoList: state.toDoList.filter( (item) => itemToDelete !== item),
        itemsDeleted: this.state.itemsDeleted.concat(itemToDelete)
    }))
  }

  render() {
    return (
      <div id='iqu'>
        <textarea rows='5' cols='25'
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Separate Items With Commas" /><br />

        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My Daily To Do List:</h1>

        <Button toDoList={this.state.toDoList} handleDelete={this.delete} number={this.state.number} />
        <br/>
        <br/>
        <h1>Things that have already been done</h1>
        {
          this.state.itemsDeleted ? this.state.itemsDeleted.map( (x) => <li key={x+1}>{x}</li> ) : 'you have not deleted anything yet'
        }
        {this.state.itemsDeleted.length}
        
      </div>
    );
  }
};

export default App;
