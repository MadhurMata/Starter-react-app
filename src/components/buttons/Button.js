import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { requestPageNumber } from 'store/actions/paginationActions';

export default function Button(props) {
    const { classProp, buttonText } = props;
    const dispatch = useDispatch();
    const currentPageNumber = useSelector((state) => state.paginationStore.pageNumber);

    const handleClick = (e) => {
        if (e.keyCode == 13 || e.type === 'click') {
            switch (true) {
                case currentPageNumber > 1 && props.buttonText === 'Previous':
                    dispatch(requestPageNumber(currentPageNumber - 1));
                    break;
                case currentPageNumber === 1 && props.buttonText === 'Previous':
                    break;
                case props.buttonText === 'Next':
                    dispatch(requestPageNumber(currentPageNumber + 1));
                    break;
            }
        }
    };

    return (
        <div
            role="button"
            className={classProp}
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleClick}>
            <h2>{buttonText}</h2>
        </div>
    );
}

Button.propTypes = {
    buttonText: PropTypes.string,
    classProp: PropTypes.string
};
