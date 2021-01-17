import Button from 'components/button/Button';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
    const currentPageNumber = useSelector((state) => state.pageNumber);

    return (
        <footer className="footer-container">
            <Button buttonText={'Previous'} classProp={'previous-button'} />
            <div className="page-indicator">
                <h1>{currentPageNumber}</h1>
            </div>
            <Button buttonText={'Next'} classProp={'next-button'} />
        </footer>
    );
}
