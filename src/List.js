import React, {Component} from 'react';

class List extends Component {
  combine = (group, index, evt) => {
    this.props.combine(group, index, evt.refs[group].value);
  }
  
  render() {
    return (
      <textarea cols="30" rows="10" ref={this.props.group} onChange={this.combine.bind(null, this.props.group, this.props.index, this)} onBlur={this.combine.bind(null, this.props.group, this.props.index, this)} id={this.props.index} defaultValue={this.props.list[this.props.index]}></textarea>
    );
  }
}

export default List;