import Button from 'components/button/Button';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
    const currentPageNumber = useSelector((state) => state.pageNumber);

    return (
        <footer className="footer-container">
            <Button buttonText={'Previous'} />
            <div>{currentPageNumber}</div>
            <Button buttonText={'Next'} />
        </footer>
    );
}
