import React, { Component } from 'react';
import logo from '../images/logo.png';
import debounce from 'lodash.debounce';

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

        this.debounceAnimate =  debounce((e) => {
            window.requestAnimationFrame(this.parallaxMagic.bind(this))
        }, 10);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleScroll() {
        this.debounceAnimate();
    };

    parallaxMagic() {
        const scrollTop = window.pageYOffset;
        const yPosBG = Math.round(scrollTop * .4);
        const yPosLogo = Math.round(-125 + (scrollTop * .65));

        this.setState({
            bgPos: { backgroundPosition: `50% ${yPosBG}px` },
            logoPos: { transform: `translate3d(0, ${yPosLogo}px, 0)` }
        });
    };

    render() {
        const { bgPos, logoPos } = this.state;

        return (
            <section className="component-hero" style={bgPos}>
                <div className="component-hero__logo-container" style={logoPos}>
                    <img src={logo} className="component-hero__logo" alt="Sabrina Girvan" />
                    <h1 className="component-hero__logo-text"><em>personal</em> trainer</h1>
                </div>
            </section>
        );
    }
}

export default Hero;
