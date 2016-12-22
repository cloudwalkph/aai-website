var React = require('react');

const Events = React.createClass({

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
                <div className="screenImageHeight valign-wrapper">
                    <div className="container center-align">
                        <img className="responsive-img" src="img/events/Events.png" />
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="section">
                        <div className="row container">
                            <div className="col s12 m12 l5 center-align">
                                <h3 className="headline white-text text_engrave">Big or Small, What Truly Matters are the <span className="aai_orange">Moments</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/events/image2.jpg" />
                    </div>
                </div>

                <div className="parallax-container valign-wrapper">

                    <div className="row container">
                        <div className="col s12 m12 l6 offset-l6 center-align valign">
                            <h3 className="headline text_engrave"><span className="aai_orange">Plan</span> it. <span className="aai_orange">Do</span> it. <span className="aai_orange">Live</span> it.</h3>
                            <p>We are fully equipped to mount unique and tailor-fit events of all sizes from anywhere in the Philippines.</p>
                            <p>A dedicated team of experts ensures that that the entire process of making an event runs smoothly from planning, logistics and implementation in order to exceed the expectations of all our clients.</p>
                        </div>
                    </div>

                    <div className="parallax">
                        <img src="img/events/run-to-your-beat.jpg" />
                    </div>
                </div>


                <div style={{width: '100%'}}>
                    <video
                        onMouseEnter={this.playVideo}
                        onMouseOut={this.pauseVideo}
                        onClick={this.handleClick}
                        loop=""
                        poster="http://assets.yeticycles.com/images/bikes/sb55/2016_NewZealand_SB55_Enviorment-cover.jpg" 
                        className="responsive-video"
                    >
                        <source src="http://assets.yeticycles.com/video/2016_NewZealand_SB55_Enviorment_HD.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
        )
    }
});

module.exports = Events;