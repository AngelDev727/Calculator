// my imports
import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import './BtnPanel.css';

// static layout - blank component for Btn Panel
class BtnPanel extends React.Component {
    // add props for event handlers
    handleClick = (btnName) => {
        this.props.clickHandler(btnName);
    }

    render() {
        return (
            // props added to all buttons for event handlers
            <div className="BtnPanel">
                {/* Rendered Component */}
                {/* 1st Row (AC +/- % /) */}
                <div>
                    <Button name = "AC" clickHandler ={this.handleClick} />
                    <Button name = "+/-" clickHandler ={this.handleClick} />
                    <Button name = "%" clickHandler ={this.handleClick} />
                    <Button name = "÷" clickHandler ={this.handleClick} orange />
                </div>

                {/* 2nd Row (7 8 9 X) */}
                <div>
                    <Button name = "7" clickHandler ={this.handleClick} charcoal />
                    <Button name = "8" clickHandler ={this.handleClick} charcoal />
                    <Button name = "9" clickHandler ={this.handleClick} charcoal />
                    <Button name = "x" clickHandler ={this.handleClick} orange />
                </div>

                {/* 3rd Row (4 5 6 -) */}
                <div>
                    <Button name = "4" clickHandler ={this.handleClick} charcoal />
                    <Button name = "5" clickHandler ={this.handleClick} charcoal />
                    <Button name = "6" clickHandler ={this.handleClick} charcoal />
                    <Button name = "-" clickHandler ={this.handleClick} orange />
                </div>

                {/* 4th Row (1 2 3 +) */}
                <div>
                    <Button name = "1" clickHandler ={this.handleClick} charcoal />
                    <Button name = "2" clickHandler ={this.handleClick} charcoal />
                    <Button name = "3" clickHandler ={this.handleClick} charcoal />
                    <Button name = "+" clickHandler ={this.handleClick} orange />
                </div>

                {/* 5th Row (0 . =) */}
                <div>
                    <Button name = "0" clickHandler ={this.handleClick} charcoal />
                    <Button name = "." clickHandler ={this.handleClick} charcoal />
                    <Button name = "=" clickHandler ={this.handleClick} orange />
                </div>
            </div>
        );
    }
}

// prop types
BtnPanel.propTypes = {
    clickHandler: PropTypes.func,
};

export default BtnPanel;