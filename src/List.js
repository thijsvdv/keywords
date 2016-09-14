import React, {Component} from 'react';

class List extends Component {
  combine = (group, index, evt) => {
    // console.log(evt.target);
    // console.log(group, index, evt.refs[group].value)
    this.props.combine(group, index, evt.refs[group].value);
    // this.props.combine(evt.target['rel'], evt.target.id, evt.target.value);
  }
  
  render() {
    return (
      <textarea cols="30" rows="10" ref={this.props.group} onChange={this.combine.bind(null, this.props.group, this.props.index, this)} id={this.props.index}></textarea>
    );
  }
}

export default List;