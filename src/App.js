import React, { Component } from 'react';
import debounce from 'lodash.debounce';

// Components
import Contact from './components/Contact';
import Hero from './components/Hero';
import Header from './components/Header';
import Who from './components/Who';

class App extends Component {
    state = {
        showHeader: false
    };

    constructor(props) {
        super(props);

        this.who = React.createRef();
        this.contact = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));

        this.debounceAnimate =  debounce((e) => {
            window.requestAnimationFrame(this.animateHeader.bind(this))
        }, 15);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleScroll() {
        this.debounceAnimate();
    };

    animateHeader() {
        const sticky = window.pageYOffset;
        const offset = window.innerHeight;
        const shown = offset >= sticky;

        this.setState( { showHeader: !shown });
    };

    scrollTo(y) {
        window.scrollTo({
            top: y,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        const { showHeader } = this.state;

        return (
            <div className="component-app">
                <Header
                    onPressWho={() => this.scrollTo(this.who.current.offsetTop)}
                    onPressContact={() => this.scrollTo(this.contact.current.offsetTop *  1.195)}
                    show={showHeader}
                />
                <Hero
                    ref={this.hero}
                    onPressWho={() => this.scrollTo(this.who.current.offsetTop)}
                    onPressContact={() => this.scrollTo(this.contact.current.offsetTop * 1.195)}
                />
                <section id="wrap" ref={this.who}>
                    <Who />
                    <section className="component-contact">
                        <article className="padding">
                            <h1 className="typography__headline typography__headline--light">Contact</h1>
                        </article>
                    </section>
                    <div ref={this.contact} />
                    <Contact />
                </section>
            </div>
        );
    }
}

export default App;
