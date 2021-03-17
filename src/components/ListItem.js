import React, { Component } from 'react'
import './ListItem.css'

export class ListItem extends Component {
  // constructor(props) {
  //   super(props)
  // }
  handleSelect = () => {
    this.props.onItemSelect(this.props.ind)
  }

  render() {
    return (
      <div className='list-item-container' onClick={this.handleSelect}>
        <div className='list-item-name'><b>{this.props.name}</b></div>
        <div className='list-item-phone'>{this.props.phone}</div>
      </div>
    )
  }
}

export default ListItem
