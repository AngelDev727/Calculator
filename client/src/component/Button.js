// my imports
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

// static layout - blank component for Buttons
class Button extends React.Component {
    // added event handlers
    handleClick = () => {
        // add props for event handler
        this.props.clickHandler(this.props.name);
        // console.log('click');
    }

    render() {
        let className = "button";
        if (this.props.orange) {
            className += " orange"; // setting specific color for orange buttons from css
        }
        if (this.props.wide) {
            className += " wide"; // setting specific width from css
        }

        let className2 = "button";
        if (this.props.charcoal) {
            className += " charcoal"; // setting specific color for charcoal buttons from css
        }
        if (this.props.wide) {
            className += " wide"; // setting specific width from css
        }

        return (
            <div className = {className}>
                <button onClick = {this.handleClick}
                >
                {this.props.name}
                </button>
            </div>
        );
    }
}

// added prop types
Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    charcoal: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
};

export default Button;