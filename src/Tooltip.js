import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component {
  render() {
    return (
      <div>
        <div className={(this.props.parentClass)?(this.props.parentClass):("TooltipParentWrapper")}>
          {this.props.childrenElement}
          <span className={(this.props.childClass)?(this.props.childClass):("TooltipChildWrapper")}>{this.props.tooltipText}</span>
        </div>
      </div>
    );
  }
}

export default Tooltip;
