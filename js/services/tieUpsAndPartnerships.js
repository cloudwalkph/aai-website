var React = require('react');

const TieUpsAndPartnerships = React.createClass({

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
                    <div className="container center-align">
                        <img className="responsive-img" src="img/tieUpsAndPartnerships/Tie_ups_and_Partnership.png" />
                    </div>
                </div>
                {/*SHOW PC ONLY*/}
                <div className="parallax-container valign-wrapper hide-on-med-and-down">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l3 offset-l2 right-align valign">
                                <h5 className="headline">Bringing <span className="aai_orange">Organizations</span> Together</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l5 valign">
                                <p className="right-align">We specialize in building relationships between our clients and other organizations to create a mutually-beneficial partnership that benefits all involved.</p>
                                <p className="right-align">From the sharing of products, licensing, permits, and special arrangements, we help find solutions that generate results when two great organizations work together.</p>
                            </div>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/tieUpsAndPartnerships/image1.jpg" />
                    </div>
                </div>

                {/*SHOW MOBILE ONLY*/}
                <div className="hide-on-large-only">
                    <div className="row">
                        <img src="img/tieUpsAndPartnerships/image1.jpg" style={{width : '160%',transform: 'translate3d(-34%, 0, 0)'}} />
                    </div>
                    <div className="row">
                        <div className="col s12 center-align valign">
                            <h5 className="headline">Bringing <span className="aai_orange">Organizations</span> Together</h5>
                            <p className="right-align">We specialize in building relationships between our clients and other organizations to create a mutually-beneficial partnership that benefits all involved.</p>
                            <p className="right-align">From the sharing of products, licensing, permits, and special arrangements, we help find solutions that generate results when two great organizations work together.</p>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%'}}>
                    <video
                        onMouseEnter={this.playVideo}
                        onMouseOut={this.pauseVideo}
                        onClick={this.handleClick}
                        loop=""
                        poster="img/tieUpsAndPartnerships/vid_placeholder.jpg" 
                        className="responsive-video"
                    >
                        <source />
                    </video>
                </div>

            </div>
        )
    }
});

module.exports = TieUpsAndPartnerships;