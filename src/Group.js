import React, {Component} from 'react';
import List from './List.js';

class Group extends Component {
  renderList = (key) => {
    return <List key={key} index={key} list={this.props.lists[this.props.index]} group={this.props.index} removeField={this.props.removeField} combine={this.props.combine} />
  };

  render() {
    return (
      <div rel={this.props.index}>
        <h2>{this.props.index}</h2>
        <div className="fields">
          {Object.keys(this.props.lists[this.props.index]).map(this.renderList)}
          <button className="field__add" onClick={this.props.addField.bind(null, this.props.index)}>+</button>
        </div>
      </div>
    );
  }
}

export default Group;