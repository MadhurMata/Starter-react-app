import React from 'react';
import PropTypes from 'prop-types';
import { numFormatter } from 'utils/utils';

export default function RepositoryCardChip(props) {
    const { classProp, quantity, text } = props;
    const formatedQuantity = numFormatter(quantity);
    return (
        <div className={classProp}>
            <p>{text + formatedQuantity}</p>
        </div>
    );
}

RepositoryCardChip.propTypes = {
    classProp: PropTypes.string,
    quantity: PropTypes.number,
    text: PropTypes.string
};
