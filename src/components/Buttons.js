import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseButton extends Component {
    render() {
        const { onPress, children, mode } = this.props;
        let buttonContent = null;

        switch(mode) {
            case 'clear-menu':
                buttonContent = (
                    <button className="component-button__button component-button__button--clear component-button__button--menu" onClick={onPress}>
                        {children}
                    </button>
                );
                break;
            case 'green-menu':
                buttonContent = (
                    <button className="component-button__button component-button__button--green component-button__button--menu" onClick={onPress}>
                        {children}
                    </button>
                );
                break;
            case 'green':
                buttonContent = (
                    <button className="component-button__button component-button__button--green" onClick={onPress}>
                        {children}
                    </button>
                );
                break;
            case 'clear':
                buttonContent = (
                    <button className="component-button__button component-button__button--clear" onClick={onPress}>
                        {children}
                    </button>
                );
                break;
        }

        return buttonContent;
    }
}

BaseButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    children: PropTypes.node,
    mode: PropTypes.string
};

export const GreenButton = (props) => {
    return <BaseButton {...props} mode="green" />
};

export const ClearButton = (props) => {
    return <BaseButton {...props} mode="clear" />
};

export const GreenMenuButton = (props) => {
    return <BaseButton {...props} mode="green-menu" />
};

export const ClearMenuButton = (props) => {
    return <BaseButton {...props} mode="clear-menu" />
};


