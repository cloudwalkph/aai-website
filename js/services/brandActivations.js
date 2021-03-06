var React = require('react');

const BrandActivations = React.createClass({


    drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Consumer', 'Engagements'],
            ['Kids', 15],
            ['Teens', 20],
            ['Millenials', 35],
            ['30 - 40', 25],
            ['40 and Above', 15]
        ]);

        var options = {
            title: '',
            slices: {
                0: { color: '#06e6f0' },
                1: { color: '#f6ee00' },
                2: { color: '#06a760' },
                3: { color: '#247fe5' },
                4: { color: '#ee640a' }
            },
            legend: {
                position: 'bottom'
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);

    },

    ageGroupChart() {
        var data = google.visualization.arrayToDataTable([
            ['Consumer', 'Engagements'],
            ['40 and Above', 100],
            ['30 - 39', 100],
            ['20 - 29', 90],
            ['10 - 19', 45],
            ['0 - 9', 90],
        ]);

        var options = {
            enableInteractivity: false,
            fontName: 'Gotham Medium',
            legend: {
                alignment: 'center',
                position: 'labeled',
                textStyle: { 
                    color: '#383938',
                    fontName: 'Gotham Book',
                    fontSize: 'auto',
                    bold: false,
                    italic: false 
                }
            },
            pieSliceBorderColor: '#f37f20',
            pieSliceText: 'none',
            slices: {
                0: { color: '#f37f20', offset: 0.0 },
                1: { color: '#532400', offset: 0.0 },
                2: { color: '#7a3d00', offset: 0.0 },
                3: { color: '#9f530c', offset: 0.0 },
                4: { color: '#c76819', offset: 0.0 }
            },
            title: 'Age Group',
        };

        var chart = new google.visualization.PieChart(document.getElementById('age_group'));
        var mobileChart = new google.visualization.PieChart(document.getElementById('age_mobile_group'));
        chart.draw(data, options);
        mobileChart.draw(data, options);
    },

    componentDidMount () {
        $('.parallax').parallax();
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(this.ageGroupChart);
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
                        <img className="responsive-img" src="img/brandActivations/BrandActivations.png" alt="Breeze sets a New Guiness World Record" />
                    </div>
                </div>

                {/*SHOW PC ONLY*/}
                <div className="hide-on-med-and-down">
	                <div className="parallax-container valign-wrapper">
	                    <div className="row">
	                        <div className="col s12 m12 l4 offset-l2 right-align valign">
	                            <h5 className="headline">
	                                <span className="aai_orange">Experiences</span> that <br />Truly Matter
	                            </h5>
	                            <p className="right-align">We create experiences the are truly memorable. From trying out a new product for the first time, or simply sharing a unique moment, we create activation campaigns that deliver our clients' message in the most profound way.</p>
	                        </div>
	                    </div>
	                    <div className="parallax">
	                        <img src="img/brandActivations/icecream.png" />
	                    </div>
	                </div>
	                <div className="parallax-container valign-wrapper">
	                    <div className="row">
	                        <div className="col s12 m12 l5 left-align">
	                            <div className="valign">
	                                <center>
	                                    <h5 className="headline white-text text_engrave">
	                                        Experiences that Can Be <span className="aai_orange">Measured</span>
	                                    </h5>
	                                </center>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="parallax">
	                        <img src="img/brandActivations/verifyImageMobile.png" />
	                    </div>
	                </div>
	                <div className="section">
	                    <div className="">
	                        <div className="row">
	                            <div className="col s12 m12 l4 offset-l2 serviceContentParagraph">
	                                <img className="responsive-img" src="img/brandActivations/verify_logo.png" />
	                                <p>Thru the on-ground validation platform <strong>Verify</strong>, we collect, track and record accurate and reliable data from the thousands consumer engagements we generate.</p>
	                                <p>This data allows us to gain a deeper understanding of how consumers react during our interactions.</p>
	                            </div>
	                            <div className="col s12 m12 l6">
	                                <div id="age_group"></div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>

                {/*SHOW MOBILE ONLY*/}
                <div className="hide-on-large-only">
	                <div className="" style={{width : '100%',overflow: 'hidden'}}>
	                    <div className="row">
	                        <img src="img/brandActivations/icecream.png" style={{width : '140%'}} />
	                    </div>
	                    <div className="row">
	                        <div className="col s12 valign serviceContentParagraph">
	                            <h5 className="headline">
	                                <span className="aai_orange">Experiences</span> that Truly Matter
	                            </h5>
	                            <p>We create experiences the are truly memorable. From trying out a new product for the first time, or simply sharing a unique moment, we create activation campaigns that deliver our clients' message in the most profound way.</p>
	                        </div>
	                    </div>
	                </div>
	            	
	            	<div className="">
	            		<div className="row">
	            			<img src="img/brandActivations/verifyImageMobile.png" style={{width : '100%'}}/>
	            		</div>
	            		<div className="row">
	            			<h5 className="headline center-align">
	                            Experiences that Can Be <br/><span className="aai_orange">Measured</span>
	                        </h5>
	            		</div>
	            	</div>
	                
	                <div className="section">
	                	<div className="row">
	                		<div className="col s12">
	                			<div className="center-align">
	                            	<img className="responsive-img" src="img/brandActivations/verify_logo.png" style={{width : '40%'}} />
	                            </div>
	                        </div>
	                        <div className="col s12">
	                            <div id="age_mobile_group"></div>
	                        </div>
	                        <div className="col s12 serviceContentParagraph">
	                        	<p>Thru the on-ground validation platform <strong>Verify</strong>, we collect, track and record accurate and reliable data from the thousands consumer engagements we generate.</p>
	                            <p>This data allows us to gain a deeper understanding of how consumers react during our interactions.</p>
	                        </div>
	                	</div>
	                </div>
                </div>
                <div className="video-container">
                    <video
                        onMouseEnter={this.playVideo}
                        onMouseOut={this.pauseVideo}
                        onClick={this.handleClick}
                        loop=""
                        poster="img/brandActivations/vid-placeholder.jpg" 
                        className="responsive-video"
                    >
                        <source />
                    </video>
                </div>

            </div>
        )
    }
});

module.exports = BrandActivations;