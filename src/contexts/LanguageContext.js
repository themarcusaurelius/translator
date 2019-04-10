import React from 'react';

const Context = React.createContext('English');

export class LanguageStore extends React.Component {
    state = { language: 'English' };

    onLanguageChange = language => {
        this.setState({ language });
    };
    
    render() {
        return (
            //Creates a new object, takes all the values from previous object and inserts them into the new object
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;
