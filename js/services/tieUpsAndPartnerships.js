var React = require('react');

const TieUpsAndPartnerships = React.createClass({

    componentDidMount () {
        $('.parallax').parallax();
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

                <div className="section">
                    <center>
                        <img className="responsive-img" src="img/tieUpsAndPartnerships/top.png" />
                    </center>
                </div>

                <div className="parallax-container valign-wrapper">
                    <div className="row container">
                        <div className="col s12 m12 l6 right-align valign">
                            <h5>Bringing <span className="orange-text">Organizations</span> Together</h5>
                            <p className="brown-text text-brown-4">We specialize in building relationships between our clients and other organizations to create a mutually-beneficial partnership that benefits all involved.</p>
                            <p className="brown-text text-brown-4">From the sharing of products, licensing, permits, and special arrangements, we help find solutions that generate results when two great organizations work together. </p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/tieUpsAndPartnerships/image1.jpg" />
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

module.exports = TieUpsAndPartnerships;