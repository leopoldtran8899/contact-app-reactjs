import React, { Component } from 'react'
import './ContactDetail.css'
export class ContactDetail extends Component {


  render() {
    const contact = this.props.contact
    if (contact) {
      return (
        <div className='contact-detail-container'>
          <div className='detail detail-name'>{contact.name}</div>
          <br/>
          <div className='detail detail-phone'>
            <div className='detail-label'>Phone</div>
            <div className='detail-value'>{contact.phone}</div>
          </div>
          <div className='detail detail-email'>
            <div className='detail-label'>Email</div>
            <div className='detail-value'>{contact.email}</div>

          </div>
          <div className='detail detail-address'>
            <div className='detail-label'>Address</div>
            <div className='detail-value'>{`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}`}</div>
            
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default ContactDetail
