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
                <div className="valign-wrapper">
                    <div className="container center-align" style={{padding : '30px 0'}}>
                        <img className="responsive-img" src="img/events/Events.png" />
                    </div>
                </div>

                {/*SHOW PC ONLY*/}
                <div className="parallax-container hide-on-med-and-down">
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
                {/*SHOW MOBILE ONLY*/}
                <div className="hide-on-large-only" style={{width : '100%',overflow: 'hidden'}}>
                    <div className="row">
                        <img src="img/events/eventHead.jpg" style={{width : '170%',transform: 'translate3d(-38%, 0px, 17px)'}} />
                    </div>
                    <div className="row">
                        <div className="col s12 serviceContentParagraph valign">
                            <h5 className="headline">Big or Small, What Truly Matters are the <span className="aai_orange">Moments</span></h5>
                            <p>An event is simply a series of amazing experiences shared ine one moment.</p>
                            <p>
                                Whether it's a grand concert enjoyed by thousands of fans, a sporting
                                spectable watched by the whole world, or an intimate product unveiling,
                                we create events to create memorable moments that will be remembered by
                                those who experience it.
                            </p>
                        </div>
                    </div>
                </div>

                {/*SHOW PC ONLY*/}
                <div className="parallax-container valign-wrapper hide-on-med-and-down">

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
                {/*SHOW MOBILE ONLY*/}
                <div className="hide-on-large-only" style={{width: '100%',overflow: 'hidden'}}>
                    <div className="row">
                        <img src="img/events/Rio.png" style={{width : '100%',width: '105%',transform: 'translate3d(15%, 0px, 0px)'}} />
                    </div>
                    <div className="row">
                        <div className="col s12 serviceContentParagraph valign">
                            <h5 className="headline"><span className="aai_orange">Plan</span> it. <span className="aai_orange">Do</span> it. <span className="aai_orange">Live</span> it.</h5>
                            <p>We are fully equipped to mount unique and tailor-fit events of all sizes from anywhere in the Philippines.</p>
                            <p>A dedicated team of experts ensures that that the entire process of making an event runs smoothly from planning, logistics and implementation in order to exceed the expectations of all our clients.</p>
                        </div>
                    </div>
                </div>

                <div style={{width: '100%'}}>
                    <video
                        onMouseEnter={this.playVideo}
                        onMouseOut={this.pauseVideo}
                        onClick={this.handleClick}
                        loop=""
                        poster="img/events/vid-placeholder.jpg" 
                        className="responsive-video"
                    >
                        <source />
                    </video>
                </div>

            </div>
        )
    }
});

module.exports = Events;