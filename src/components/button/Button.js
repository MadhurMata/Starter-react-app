import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { requestPageNumber } from 'store/actions/actions';

export default function Button(props) {
    const dispatch = useDispatch();
    const currentPageNumber = useSelector((state) => state.pageNumber);
    console.log('page num in button', currentPageNumber);
    const handleClick = (e) => {
        console.log('action in button');
        if (e.keyCode == 13 || e.type === 'click') {
            switch (true) {
                case currentPageNumber > 1 && props.buttonText === 'Previous':
                    console.log('actualaction');
                    dispatch(requestPageNumber(currentPageNumber - 1));
                    break;
                case currentPageNumber === 1 && props.buttonText === 'Previous':
                    console.log('actualaction');
                    break;
                case props.buttonText === 'Next':
                    console.log('actualaction');
                    dispatch(requestPageNumber(currentPageNumber + 1));
                    break;
            }
        }
    };

    return (
        <div
            role="button"
            className="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleClick}>
            <h2>{props.buttonText}</h2>
        </div>
    );
}

Button.propTypes = {
    buttonText: PropTypes.string
};
