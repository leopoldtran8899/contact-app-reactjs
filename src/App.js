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
      this.setState({contacts: users})
    })
  }

  handleSelectItem = (ind) => {
    console.log(ind)
    this.setState({selected: ind})
  }
  render() {
    return (
      <div className="App">
        <div className='app-list'>
          <ContactList 
            contacts={this.state.contacts}
            handleSelectItem={this.handleSelectItem}
          />
        </div>
        <div className='app-detail'>
          <ContactDetail contact={this.state.selected ? this.state.contacts[this.state.selected] : null}/>
        </div>
      </div>
    )
  }

}

