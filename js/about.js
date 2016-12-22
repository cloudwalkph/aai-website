var React = require('react');

const About = React.createClass({

    getDefaultProps() {
        return {
            logos: [
                {
                    img: 'img/about/logos/unilever.png'
                },{
                    img: 'img/about/logos/samsung.png'
                },{
                    img: 'img/about/logos/sky.png'
                },{
                    img: 'img/about/logos/alcon.png'
                },{
                    img: 'img/about/logos/wyeth.png'
                },{
                    img: 'img/about/logos/mondelez.png'
                },{
                    img: 'img/about/logos/bk.png'
                },{
                    img: 'img/about/logos/phx.png'
                },{
                    img: 'img/about/logos/pdi.png'
                },{
                    img: 'img/about/logos/pal.png'
                },{
                    img: 'img/about/logos/gw.png'
                },{
                    img: 'img/about/logos/hs.png'
                },{
                    img: 'img/about/logos/iv.png'
                },{
                    img: 'img/about/logos/sanofi.png'
                },{
                    img: 'img/about/logos/h.png'
                },{
                    img: 'img/about/logos/mrm.png'
                },{
                    img: 'img/about/logos/cheil.png'
                },{
                    img: 'img/about/logos/mediacom.png'
                },{
                    img: 'img/about/logos/starcom.png'
                },{
                    img: 'img/about/logos/groupm.png'
                },{
                    img: 'img/about/logos/carat.png'
                }
            ]
        }
    },

    getInitialState() {
        return {
            titleStyle: this.props.titleStyle,
            logos: this.props.logos
        }
    },

    componentDidMount () {
        $('.parallax').parallax();
    },

    render() {
        return(
            <div>

                <div className="screenImageHeight valign-wrapper">
                    <div className="center-align">
                        <img 
                        className="responsive-img" 
                        src="img/about/AAI IMAGE.jpg" 
                        style={{
                            backgroundImage: 'url(img/about/AAI-IMAGE.jpg)', 
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                        />
                    </div>
                </div>

                <div className="container center">
                    <div className="section">
                        <img className="responsive-img" src="img/about/who-we-are.png" />
                    </div>

                    <div className="section">
                        <h5
                            className="headline"
                        >Going Beyond Every Time
                        </h5>

                        <p>Since 2004, we have been driven by our slogan and promise of going &ldquo;beyond expectations&rdquo; by working with passion, dedication and always going the extra mile. These, combined with our expertise, consistency and reliability have made us one of the top local agencies in our field.</p>
                        <p>Our obsession in providing only the best service to our clients has earned us the privilege of having the trust and long-lasting relationships with some of the best brands and companies in the world.</p>
                    </div>

                    <div className="section">
                        <h5
                            className="headline"
                        >Expertise, Experience & Innovation
                        </h5>

                        <p>With more than 12 years of experience in working with top brands from different industries, we have gained extensive knowledge and expertise in providing the highest standards of work and service our clients expect.</p>
                        <p>But we know that those high expectations can only be exceeded by continuously improving our craft thru and provide solutions to the constantly changing needs and challenges of our clients and the industry.</p>
                    </div>

                    <div className="section">
                        <h5
                            className="headline"
                        >OUR CLIENTS
                        </h5>

                        <p>We work with some of the best brands and companies in the world. Each of them, a leader and innovator in their own respective industries. These include consumer goods, technology, pharmaceuticals, media, fast food, and utilities.</p>
                    </div>

                </div>

                <div className="container">
                    <div className="row">
                        { this.state.logos.map(function(v,i) {
                            return(
                                <div key={i} className="col s2"><img src={v.img} /></div>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = About;