import React, {Component} from 'react';

class Combination extends Component {
  renderCombination = (key) => {
    return (
      <textarea cols="30" rows="30" key={key} value={this.props.combinations[key].join('\n')}></textarea>
    )
  }

  render() {
    return (
      <div className="result">
        {Object.keys(this.props.combinations).map(this.renderCombination)}
      </div>
    );
  }
}

export default Combination;