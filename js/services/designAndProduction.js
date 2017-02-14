var React = require('react');

const DesignAndProduction = React.createClass({

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
                        <img className="responsive-img" src="img/designAndProduction/Design_and_Production.png" />
                    </div>
                </div>

                {/*SHOW ONLY PC*/}
                <div className="hide-on-med-and-down">
	                <div className="parallax-container valign-wrapper">
	                    <div className="row container">
	                        <div className="col s12 m12 l5 right-align valign">
	                            <h5 className="headline">Bring your <span className="aai_orange">ideas</span> to life</h5>
	                            <p>Think it. Make it. Build it. A team of designers, developers and production experts can build anything from stages, booths, ambient media, merchandize and digital ux.</p>
	                            <p>This integration of creative design, digital expertise and production  allows our clients to quickly bring their solutions and ideas to life. </p>
	                        </div>
	                    </div>
	                    <div className="parallax">
	                        <img src="img/designAndProduction/image1.jpg" />
	                    </div>
	                </div>
	                <div className="video-container">
	                    <video
	                        onMouseEnter={this.playVideo}
	                        onMouseOut={this.pauseVideo}
	                        onClick={this.handleClick}
	                        loop=""
	                        poster="img/designAndProduction/video.jpg" 
	                        className="responsive-video"
	                    >
	                        <source />
	                    </video>
	                </div>
	                
	                <div className="parallax-container valign-wrapper">
	                    <div className="row container">
	                        <div className="col s12 m12 l5 offset-l7 left-align valign">
	                            <h4 className="headline">MADE <span className="aai_orange">RAPIDLY</span>:</h4>
	                            <h5 className="headline brown-text text-brown-4">From Design<br />to Roll-out</h5>
	                            <p>From the initial sketch to the final roll-out, our design process emphasizes a close collaboration of designers, developers and builders to rapidly create things that work immediately.</p>
	                        </div>
	                    </div>
	                    <div className="parallax">
	                        <img src="img/designAndProduction/image2.jpg" />
	                    </div>
	                </div>
	                <div className="parallax-container valign-wrapper">
	                    <div className="container">
	                        <div className="row">
	                            <div className="col s12 m12 l3 offset-l2 right-align valign">
	                                <h4 className="headline white-text text_engrave">Quality and Attention to <span className="aai_orange">Detail</span></h4>
	                            </div>
	                        </div>
	                        <div className="row">
	                            <div className="col s12 m12 l5 valign">
	                                <p className="white-text right-align">Whether we're creating a simple booth, an intuitive app or a massive concert stage, we ensure that both design and the final product was made with an uncompromising desire for quality and strict attention to detail.</p>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="parallax">
	                        <img src="img/designAndProduction/image3.jpg" />
	                    </div>
	                </div>
				</div>

                {/*SHOW MOBILE ONLY*/}
                <div className="hide-on-large-only">
                    <div className="row" style={{width : '100%', overflow : 'hidden'}}>
                        <img src="img/designAndProduction/Design.png" style={{width : '106%',transform: 'translate3d(0, 0, 0)'}} />
                    </div>
                    <div className="row">
                        <div className="col s12 serviceContentParagraph valign">
                            <h5 className="headline">Bring your <span className="aai_orange">ideas</span> to life</h5>
                            <p>Think it. Make it. Build it. A team of designers, developers and production experts can build anything from stages, booths, ambient media, merchandize and digital ux.</p>
                            <p>This integration of creative design, digital expertise and production  allows our clients to quickly bring their solutions and ideas to life. </p>
                        </div>
                    </div>
                
                    <div className="row" style={{width : '100%',overflow : 'hidden'}}>
                        <img src="img/designAndProduction/image2.jpg" style={{width : '227%',transform: 'translate3d(-12%, 0, 0)'}} />
                    </div>
                    <div className="row">
                        <div className="col s12 serviceContentParagraph valign">
                            <h5 className="headline">MADE <span className="aai_orange">RAPIDLY</span>:</h5>
                            <h5 className="headline brown-text text-brown-4">From Design to Roll-out</h5>
                            <p>From the initial sketch to the final roll-out, our design process emphasizes a close collaboration of designers, developers and builders to rapidly create things that work immediately.</p>
                        </div>
                    </div>
                
                    <div className="parallax-container valign-wrapper" style={{height : '300px'}}>
	                    <div className="container">
	                        <div className="row" style={{marginBottom : 0}}>
	                            <div className="col s12 m12 l3 offset-l2 center-align valign">
	                                <h4 className="headline white-text" style={{marginBottom : 0}}>Quality and Attention to <span className="aai_orange">Detail</span></h4>
	                            </div>
	                        </div>
	                        <div className="row">
	                            <div className="col s12 m12 l5 valign">
	                                <p className="white-text text_engrave center-align">Whether we're creating a simple booth, an intuitive app or a massive concert stage, we ensure that both design and the final product was made with an uncompromising desire for quality and strict attention to detail.</p>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="parallax productionTranslate">
	                        <img src="img/designAndProduction/image3.jpg" />
	                    </div>
	                </div>
                </div>
            </div>
        )
    }
});

module.exports = DesignAndProduction;