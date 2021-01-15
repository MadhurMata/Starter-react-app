import React from 'react';
import PropTypes from 'prop-types';

export default function RepositoryCardChip(props) {
    const { classProp, quantity, text } = props;
    return (
        <div className={classProp}>
            <p>{text + quantity}</p>
        </div>
    );
}

RepositoryCardChip.propTypes = {
    classProp: PropTypes.string,
    quantity: PropTypes.string,
    text: PropTypes.string
};
