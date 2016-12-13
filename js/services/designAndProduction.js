var React = require('react');

const DesignAndProduction = React.createClass({

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
                        <img className="responsive-img" src="img/designAndProduction/top.png" />
                    </center>
                </div>

                <div className="parallax-container valign-wrapper">
                    <div className="row container">
                        <div className="col s12 m12 l6 right-align valign">
                            <h5>Bring your <span className="orange-text">ideas</span> to life</h5>
                            <p className="brown-text text-brown-4">Think it. Make it. Build it. A team of designers, developers and production experts can build anything from stages, booths, ambient media, merchandize and digital ux.</p>
                            <p className="brown-text text-brown-4">This integration of creative design, digital expertise and production  allows our clients to quickly bring their solutions and ideas to life. </p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/designAndProduction/image1.jpg" />
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

                <div className="parallax-container valign-wrapper">
                    <div className="row container">
                        <div className="col s12 m12 l6 offset-l6 left-align valign">
                            <h4>MADE <span className="orange-text">RAPIDLY</span>:</h4>
                            <h5 className="brown-text text-brown-4">From Design<br />to Roll-out</h5>
                            <p className="brown-text text-brown-4">From the initial sketch to the final roll-out, our design process emphasizes a close collaboration of designers, developers and builders to rapidly create things that work immediately.</p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/designAndProduction/image2.jpg" />
                    </div>
                </div>

                <div className="parallax-container valign-wrapper">
                    <div className="row container">
                        <div className="col s12 m12 l6 left-align valign">
                            <h4 className="white-text text_engrave"><span className="orange-text">Quality</span> and <span className="orange-text">Attention to Detail</span></h4>
                            <p className="white-text">Whether we're creating a simple booth, an intuitive app or a massive concert stage, we ensure that both design and the final product was made with an uncompromising desire for quality and strict attention to detail.</p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/designAndProduction/image3.jpg" />
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = DesignAndProduction;