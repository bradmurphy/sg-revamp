import React, { Component } from 'react';
import profile1 from '../images/profile1.jpg';
import profile2 from '../images/profile2.jpg';

class Who extends Component {
    render() {
        return (
            <article className="component-who padding">
                <h1 className="typography__headline typography__headline--dark">Who Am I?</h1>
                <img src={profile1} className="component-who__profile-image" alt="Sabrina Girvan" />
                <p className="typography__copy">
                    Most of my life I have been an active person. My passions in my youth were ballet and tap, but I have always loved various styles of dance. As I approached high school I progressed into sporting activities. Unfortunately for me, due to genetics and poor diet I began gaining weight. And of course this was at a time when you are young and vulnerable—the worst time for this to occur. I found the courage and strength to start making changes in my eating habits as well as increasing my exercise. As we read about our nation’s issues with childhood obesity — I share a very personal experience with this struggle.
                </p>
                <p className="typography__copy">
                    Having committed to a new change in lifestyle and in attaining my goal weight –I realized it was not enough. Through the process I had gained confidence and discipline…and I absolutely loved the new “Me!” (Not to mention my new body). I began a new journey—and ventured into the world of Resistance/Strength Training. I engaged a Personal Trainer for correct techniques in weights, strength and cardio training and the best way to attain over-all health and well being. This is where I became a huge enthusiast and knew that I would need to share my excitement!
                </p>
                <h1 className="typography__headline typography__headline--dark">My Philosophy</h1>
                <img src={profile2} className="component-who__profile-image" alt="Sabrina Girvan" />
                <div className="component-who__philosophy">
                    <div className="component-who__philosophy-block">
                        <p className="typography__copy">
                            <span className="typography__copy-dropcap">F</span><em>lexibility</em> -- I simply have the ability and talent to provide passionate dedication to clients seeking optimum health! I have worked with clients from 12 to 75 years young! I have an added interest in the mature client and specialize in strength, flexibility and resistance training.
                        </p>
                    </div>
                    <div className="component-who__philosophy-block">
                        <p className="typography__copy">
                            <span className="typography__copy-dropcap">A</span><em>dopt</em> -- This is a key element in maintaining optimum health. The ability to keep my clients engaged in a program that they can repeat and reproduce to maintain optimal results.
                        </p>
                    </div>
                    <div className="component-who__philosophy-block">
                        <p className="typography__copy">
                            <span className="typography__copy-dropcap">S</span><em>upport</em> -- I am an encouraging committed team player who takes great pride in supporting her clients through dedicated discipline. (Sometimes this can be as simple as a text message and others it can be that phone call to pull you in and give you a little boost)
                        </p>
                    </div>
                    <div className="component-who__philosophy-block">
                        <p className="typography__copy">
                            <span className="typography__copy-dropcap">T</span><em>ime</em> -- It is the ultimate commitment to any program. The time required to make life changes is critical to success. As your coach and team mate I will dedicate my time and attention to supporting your goals.
                        </p>
                    </div>
                </div>
            </article>
        );
    }
};

export default Who;


