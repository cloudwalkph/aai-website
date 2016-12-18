var React = require('react');

const Sampling = React.createClass({

    componentDidMount () {
        $('.parallax').parallax();
        $('.screenImageHeight').height(screen.height);
        $('html,body').animate({scrollTop:0},1000);
    },

    handleClick() {
        
    },

    render() {
        return(
            <div>
                <div className="section screenImageHeight">
                    <center>
                        <img className="responsive-img" src="img/sampling/top.png" />
                    </center>
                </div>

                <div className="parallax-container valign-wrapper">
                    <div className="row">
                        <div className="col s12 m12 l5 right-align valign">
                            <h5>Sample <span className="orange-text">Anywhere</span> to <span className="orange-text">Anyone</span></h5>
                            <p className="grey-text text-darken-4">A nationwide logistics and operations network, allows us to deploy massive sampling campaigns in all major cities and suburban areas in the Philippines.</p>
                            <p className="grey-text text-darken-4">Our main facilities in Metro Manila and our satellite offices in Cebu and Davao provide convenient bases where the manpower and equipment needed to sample at scale can be concentrated and deployed everywhere.</p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/sampling/image1.jpg" />
                    </div>
                </div>

                <div className="parallax-container valign-wrapper">
                    <div className="row">
                        <div className="col s12 m12 l5 offset-l7 left-align valign">
                            <h5>Your Product Direct to <span className="orange-text">Consumers</span></h5>
                            <p className="grey-text text-darken-4">With more than 200+ well-trained and experienced sampling experts, we can deliver your product and message to the consumer whenever or wherever you want to meet them.</p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/sampling/image2.jpg" />
                    </div>
                </div>

                <div className="parallax-container valign-wrapper">
                    <div className="row">
                        <div className="col s12 m12 l5 center-align valign">
                            <h5>Sampling That's More <span className="orange-text">Reliable</span> and <span className="orange-text">Accurate</span></h5>
                            <p>Think it. Make it. Build it. A team of designers, developers and production experts can build anything from stages, booths, ambient media, merchandize and digital ux.</p>
                            <p>This integration of creative design, digital expertise and production  allows our clients to quickly bring their solutions and ideas to life.</p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/sampling/image3.jpg" />
                    </div>
                </div>

                <div className="row container">
                    <div className="col s12 m12 l12 center">
                        <p className="grey-text text-darken-4">Thru AAI InSite and AAI Live, we collect, track and record reliable and accurate sampling data that provides useful insights and learnings from the millions of consumer interactions we generate on-ground.</p>
                    </div>
                </div>

                
            </div>
        )
    }
});

module.exports = Sampling;