import React, { Component } from 'react';
import logo from '../images/logo.png';
import instagramLogo from '../images/instagram.png';
import facebookLogo from '../images/facebook.png';
import PropTypes from 'prop-types';
import { ClearMenuButton } from "./Buttons";

class Header extends Component {
    render() {
        const { show, onPressContact } = this.props;
        const headerStyles = show ? { transform: 'translate3d(0, 0, 0)' } : { transform: 'translate3d(0, -120px, 0)' };

        return (
            <header className="component-header" style={headerStyles}>
                <img src={logo} className="component-header__logo" alt="Sabrina Girvan"/>
                <div className="component-header__button-container">
                    <ClearMenuButton onPress={onPressContact}>Contact Me</ClearMenuButton>
                    <a href="https://www.facebook.com/sabrinagirvan/" className="component-header__social-logo" target="_blank" rel="noopener noreferrer">
                        <img src={facebookLogo} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/sabrinagirvan/" className="component-header__social-logo" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Instagram" />
                    </a>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    show: PropTypes.bool,
    onPressContact: PropTypes.func
};

export default Header;


