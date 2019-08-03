import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseButton extends Component {
    render() {
        const { onPress, children, disabled, hidden, mode } = this.props;
        let buttonContent = null;

        switch(mode) {
            case 'clear-menu':
                buttonContent = (
                    <button className="component-button__button component-button__button--clear component-button__button--menu" onClick={onPress} disabled={disabled}>
                        {children}
                    </button>
                );
                break;
            case 'green-menu':
                buttonContent = (
                    <button className="component-button__button component-button__button--green component-button__button--menu component-button__button--hide" onClick={onPress} disabled={disabled} hidden={hidden}>
                        {children}
                    </button>
                );
                break;
            case 'green':
                buttonContent = (
                    <button className="component-button__button component-button__button--green" onClick={onPress} disabled={disabled} hidden={hidden}>
                        {children}
                    </button>
                );
                break;
            case 'clear':
                buttonContent = (
                    <button className="component-button__button component-button__button--clear" onClick={onPress} disabled={disabled} hidden={hidden}>
                        {children}
                    </button>
                );
                break;
            case 'submit':
                buttonContent = (
                    <button className="component-button__button component-button__button--submit" onClick={onPress} disabled={disabled} hidden={hidden}>
                        {children}
                    </button>
                );
                break;
            default:
                buttonContent = (
                    <button className="component-button__button" onClick={onPress} disabled={disabled} hidden={hidden}>
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
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
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

export const SubmitButton = (props) => {
    return <BaseButton {...props} mode="submit" />
};


