import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends Component {
  state = { language: 'English'}

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i 
            className="flag us" 
            onClick={() => this.onLanguageChange('English')} 
          />
          <i 
            className="flag cn" 
            onClick={() => this.onLanguageChange('Chinese')} 
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate  />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
