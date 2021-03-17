import React from 'react';
import { getAll } from './data/users'
import './App.css';
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      selected: null
    }
  }
  componentDidMount() {
    getAll().then(users => {
      console.log(users)
      this.setState({ contacts: users })
    })
  }

  handleSelectItem = (ind) => {
    console.log(ind)
    this.setState({ selected: ind })
  }
  render() {
    return (
      <div className="App">
        <div className='app-header'><b>Contact</b></div>
        <div className='app-main'>
          <div className='app-list'>
            <ContactList
              contacts={this.state.contacts}
              handleSelectItem={this.handleSelectItem}
            />
          </div>
          {
            this.state.selected != null || this.state.selected != undefined ?
              <div className='app-detail'>
                <ContactDetail contact={this.state.contacts[this.state.selected]} />
              </div> : <div className='app-detail'/>
          }
        </div>
      </div>
    )
  }

}

