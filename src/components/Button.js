import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    //how to hook up context object to a class component
    //static contextType = LanguageContext;
    renderSubmit(value) {
        return value === 'English' ? 'Submit' : '提交'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        //const text = this.context === 'English' ? 'Submit' : '提交';
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer> 
        );
    }
};

//Same as:
//Button.contextType = LanguageContext;

//Consumer let's us get information out of mutiple context objects in a single component

export default Button;