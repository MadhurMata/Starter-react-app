import Button from 'components/button/Button';
import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-container">
            <Button butoonText={'Previous'} />
            <Button butoonText={'Next'} />
        </footer>
    );
}
