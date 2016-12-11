var React = require('react');

const About = React.createClass({

    getDefaultProps() {
        return {
            titleStyle: {
                fontFamily: 'Norwester',
                textTransform: 'uppercase'
            }
        }
    },

    getInitialState() {
        return {
            titleStyle: this.props.titleStyle
        }
    },

    render() {
        return(
            <div className="section">
                <div className="center">
                    <img className="responsive-img" src="img/about/activations-who-we-are.png" />
                </div>

                <div className="container center">

                    <div className="section">
                        <h5
                            className="blue-grey-text text-darken-4"
                            style={this.state.titleStyle}
                        >Going Beyond Every Time
                        </h5>

                        <p className="brown-text text-darken-4">Since 2004, we have been driven by our slogan and promise of going &ldquo;beyond expectations&rdquo; by working with passion, dedication and always going the extra mile. These, combined with our expertise, consistency and reliability have made us one of the top local agencies in our field.</p>
                        <p className="brown-text text-darken-4">Our obsession in providing only the best service to our clients has earned us the privilege of having the trust and long-lasting relationships with some of the best brands and companies in the world.</p>
                    </div>

                    <div className="section">
                        <h5
                            className="blue-grey-text text-darken-4"
                            style={this.state.titleStyle}
                        >Expertise, Experience & Innovation
                        </h5>

                        <p className="brown-text text-darken-4">With more than 12 years of experience in working with top brands from different industries, we have gained extensive knowledge and expertise in providing the highest standards of work and service our clients expect.</p>
                        <p className="brown-text text-darken-4">But we know that those high expectations can only be exceeded by continuously improving our craft thru and provide solutions to the constantly changing needs and challenges of our clients and the industry.</p>
                    </div>

                    <div className="section">
                        <h5
                            className="blue-grey-text text-darken-4"
                            style={this.state.titleStyle}
                        >OUR CLIENTS
                        </h5>

                        <p className="brown-text text-darken-4">We work with some of the best brands and companies in the world. Each of them, a leader and innovator in their own respective industries. These include consumer goods, technology, pharmaceuticals, media, fast food, and utilities.</p>
                    </div>

                </div>

                <div className="center">
                    <img className="responsive-img" src="img/about/client-logos.png" />
                </div>
            </div>
        )
    }
});

module.exports = About;