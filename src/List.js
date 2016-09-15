import React, {Component} from 'react';

class List extends Component {
  combine = (group, index, evt) => {
    this.props.combine(group, index, evt.refs[group].value);
  }

  select = (evt) => evt.target.select();

  removeField = (group, index) => {
    // console.log("remove", group, index);
    this.props.removeField(group, index);
  }
  
  render() {
    let defaultValue = Array.isArray(this.props.list[this.props.index]) ? this.props.list[this.props.index].join('\n') : this.props.list[this.props.index];

    
    // let defaultValue = ;
    // console.log(defaultValue);
    return (
      <div className="field">
        <textarea cols="30" rows="10" ref={this.props.group} onFocus={this.select} onChange={this.combine.bind(null, this.props.group, this.props.index, this)} onBlur={this.combine.bind(null, this.props.group, this.props.index, this)} id={this.props.index} value={defaultValue}></textarea>
        <button className="field__remove" onClick={this.removeField.bind(null, this.props.group, this.props.index)}>-</button>
      </div>
    );
  }
}

export default List;