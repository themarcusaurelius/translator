import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    render() {
        return (
            <div className="ui">
                Select a language:
                <br></br>
                <i 
                    className="flag us" 
                    onClick={() => this.context.onLanguageChange('English')} 
                />
                <i 
                    className="flag cn" 
                    onClick={() => this.context.onLanguageChange('Chinese')} 
                />
            </div>
        );
    }
}

export default LanguageSelector; 