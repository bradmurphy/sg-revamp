import React, { Component } from 'react';
import logo from '../images/logo.png';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        const { show } = this.props;
        const headerStyles = show ? { transform: 'translate3d(0, 0, 0)' } : { transform: 'translate3d(0, -90px, 0)' };

        return (
            <header className="component-header" style={headerStyles}>
                <img src={logo} className="component-header__logo" alt="Sabrina Girvan" />
            </header>
        );
    }
}

Header.propTypes = {
    show: PropTypes.bool
};

export default Header;


