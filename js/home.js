var React = require('react');

var {Link} = window.ReactRouter;

const Home = React.createClass({

    componentDidMount () {
        $('.slider').slider({
            full_width: true,
            height: 500,
            indicators: true
        });
    },

    handleClick(e) {
        this.props.getPage(e.target.id);
    },

    render() {
        return(
            <div>
                <div className="slider fullscreen">
                    <ul className="slides white">
                        <li>
                            <img className="responsive-img" src="img/1.jpg" />

                            <div className="caption right-align">
                                <div className="row">
                                    <div className="col s4 offset-s8">
                                        <center>
                                            <h4 className="cyan-text text-darken-4" style={{textTransform: 'uppercase'}}>Advertising that go <span className="orange-text text-accent-3">Beyond</span> Expectations</h4>
                                        </center>
                                        <p className="grey-text text-darken-4">We are a full-service ad agency that specializes in creating meaningful brand experiences that bring our clients and their customers closer together.</p>
                                        <p className="grey-text text-darken-4">Using efficient traditional methods enhanced by relevant innovations, we provide effective and smarter services that go beyond what&rsquo;s expected in below-the-line advertising.</p>
                                        <center>
                                            <a
                                                id="about"
                                                onClick={this.handleClick}
                                                className="waves-effect waves-orange orange accent-3 btn"
                                                style={{textTransform: 'uppercase'}}
                                            >
                                                Our Products and Services
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img className="responsive-img" src="img/2.jpg" />

                            <div className="caption left-align">
                                <div className="row">
                                    <div className="col s4">
                                        <center>
                                            <h4 className="cyan-text text-darken-4" style={{textTransform: 'uppercase'}}>Sampling <span className="orange-text text-accent-3">+</span></h4>
                                        </center>
                                        <p className="grey-text text-darken-4">A nationwide logistics and operations network, allows us to deploy massive sampling campaigns in all major cities and suburban areas with the utmost efficiency.</p>
                                        <p className="grey-text text-darken-4">Digital monitoring systems provide key insights from data gathered from millions of consumer interactions.</p>
                                        <center>
                                            <a
                                                id="sampling"
                                                onClick={this.handleClick}
                                                className="waves-effect waves-orange orange accent-3 btn"
                                                style={{textTransform: 'uppercase'}}
                                            >
                                                Learn More
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img className="responsive-img" src="img/3.jpg" />

                            <div className="caption right-align">
                                <div className="row">
                                    <div className="col s4 offset-s8">
                                        <center>
                                            <h4 className="cyan-text text-darken-4" style={{textTransform: 'uppercase'}}>DESIGN <span className="orange-text text-accent-3">&</span> PRODUCTION</h4>
                                        </center>
                                        <p className="grey-text text-darken-4">Design and build anything from stages, booths, ambient media, UX and merchandize.</p>
                                        <p className="grey-text text-darken-4">Our team of professionals specializing in design, graphics, 3D modeling, videography and animation will bring your ideas to life.</p>
                                        <center>
                                            <a
                                                id="brandActivations"
                                                onClick={this.handleClick}
                                                className="waves-effect waves-orange orange accent-3 btn"
                                                style={{textTransform: 'uppercase'}}
                                            >
                                                Learn More
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img className="responsive-img" src="img/4.jpg" />

                            <div className="caption left-align">
                                <div className="row">
                                    <div className="col s4">
                                        <center>
                                            <h4 className="white-text" style={{textTransform: 'uppercase'}}>Samsung launches <span className="orange-text text-accent-3">Gear s2</span></h4>
                                        </center>
                                        <p className="white-text">Pellentesque vitae dui cursus, tincidunt ex nec, feugiat dui. Aenean tempus venenatis ultricies. Vivamus aliquet, enim sed pulvinar commodo, lacus sapien varius tellus, sed convallis libero lacus a lacus.</p>
                                        <p className="white-text">In hac habitasse platea dictumst. Vivamus condimentum purus vel egestas euismod.</p>
                                        <center>
                                            <a
                                                id="news"
                                                onClick={this.handleClick}
                                                className="waves-effect waves-orange orange accent-3 btn"
                                                style={{textTransform: 'uppercase'}}
                                            >
                                                View Story
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Home;