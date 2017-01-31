var React = require('react');

const DataAndAnalytics = React.createClass({

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
                {/*SHOW PC ONLY*/}
                <div className="parallax-container valign-wrapper hide-on-med-and-down">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l4 offset-l1 right-align valign">
                                <h5 className="headline"><span className="aai_orange">On-ground</span> knowledge and information.</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l5 valign">
                                <p className="right-align">We provide a comprehensive and regularly updated database of important on-ground venues like malls, schools, offices, LGUs and local communities.</p>
                                <p className="right-align">These include key information like population, demographics, foot-traffic, rates and venue measurements that will be essential in the planning and implementation of all on-ground projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/dataAndAnalytics/image1.jpg" />
                    </div>
                </div>

                {/*SHOW MOBILE ONLY*/}
                <div className="hide-on-large-only">
                    <div className="row">
                        <img src="img/dataAndAnalytics/image1.jpg" style={{width : '160%',transform: 'translate3d(-34%, 0, 0)'}} />
                    </div>
                    <div className="row">
                        <div className="col s12 center-align valign">
                            <h5 className="headline"><span className="aai_orange">On-ground</span> knowledge and information.</h5>
                            <p className="right-align">We provide a comprehensive and regularly updated database of important on-ground venues like malls, schools, offices, LGUs and local communities.</p>
                            <p className="right-align">These include key information like population, demographics, foot-traffic, rates and venue measurements that will be essential in the planning and implementation of all on-ground projects.</p>
                        </div>
                    </div>
                </div>
                <div className="video-container">
                    <video
                        onMouseEnter={this.playVideo}
                        onMouseOut={this.pauseVideo}
                        onClick={this.handleClick}
                        loop=""
                        poster="img/dataAndAnalytics/vid-placeholder.jpg" 
                        className="responsive-video"
                    >
                        <source />
                    </video>
                </div>

            </div>
        )
    }
});

module.exports = DataAndAnalytics;