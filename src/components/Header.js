import React, { Component } from 'react';
import logo from '../images/logo.png';
import PropTypes from 'prop-types';
import { GreenMenuButton, ClearMenuButton } from "./Buttons";

class Header extends Component {
    render() {
        const { show } = this.props;
        const headerStyles = show ? { transform: 'translate3d(0, 0, 0)' } : { transform: 'translate3d(0, -120px, 0)' };

        return (
            <header className="component-header" style={headerStyles}>
                <img src={logo} className="component-header__logo" alt="Sabrina Girvan" />
                <div className="component-header__button-container">
                    <GreenMenuButton onPress={() => console.log('click')} menuButton={true}>Who  am I?</GreenMenuButton>
                    <ClearMenuButton onPress={() => console.log('click')} menuButton={true}>Contact Me</ClearMenuButton>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    show: PropTypes.bool
};

export default Header;


