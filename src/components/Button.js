import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    //how to hook up context object to a class component
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'English' ? 'Submit' : '提交';
        
        return (
            <button className="ui button primary">
                {text}
            </button>
        );
    }
};

//Same as:
//Button.contextType = LanguageContext;

export default Button;