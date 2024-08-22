import React, { Component } from 'react'



class MouseTracker extends Component {
  render() {
    const { mousePos } = this.props;
    const { x, y } = mousePos;
    return (
      <div style={{
        width: 250,
        height: 250,
        position: "fixed", 
        top: y - 110, 
        left: x - 110, 
        zIndex: -1,
        background: "radial-gradient(rgba(29, 78, 216, 0.15), transparent 80%)"
      }} className='imageTracker'></div>
      )
    }
  }
  
  export default MouseTracker;
  
  // background: `radial-gradient(600px at ${y} ${x}, rgba(29, 78, 216, 0.15)`