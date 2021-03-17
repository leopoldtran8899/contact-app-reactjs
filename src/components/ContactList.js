import React, { Component } from 'react'
import ListItem from './ListItem'

export class ContactList extends Component {
  // constructor(props) {
  //   super(props)
  // }
  

  render() {
    const contacts = this.props.contacts
    return (
      <div className='contact-list'>
        {
          contacts.length > 0 && contacts.map((contact, i) => (
            <ListItem
              key={contact.id}
              ind={i}
              name={contact.name}
              phone={contact.phone}
              onItemSelect={this.props.handleSelectItem}
            />
          ))
        }
      </div>
    )
  }
}

export default ContactList
