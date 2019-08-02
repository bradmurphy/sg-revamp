import React, { Component } from 'react';
import logo from '../images/logo.png';
import { GreenButton, ClearButton } from "./Buttons";
import PropTypes from "prop-types";

class Hero extends Component {
    state = {
        bgPos: {
            backgroundPosition: '50% 0px'
        },
        logoPos: {
            transform:'translate3d(-125px)'
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleScroll() {
        window.requestAnimationFrame(this.parallaxMagic.bind(this));
    };

    parallaxMagic() {
        const scrollTop = window.pageYOffset;
        const yPosBG = Math.round(scrollTop * .65);
        const yPosLogo = Math.round(-125 + (scrollTop * .45));

        this.setState({
            bgPos: { transform: `translate3d(0, ${yPosBG}px, 0px)` },
            logoPos: { transform: `translate3d(0, ${yPosLogo}px, 0)` }
        });
    };

    render() {
        const { onPressWho, onPressContact } = this.props;
        const { bgPos, logoPos } = this.state;

        return (
            <section className="component-hero">
                <div className="component-hero__hero-background" style={bgPos}>
                    <div className="component-hero__logo-container" style={logoPos}>
                        <img src={logo} className="component-hero__logo" alt="Sabrina Girvan" />
                        <h1 className="component-hero__logo-text"><em>personal</em> trainer</h1>
                        <div className="component-hero__button-container">
                            <GreenButton onPress={onPressWho}>Who  am I?</GreenButton>
                            <ClearButton onPress={onPressContact}>Contact Me</ClearButton>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Hero.propTypes = {
    onPressWho: PropTypes.func,
    onPressContact: PropTypes.func
};

export default Hero;
