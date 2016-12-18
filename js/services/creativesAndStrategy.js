var React = require('react');

const CreativesAndStrategy = React.createClass({

    componentDidMount () {
        $('.parallax').parallax();
        $('.screenImageHeight').height(screen.height);
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
                <div className="section screenImageHeight">
                    <center>
                        <img className="responsive-img" src="img/creativesAndStrategy/top.png" />
                    </center>
                </div>

                <div className="parallax-container valign-wrapper">
                    <div className="row container">
                        <div className="col s12 m12 l6 right-align valign">
                            <h5>Engaging <span className="orange-text">Creative</span> <br />Based on <span className="orange-text">Informed Strategy</span></h5>
                            <p className="brown-text text-brown-4">Our team of advertising professionals and creatives - all with years of industry experience, work tirelessly to ensure that an efficient and effective plan is followed in order to meet or exceed our clients' goals and expectations.</p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/creativesAndStrategy/image1.jpg" />
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

module.exports = CreativesAndStrategy;