var React = require('react');

const Sampling = React.createClass({

    componentDidMount () {
        $('.parallax').parallax();
        $('html,body').animate({scrollTop:0},1000);
    },

    handleClick(e) {
        if(e.target.paused) {
            this.playVideo(e);
        } else {
            this.pauseVideo(e);
        }
    },

    playVideo(e) {
        e.target.play();
    },

    pauseVideo(e) {
        e.target.pause();
    },

    render() {
        return(
            <div>
                <div className="valign-wrapper">
                    <div className="container center-align" style={{padding : '30px 0'}}>
                        <img className="responsive-img" src="img/sampling/Sampling.png" />
                    </div>
                </div>

                {/*SHOW ONLY PC*/}
                <div className="hide-on-med-and-down">
	                <div className="parallax-container valign-wrapper ">
	                    <div className="row container">
	                        <div className="col s12 m12 l5 right-align valign">
	                            <h5 className="headline">Sample <span className="aai_orange">Anywhere</span> to <span className="aai_orange">Anyone</span></h5>
	                            <p>A nationwide logistics and operations network, allows us to deploy massive sampling campaigns in all major cities and suburban areas in the Philippines.</p>
	                            <p>Our main facilities in Metro Manila and our satellite offices in Cebu and Davao provide convenient bases where the manpower and equipment needed to sample at scale can be concentrated and deployed everywhere.</p>
	                        </div>
	                    </div>
	                    <div className="parallax">
	                        <img src="img/sampling/image1.jpg" />
	                    </div>
	                </div>
	                <div className="parallax-container valign-wrapper">
	                    <div className="row container">
	                        <div className="col s12 m12 l5 offset-l7 left-align valign">
	                            <h5 className="headline">Your Product Direct to <span className="aai_orange">Consumers</span></h5>
	                            <p>With more than 200+ well-trained and experienced sampling experts, we can deliver your product and message to the consumer whenever or wherever you want to meet them.</p>
	                        </div>
	                    </div>
	                    <div className="parallax">
	                        <img src="img/sampling/image2.jpg" />
	                    </div>
	                </div>
	                <div className="parallax-container valign-wrapper">
	                    <div className="row container">
	                        <div className="col s12 m12 l4 offset-l1 center-align valign">
	                            <h3 className="headline">Accurate, Reliable and <span className="aai_orange">Verified</span></h3>
	                            <img src="img/sampling/verify.png" />
	                        </div>
	                    </div>
	                    <div className="parallax">
	                        <img src="img/sampling/image3.jpg" />
	                    </div>
	                </div>

	                <div className="section row container">
	                    <div className="col s12 m12 l12">
	                        <p className="center-align">We&rsquo;re the first agency to use the Verify on-ground validation platform.</p>
	                        <p className="center-align">Real-time data tracking collects reliable and accurate sampling data to gain valuable learnings from millions of consumer interactions.</p>
	                        <p className="center-align">Integrated GPS technology lets the agency and the client track and monitor all manpower movements the verify if target locations were visited.</p>
	                    </div>
	                </div>
                </div>

                {/*SHOW MOBILE ONLY*/}
                <div className="hide-on-large-only">
	                <div className="" style={{width : '100%', overflow : 'hidden'}}>
	                    <div className="row">
	                        <img src="img/sampling/image1.jpg" style={{width: '210%',transform: 'translate3d(-37%, 0px, 0px)'}} />
	                    </div>
	                    <div className="row">
	                        <div className="col s12 valign serviceContentParagraph">
	                            <h5 className="headline">Sample <span className="aai_orange">Anywhere</span> to <span className="aai_orange">Anyone</span></h5>
	                            <p>A nationwide logistics and operations network, allows us to deploy massive sampling campaigns in all major cities and suburban areas in the Philippines.</p>
	                            <p>Our main facilities in Metro Manila and our satellite offices in Cebu and Davao provide convenient bases where the manpower and equipment needed to sample at scale can be concentrated and deployed everywhere.</p>
	                        </div>
	                    </div>
	                </div>
	                <div className="">
	                    <div className="row">
	                        <img src="img/sampling/IMAGE3.png" style={{width : '100%'}} />
	                    </div>
	                    <div className="row">
	                        <div className="col s12 serviceContentParagraph valign">
	                            <h5 className="headline">Your Product Direct to <span className="aai_orange">Consumers</span></h5>
	                            <p>With more than 200+ well-trained and experienced sampling experts, we can deliver your product and message to the consumer whenever or wherever you want to meet them.</p>
	                        </div>
	                    </div>
	                </div>
	                <div className="" style={{width : '100%', overflow : 'hidden'}}>
	                    <div className="row">
	                        <img src="img/sampling/image3.jpg" style={{width : '160%',transform: 'translate3d(-34%, 0 ,0)'}} />
	                    </div>
	                    <div className="row">
	                        <div className="col s12 center-align valign">
	                            <h5 className="headline">Accurate, Reliable and <span className="aai_orange">Verified</span></h5>
	                            <img className="responsive-img" src="img/brandActivations/verify_logo.png" style={{width : '48%',marginTop : '25px'}} />
	                        </div>
	                    </div>
	                </div>

	                <div className="row container">
	                    <div className="col s12 m12 l12 serviceContentParagraph">
	                        <p>We&rsquo;re the first agency to use the Verify on-ground validation platform.</p>
	                        <p>Real-time data tracking collects reliable and accurate sampling data to gain valuable learnings from millions of consumer interactions.</p>
	                        <p>Integrated GPS technology lets the agency and the client track and monitor all manpower movements the verify if target locations were visited.</p>
	                    </div>
	                </div>
                </div>

                <div className="video-container">
                    <video
                        onMouseEnter={this.playVideo}
                        onMouseOut={this.pauseVideo}
                        onClick={this.handleClick}
                        loop=""
                        poster="img/sampling/vid-placeholder.jpg" 
                        className="responsive-video"
                    >
                        <source />
                    </video>
                </div>

            </div>
        )
    }
});

module.exports = Sampling;