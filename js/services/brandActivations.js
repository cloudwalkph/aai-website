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

    componentDidMount () {
        $('.parallax').parallax();
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(this.drawChart);
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
                        <img className="responsive-img" src="img/brandActivations/top.png" alt="Breeze sets a New Guiness World Record" />
                    </center>
                </div>

                <div className="parallax-container valign-wrapper">
                    <div className="row">
                        <div className="col s12 m12 l3 offset-l3 right-align valign">
                            <h5 className="blue-grey-text text-darken-4">
                                <span className="orange-text text-accent-3">Experiences</span> that <br />Truly Matter
                            </h5>
                            <p>We create experiences the are truly memorable. From trying out a new product for the first time, or simply sharing a unique moment, we create activation campaigns that deliver our clients' message in the most profound way.</p>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/brandActivations/Breeze-sets-a-New-Guinness-World-Record.png" />
                    </div>
                </div>
                
                <div className="parallax-container valign-wrapper">
                    <div className="row">
                        <div className="col s12 m12 l5 left-align">
                            <div className="valign">
                                <center>
                                    <h2 className="white-text text_engrave">
                                        Experiences that Can Be <span className="orange-text text-accent-3">Measured</span>
                                    </h2>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src="img/brandActivations/image.jpg" />
                    </div>
                </div>

                <div className="section valign-wrapper">
                    <div className="row">
                        <div className="col s12 m12 l4 offset-l2 valign">
                            <p>Thru <strong>AAI InSite</strong> and <strong>AAI Live</strong>, we collect, track and record accurate and reliable data from the thousands consumer engagements we generate.</p>
                            <p>This data allows us to gain useful insights and a deeper understanding of how consumers react after our interactions.</p>
                        </div>
                        <div className="col s12 m12 l6">
                            <div id="piechart"></div>
                        </div>
                    </div>
                </div>

                <div style={{width: '100%'}}>
                    <video
                        onMouseEnter={this.playVideo}
                        onMouseOut={this.pauseVideo}
                        onClick={this.handleClick}
                        loop=""
                        poster="http://assets.yeticycles.com/images/bikes/sb6/2014_Kootenays_SB6_Enviorment-cover.jpg" 
                        className="responsive-video"
                    >
                        <source src="http://assets.yeticycles.com/video/2014_Kootenays_SB6_Enviorment_HD.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
        )
    }
});

module.exports = BrandActivations;