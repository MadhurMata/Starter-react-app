import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    return (
        <div className="button">
            <h3>{props.butoonText}</h3>
        </div>
    );
}

Button.propTypes = {
    butoonText: PropTypes.string
};
