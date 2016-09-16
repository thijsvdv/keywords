import React, { Component } from 'react';
import Group from './Group.js';
import Combination from './Combination.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    if(localStorage.getItem('state') !== null) {
      this.state = localStorage.getObject('state');
    } else {
      this.state = {
        lists: {
          A: [["A1"], ["A2"]],
          B: [["B1"], ["B2"]],
          C: []
        },
        combinations: []
      }
    }
  }

  componentDidMount() {
    window.onbeforeunload = (ev) => {  
      ev.preventDefault();
      return ev.returnValue = 'Are you sure you want to close?';
    }
  }

  combine = (group, id, text) => {
    let newState = this.state;
    newState.lists[group][id] = text.split(/\n/);
    this.setState(newState);

    let combs = [];
    for(let i=0; i<Object.keys(this.state.lists.A).length; i++) {
      for(let j=0; j<Object.keys(this.state.lists.B).length; j++) {
        combs.push([]);
      }
    }

    let k = 0;
    this.state.lists.A.map((arr1, indexA) => {
      this.state.lists.B.map((arr, indexB) => {
        for(let j=0; j<arr.length; j++) {
          for(let i=0; i<arr1.length; i++) {
            if(arr1[i] !== '' && arr[j] !== '')
              combs[k].push(arr1[i] + ' ' + arr[j]);
          }
        }
        
        k++;
        return true;
      })
      return true;
    });

    this.setState({
      combinations: combs
    });

    localStorage.setObject('state', this.state);
  }

  addField = (group) => {
    console.log(group);
    let newState = this.state;
    newState.lists[group][Object.keys(this.state.lists[group]).length] = [];
    this.setState(newState);

    // Try to focus last added textarea
    try {
      let l = document.querySelectorAll('div[rel="' + group + '"]')[0].querySelectorAll('textarea').length;
      setTimeout(function() {
        document.querySelectorAll('div[rel="' + group + '"]')[0].querySelectorAll('textarea')[l].focus();
      }, 100);
    } catch(e) {};
  }

  removeField = (group, id) => {
    if(window.confirm("Delete column?")) {
      let newState = this.state;
      newState.lists[group].splice(id, 1);
      this.setState(newState);
      localStorage.setObject('state', this.state);
    }
  }

  renderGroup = (key) => {
    return <Group key={key} index={key} lists={this.state.lists} combine={this.combine} addField={this.addField} removeField={this.removeField} />
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Keyword Tool</h2>
        </div>
        <div className="Pane">
          {Object.keys(this.state.lists).map(this.renderGroup)}
        </div>
        <div className="Results">
          <h2>RESULTS</h2>
          <Combination combinations={this.state.combinations} />
        </div>
      </div>
    );
  }
}

export default App;