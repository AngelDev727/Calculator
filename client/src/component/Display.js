// my imports
import React from 'react';
import PropTypes from 'prop-types';
import './Display.css'

// static layout - blank component for Display Screen
class Display extends React.Component {
    render() {
        return (
            <div className="Display">
                {/* Displays the total */}
                <div>
                    {this.props.value}
                </div>
            </div>
        );
    }
}

// added prop types
Display.propTypes = {
    value: PropTypes.string,
};

export default Display;