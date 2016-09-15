import React, {Component} from 'react';
import List from './List.js';

class Group extends Component {
  renderList = (key) => {
    return <List key={key} index={key} list={this.props.lists[this.props.index]} group={this.props.index} combine={this.props.combine} />
  };

  render() {
    return (
      <div rel={this.props.index}>
        <h2>{this.props.index}</h2>
        {Object.keys(this.props.lists[this.props.index]).map(this.renderList)}
        <button onClick={this.props.addField.bind(null, this.props.index)}>+</button>
        <hr />
      </div>
    );
  }
}

export default Group;