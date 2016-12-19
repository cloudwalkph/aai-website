var React = require('react');

const News = React.createClass({

    handleClick() {
        
    },

    handleMouseEnter(e) {
    	$(e.target).children('a').removeClass('hide-on-med-and-up').addClass('buttonHoverAnimate');
    },

    handleMouseLeave(e) {
    	$(e.target).children('a').addClass('hide-on-med-and-up').removeClass('buttonHoverAnimate');
    },

    componentDidMount() {
    	$('html,body').animate({scrollTop:0},1000);
    },

    render() {
        return(
            <div className="section">
            	<div className="container">
	                <center>
                        <img className="responsive-img" src="img/news.png" />
                    </center>
	            </div>
	            <div className="container">
	            	<div className="row">
		            	<div className="col s12 m4 l4">
		            		<div className="card z-depth-0">
	                            <div className="card-image">
	                                <img className="responsive-img" src="img/news/breeze.png" />
	                                <span className="card-title"></span>
	                            </div>
	                            <div className="card-content">
	                            	<div className="section center-align">
	                            		<strong style={{fontSize: '21px'}}>BREEZE SETS A NEW GUINNES WORLD RECORD</strong>
	                            	</div>
	                            	<div className="section">
	                            		<p className="fontSizeParagraph">Breeze detergent has set a new guinnes world record that proves its superior washing power over its rivals</p>
	                            	</div>
	                            	<p className="fontSizeParagraph">With Activation Advertising leading a massive logistical and operational undertaking</p>
	                            </div>
	                            <div className="card-action" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
	                                <a className="btn orange accent-3 hide-on-med-and-up z-depth-0">Learn More</a>
	                            </div>
	                        </div>
		            	</div>
		            	<div className="col s12 m4 l4">
		            		<div className="card z-depth-0">
	                            <div className="card-image">
	                                <img className="responsive-img" src="img/news/barkada.png" />
	                                <span className="card-title"></span>
	                            </div>
	                            <div className="card-content">
	                            	<div className="section center-align">
	                            		<strong style={{fontSize: '21px'}}>A NEW ULTIMATE BANDKADA IS FINALLY CROWNED</strong>
	                            	</div>
	                            	<div className="section">
	                            		<p className="fontSizeParagraph">Breeze detergent has set a new guinnes world record that proves its superior washing power over its rivals</p>
	                            	</div>
	                            	<p className="fontSizeParagraph">With Activation Advertising leading a massive logistical and operational undertaking</p>
	                            </div>
	                            <div className="card-action" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
	                                <a className="btn orange accent-3 hide-on-med-and-up z-depth-0">Learn More</a>
	                            </div>
	                        </div>
		            	</div>
		            	<div className="col s12 m4 l4">
		            		<div className="card z-depth-0">
	                            <div className="card-image">
	                                <img className="responsive-img" src="img/news/ponds.png" />
	                                <span className="card-title"></span>
	                            </div>
	                            <div className="card-content">
	                            	<div className="section center-align">
	                            		<strong style={{fontSize: '21px'}}>FOR THE PHILIPPINE'S MOST BEAUTIFUL FACES</strong>
	                            	</div>
	                            	<div className="section">
	                            		<p className="fontSizeParagraph">Breeze detergent has set a new guinnes world record that proves its superior washing power over its rivals</p>
	                            	</div>
	                            	<p className="fontSizeParagraph">With Activation Advertising leading a massive logistical and operational undertaking</p>
	                            </div>
	                            <div className="card-action" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
	                                <a className="btn orange accent-3 hide-on-med-and-up z-depth-0">Learn More</a>
	                            </div>
	                        </div>
		            	</div>
	            	</div>
	            </div>
            </div>
        )
    }
});

module.exports = News;