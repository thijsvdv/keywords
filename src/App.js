import React, { Component } from 'react';
import Group from './Group.js';
import Combination from './Combination.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lists: {
        A: {
          0: []
        },
        B: {
          0: []
        },
        C: {
          0: []
        },
      },
      combinations: {
        AB: [],
        ABC: []
      }
    }
  }

  combine = (group, id, text) => {
    // console.log(group, id, text);
    let newState = this.state;
    newState.lists[group][id] = text.split(/\n/);
    this.setState(newState);

    let combs = {
      AB: [],
      ABC: []
    };

    for(let i=0; i<Object.keys(this.state.lists.A).length; i++) {
      combs.AB.push([]);
    }

    for(let i=0; i<Object.keys(this.state.lists.A).length; i++) {
      for(let a=0; a<Object.keys(this.state.lists.A[i]).length; a++) {

        // console.log(this.state.lists.A[i][a]);

        for(let j=0; j<Object.keys(this.state.lists.B).length; j++) {
          for(let b=0; b<Object.keys(this.state.lists.B[j]).length; b++) {
            // console.log(this.state.lists.B[j][b]);
            combs.AB[i].push(this.state.lists.A[i][a] + ' ' + this.state.lists.B[j][b]);
          } 
        }
      }
    }
    // console.log(combs);

    this.setState({
      combinations: combs
    });
  };

  addField = (group) => {
    let newState = this.state;
    newState.lists[group][Object.keys(this.state.lists[group]).length] = [];
    this.setState(newState);
  };

  renderGroup = (key) => {
    return <Group key={key} index={key} lists={this.state.lists} combine={this.combine} addField={this.addField} />
  }

  renderCombinations = (key) => {
    return <Combination key={key} combinations={this.state.combinations[key]} />
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Keyword Tool</h2>
        </div>
        <p className="App-intro">
          Enter keywords in the fields below to create combinations
        </p>
        <div className="Pane">
          {Object.keys(this.state.lists).map(this.renderGroup)}

          {Object.keys(this.state.combinations).map(this.renderCombinations)}
        </div>
      </div>
    );
  }
}

export default App;