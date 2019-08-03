import React, { Component } from 'react';
import logo from '../images/logo.png';
import instagramLogo from '../images/instagram.png';
import PropTypes from 'prop-types';
import { GreenMenuButton, ClearMenuButton } from "./Buttons";

class Header extends Component {
    render() {
        const { show, onPressWho, onPressContact } = this.props;
        const headerStyles = show ? { transform: 'translate3d(0, 0, 0)' } : { transform: 'translate3d(0, -120px, 0)' };

        return (
            <header className="component-header" style={headerStyles}>
                <img src={logo} className="component-header__logo" alt="Sabrina Girvan"/>
                <div className="component-header__button-container">
                    <GreenMenuButton onPress={onPressWho}>Who Am I?</GreenMenuButton>
                    <ClearMenuButton onPress={onPressContact}>Contact Me</ClearMenuButton>
                    <a href="https://www.instagram.com/sabrinagirvan/" className="component-header__instagram-logo" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Instagram" />
                    </a>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    show: PropTypes.bool,
    onPressWho: PropTypes.func,
    onPressContact: PropTypes.func
};

export default Header;


