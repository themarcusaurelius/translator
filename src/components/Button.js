import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    //how to hook up context object to a class component
    //static contextType = LanguageContext;
    renderSubmit(value) {
        return value === 'English' ? 'Submit' : '提交'
    }

    render() {
        //const text = this.context === 'English' ? 'Submit' : '提交';
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
};

//Same as:
//Button.contextType = LanguageContext;

export default Button;