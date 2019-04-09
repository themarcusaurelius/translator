import React, { Component } from 'react';
import UserCreate from './UserCreate';

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
            className="flag nl" 
            onClick={() => this.onLanguageChange('Dutch')}
          />
          <i 
            className="flag cn" 
            onClick={() => this.onLanguageChange('Chinese')} 
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
