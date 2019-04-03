import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component {
  render() {
    return (
      <div>
        <div className={(this.props.parentClass)?(this.props.parentClass):("TooltipParentWrapper")} style={(this.props.parentStyle)?(this.props.parentStyle):({})}>
          {this.props.childrenElement}
          <span className={(this.props.childClass)?(this.props.childClass):("TooltipChildWrapper")}  style={(this.props.childStyle)?(this.props.childStyle):({})}>{this.props.tooltipText}</span>
        </div>
      </div>
    );
  }
}

export default Tooltip;
