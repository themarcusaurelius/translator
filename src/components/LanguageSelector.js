import React, { Component } from 'react';

class Languageselector extends Component {
    render() {
        return (
            <div>
                Select a language:
                <i 
                    className="flag us" 
                    onClick={() => this.props.onLanguageChange('English')} 
                />
                <i 
                    className="flag cn" 
                    onClick={() => this.props.onLanguageChange('Chinese')} 
                />
            </div>
        );
    }
}

export default Languageselector; 